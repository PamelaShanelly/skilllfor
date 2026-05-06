import React from 'react';
import { motion } from 'motion/react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { Mail, Phone, MapPin, Send, MessageSquare, Camera, MessageCircle, Share2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'messages');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 tracking-tight">Ponte en Contacto</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed italic">
            ¿Tienes alguna duda sobre nuestros cursos o necesitas asistencia técnica? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 p-10 rounded-[40px] shadow-sm border border-gray-100 dark:border-white/5">
               <h2 className="font-display font-bold text-2xl mb-10 dark:text-white">Información Institucional</h2>
               <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-petroleo/10 dark:bg-brand-accent/20 p-4 rounded-2xl text-petroleo dark:text-brand-accent mr-6">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">Dirección</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">Calle Principal S/N, Politécnico Virgen de la Altagracia, Higüey, República Dominicana.</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-brand-accent/10 dark:bg-brand-accent/20 p-4 rounded-2xl text-brand-accent mr-6">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">Teléfono</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">+1 (809) 541-1234 / +1 (829) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-petroleo/10 dark:bg-brand-accent/20 p-4 rounded-2xl text-petroleo dark:text-brand-accent mr-6">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email de Soporte</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">ayuda@skillfor.edu.do</p>
                    </div>
                  </div>
               </div>

               <div className="mt-12 pt-10 border-t border-gray-50 dark:border-white/5">
                 <h3 className="font-bold text-gray-900 dark:text-white mb-6">Síguenos</h3>
                 <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-slate-50 dark:bg-white/5 rounded-2xl text-petroleo dark:text-gray-400 hover:bg-petroleo dark:hover:bg-brand-accent hover:text-white transition-all">
                      <MessageCircle className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-slate-50 dark:bg-white/5 rounded-2xl text-petroleo dark:text-gray-400 hover:bg-petroleo dark:hover:bg-brand-accent hover:text-white transition-all">
                      <Share2 className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-slate-50 dark:bg-white/5 rounded-2xl text-petroleo dark:text-gray-400 hover:bg-petroleo dark:hover:bg-brand-accent hover:text-white transition-all">
                      <Camera className="w-6 h-6" />
                    </a>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-10 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-petroleo/5 dark:bg-brand-accent/10 rounded-full"></div>
            
            <div className="flex items-center gap-4 mb-10">
               <div className="bg-brand-accent/10 dark:bg-brand-accent/20 p-3 rounded-xl text-brand-accent">
                 <MessageSquare className="w-6 h-6" />
               </div>
               <h2 className="font-display font-bold text-2xl dark:text-white">Envíanos un Mensaje</h2>
            </div>

            {isSent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="bg-green-100 dark:bg-brand-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-green-600 dark:text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 italic">Gracias por contactarnos. Te responderemos en un plazo máximo de 24 horas.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="px-8 py-3 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-2xl font-bold font-display"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl dark:text-white outline-none focus:ring-2 focus:ring-petroleo dark:focus:ring-brand-accent focus:bg-white transition-all"
                    placeholder="Escribe tu nombre..."
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl dark:text-white outline-none focus:ring-2 focus:ring-petroleo dark:focus:ring-brand-accent focus:bg-white transition-all"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Mensaje o Consulta</label>
                  <textarea 
                    rows={5}
                    required
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl dark:text-white outline-none focus:ring-2 focus:ring-petroleo dark:focus:ring-brand-accent focus:bg-white transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-5 bg-petroleo dark:bg-brand-accent text-white rounded-2xl font-bold shadow-xl shadow-petroleo/10 hover:bg-petroleo-light dark:hover:bg-brand-accent/90 hover:shadow-petroleo/20 transition-all flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {isLoading ? "Enviando..." : "Enviar Mensaje Directo"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
