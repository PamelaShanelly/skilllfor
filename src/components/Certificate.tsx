import React from 'react';
import { motion } from 'motion/react';
import { Award, Download, Share2, ShieldCheck, Calendar, User } from 'lucide-react';

interface CertificateProps {
  userName: string;
  courseTitle: string;
  completionDate: string;
  certificateId: string;
  onClose: () => void;
}

export const Certificate: React.FC<CertificateProps> = ({
  userName,
  courseTitle,
  completionDate,
  certificateId,
  onClose
}) => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:p-0 print:bg-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-900 w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden relative print:shadow-none print:rounded-none"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary print:hidden"></div>
        
        <div className="p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-8 border-brand-primary rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-brand-accent rounded-full"></div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="bg-brand-primary/10 p-4 rounded-full">
              <Award className="w-16 h-16 text-brand-primary" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-black text-petroleo dark:text-white uppercase tracking-tighter">
              Certificado de Finalización
            </h1>
            <p className="text-xl text-gray-500 font-medium italic">
              Este documento certifica con orgullo que
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-5xl md:text-7xl font-display font-black text-brand-accent tracking-tight leading-none mb-2">
              {userName}
            </h2>
            <div className="w-48 h-1 bg-brand-primary/20 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Ha completado satisfactoriamente todas las lecciones, evaluaciones y requisitos prácticos del curso profesional:
            </p>
            <h3 className="text-3xl font-display font-bold text-petroleo dark:text-white px-6 py-3 bg-gray-100 dark:bg-white/5 rounded-2xl inline-block">
              {courseTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-100 dark:border-white/10">
            <div className="flex flex-col items-center space-y-2">
              <Calendar className="w-6 h-6 text-gray-400" />
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Fecha</span>
              <span className="text-base font-bold text-petroleo dark:text-gray-200">{completionDate}</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ShieldCheck className="w-6 h-6 text-brand-primary" />
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">ID Verificación</span>
              <span className="text-xs font-mono text-gray-500">{certificateId}</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <User className="w-6 h-6 text-gray-400" />
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Emisor</span>
              <span className="text-base font-bold text-petroleo dark:text-gray-200">SkillFor Academy</span>
            </div>
          </div>

          {/* Signature Area */}
          <div className="pt-12 flex justify-center">
            <div className="text-center">
              <div className="font-signature text-3xl text-petroleo dark:text-white mb-2">SkillFor Leadership</div>
              <div className="w-48 h-px bg-gray-300 dark:bg-white/20 mx-auto"></div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Dirección Académica</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-50 dark:bg-black/40 p-6 flex items-center justify-center gap-4 print:hidden">
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20"
          >
            <Download className="w-5 h-5" />
            Descargar PDF
          </button>
          <button 
            onClick={onClose}
            className="px-8 py-4 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white rounded-2xl font-bold hover:bg-gray-300 dark:hover:bg-white/20 transition-all"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};
