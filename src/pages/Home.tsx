import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ShieldCheck, Target, Award, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { COURSES } from '../constants/courses';
import { ChevronRight } from 'lucide-react';

interface HomeProps {
  user: User | null;
}

export default function Home({ user }: HomeProps) {
  const displayedCourses = COURSES;

  return (
    <div className="overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-hueso dark:bg-gray-950 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-petroleo dark:text-white mb-6 leading-[1.1] tracking-tighter text-center lg:text-left">
                Domina hoy las <span className="text-brand-accent">Habilidades</span> del Mañana.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                Educación técnica de vanguardia para el mercado laboral actual. 
                Certifícate y potencia tu crecimiento profesional en SkillFor.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to={user ? "/dashboard" : "/registro"}
                  className="px-8 py-4 bg-petroleo dark:bg-brand-accent text-white rounded-full font-bold shadow-lg hover:bg-petroleo-light dark:hover:bg-brand-accent/90 transition-all flex items-center justify-center group"
                >
                  {user ? "Ir a mi Panel" : "Comenzar ahora"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/cursos"
                  className="px-8 py-4 bg-white dark:bg-white/5 border-2 border-gray-100 dark:border-white/10 text-gray-800 dark:text-white rounded-full font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-center"
                >
                  Explorar Cursos
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0 relative"
            >
              <div className="aspect-square relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Estudiantes SkillFor"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center space-x-4">
                <div className="bg-green-100 dark:bg-green-500/20 p-3 rounded-full">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{COURSES.length} Cursos Técnicos</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Certificación Oficial</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-white/5 -z-0 rounded-l-[100px]"></div>
      </section>

      {/* Courses Section based on Auth State */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2 block">
                {user ? 'CONTINÚA TU APRENDIZAJE' : 'CURSOS DISPONIBLES'}
              </span>
              <h2 className="font-display font-bold text-4xl text-petroleo dark:text-white">
                {user ? 'Mis Cursos Seleccionados' : 'Nuestra Oferta Educativa'}
              </h2>
            </div>
            {user && (
              <Link to="/cursos" className="text-petroleo dark:text-brand-accent font-bold hover:text-brand-accent transition-colors flex items-center gap-2">
                Ver más cursos <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-[40px] overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative m-3 rounded-[32px] bg-hueso dark:bg-gray-800 flex items-center justify-center p-4">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {user && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="h-1.5 w-full bg-white/50 rounded-full overflow-hidden">
                        <div 
                           className="h-full bg-brand-accent rounded-full" 
                           style={{ width: `${user.courses.find(rc => rc.courseId === course.id)?.progress || 0}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-display font-bold text-lg text-petroleo dark:text-white mb-2 line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-6 line-clamp-2">
                    {course.description}
                  </p>
                  <Link 
                    to={`/curso/${course.id}`}
                    className="mt-auto flex items-center justify-center w-full px-4 py-3 bg-petroleo dark:bg-brand-accent text-white rounded-2xl font-bold hover:bg-brand-accent transition-all text-xs tracking-widest"
                  >
                    {user ? 'CONTINUAR' : 'VER MÁS INFO'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {!user && (
            <div className="mt-16 text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto italic">
                ¿Buscas algo específico? Regístrate para seleccionar los mejores cursos adaptados a tu perfil profesional.
              </p>
              <Link to="/registro" className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-white rounded-2xl font-bold tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-accent/20">
                REGISTRARME AHORA <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Costs Content (Competence, Profile, etc.) */}
      <section className="py-24 bg-slate-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-4 tracking-tight">Lo que obtendrás en nuestra plataforma</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">Nuestra misión es prepararte integralmente para los retos reales del mercado laboral con el respaldo de la Fundación Carlos Slim.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-white/10">
              <div className="bg-blue-100 dark:bg-blue-500/20 p-4 rounded-xl w-fit mb-6 text-blue-600 dark:text-blue-400">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">Competencias</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Desarrollar habilidades prácticas y teóricas específicas por cada área técnica, garantizando dominio total.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-white/10">
              <div className="bg-brand-accent/10 p-4 rounded-xl w-fit mb-6 text-brand-accent">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">Perfil del Estudiante</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Formamos personas con ética, disciplina y compromiso, capaces de aprender continuamente y trabajar en equipo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-white/10">
              <div className="bg-purple-100 dark:bg-purple-500/20 p-4 rounded-xl w-fit mb-6 text-purple-600 dark:text-purple-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">Perfil Profesional</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Te convertirás en un experto técnico listo para el empleo inmediato o para emprender tu propio negocio.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-white/10">
              <div className="bg-green-100 dark:bg-green-500/20 p-4 rounded-xl w-fit mb-6 text-green-600 dark:text-green-400">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">Utilidad Laboral</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Nuestros certificados cuentan con respaldo institucional y QR de validación, abriendo puertas empresariales.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
