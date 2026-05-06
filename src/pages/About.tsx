import React from 'react';
import { motion } from 'motion/react';
import { Target, Award, CheckCircle2, Star, Rocket, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 bg-hueso dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Conócenos</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-petroleo dark:text-white mb-6">✨ Sobre Nosotros ✨</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg italic">
            Conoce la historia, misión, visión y valores de SkillFor.
          </p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* PRESENTACIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[50px] shadow-sm border border-gray-100 dark:border-white/5">
               <h2 className="font-display font-bold text-3xl text-petroleo dark:text-white mb-6 flex items-center gap-4">
                 <Rocket className="text-brand-accent" /> ¿Quiénes somos?
               </h2>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
                 <strong>SkillFor</strong> es una plataforma educativa creada para ofrecer cursos prácticos y accesibles 
                 en áreas como salud, tecnología, belleza e idiomas. Nuestro objetivo es ayudar a jóvenes 
                 y adultos a prepararse para el mundo laboral.
               </p>
               <div className="mt-8 pt-8 border-t border-hueso dark:border-white/5 text-sm text-gray-400 italic">
                 Operamos físicamente en las instalaciones del <strong>Politécnico Virgen de la Altagracia</strong>, 
                 brindando un entorno seguro y profesional para nuestras prácticas presenciales.
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 bg-white dark:bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipo SkillFor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-accent p-10 rounded-[40px] text-white shadow-xl max-w-xs hidden md:block">
               <div className="flex items-center gap-4 mb-2">
                 <Star className="w-6 h-6 fill-white" />
                 <h3 className="font-bold text-xl font-display">Excelencia</h3>
               </div>
               <p className="text-sm text-amber-50 italic">
                 Comprometidos con tu crecimiento profesional desde el primer día.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-petroleo dark:bg-gray-950 p-12 rounded-[60px] text-white shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-brand-accent">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="font-display font-bold text-3xl mb-6">Nuestra Misión</h2>
              <p className="text-gray-300 leading-relaxed text-lg italic">
                Brindar educación de calidad, accesible y práctica para que cualquier persona pueda 
                desarrollar habilidades profesionales y mejorar su futuro.
              </p>
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full"></div>
          </motion.div>

          <motion.div 
             whileHover={{ y: -5 }}
             className="bg-white dark:bg-gray-900 p-12 rounded-[60px] text-petroleo dark:text-white shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-hueso dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-brand-accent">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="font-display font-bold text-3xl mb-6">Nuestra Visión</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
                Ser una de las plataformas educativas más importantes, formando profesionales preparados 
                para el mundo moderno y digital.
              </p>
            </div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-petroleo/5 dark:bg-brand-accent/5 rounded-full"></div>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="bg-white dark:bg-gray-900 rounded-[60px] p-12 md:p-20 shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="md:w-1/3">
              <h2 className="font-display font-bold text-4xl text-petroleo dark:text-white mb-6">Nuestros Valores</h2>
              <p className="text-gray-500 dark:text-gray-400 italic">Los pilares que sostienen cada uno de nuestros programas técnicos.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Educación accesible', icon: '💸' },
                { title: 'Calidad en la enseñanza', icon: '🏆' },
                { title: 'Innovación constante', icon: '💡' },
                { title: 'Compromiso con los estudiantes', icon: '🤝' }
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-hueso dark:bg-white/5 p-6 rounded-3xl border border-gray-50 dark:border-white/5">
                  <span className="text-3xl">{val.icon}</span>
                  <span className="font-bold text-petroleo dark:text-white text-lg">{val.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -mr-32 -mt-32"></div>
        </div>
      </div>
    </div>
  );
}
