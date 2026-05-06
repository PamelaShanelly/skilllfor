import React from 'react';
import { motion } from 'motion/react';
import { COURSES } from '../constants/courses';
import { User } from '../types';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, CheckCircle2 } from 'lucide-react';

interface CoursesProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export default function Courses({ user, setUser }: CoursesProps) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCourses = COURSES.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 bg-hueso dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-800 dark:text-white mb-4 tracking-tight">
              🎓 Oferta Educativa <span className="text-brand-accent">Profesional</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed italic">
              Desarrolla nuevas habilidades y certifícate con excelencia académica.
            </p>
          </motion.div>

          <div className="relative w-full max-w-md mx-auto mt-10">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="¿Qué quieres aprender hoy?..." 
              className="w-full pl-14 pr-6 py-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent dark:text-white outline-none transition-all shadow-xl text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => {
            const isEnrolled = user?.courses.find(c => c.courseId === course.id);
            return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white dark:bg-gray-900 rounded-[40px] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col relative"
                >
                    <div className="h-52 overflow-hidden relative m-4 rounded-[32px] bg-hueso dark:bg-black/50 flex items-center justify-center p-6 transition-all group-hover:scale-[0.98]">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {isEnrolled && (
                        <div className="absolute top-4 left-4 bg-brand-accent text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-gray-900">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                      <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] transition-all">
                        <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center shadow-xl shadow-brand-accent/30 rotate-12">
                          <ChevronRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex-grow flex flex-col">
                      <div className="mb-2">
                         <span className="text-brand-accent font-bold text-[10px] uppercase tracking-[0.2em]">{course.category || 'Técnico'}</span>
                      </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-800 dark:text-white mb-3 line-clamp-2 min-h-[3.5rem] leading-[1.2]">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mb-8 line-clamp-2 leading-relaxed italic">
                      {course.description}
                    </p>
                    <div className="mt-auto">
                      <Link 
                        to={`/curso/${course.id}`}
                        className={`flex items-center justify-center w-full px-6 py-4 rounded-2xl font-bold transition-all text-xs tracking-widest ${
                          isEnrolled 
                            ? 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200' 
                            : 'bg-petroleo dark:bg-brand-accent text-white hover:shadow-lg hover:bg-petroleo-light dark:hover:bg-brand-accent/90'
                        }`}
                      >
                        {isEnrolled ? 'CONTINUAR' : 'VER CURSO'}
                      </Link>
                    </div>
                  </div>
                </motion.div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-dashed border-gray-300 dark:border-white/10">
            <p className="text-gray-500 italic">No se encontraron cursos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
