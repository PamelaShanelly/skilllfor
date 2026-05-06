import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { db } from '../lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { User, Course, RegisteredCourse } from '../types';
import { COURSES } from '../constants/courses';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { 
  Play, Download, Award, BookOpen, Clock, 
  CheckCircle2, PlusCircle, AlertCircle, QrCode,
  Edit3, Camera, Save, X, Github, Linkedin, Twitter,
  Sun, Moon
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import jsPDF from 'jspdf';
import { Certificate } from '../components/Certificate';

interface DashboardProps {
  user: User;
  setUser: (user: User) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Dashboard({ user, setUser, isDarkMode, setIsDarkMode }: DashboardProps) {
  const [activeCourseId, setActiveCourseId] = React.useState(user.courses?.find(c => c.courseId)?.courseId || '');
  const activeCourse = COURSES.find(c => c.id === activeCourseId);
  const userCourseData = user.courses?.find(c => c.courseId === activeCourseId);

  const filteredUserCourses = user.courses?.filter(uc => uc.courseId) || [];
  const [isAddingCourse, setIsAddingCourse] = React.useState(false);
  const [newCourseId, setNewCourseId] = React.useState('');
  const [showCertificate, setShowCertificate] = React.useState(false);
  const [isEditingProfile, setIsEditingProfile] = React.useState(false);
  const [tempProfile, setTempProfile] = React.useState({
    name: user.name,
    bio: user.bio || '',
    profilePic: user.profilePic || ''
  });

  const chartData = activeCourse?.subjects?.map(sub => ({
    name: sub.name,
    nota: userCourseData?.grades?.[sub.name] || 0
  })) || [];

  const averageGrade = chartData.length > 0 
    ? Math.round(chartData.reduce((acc, curr) => acc + curr.nota, 0) / chartData.length)
    : 0;

  const handleUpdateProfile = async () => {
    try {
      await updateDoc(doc(db, 'users', user.id), {
        name: tempProfile.name,
        bio: tempProfile.bio,
        profilePic: tempProfile.profilePic
      });

      const updatedUser = { ...user, ...tempProfile };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setIsEditingProfile(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.id}`);
    }
  };

  const handleAddCourse = async () => {
    if (!newCourseId) return;
    try {
      const newRegisteredCourse: RegisteredCourse = {
        courseId: newCourseId,
        progress: 0,
        grades: {},
        status: 'enrolled',
        completedModules: [],
        completedTasks: [],
        completedExams: [],
        startDate: new Date().toISOString()
      };

      const updatedCourses = [...user.courses, newRegisteredCourse];

      await updateDoc(doc(db, 'users', user.id), {
        courses: updatedCourses
      });

      const updatedUser = {
        ...user,
        courses: updatedCourses
      };

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setActiveCourseId(newCourseId);
      setIsAddingCourse(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${user.id}`);
    }
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Greeting & Profile */}
        <div className="bg-white dark:bg-gray-900 rounded-[40px] shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden mb-12">
          <div className="h-32 bg-gradient-to-r from-brand-primary/20 via-brand-accent/20 to-brand-primary/20"></div>
          <div className="px-8 pb-8 -mt-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
                <div className="w-32 h-32 rounded-3xl bg-brand-primary dark:bg-brand-accent flex items-center justify-center text-white overflow-hidden border-8 border-white dark:border-gray-950 shadow-2xl relative group">
                  {user.profilePic ? (
                    <img src={user.profilePic} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl font-display font-black">{user.name[0]}</span>
                  )}
                  {isEditingProfile && (
                    <button className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="w-8 h-8 text-white" />
                    </button>
                  )}
                </div>
                <div className="flex-grow space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <h1 className="font-display font-bold text-4xl text-gray-900 dark:text-white tracking-tight leading-none mb-1">
                      {user.name}
                    </h1>
                    {!isEditingProfile && (
                      <button 
                        onClick={() => {
                          setTempProfile({ name: user.name, bio: user.bio || '', profilePic: user.profilePic || '' });
                          setIsEditingProfile(true);
                        }}
                        className="p-2 text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
                      >
                        <Edit3 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 font-medium italic">
                    {user.bio || 'Sin biografía profesional todavía.'}
                  </p>
                  <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    Miembro desde: {user.lastLogin ? new Date().toLocaleDateString() : 'Mayo 2026'}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-yellow-500 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 hover:scale-105 transition-all"
                >
                  {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6 text-petroleo" />}
                </button>
                <button 
                  onClick={() => setIsAddingCourse(true)}
                  className="flex items-center px-8 py-4 bg-brand-primary dark:bg-brand-accent text-white rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl shadow-brand-primary/20 dark:shadow-brand-accent/20"
                >
                  <PlusCircle className="w-5 h-5 mr-3" />
                  Nuevo Curso
                </button>
              </div>
            </div>

            {isEditingProfile && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input 
                      type="text"
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent text-gray-900 dark:text-white"
                      value={tempProfile.name}
                      onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Biografía Breve</label>
                    <input 
                      type="text"
                      placeholder="Ej: Aspirante a Barbero Profesional..."
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent text-gray-900 dark:text-white"
                      value={tempProfile.bio}
                      onChange={(e) => setTempProfile({ ...tempProfile, bio: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <button 
                    onClick={() => setIsEditingProfile(false)}
                    className="px-6 py-2 text-gray-500 font-bold hover:text-gray-700"
                  >
                    Descartar
                  </button>
                  <button 
                    onClick={handleUpdateProfile}
                    className="flex items-center px-8 py-3 bg-petroleo dark:bg-white dark:text-black text-white rounded-2xl font-bold hover:opacity-90 transition-all"
                  >
                    <Save className="w-5 h-5 mr-3" />
                    Guardar Cambios
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar: My Courses */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-[40px] shadow-sm border border-gray-100 dark:border-white/10">
              <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-brand-primary dark:text-brand-accent" />
                Mis Programas
              </h2>
              <div className="space-y-4">
                {filteredUserCourses.map(uc => {
                  const c = COURSES.find(item => item.id === uc.courseId);
                  return (
                    <div
                      key={uc.courseId}
                      onClick={() => setActiveCourseId(uc.courseId)}
                      className={`w-full p-5 rounded-[25px] border transition-all text-left group cursor-pointer relative overflow-hidden ${
                        activeCourseId === uc.courseId 
                        ? 'border-brand-primary dark:border-brand-accent bg-blue-50/50 dark:bg-brand-accent/10 shadow-sm' 
                        : 'border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 bg-white dark:bg-white/5'
                      }`}
                    >
                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex-grow">
                          <p className={`font-bold text-lg leading-tight mb-2 ${activeCourseId === uc.courseId ? 'text-brand-primary dark:text-brand-accent' : 'text-gray-700 dark:text-gray-300'}`}>
                            {c?.title}
                          </p>
                          <div className="flex items-center gap-3">
                             <div className="flex-grow h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-brand-primary dark:bg-brand-accent" 
                                  style={{ width: `${uc.progress}%` }}
                                ></div>
                             </div>
                             <span className="text-[10px] font-black text-gray-400">{uc.progress}%</span>
                          </div>
                        </div>
                        {activeCourseId === uc.courseId && <CheckCircle2 className="w-6 h-6 text-brand-primary dark:text-brand-accent ml-4" />}
                      </div>
                      
                      {activeCourseId === uc.courseId && (
                        <Link 
                          to={`/curso/${uc.courseId}`}
                          className="mt-4 flex items-center justify-center w-full py-3 bg-white dark:bg-white/5 text-brand-primary dark:text-brand-accent rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent transition-all z-10 relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Continuar Formación
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-petroleo dark:bg-black p-8 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-white/5">
               <h2 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
                 <Play className="w-6 h-6 text-brand-accent" />
                 Práctica Visual
               </h2>
               <div className="space-y-4">
                  {activeCourse?.youtubeId ? (
                    <div className="aspect-video bg-slate-800 rounded-3xl overflow-hidden border border-white/10">
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${activeCourse.youtubeId}`}
                        title="Course video"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="aspect-video bg-slate-800 rounded-3xl flex items-center justify-center border border-slate-700">
                      <Play className="w-12 h-12 text-slate-600" />
                    </div>
                  )}
                  <p className="text-sm text-gray-400 italic">
                    "Contenido audiovisual curado para reforzar tus habilidades manuales."
                  </p>
               </div>
            </div>
          </div>

          {/* Main Content: Grades and Progress */}
          <div className="lg:col-span-8 space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] shadow-sm border border-gray-100 dark:border-white/10 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <Award className="w-24 h-24 text-brand-primary" />
                </div>
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 text-brand-primary dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Award className="w-7 h-7" />
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 relative z-10">Promedio General</p>
                <p className="text-4xl font-display font-black text-gray-900 dark:text-white relative z-10">{averageGrade}%</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] shadow-sm border border-gray-100 dark:border-white/10 text-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-24 h-24 text-green-600" />
                </div>
                <div className="w-14 h-14 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 relative z-10">Avance Total</p>
                <p className="text-4xl font-display font-black text-gray-900 dark:text-white relative z-10">{userCourseData?.progress}%</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] shadow-sm border border-gray-100 dark:border-white/10 text-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <Clock className="w-24 h-24 text-amber-600" />
                </div>
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Clock className="w-7 h-7" />
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 relative z-10">Estado Académico</p>
                <p className="text-base font-display font-black text-gray-900 dark:text-white uppercase relative z-10">
                  {userCourseData?.progress === 100 ? (
                    <span className="text-green-600 dark:text-green-400">Finalizado</span>
                  ) : (
                    <span className="text-amber-600 dark:text-amber-400">Activo</span>
                  )}
                </p>
              </div>
            </div>

            {/* Grades & Distribution */}
            <div className="bg-white dark:bg-gray-900 p-10 rounded-[40px] shadow-sm border border-gray-100 dark:border-white/10">
               <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                  <div className="space-y-1">
                    <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white tracking-tight">Desempeño Universitario</h2>
                    <p className="text-sm text-gray-500 font-medium">Distribución de notas por módulo técnico</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-green-600">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div> Aprobado
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-600">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div> Pendiente
                    </span>
                  </div>
               </div>

               <div className="h-[350px] w-full mb-12">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={chartData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#374151' : '#F3F4F6'} />
                     <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill:isDarkMode ? '#9CA3AF' : '#6B7280', fontSize: 10, fontWeight: 700 }}
                        interval={0}
                        angle={-10}
                        textAnchor="end"
                        height={60}
                      />
                     <YAxis axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#9CA3AF' : '#6B7280', fontWeight: 600 }} domain={[0, 100]} />
                     <Tooltip 
                        contentStyle={{ 
                          borderRadius: '24px', 
                          border: 'none', 
                          backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                          padding: '16px'
                        }}
                        itemStyle={{ fontWeight: 800, color: isDarkMode ? '#FFF' : '#000' }}
                        labelStyle={{ color: '#9CA3AF', marginBottom: '8px', fontSize: '12px', fontWeight: 700 }}
                        cursor={{ fill: isDarkMode ? '#111827' : '#F9FAFB' }}
                      />
                     <Bar dataKey="nota" radius={[12, 12, 0, 0]} barSize={50}>
                       {chartData.map((entry, index) => (
                         <Cell key={index} fill={entry.nota >= 70 ? (isDarkMode ? '#22c55e' : '#1e3a8a') : (isDarkMode ? '#ef4444' : '#fee2e2')} />
                       ))}
                     </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCourse?.subjects?.map(sub => {
                    const grade = userCourseData?.grades?.[sub.name] || 0;
                    return (
                      <div key={sub.name} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-4">
                           <div className={`w-2 h-10 rounded-full ${grade >= 70 ? 'bg-green-500' : 'bg-red-400/20'}`}></div>
                           <div>
                             <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{sub.name}</p>
                             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{sub.credits} Créditos</p>
                           </div>
                        </div>
                        <span className={`text-lg font-display font-black ${grade >= 70 ? 'text-green-600' : 'text-gray-400'}`}>
                          {grade}%
                        </span>
                      </div>
                    );
                  })}
               </div>
            </div>

            {/* Certificate Section (Polished) */}
            <div className="bg-white dark:bg-gray-900 p-10 rounded-[40px] shadow-2xl border border-transparent dark:border-white/10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32 blur-3xl transition-transform group-hover:scale-110"></div>
              
              <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-[40px] border-2 border-dashed border-gray-200 dark:border-white/10 relative">
                <div className="bg-white p-6 rounded-2xl shadow-inner shadow-black/5">
                  <QRCodeSVG 
                    value={`https://skillfor.edu/verify/${user.id}-${activeCourseId}`}
                    size={160}
                    level="H"
                    includeMargin={true}
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-primary text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                  VERIFICADO
                </div>
              </div>

              <div className="flex-grow space-y-6 text-center md:text-left relative z-10">
                <h2 className="font-display font-black text-4xl text-gray-900 dark:text-white tracking-tighter leading-none">
                  Certificación <br/> Profesional
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium italic">
                  Tu esfuerzo merece reconocimiento. Al alcanzar el 100% de los requisitos, 
                  esta acreditación estará disponible para fortalecer tu portafolio profesional.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    onClick={() => setShowCertificate(true)}
                    disabled={userCourseData?.progress! < 100}
                    className={`flex items-center px-10 py-5 rounded-2xl font-black text-sm transition-all shadow-2xl uppercase tracking-widest ${
                      userCourseData?.progress! >= 100
                      ? 'bg-brand-primary dark:bg-brand-accent text-white hover:scale-105 active:scale-95 shadow-brand-primary/30 dark:shadow-brand-accent/30'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-300 dark:text-gray-700 cursor-not-allowed shadow-none border dark:border-white/5'
                    }`}
                  >
                    <Award className="w-5 h-5 mr-3" />
                    Obtener Certificado
                  </button>
                  {userCourseData?.progress! < 100 && (
                     <div className="flex items-center text-xs text-amber-600 font-bold italic gap-2 py-2 px-4 bg-amber-50 dark:bg-amber-500/10 rounded-xl">
                       <AlertCircle className="w-4 h-4" />
                       Falta poco: {100 - (userCourseData?.progress || 0)}% restante
                     </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {showCertificate && (
        <Certificate 
          userName={user.name}
          courseTitle={activeCourse?.title || ''}
          completionDate={new Date().toLocaleDateString()}
          certificateId={`SKILL-${user.id.slice(0, 8).toUpperCase()}`}
          onClose={() => setShowCertificate(false)}
        />
      )}

      {/* Add Course Modal */}
      {isAddingCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsAddingCourse(false)}></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 max-w-lg w-full rounded-[40px] p-10 relative z-10 shadow-2xl border border-transparent dark:border-white/10"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white tracking-tight">Nueva Especialidad</h2>
              <button 
                onClick={() => setIsAddingCourse(false)}
                className="p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Selecciona el catálogo</label>
                <select 
                  className="w-full px-6 py-5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent text-gray-900 dark:text-white transition-all appearance-none cursor-pointer font-bold"
                  value={newCourseId}
                  onChange={(e) => setNewCourseId(e.target.value)}
                >
                  <option value="" className="dark:bg-gray-900">Listado de Programas...</option>
                  {COURSES.filter(c => !user.courses.find(uc => uc.courseId === c.id)).map(course => (
                    <option key={course.id} value={course.id} className="dark:bg-gray-900">{course.title}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={handleAddCourse}
                disabled={!newCourseId}
                className="w-full py-5 bg-brand-primary dark:bg-brand-accent text-white rounded-3xl font-black uppercase tracking-widest hover:opacity-90 transition-all disabled:opacity-50 shadow-2xl shadow-brand-primary/30 dark:shadow-brand-accent/30 flex items-center justify-center gap-3"
              >
                Inscribirme Ahora
                <PlusCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
