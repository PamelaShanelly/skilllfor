import React from 'react';
import { motion } from 'motion/react';
import { db } from '../lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { RegisteredCourse, User } from '../types';
import { COURSES } from '../constants/courses';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, GraduationCap, ArrowRight } from 'lucide-react';

interface CourseSelectionProps {
  user: User | null;
  setUser: (user: User) => void;
}

export default function CourseSelection({ user, setUser }: CourseSelectionProps) {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const toggleCourse = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id) 
        : [...prev, id]
    );
  };

  const handleFinish = async () => {
    if (selectedIds.length === 0) return;
    setIsLoading(true);

    try {
      const registeredCourses: RegisteredCourse[] = selectedIds.map(id => ({
        courseId: id,
        progress: 0,
        grades: {},
        status: 'enrolled' as const,
        completedModules: [],
        completedTasks: [],
        completedExams: []
      }));

      // Update Firestore
      await updateDoc(doc(db, 'users', user!.id), {
        courses: registeredCourses
      });

      const updatedUser: User = {
        ...user!,
        courses: registeredCourses
      };

      // Update local state
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      navigate('/');
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user?.id}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="py-24 bg-hueso dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold tracking-widest mb-4">
              PASO FINAL
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-petroleo dark:text-white mb-4">
              Elige tus Cursos
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg italic leading-relaxed">
              "Selecciona los cursos que te interesan. Estos aparecerán en tu página de inicio personalizada."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COURSES.map((course) => {
            const isSelected = selectedIds.includes(course.id);
            return (
              <motion.div
                key={course.id}
                whileHover={{ y: -5 }}
                onClick={() => toggleCourse(course.id)}
                className={`
                  cursor-pointer p-6 rounded-[32px] border-2 transition-all duration-300 relative overflow-hidden
                  ${isSelected 
                    ? 'bg-petroleo dark:bg-brand-accent border-brand-accent shadow-2xl scale-[1.02]' 
                    : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-white/5 hover:border-brand-accent shadow-sm'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors
                  ${isSelected ? 'bg-brand-accent text-white' : 'bg-hueso dark:bg-black/50 text-petroleo dark:text-brand-accent'}
                `}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <h3 className={`font-display font-bold text-lg mb-2 ${isSelected ? 'text-white' : 'text-petroleo dark:text-white'}`}>
                  {course.title}
                </h3>
                <p className={`text-xs ${isSelected ? 'text-hueso/60' : 'text-gray-400 dark:text-gray-500'}`}>
                  {course.description}
                </p>

                {isSelected && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-6 font-bold uppercase tracking-widest">
            Has seleccionado <span className="text-petroleo dark:text-brand-accent">{selectedIds.length}</span> cursos
          </p>
          <button
            onClick={handleFinish}
            disabled={selectedIds.length === 0 || isLoading}
            className={`
              flex items-center gap-3 px-10 py-5 rounded-2xl font-bold tracking-widest transition-all shadow-2xl
              ${selectedIds.length > 0 
                ? 'bg-brand-accent text-white hover:scale-105 active:scale-95 shadow-brand-accent/20' 
                : 'bg-gray-200 dark:bg-white/5 text-gray-400 dark:text-gray-600 cursor-not-allowed'}
            `}
          >
            {isLoading ? "GUARDANDO..." : "EMPEZAR MI FORMACIÓN"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
