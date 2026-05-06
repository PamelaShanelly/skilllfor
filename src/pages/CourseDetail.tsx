import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COURSES } from '../constants/courses';
import { User, CourseModule, ExamQuestion } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import jsPDF from 'jspdf';
import ReactMarkdown from 'react-markdown';
import { 
  ArrowLeft, CheckCircle2, Award, QrCode, ClipboardList, TrendingUp, 
  FileText, Calendar, Clock, Download, ShieldCheck, PlayCircle, 
  LogIn, Lock, Check, ChevronRight, ListChecks, Printer, FileDown, 
  ChevronDown, ChevronUp, Play, BarChart2, Info, Share2, Grid, 
  List as ListIcon, Map as MapIcon, Layers, Activity, Target, Sun, Moon, X
} from 'lucide-react';
import { cn } from '../lib/utils';
import { db } from '../lib/firebase';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { CourseLevel, CourseContentItem, RegisteredCourse } from '../types';

interface CourseDetailProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function CourseDetail({ user, setUser, isDarkMode, setIsDarkMode }: CourseDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = id ? COURSES.find(c => c.id.toLowerCase() === id.toLowerCase()) : null;

  const enrolledCourse = user?.courses.find(c => c.courseId === course?.id);
  const isEnrolled = !!enrolledCourse;
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'classes' | 'tasks' | 'exam' | 'cert'>(isEnrolled ? 'classes' : 'info');
  const [isAdminMode, setIsAdminMode] = useState(false);
  
  // Player state
  const [currentLessonIdx, setCurrentLessonIdx] = useState(0);
  const [currentPartIdx, setCurrentPartIdx] = useState(0);
  const [isLessonExam, setIsLessonExam] = useState(false);
  const [isFinalExam, setIsFinalExam] = useState(false);

  // Initialize player state
  useEffect(() => {
    if (course && course.lessons && course.lessons.length > 0) {
      setCurrentLessonIdx(0);
      setCurrentPartIdx(0);
    }
  }, [course]);

  const activeLesson = course?.lessons?.[currentLessonIdx] || null;
  const activePart = activeLesson?.parts?.[currentPartIdx] || null;
  
  // Exam state
  const [examStarted, setExamStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | string)[]>([]);
  const [isSubmittingExam, setIsSubmittingExam] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [examReview, setExamReview] = useState<{questionIdx: number; correct: boolean; userAnswer: any; correctAnswer: any}[]>([]);

  const completedModules = enrolledCourse?.completedModules || [];
  const completedTasks = enrolledCourse?.completedTasks || [];
  const completedExams = enrolledCourse?.completedExams || [];
  const examScore = enrolledCourse?.examScore;
  
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isEnrolling, setIsEnrolling] = useState(false);

  // Memoized calculations
  const totalItemsCount = useMemo(() => {
    if (!course?.lessons) return 0;
    return (course?.lessons || []).reduce((acc, lesson) => acc + (lesson.parts?.length || 0), 0);
  }, [course]);

  const calculateTotalProgress = (completedItemIds: string[], examDone: boolean) => {
    const itemsWeighted = totalItemsCount > 0 ? (completedItemIds.length / totalItemsCount) * 70 : 0;
    const examWeighted = examDone ? 30 : 0;
    return Math.min(Math.round(itemsWeighted + examWeighted), 100);
  };

  const isLessonLocked = (lIdx: number) => {
    if (!isEnrolled || isAdminMode) return false;
    if (lIdx === 0) return false;
    
    // To unlock lesson N, lesson N-1 must be completed (all parts read AND exam passed)
    return !isLessonCompleted(lIdx - 1);
  };

  const isLessonCompleted = (lIdx: number) => {
    const lesson = course?.lessons?.[lIdx];
    if (!lesson) return false;
    
    // Check if all parts are in completedModules
    const allPartsDone = lesson.parts.every(part => completedModules.includes(part.id));
    
    // Check if lesson exam is in completedExams (which only happens if passed with >= 70)
    const examPassed = completedExams.includes(lesson.id);
    
    return allPartsDone && examPassed;
  };

  const progress = calculateTotalProgress(completedModules, examCompleted || examScore !== undefined);

  const handleCompleteModule = async (moduleId: string) => {
    if (!user || !enrolledCourse || completedModules.includes(moduleId)) return;

    const newCompletedModules = [...completedModules, moduleId];
    const newProgress = calculateTotalProgress(newCompletedModules, examCompleted || examScore !== undefined);

    const updatedCourses = user.courses.map(uc => 
      uc.courseId === course?.id 
        ? { ...uc, completedModules: newCompletedModules, progress: newProgress }
        : uc
    );

    try {
      await updateDoc(doc(db, 'users', user.id), {
        courses: updatedCourses
      });

      const updatedUser = {
        ...user,
        courses: updatedCourses
      };

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.id}`);
    }
  };

  const handleAnswerChange = (questionIdx: number, choiceIdx: number | string) => {
    const newAnswers = [...answers];
    newAnswers[questionIdx] = choiceIdx;
    setAnswers(newAnswers);
  };

  const handleDownloadCert = (format: 'pdf' | 'docx' | 'jpg') => {
    if (!course || !user) return;
    
    if (format === 'pdf') {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      // Background
      doc.setFillColor(30, 58, 138); // Petroleo
      doc.rect(0, 0, 297, 210, 'F');
      
      // Border
      doc.setDrawColor(255, 255, 255);
      doc.setLineWidth(1);
      doc.rect(10, 10, 277, 190);

      // Inner White Box
      doc.setFillColor(255, 255, 255);
      doc.rect(15, 15, 267, 180, 'F');

      // Title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(28);
      doc.setTextColor(30, 58, 138);
      doc.text('CERTIFICADO DE CAPACITACIÓN TÉCNICA', 148.5, 45, { align: 'center' });
      
      doc.setFontSize(16);
      doc.setTextColor(100, 100, 100);
      doc.text('SkillFor - Politécnico Virgen de la Altagracia', 148.5, 55, { align: 'center' });

      doc.setFontSize(14);
      doc.text('Este documento certifica que:', 148.5, 80, { align: 'center' });

      doc.setFontSize(32);
      doc.setTextColor(0, 0, 0);
      doc.text(user.name.toUpperCase(), 148.5, 100, { align: 'center' });

      const startYear = enrolledCourse?.startDate ? new Date(enrolledCourse.startDate).getFullYear() : new Date().getFullYear();
      const endYear = enrolledCourse?.completionDate ? new Date(enrolledCourse.completionDate).getFullYear() : new Date().getFullYear();
      const certCode = `SKILL-${course.id.toUpperCase()}-${user.id.slice(0, 5).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text('Ha completado con éxito todas las exigencias académicas del curso:', 148.5, 115, { align: 'center' });

      doc.setFontSize(22);
      doc.setTextColor(30, 58, 138);
      doc.text(course.title, 148.5, 130, { align: 'center' });

      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text(`Período: ${startYear} - ${endYear}`, 148.5, 140, { align: 'center' });

      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150);
      doc.text(`Código de Verificación: ${certCode}`, 148.5, 155, { align: 'center' });
      doc.text(`Fecha de Emisión: ${new Date().toLocaleDateString()}`, 148.5, 162, { align: 'center' });

      // Signatures
      doc.setDrawColor(200, 200, 200);
      doc.line(60, 180, 120, 180);
      doc.line(177, 180, 237, 180);

      doc.setFontSize(10);
      doc.text('Dirección Académica', 90, 185, { align: 'center' });
      doc.text('Rectoría Institucional', 207, 185, { align: 'center' });

      doc.save(`Certificado_SkillFor_${course.id}.pdf`);
    } else {
      // Simulate other formats
      const blob = new Blob([`Certificado SkillFor - ${course.title}\nEstudiante: ${user.name}\nFecha: ${new Date().toLocaleDateString()}\nID: SKILL-${user.id}`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Certificado_SkillFor_${course.id}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const handleSubmitExam = async () => {
    if (!user || !course) return;
    setIsSubmittingExam(true);

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    let correctCount = 0;
    const examPool = isLessonExam ? (activeLesson?.lessonExam || []) : (course.finalExam || []);
    const review: {questionIdx: number; correct: boolean; userAnswer: any; correctAnswer: any}[] = [];
    
    examPool.forEach((q, idx) => {
      let isCorrect = false;
      if (q.type === 'multiple') {
        isCorrect = answers[idx] === q.correctAnswer;
      } else {
        const userAnswer = String(answers[idx] || '').toLowerCase().trim();
        const correctAnswer = String(q.correctAnswer).toLowerCase().trim();
        isCorrect = userAnswer === correctAnswer;
      }

      if (isCorrect) correctCount++;
      review.push({
        questionIdx: idx,
        correct: isCorrect,
        userAnswer: answers[idx],
        correctAnswer: q.correctAnswer
      });
    });

    setExamReview(review);

    if (isLessonExam) {
      // Lesson Exam Submission
      const lessonQuestions = activeLesson?.lessonExam || [];
      const score = lessonQuestions.length ? Math.round((correctCount / lessonQuestions.length) * 100) : 0;
      
      if (score >= 70 && !completedExams.includes(activeLesson!.id)) {
        const newCompletedExams = [...completedExams, activeLesson!.id];
        const newProgress = calculateTotalProgress(completedModules, false);

        const updatedCourses = user.courses.map(uc => 
          uc.courseId === course?.id 
            ? { ...uc, completedExams: newCompletedExams, progress: newProgress }
            : uc
        );

        try {
          await updateDoc(doc(db, 'users', user.id), {
            courses: updatedCourses
          });

          const updatedUser = {
            ...user,
            courses: updatedCourses
          };
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
        } catch (err) {
          handleFirestoreError(err, OperationType.UPDATE, `users/${user.id}`);
        }
      }

      setFinalScore(score);
      setExamCompleted(true);
      setIsSubmittingExam(false);
      return;
    }

    const score = course.finalExam?.length ? Math.round((correctCount / course.finalExam.length) * 100) : 0;
    setFinalScore(score);
    setExamCompleted(true);
    setIsSubmittingExam(false);

    // Update user state
    const newProgress = calculateTotalProgress([...completedModules, ...completedTasks], true);
    const completionDate = score >= 70 ? new Date().toISOString() : undefined;

    const updatedCourses = user.courses.map(uc => 
      uc.courseId === course.id 
        ? { ...uc, examScore: score, progress: newProgress, completionDate: completionDate || uc.completionDate }
        : uc
    );

    try {
      await updateDoc(doc(db, 'users', user.id), {
        courses: updatedCourses
      });

      const updatedUser = {
        ...user,
        courses: updatedCourses
      };

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.id}`);
    }
  };

  const restartExam = () => {
    setExamStarted(false);
    setCurrentQuestionIdx(0);
    setAnswers([]);
    setExamCompleted(false);
  };

  // Handle enrollment
  const handleEnroll = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (!course) return;

    setIsEnrolling(true);
    try {
      const startDate = new Date().toISOString();
      
      const newRegisteredCourse: RegisteredCourse = {
        courseId: course.id,
        progress: 0,
        grades: {},
        status: 'enrolled',
        completedModules: [],
        completedTasks: [],
        completedExams: [],
        startDate: startDate
      };

      const updatedCourses = [...user.courses, newRegisteredCourse];

      await updateDoc(doc(db, 'users', user.id), {
        courses: updatedCourses
      });

      const updatedUser = {
        ...user,
        courses: updatedCourses
      };

      setUser(updatedUser as User);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setActiveTab('classes');
      
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.id}`);
    } finally {
      setIsEnrolling(false);
    }
  };
  
  // Handle task submission
  const handleTaskSubmit = async (taskId: string) => {
    setIsUploading(true);
    setActiveTask(taskId);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (user && enrolledCourse) {
      const newCompletedTasks = [...completedTasks, taskId];
      const newProgress = calculateTotalProgress([...completedModules, ...newCompletedTasks], examCompleted || examScore !== undefined);
      
      const updatedCourses = user.courses.map(uc => 
        uc.courseId === course!.id 
          ? { ...uc, completedTasks: newCompletedTasks, progress: newProgress }
          : uc
      );

      try {
        await updateDoc(doc(db, 'users', user.id), {
          courses: updatedCourses
        });

        const updatedUser = {
          ...user,
          courses: updatedCourses
        };
        
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${user.id}`);
      }
    }
    
    setIsUploading(false);
    setActiveTask(null);
  };
  const grades = enrolledCourse?.grades || {
    "Módulo 1": 85,
    "Módulo 2": 90,
    "Módulo 3": 0,
    "Examen Parcial": 0
  };

  const totalGrade = Object.values(grades).reduce((acc, curr) => acc + curr, 0);
  const averageGrade = Object.values(grades).length > 0 
    ? (totalGrade / Object.values(grades).length).toFixed(1)
    : "0";

  if (isEnrolled && !isAdminMode && activeTab === 'classes') {
    return (
      <div className={cn(
        "flex flex-col h-screen transition-colors duration-300",
        isDarkMode ? "bg-black text-white" : "bg-[#F4F7F6] text-gray-900"
      )}>
        {/* TOP PLATFORM NAV */}
        <div className={cn(
          "h-[70px] border-b flex items-center justify-between px-4 md:px-6 shrink-0 z-50",
          isDarkMode ? "bg-gray-900 border-white/10" : "bg-white border-gray-200"
        )}>
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-petroleo dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg"
            >
              <ListChecks className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center gap-1 md:gap-2">
               <div className="bg-petroleo p-1.5 md:p-2 rounded border-2 border-brand-accent">
                 <span className="text-white font-bold text-sm md:text-base">SK</span>
               </div>
               <div className="h-6 md:h-8 w-[1px] bg-gray-200 dark:bg-white/10 mx-1 md:mx-2"></div>
               <div className="flex flex-col leading-tight">
                 <span className="text-petroleo dark:text-white font-bold text-sm md:text-lg">SkillFor</span>
                 <span className="text-gray-400 dark:text-gray-500 text-[8px] md:text-[10px] font-medium uppercase tracking-widest">{course.title}</span>
               </div>
            </Link>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
             <button 
               onClick={() => setIsDarkMode(!isDarkMode)}
               className="p-2 text-gray-500 dark:text-gray-400 hover:text-petroleo dark:hover:text-white transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
             >
               {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
             </button>
             <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">{user?.name}</span>
                <span className="text-[10px] text-brand-accent font-bold uppercase tracking-widest">{progress}% COMPLETADO</span>
             </div>
             <button onClick={() => navigate('/dashboard')} className="bg-[#8cc63f] text-white px-4 md:px-6 py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-[#7db138] transition-all shadow-sm">Dashboard</button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden relative">
          {/* SIDEBAR - Lessons */}
          <aside className={cn(
             "fixed inset-y-0 left-0 z-40 w-80 bg-petroleo dark:bg-gray-950 overflow-y-auto shrink-0 flex flex-col custom-scrollbar border-r border-[#1a3a4a] dark:border-white/5 transition-transform duration-300 lg:relative lg:translate-x-0 pt-[70px] lg:pt-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}>
            <div className="p-6 border-b border-white/5 bg-black/10">
               <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-center">CONTENIDO DEL CURSO</h3>
            </div>

            <div className="flex-1">
              {(course?.lessons || []).map((lesson, lIdx) => {
                const locked = isLessonLocked(lIdx);
                const completed = isLessonCompleted(lIdx);

                return (
                  <div key={lesson.id} className={cn(
                    "border-b border-white/5 transition-all",
                    locked ? "opacity-60" : "opacity-100"
                  )}>
                    <div className={cn(
                      "w-full flex items-center justify-between p-5 py-4 text-white font-bold text-xs bg-white/5 uppercase tracking-widest border-l-4",
                      completed ? "border-green-500 bg-green-500/10" : (locked ? "border-gray-500 bg-gray-500/5" : "border-brand-accent/30")
                    )}>
                      <span className="flex items-center gap-3">
                         <Layers className={cn("w-4 h-4", completed ? "text-green-400" : (locked ? "text-white/20" : "text-brand-accent"))} />
                         MÓDULO {lIdx + 1}
                      </span>
                      {completed && <CheckCircle2 className="w-4 h-4 text-green-400" />}
                      {locked && <Lock className="w-4 h-4 text-white/30" />}
                    </div>
                    
                    <div className="flex flex-col bg-black/5">
                      {(lesson.parts || []).map((part, pIdx) => {
                        const isActive = currentLessonIdx === lIdx && currentPartIdx === pIdx && !isLessonExam;
                        const isPartCompleted = completedModules.includes(part.id);

                        return (
                          <button
                            key={part.id}
                            disabled={locked}
                            onClick={() => {
                              setCurrentLessonIdx(lIdx);
                              setCurrentPartIdx(pIdx);
                              setIsLessonExam(false);
                              if (window.innerWidth < 1024) setIsSidebarOpen(false);
                            }}
                            className={cn(
                              "w-full p-4 px-8 flex items-center gap-4 transition-all group border-b border-white/5 last:border-0",
                              locked ? "cursor-not-allowed opacity-50 overflow-hidden" : "cursor-pointer",
                              isActive ? "bg-white/10 border-l-4 border-brand-accent" : "hover:bg-white/5",
                              isPartCompleted ? "bg-green-500/5" : ""
                            )}
                          >
                            <div className={cn(
                              "shrink-0",
                              isActive || isPartCompleted ? "text-brand-accent" : "text-white/30 group-hover:text-brand-accent"
                            )}>
                              {part.type === 'document' && <FileText className="w-5 h-5" />}
                              {part.type === 'video' && <PlayCircle className="w-5 h-5" />}
                              {part.type === 'task' && <ClipboardList className="w-5 h-5" />}
                            </div>
                            <div className="text-left">
                              <p className={cn(
                                "text-[11px] font-bold leading-tight",
                                isActive ? "text-white" : (isPartCompleted ? "text-green-400/80" : "text-white/60 group-hover:text-white")
                              )}>
                                {part.title}
                              </p>
                              {isPartCompleted && (
                                <div className="flex items-center gap-2 mt-1">
                                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                                  <span className="text-[9px] text-green-400 font-bold uppercase tracking-widest">Leído</span>
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}

                      {/* Lesson Exam Button */}
                      <button
                        disabled={locked}
                        onClick={() => {
                          setCurrentLessonIdx(lIdx);
                          setIsLessonExam(true);
                          setExamStarted(false);
                          if (window.innerWidth < 1024) setIsSidebarOpen(false);
                        }}
                        className={cn(
                          "w-full p-4 px-8 flex items-center gap-4 transition-all group border-b border-white/5 bg-brand-accent/5",
                          locked ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                          currentLessonIdx === lIdx && isLessonExam ? "bg-brand-accent/20 border-l-4 border-brand-accent" : "hover:bg-brand-accent/10",
                          completed ? "bg-green-500/10" : ""
                        )}
                      >
                        <ListChecks className={cn("w-5 h-5", completed ? "text-green-400" : "text-brand-accent")} />
                        <div className="text-left">
                          <p className={cn(
                            "text-[11px] font-bold leading-tight",
                            currentLessonIdx === lIdx && isLessonExam ? "text-white font-black" : (completed ? "text-green-400" : "text-brand-accent/80 group-hover:text-brand-accent")
                          )}>
                            Evaluación {lIdx + 1}
                          </p>
                          {completed ? (
                            <div className="flex items-center gap-2 mt-1">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                                <span className="text-[9px] text-green-400 font-bold uppercase tracking-widest">Aprobado</span>
                            </div>
                          ) : (
                            <p className="text-[9px] text-white/30 uppercase font-bold tracking-tighter mt-1 italic">Mínimo 70% para aprobar</p>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
              
                    <div className="p-4 px-6 mt-8">
                      <button 
                        disabled={completedExams.length < (course?.lessons?.length || 0)}
                        onClick={() => setActiveTab('exam')}
                        className={cn(
                          "w-full flex items-center gap-4 p-5 rounded-2xl text-white font-bold text-xs transition-all uppercase tracking-widest shadow-xl",
                          completedExams.length < (course?.lessons?.length || 0)
                            ? "bg-gray-400 dark:bg-white/10 text-white/40 cursor-not-allowed shadow-none"
                            : "bg-brand-accent hover:bg-brand-accent/90 shadow-brand-accent/20"
                        )}
                      >
                        <Award className="w-6 h-6" />
                        <span>EXAMEN FINAL GENERAL</span>
                        {completedExams.length < (course?.lessons?.length || 0) && <Lock className="w-4 h-4 ml-auto" />}
                      </button>
                    </div>
            </div>
            
            <div className="p-6 bg-black/20 border-t border-white/5">
              <button onClick={() => setActiveTab('info')} className="w-full justify-center text-white/50 hover:text-white flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all">
                <ArrowLeft className="w-4 h-4" />
                SALIR DEL CURSO
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className={cn(
            "flex-1 overflow-y-auto flex flex-col custom-scrollbar transition-colors",
            isDarkMode ? "bg-gray-950" : "bg-[#F8FAFB]"
          )}>
            {/* OVERLAY FOR MOBILE SIDEBAR */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              ></div>
            )}

            <div className="p-4 md:p-12 pb-32 flex flex-col gap-8 max-w-5xl mx-auto w-full">
               {!isLessonExam ? (
                 <>
                   {/* HEADER */}
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 dark:border-white/10 pb-6">
                      <div>
                         <p className="text-brand-accent font-black text-xs uppercase tracking-[0.2em] mb-2">Lección {currentLessonIdx + 1}</p>
                         <h2 className="text-3xl md:text-5xl font-display font-bold text-petroleo dark:text-white transition-all">
                           {activePart?.title}
                         </h2>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400 font-bold text-xs uppercase tracking-widest">
                         <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lectura Técnica</span>
                         <span className="flex items-center gap-2"><Layers className="w-4 h-4" /> Parte {currentPartIdx + 1} de {activeLesson?.parts?.length || 0}</span>
                      </div>
                   </div>

                   {/* DOCUMENT CONTENT */}
                   <motion.div 
                     key={activePart?.id}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="bg-white dark:bg-gray-900 rounded-[40px] p-8 md:p-16 shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                         <FileText className="w-64 h-64" />
                      </div>
                      
                      <div className="relative z-10">
                         <div className="prose prose-xl prose-stone dark:prose-invert max-w-none">
                           <p className="text-gray-600 dark:text-gray-300 leading-[1.8] text-lg md:text-xl font-medium mb-16">
                             <ReactMarkdown>{activePart?.content || ''}</ReactMarkdown>
                           </p>

                           <div className="space-y-24">
                             {activePart?.topics && activePart.topics.length > 0 ? (
                               activePart.topics.map((topic, tIdx) => (
                                 <motion.div 
                                   key={tIdx}
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                                   className="group"
                                 >
                                   <div className="flex flex-col lg:flex-row gap-12 items-start">
                                      {topic.image && (
                                        <div className="w-full lg:w-2/5 shrink-0 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                                           <img src={topic.image} alt={topic.title} className="w-full aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
                                        </div>
                                      )}
                                      <div className="flex-1 space-y-8">
                                         <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 bg-gradient-to-br from-petroleo to-brand-accent text-white rounded-3xl flex items-center justify-center font-black text-xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform">
                                               {tIdx + 1}
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-display font-bold text-petroleo dark:text-white m-0 leading-tight">
                                               {topic.title}
                                            </h3>
                                         </div>
                                         
                                         <div className="bg-hueso dark:bg-white/5 p-8 rounded-[30px] border border-gray-100 dark:border-white/5">
                                            <div className="markdown-content prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed m-0 font-medium italic">
                                               <ReactMarkdown>{topic.description}</ReactMarkdown>
                                            </div>
                                         </div>

                                         <div className="grid grid-cols-1 gap-6">
                                            <div className="bg-brand-accent/5 dark:bg-brand-accent/20 p-8 rounded-[35px] border-2 border-brand-accent/10 relative overflow-hidden group-hover:border-brand-accent/30 transition-colors">
                                               <div className="absolute top-0 right-0 p-6 opacity-10">
                                                  <Target className="w-16 h-16 text-brand-accent" />
                                               </div>
                                               <h4 className="text-brand-accent font-black text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                                                  <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
                                                  ¿Para qué sirve?
                                               </h4>
                                               <div className="markdown-content prose-sm max-w-none text-base text-gray-700 dark:text-gray-200 m-0 leading-relaxed font-bold">
                                                  <ReactMarkdown>{topic.whatIsItFor || 'Información complementaria en desarrollo.'}</ReactMarkdown>
                                               </div>
                                            </div>
                                            <div className="bg-petroleo/5 dark:bg-white/5 p-8 rounded-[35px] border-2 border-petroleo/10 dark:border-white/10 relative overflow-hidden group-hover:border-petroleo/30 dark:group-hover:border-white/30 transition-colors">
                                               <div className="absolute top-0 right-0 p-6 opacity-10">
                                                  <Award className="w-16 h-16 text-petroleo dark:text-white" />
                                               </div>
                                               <h4 className="text-petroleo dark:text-white font-black text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                                                  <span className="w-8 h-1 bg-petroleo dark:bg-white rounded-full"></span>
                                                  ¿Qué debes hacer?
                                               </h4>
                                               <div className="markdown-content prose-sm max-w-none text-base text-gray-700 dark:text-gray-200 m-0 leading-relaxed font-bold italic">
                                                  <ReactMarkdown>{topic.howToDoIt || 'Instrucciones técnicas en proceso.'}</ReactMarkdown>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                 </motion.div>
                               ))
                             ) : (
                               /* Fallback for parts without specific topics */
                               <>
                                 <div className="bg-gray-50 dark:bg-black/20 p-8 rounded-3xl border-l-8 border-brand-accent my-12">
                                    <h4 className="text-petroleo dark:text-brand-accent font-bold uppercase text-sm tracking-widest mb-4">Puntos clave a estudiar:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
                                       {['Conceptos fundamentales', 'Metodología técnica', 'Casos de éxito', 'Protocolos éticos'].map((item, i) => (
                                         <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-500 dark:text-gray-400 m-0">
                                            <CheckCircle2 className="w-5 h-5 text-brand-accent/40" />
                                            {item}
                                         </li>
                                       ))}
                                    </ul>
                                 </div>
                               </>
                             )}
                           </div>
                        </div>

                        {/* NEXT BUTTON */}
                        <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-petroleo/5 dark:bg-white/5 rounded-full flex items-center justify-center">
                                 <Award className="w-6 h-6 text-brand-accent" />
                              </div>
                              <div>
                                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Estado del Módulo</p>
                                 <p className="text-sm font-bold text-petroleo dark:text-white">Estudio en progreso...</p>
                              </div>
                           </div>
                           
                           <button 
                             onClick={() => {
                               if (activePart) handleCompleteModule(activePart.id);
                               // Navigation
                               if (currentPartIdx < ((activeLesson?.parts?.length || 0) - 1)) {
                                 setCurrentPartIdx(prev => prev + 1);
                               } else {
                                 setIsLessonExam(true);
                                 setExamStarted(false);
                               }
                               window.scrollTo({ top: 0, behavior: 'smooth' });
                             }}
                             className="w-full sm:w-auto px-12 py-5 bg-petroleo dark:bg-brand-accent text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-brand-accent hover:shadow-2xl hover:shadow-brand-accent/30 transition-all group"
                           >
                              Siguiente Paso
                              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                           </button>
                        </div>
                      </div>
                   </motion.div>
                 </>
               ) : (
                 /* LESSON EXAM VIEW */
                 <div className="max-w-3xl mx-auto w-full pt-10">
                    <div className="bg-white dark:bg-gray-900 rounded-[40px] p-8 md:p-12 shadow-2xl border-t-8 border-brand-accent">
                       <div className="text-center mb-12">
                          <div className="w-20 h-20 bg-brand-accent/10 rounded-3xl flex items-center justify-center text-brand-accent mx-auto mb-6">
                             <ListChecks className="w-10 h-10" />
                          </div>
                          <h2 className="text-3xl font-display font-bold text-petroleo dark:text-white mb-2">Examen de Lección {currentLessonIdx + 1}</h2>
                          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Demuestra lo que has aprendido en esta sección</p>
                       </div>

                       {!examStarted ? (
                         <div className="space-y-8">
                            <div className="bg-hueso dark:bg-black/20 p-8 rounded-3xl border border-gray-100 dark:border-white/5">
                               <h4 className="font-bold text-petroleo dark:text-white mb-4 uppercase text-xs tracking-widest">Reglas del examen:</h4>
                               <ul className="space-y-4">
                                  {[
                                    'Puntuación mínima: 70/100',
                                    'Preguntas de opción múltiple',
                                    'Puedes repetir el examen si fallas',
                                    'Cada respuesta correcta suma puntos'
                                  ].map((rule, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">
                                       <Check className="w-4 h-4 text-brand-accent mt-0.5" />
                                       {rule}
                                    </li>
                                  ))}
                               </ul>
                            </div>
                            <button 
                              onClick={() => {
                                setExamStarted(true);
                                setAnswers([]);
                                setCurrentQuestionIdx(0);
                              }}
                              className="w-full py-6 bg-petroleo dark:bg-brand-accent text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all"
                            >
                               Comenzar Evaluación
                            </button>
                         </div>
                       ) : (
                         /* ACTUAL EXAM QUESTIONS - Reuse logic but pointed to lessonExam */
                         <div>
                            <div className="flex items-center justify-between mb-10">
                               <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Pregunta {currentQuestionIdx + 1} de {activeLesson?.lessonExam?.length || 0}</span>
                               <div className="w-32 h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-brand-accent" 
                                    style={{ width: `${((currentQuestionIdx + 1) / (activeLesson?.lessonExam.length || 1)) * 100}%` }}
                                  ></div>
                               </div>
                            </div>
                            
                            {activeLesson?.lessonExam[currentQuestionIdx] && (
                              <>
                                <h3 className="text-2xl font-display font-bold text-petroleo dark:text-white mb-8">
                                  {activeLesson.lessonExam[currentQuestionIdx].question}
                                </h3>
                                
                                <div className="grid gap-4 mb-12">
                                  {activeLesson.lessonExam[currentQuestionIdx].options?.map((option, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => handleAnswerChange(currentQuestionIdx, idx)}
                                      className={cn(
                                        "w-full p-6 text-left rounded-3xl font-bold transition-all border-2 flex items-center justify-between group",
                                        answers[currentQuestionIdx] === idx 
                                          ? "bg-brand-accent/10 border-brand-accent text-petroleo dark:text-brand-accent" 
                                          : "bg-hueso dark:bg-white/5 border-transparent hover:border-gray-200 dark:hover:border-white/10 text-gray-500 dark:text-gray-400"
                                      )}
                                    >
                                      <div className="flex items-center gap-4">
                                         <div className={cn(
                                           "w-8 h-8 rounded-full flex items-center justify-center border-2 font-mono text-xs",
                                           answers[currentQuestionIdx] === idx ? "bg-brand-accent border-brand-accent text-white" : "border-gray-300 dark:border-gray-600"
                                         )}>
                                           {String.fromCharCode(65 + idx)}
                                         </div>
                                         {option}
                                      </div>
                                      {answers[currentQuestionIdx] === idx && <CheckCircle2 className="w-6 h-6 text-brand-accent" />}
                                    </button>
                                  ))}
                                </div>

                                <div className="flex items-center gap-4">
                                   {currentQuestionIdx > 0 && (
                                     <button 
                                       onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                                       className="flex-1 py-5 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white rounded-2xl font-bold text-xs uppercase tracking-widest"
                                     >
                                       Anterior
                                     </button>
                                   )}
                                   
                                   {currentQuestionIdx < ((activeLesson?.lessonExam?.length || 0) - 1) ? (
                                     <button 
                                       disabled={answers[currentQuestionIdx] === undefined}
                                       onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                                       className="flex-[2] py-5 bg-petroleo dark:bg-brand-accent text-white rounded-2xl font-bold text-xs uppercase tracking-widest disabled:opacity-50"
                                     >
                                       Siguiente Pregunta
                                     </button>
                                   ) : (
                                     <button 
                                       disabled={answers[currentQuestionIdx] === undefined || isSubmittingExam}
                                       onClick={handleSubmitExam}
                                       className="flex-[2] py-5 bg-green-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest disabled:opacity-50 flex items-center justify-center gap-3"
                                     >
                                       {isSubmittingExam ? <Clock className="w-5 h-5 animate-spin" /> : <Award className="w-5 h-5" />}
                                       Finalizar Examen
                                     </button>
                                   )}
                                </div>
                              </>
                            )}
                         </div>
                       )}
                    </div>
                 </div>
               )}
            </div>
          </main>
        </div>
      </div>
    );
  }


  return (
    <div className="pb-24 bg-hueso dark:bg-black min-h-screen transition-colors duration-300">
      {/* HEADER SECTION - Conditional styling for admin mode */}
      <div className={cn(
        "transition-all duration-700 text-white py-16 md:py-24 px-4 overflow-hidden relative",
        isAdminMode ? 'bg-amber-600' : (isDarkMode ? 'bg-gray-900' : 'bg-[#3BB36B]')
      )}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 max-w-6xl mx-auto border-b border-white/10 pb-6">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center text-white/60 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Regresar
                </button>
                <button 
                  onClick={() => {
                    const newMode = !isDarkMode;
                    setIsDarkMode(newMode);
                  }}
                  className="p-2 text-white/60 hover:text-white transition-all rounded-lg hover:bg-white/5"
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>

              {/* ADMIN MODE TOGGLE - Simulated check for the user */}
              {user?.email === 'pamelapayanocaceres@gmail.com' && (
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl flex items-center gap-3 border border-white/20">
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest px-2">Modo Gestión Admin:</span>
                  <button 
                    onClick={() => setIsAdminMode(!isAdminMode)}
                    className={`px-4 py-1.5 rounded-xl text-[10px] font-bold transition-all ${isAdminMode ? 'bg-amber-400 text-petroleo shadow-lg' : 'bg-white/10 text-white'}`}
                  >
                    {isAdminMode ? 'ACTIVADO' : 'OFF'}
                  </button>
                </div>
              )}
            </div>

            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              {isAdminMode ? `Gestión: ${course.title}` : course.title}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              {isAdminMode ? 'Panel administrativo para seguimiento de alumnos y tareas.' : course.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
        
        {/* ADMIN DASHBOARD VIEW */}
        {isAdminMode && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 bg-white dark:bg-gray-900 rounded-[40px] p-10 shadow-2xl border-b-8 border-amber-500 dark:border-amber-600"
          >
             <div className="flex items-center gap-4 mb-10 border-b border-gray-100 dark:border-white/5 pb-6">
                <div className="bg-amber-100 dark:bg-amber-900/20 p-3 rounded-2xl text-amber-600 dark:text-amber-400">
                   <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                   <h2 className="text-2xl font-display font-bold text-[#3BB36B] dark:text-brand-accent">Estadísticas del Curso</h2>
                   <p className="text-gray-400 dark:text-gray-500 text-sm font-bold uppercase">Datos en tiempo real de matriculados</p>
                </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Alumnos Totales', val: '142', sub: '+15 este mes', color: 'text-petroleo dark:text-white' },
                  { label: 'Tareas Entregadas', val: '86%', sub: 'Participación alta', color: 'text-green-600 dark:text-green-400' },
                  { label: 'Ingresos Estimados', val: '$5,240', sub: 'Cobros realizados', color: 'text-brand-accent' },
                  { label: 'Títulos Listos', val: '28', sub: 'Pendientes envío', color: 'text-amber-500 dark:text-amber-400' }
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-amber-200 dark:hover:border-amber-500/50 transition-all">
                     <p className="text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                     <p className={`text-4xl font-display font-bold mb-1 ${stat.color}`}>{stat.val}</p>
                     <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{stat.sub}</p>
                  </div>
                ))}
             </div>
          </motion.div>
        )}

      {/* PROGRESS CARD FOR ENROLLED USERS */}
        {isEnrolled && !isAdminMode && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-white dark:bg-gray-900 rounded-[40px] p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100 dark:border-white/5"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#3BB36B]/10 dark:bg-brand-accent/20 rounded-2xl flex items-center justify-center text-[#3BB36B] dark:text-brand-accent shadow-sm">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-[#3BB36B] dark:text-brand-accent font-display font-bold text-2xl uppercase tracking-tighter">Mi Progreso Real</h3>
                <p className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest text-[10px]">¡Sigue adelante, {user?.name.split(' ')[0]}!</p>
              </div>
            </div>
            
            <div className="flex-grow max-w-md w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#3BB36B] dark:text-brand-accent font-bold text-[10px] uppercase tracking-widest">{progress}% COMPLETADO</span>
              </div>
              <div className="h-3 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-[#3BB36B] dark:bg-brand-accent rounded-full shadow-lg"
                ></motion.div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center md:text-right">
                <div className="text-[#3BB36B] dark:text-white font-display font-bold text-3xl leading-none">{averageGrade}</div>
                <div className="text-gray-400 dark:text-gray-500 font-bold text-[10px] uppercase tracking-tighter">PROMEDIO</div>
              </div>
              <div className="w-12 h-12 bg-hueso dark:bg-white/5 rounded-xl flex items-center justify-center">
                 <Award className="w-6 h-6 text-[#3BB36B] dark:text-brand-accent" />
              </div>
            </div>
          </motion.div>
        )}

        {/* TABS NAVIGATION */}
        {isEnrolled && !isAdminMode && (
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
            {[
              { id: 'classes', label: 'MIS CLASES', icon: PlayCircle },
              { id: 'tasks', label: 'MIS TAREAS', icon: ClipboardList },
              { id: 'exam', label: 'EXAMEN FINAL', icon: ListChecks },
              { id: 'info', label: 'INFO CURSO', icon: FileText },
              { id: 'cert', label: 'MI TÍTULO', icon: Award },
            ].map((tab) => {
              const allLessonsExamDone = completedExams.length >= (course?.lessons?.length || 0);
              const allPartsDone = completedModules.length >= totalItemsCount;
              const isLocked = tab.id === 'exam' && (!allPartsDone || !allLessonsExamDone);
              
              return (
                <button
                  key={tab.id}
                  disabled={isLocked}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xs tracking-widest transition-all whitespace-nowrap relative ${
                    isLocked ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-600' :
                    activeTab === tab.id 
                      ? 'bg-[#3BB36B] dark:bg-brand-accent text-white shadow-xl translate-y-[-2px]' 
                      : 'bg-white/50 dark:bg-white/5 text-gray-400 dark:text-gray-500 hover:bg-white dark:hover:bg-white/10 hover:text-[#3BB36B] dark:hover:text-brand-accent'
                  }`}
                >
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-white' : ''}`} />
                  {tab.label}
                  {isLocked && <Lock className="w-3 h-3 absolute top-2 right-2 text-gray-400" />}
                </button>
              );
            })}
          </div>
        )}

        {/* TAB CONTENTS */}
        <div className="min-h-[500px]">
          {activeTab === 'exam' && isEnrolled && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              {!examStarted && !examCompleted && !enrolledCourse.examScore && (
                <div className="bg-white dark:bg-gray-900 rounded-[50px] p-12 shadow-2xl text-center border-b-8 border-brand-accent">
                  <div className="w-24 h-24 bg-brand-accent/10 rounded-[40px] flex items-center justify-center mb-8 mx-auto text-brand-accent">
                    <Award className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-gray-800 dark:text-white mb-4 italic">Examen Final de Certificación</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
                    Has completado satisfactoriamente todas las lecciones técnicas. Ahora es momento de validar tus conocimientos acumulados para obtener tu título oficial. 
                    <br/><br/>
                    <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Evaluación integral de todas las lecciones</span>
                  </p>
                  <button 
                    onClick={() => {
                        setExamStarted(true);
                        setAnswers([]);
                        setCurrentQuestionIdx(0);
                        setIsFinalExam(true);
                        setIsLessonExam(false);
                    }}
                    className="bg-brand-accent text-white px-12 py-6 rounded-[30px] font-bold text-xl hover:bg-brand-secondary hover:scale-105 transition-all shadow-2xl uppercase tracking-widest"
                  >
                    COMENZAR EXAMEN GENERAL
                  </button>
                </div>
              )}

              {examStarted && !examCompleted && (
                <div className="bg-white dark:bg-gray-900 rounded-[50px] shadow-2xl overflow-hidden border-2 border-gray-100 dark:border-white/5">
                  <div className="bg-petroleo dark:bg-gray-950 p-8 text-white flex justify-between items-center border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.4em]">
                        {isFinalExam ? 'EXAMEN FINAL GENERAL' : `EXAMEN LECCIÓN ${currentLessonIdx + 1}`}
                      </span>
                      <h4 className="text-xl font-display font-bold mt-1">Evaluación de Competencias</h4>
                    </div>
                    <div className="bg-white/5 px-4 py-2 rounded-xl backdrop-blur-md">
                       <span className="text-[10px] font-bold text-white/40 block">PROGRESO</span>
                       <span className="font-mono font-bold text-lg">
                         {currentQuestionIdx + 1} / {isFinalExam ? (course?.finalExam?.length || 0) : (activeLesson?.lessonExam?.length || 0)}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-16">
                    {((isFinalExam ? course.finalExam : activeLesson?.lessonExam)?.[currentQuestionIdx]) ? (
                      <>
                        <div className="mb-12">
                           <div className="w-12 h-1 bg-brand-accent mb-6 rounded-full"></div>
                           <h3 className="text-2xl md:text-3xl font-display font-bold text-petroleo dark:text-white leading-snug">
                             {(isFinalExam ? course.finalExam : activeLesson?.lessonExam)?.[currentQuestionIdx].question}
                           </h3>
                        </div>
                        
                        {(isFinalExam ? course.finalExam : activeLesson?.lessonExam)?.[currentQuestionIdx].type === 'multiple' ? (
                          <div className="grid gap-4 mb-12">
                            {(isFinalExam ? course.finalExam : activeLesson?.lessonExam)?.[currentQuestionIdx].options?.map((option, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleAnswerChange(currentQuestionIdx, idx)}
                                className={cn(
                                  "w-full p-6 text-left rounded-3xl font-bold transition-all border-2 flex items-center justify-between group",
                                  answers[currentQuestionIdx] === idx 
                                    ? "bg-brand-accent/10 border-brand-accent text-petroleo dark:text-brand-accent" 
                                    : "bg-[#F8FAFB] dark:bg-white/5 border-transparent hover:border-gray-200 dark:hover:border-white/10 text-gray-500 dark:text-gray-400"
                                )}
                              >
                                <div className="flex items-center gap-4">
                                   <div className={cn(
                                     "w-8 h-8 rounded-full flex items-center justify-center border-2 font-mono text-xs",
                                     answers[currentQuestionIdx] === idx ? "bg-brand-accent border-brand-accent text-white" : "border-gray-300 dark:border-gray-600"
                                   )}>
                                     {String.fromCharCode(65 + idx)}
                                   </div>
                                   {option}
                                </div>
                                {answers[currentQuestionIdx] === idx && <CheckCircle2 className="w-6 h-6 text-brand-accent" />}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="mb-12">
                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Escribe tu respuesta:</label>
                            <input 
                              type="text"
                              value={String(answers[currentQuestionIdx] || '')}
                              onChange={(e) => handleAnswerChange(currentQuestionIdx, e.target.value)}
                              placeholder="Tu respuesta técnica aquí..."
                              className="w-full p-6 bg-[#F8FAFB] dark:bg-white/5 border-2 border-transparent focus:border-brand-accent rounded-3xl font-bold outline-none transition-all dark:text-white"
                            />
                          </div>
                        )}

                        <div className="flex justify-between items-center pt-8 border-t border-gray-100 dark:border-white/10">
                          <button 
                            onClick={() => setCurrentQuestionIdx(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestionIdx === 0}
                            className="px-8 py-4 text-gray-400 font-bold disabled:opacity-20 flex items-center gap-2 hover:text-petroleo dark:hover:text-white transition-all underline underline-offset-8 decoration-2"
                          >
                            <ArrowLeft className="w-5 h-5" />
                            PREVIA
                          </button>
                          
                          {currentQuestionIdx === ((isFinalExam ? (course?.finalExam?.length || 0) : (activeLesson?.lessonExam?.length || 0)) || 0) - 1 ? (
                            <button 
                              onClick={handleSubmitExam}
                              disabled={(answers[currentQuestionIdx] === undefined) || isSubmittingExam}
                              className="bg-brand-accent text-white px-12 py-5 rounded-[20px] font-black text-sm uppercase tracking-[0.2em] hover:shadow-2xl transition-all disabled:opacity-50 flex items-center gap-4"
                            >
                              {isSubmittingExam ? <Clock className="w-5 h-5 animate-spin" /> : <Award className="w-5 h-5" />}
                              Finalizar Evaluación
                            </button>
                          ) : (
                            <button 
                              onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                              disabled={answers[currentQuestionIdx] === undefined}
                              className="bg-petroleo dark:bg-brand-accent text-white px-10 py-5 rounded-[20px] font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center gap-4 disabled:opacity-50"
                            >
                              Siguiente
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-20">
                         <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Layers className="w-10 h-10 text-gray-300" />
                         </div>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">No hay contenido disponible para evaluación.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {(examCompleted || enrolledCourse.examScore !== undefined) && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-900 rounded-[50px] p-12 md:p-20 shadow-2xl text-center border border-gray-100 dark:border-white/5"
                >
                  <div className="w-32 h-32 bg-hueso dark:bg-black rounded-[40px] flex items-center justify-center mb-10 mx-auto border-4 border-white dark:border-white/10 shadow-xl">
                    <Award className={`w-16 h-16 ${ (finalScore || enrolledCourse.examScore || 0) >= 70 ? 'text-green-500' : 'text-red-500' }`} />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-petroleo dark:text-white mb-4">
                    {isLessonExam ? `Resultado de Lección ${currentLessonIdx + 1}` : 'Resultado del Examen General'}
                  </h3>
                  <div className="text-8xl font-display font-bold text-brand-accent mb-6 leading-none tracking-tighter">
                    {finalScore || enrolledCourse.examScore}%
                  </div>
                  <p className="text-xl font-bold text-gray-500 mb-12 max-w-md mx-auto">
                    {(finalScore || enrolledCourse.examScore || 0) >= 70 ? (
                      <span className="text-green-600 italic">¡FELICIDADES! Has demostrado competencia profesional.</span>
                    ) : (
                      <span className="text-red-600 italic">No has alcanzado la nota mínima requerida.</span>
                    )}
                  </p>

                  {/* Detalle de Resultados */}
                  <div className="max-w-2xl mx-auto mb-12 text-left bg-gray-50 dark:bg-black/20 p-8 rounded-[32px] border border-gray-100 dark:border-white/5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                       <ListChecks className="w-4 h-4" />
                       Revisión de Respuestas
                    </h4>
                    <div className="space-y-4">
                      {examReview.map((res, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-white/10">
                           <div className={cn(
                             "w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-bold",
                             res.correct ? "bg-green-500" : "bg-red-500"
                           )}>
                             {res.correct ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                           </div>
                           <div>
                              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Pregunta {i+1}</p>
                              <p className="text-sm font-medium text-petroleo dark:text-white">
                                {isLessonExam ? activeLesson?.lessonExam?.[i].question : course.finalExam?.[i].question}
                              </p>
                              {!res.correct && (
                                <p className="text-[10px] mt-2 font-bold text-brand-accent uppercase tracking-widest">
                                  Respuesta Correcta: {
                                    isLessonExam 
                                      ? (activeLesson?.lessonExam?.[i].type === 'multiple' 
                                          ? activeLesson?.lessonExam?.[i].options?.[res.correctAnswer as number]
                                          : res.correctAnswer)
                                      : (course.finalExam?.[i].type === 'multiple'
                                          ? course.finalExam?.[i].options?.[res.correctAnswer as number]
                                          : res.correctAnswer)
                                  }
                                </p>
                              )}
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {(finalScore || enrolledCourse.examScore || 0) < 70 ? (
                      <button 
                        onClick={restartExam}
                        className="w-full sm:w-auto px-12 py-6 bg-hueso dark:bg-white/5 text-petroleo dark:text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-gray-100 transition-all border border-gray-200 dark:border-white/10"
                      >
                        REINTENTAR EXAMEN
                      </button>
                    ) : (
                      <>
                        {isLessonExam ? (
                          <button 
                            onClick={() => {
                              setExamCompleted(false);
                              setAnswers([]);
                              setCurrentQuestionIdx(0);
                              setFinalScore(0);
                              
                              if (currentLessonIdx < (course.lessons.length - 1)) {
                                setCurrentLessonIdx(prev => prev + 1);
                                setCurrentPartIdx(0);
                                setIsLessonExam(false);
                                setExamStarted(false);
                                setActiveTab('classes');
                              } else {
                                setIsFinalExam(true);
                                setIsLessonExam(false);
                                setExamStarted(false);
                                setActiveTab('exam');
                              }
                            }}
                            className="w-full sm:w-auto px-12 py-6 bg-brand-accent text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:shadow-2xl transition-all shadow-xl shadow-brand-accent/20"
                          >
                            {currentLessonIdx < (course.lessons.length - 1) ? 'SIGUIENTE LECCIÓN' : 'IR A EXAMEN FINAL'}
                          </button>
                        ) : (
                          <button 
                            onClick={() => setActiveTab('cert')}
                            className="w-full sm:w-auto px-12 py-6 bg-brand-accent text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:shadow-2xl transition-all shadow-xl shadow-brand-accent/20"
                          >
                            VER MI TÍTULO
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === 'info' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 dark:border-white/5 mb-20 animate-in fade-in slide-in-from-bottom-5 duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* IMAGE SECTION */}
                <div className="lg:w-1/2 p-8">
                  <div className="rounded-[30px] overflow-hidden aspect-square bg-hueso dark:bg-black/50 shadow-inner flex items-center justify-center p-8 relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-brand-accent text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                      {course.category}
                    </div>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="lg:w-1/2 p-8 md:p-12 space-y-10 flex flex-col justify-center">
                  <div>
                    <h2 className="text-xs font-bold text-brand-accent uppercase tracking-[0.4em] mb-4">Información del Programa</h2>
                    <h3 className="text-3xl font-display font-bold text-[#3BB36B] dark:text-brand-accent mb-6">Dominando cada técnica a nivel profesional.</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
                      {course.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    {[
                      { label: 'Duración', val: '6 Meses', icon: Clock },
                      { label: 'Modalidad', val: 'Presencial/Virtual', icon: FileText },
                      { label: 'Créditos', val: '24 Puntos', icon: Award },
                      { label: 'Certificación', val: 'Técnico Oficial', icon: ShieldCheck }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-hueso dark:bg-white/5 rounded-xl flex items-center justify-center text-brand-accent shrink-0 border border-brand-accent/10">
                           <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold text-[#3BB36B] dark:text-brand-accent uppercase tracking-widest">{item.label}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl mb-8 border border-gray-100 dark:border-white/10">
                    <h4 className="text-xs font-bold text-petroleo dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                       Criterios de Evaluación
                    </h4>
                    <ul className="space-y-3">
                       <li className="flex items-start gap-3 text-xs text-gray-500 dark:text-gray-400 italic">
                          <Check className="w-3 h-3 text-brand-accent mt-1" />
                          <span>Mínimo <strong className="text-brand-accent">70%</strong> en cada evaluación de lección.</span>
                       </li>
                       <li className="flex items-start gap-3 text-xs text-gray-500 dark:text-gray-400 italic">
                          <Check className="w-3 h-3 text-brand-accent mt-1" />
                          <span>Entrega obligatoria del <strong className="text-brand-accent">100%</strong> de las tareas prácticas.</span>
                       </li>
                       <li className="flex items-start gap-3 text-xs text-gray-500 dark:text-gray-400 italic">
                          <Check className="w-3 h-3 text-brand-accent mt-1" />
                          <span>Examen final técnico-práctico presencial o virtual.</span>
                       </li>
                    </ul>
                  </div>

                  {!isEnrolled && (
                    <button 
                      onClick={handleEnroll}
                      disabled={isEnrolling}
                      className="w-full py-6 bg-[#3BB36B] text-white rounded-[24px] font-bold text-lg hover:bg-[#2D9B57] transition-all shadow-2xl flex items-center justify-center gap-4 disabled:bg-gray-400"
                    >
                      {isEnrolling ? 'INSCRIBIENDO...' : 'INSCRIBIRME'}
                      <CheckCircle2 className="w-6 h-6" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tasks' && isEnrolled && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                 <div>
                    <h2 className="text-3xl font-display font-bold text-[#3BB36B] dark:text-brand-accent mb-2 flex items-center gap-4">
                       <ClipboardList className="text-brand-accent" />
                       Mis Asignaciones Pendientes
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium italic">Sube tus archivos para que el profesor pueda calificarlos.</p>
                 </div>
                 <div className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full border dark:border-white/10 shadow-sm flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-[#3BB36B] dark:text-brand-accent uppercase tracking-widest">Aula Virtual Activa</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(course?.lessons || []).flatMap(l => l.parts || []).filter(p => p.type === 'task').map((task) => {
                  const isCompleted = completedTasks.includes(task.id);
                  return (
                    <motion.div 
                      key={task.id}
                      whileHover={{ y: -10 }}
                      className="bg-white dark:bg-gray-900 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group flex flex-col h-full min-h-[420px]"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-hueso dark:bg-white/5 text-petroleo dark:text-gray-300 group-hover:bg-brand-accent group-hover:text-white group-hover:rotate-12'}`}>
                          <ClipboardList className="w-8 h-8" />
                        </div>
                        <div className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] ${isCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'}`}>
                          {isCompleted ? 'COMPLETADO' : 'PENDIENTE'}
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-2xl text-petroleo dark:text-white mb-4 group-hover:text-brand-accent transition-colors">{task.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-10 flex-grow italic">
                        {task.content || 'Esta asignación requiere que pongas en práctica los conocimientos adquiridos en la lección.'}
                      </p>
                      
                      <div className="mt-auto space-y-5">
                        <div className="flex items-center gap-3 text-xs font-bold text-gray-400 dark:text-gray-500">
                          <Clock className="w-5 h-5 text-brand-accent" />
                          TIEMPO ESTIMADO: 45 MIN
                        </div>
                        
                        {!isCompleted ? (
                          <div className="space-y-4">
                            <button 
                              onClick={() => {
                                handleTaskSubmit(task.id);
                                handleCompleteModule(task.id);
                              }}
                              disabled={activeTask !== null}
                              className={`w-full py-4 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-3 ${
                                activeTask === task.id ? 'bg-gray-400 dark:bg-gray-700 cursor-wait' : 'bg-petroleo dark:bg-brand-accent hover:bg-brand-accent dark:hover:bg-brand-accent/90 text-white'
                              }`}
                            >
                              {activeTask === task.id ? (
                                <>
                                  <Clock className="w-5 h-5 animate-spin" />
                                  SUBIENDO...
                                </>
                              ) : (
                                <>
                                  <Download className="w-5 h-5 rotate-180" />
                                  SUBIR MI TAREA
                                </>
                              )}
                            </button>
                          </div>
                        ) : (
                          <div className="w-full py-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl font-bold flex items-center justify-center gap-3 border border-green-200 dark:border-green-800/30">
                            <CheckCircle2 className="w-5 h-5" />
                            TAREA EN REVISIÓN
                          </div>
                        )}
                      </div>
                      
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand-accent/10 transition-colors"></div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'cert' && isEnrolled && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex flex-col items-center justify-center p-4"
            >
               {progress >= 100 ? (
                 <div className="bg-white rounded-[60px] p-8 md:p-16 shadow-2xl border-[16px] border-petroleo/5 text-center relative overflow-hidden max-w-5xl w-full flex flex-col items-center">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-petroleo/5 rounded-full -ml-32 -mb-32"></div>
                    
                    <Award className="w-24 h-24 text-brand-accent mb-8 relative z-10" />
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-petroleo mb-2 tracking-tighter italic">CERTIFICADO TÉCNICO PROFESIONAL</h3>
                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-brand-accent mb-12">Plataforma Educativa Académica</p>
                    
                    <div className="space-y-6 mb-16 relative z-10">
                       <p className="text-gray-400 italic text-lg">Este documento certifica que el estudiante:</p>
                       <h4 className="text-4xl md:text-6xl font-display font-bold text-black border-b-4 border-gray-100 pb-4 px-4 md:px-12 inline-block uppercase tracking-tight shadow-sm">{user?.name}</h4>
                       <p className="text-gray-600 max-w-2xl mx-auto mt-8 text-sm md:text-lg italic leading-relaxed">
                         Ha completado con éxito todas las competencias y requisitos académicos del programa técnico en <span className="font-bold text-petroleo not-italic">{course.title}</span>, demostrando excelencia en el desempeño teórico y práctico.
                       </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl mb-16 relative z-10">
                       <div className="flex flex-col items-center">
                          <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 mb-4 transition-transform hover:scale-110">
                             <QRCodeSVG 
                               value={`https://skillfor.edu/verify/${user?.id}-${course.id}`} 
                               size={100}
                               className="text-petroleo"
                             />
                          </div>
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Validación de Título</p>
                       </div>
                       
                       <div className="flex flex-col items-center justify-end pb-4">
                          <div className="w-48 h-px bg-gray-200 mb-2"></div>
                          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Firma Rectoría</p>
                       </div>

                       <div className="flex flex-col items-center justify-end pb-4">
                          <div className="w-48 h-px bg-gray-200 mb-2"></div>
                          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Dirección Académica</p>
                       </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
                       <button 
                         onClick={() => handleDownloadCert('pdf')}
                         className="px-10 py-5 bg-petroleo text-white rounded-[30px] font-bold hover:shadow-2xl transition-all shadow-xl shadow-petroleo/20 flex items-center gap-4 text-xs md:text-sm tracking-widest group"
                       >
                         <FileDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                         DESCARGAR PDF
                       </button>
                       <button 
                         onClick={() => window.print()}
                         className="px-10 py-5 bg-white text-petroleo border-2 border-gray-100 rounded-[30px] font-bold hover:bg-gray-50 transition-all flex items-center gap-4 text-xs md:text-sm tracking-widest shadow-lg"
                       >
                         <Printer className="w-6 h-6" />
                         IMPRIMIR
                       </button>
                    </div>
                 </div>
               ) : (
                 <div className="bg-white dark:bg-gray-900 rounded-[60px] p-12 shadow-xl border border-gray-100 dark:border-white/5 max-w-xl text-center">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-white/5 rounded-[40px] flex items-center justify-center mb-10 mx-auto border dark:border-white/10">
                       <Lock className="w-12 h-12 text-gray-300 dark:text-gray-600" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-gray-400 dark:text-gray-500 mb-4 uppercase tracking-tighter">Certificación Pendiente</h3>
                    <p className="text-gray-400 dark:text-gray-500 mb-10 text-lg leading-relaxed italic">
                      Debes completar el <strong className="text-petroleo dark:text-brand-accent">100% del programa</strong> (clases, tareas y examen final) para que nuestro sistema académico procese la emisión de tu título oficial.
                    </p>
                    <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden mb-12 shadow-inner">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-brand-accent shadow-lg"
                       ></motion.div>
                    </div>
                    <button 
                      onClick={() => setActiveTab('classes')}
                      className="px-8 py-5 bg-brand-accent text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:shadow-xl hover:bg-brand-accent/90 transition-all border dark:border-white/10"
                    >
                      Continuar Aprendiendo
                    </button>
                 </div>
               )}
            </motion.div>
          )}
        </div>

        {/* DETAILS SECTIONS - Shared info blocks */}
        {!isAdminMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-10 rounded-[40px] shadow-sm border border-gray-100 dark:border-white/5"
            >
              <h2 className="font-display font-bold text-2xl text-[#3BB36B] dark:text-brand-accent mb-8 flex items-center gap-4">
                <span className="w-10 h-10 bg-hueso dark:bg-white/5 flex items-center justify-center rounded-xl text-[#3BB36B] dark:text-brand-accent border dark:border-white/10">✨</span>
                ¿Qué aprenderás?
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {(course.competencies || ['Técnicas avanzadas', 'Manejo de equipo', 'Ética profesional']).map((comp, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-gray-600 dark:text-gray-400 font-medium italic">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    {comp}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#3BB36B] dark:bg-brand-accent p-10 rounded-[40px] shadow-xl text-white"
            >
              <h2 className="font-display font-bold text-2xl mb-8 flex items-center gap-4">
                <span className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-xl text-white">📚</span>
                Plan de Estudios
              </h2>
              <ul className="space-y-4">
                {(course?.subjects || []).map((sub, idx) => (
                  <li key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                    <span className="font-bold italic">Módulo {idx + 1} - {sub.name}</span>
                    <span className="text-[10px] bg-brand-accent dark:bg-white/10 px-2 py-1 rounded-full font-bold">UNIDAD</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
