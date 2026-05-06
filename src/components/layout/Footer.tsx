import { Mail, Phone, MapPin, Music2, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../constants/config';

export default function Footer() {
  return (
    <footer className="bg-petroleo dark:bg-black text-white pt-16 pb-8 border-t-4 border-[#3BB36B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand and Mission */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-4 mb-6">
              <span className="font-display font-bold text-2xl">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-sm text-gray-300 dark:text-gray-400 leading-relaxed italic">
              Educación técnica de excelencia en el Politécnico Virgen de la Altagracia. 
              Formando líderes competitivos para el mercado global.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-sm">Plataforma</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-gray-300 dark:text-gray-400 hover:text-[#3BB36B] transition-colors">Inicio</Link></li>
              <li><Link to="/sobre" className="text-sm text-gray-300 dark:text-gray-400 hover:text-[#3BB36B] transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/cursos" className="text-sm text-gray-300 dark:text-gray-400 hover:text-[#3BB36B] transition-colors">Cursos Técnicos</Link></li>
              <li><Link to="/contacto" className="text-sm text-gray-300 dark:text-gray-400 hover:text-[#3BB36B] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-sm">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <div className="flex items-start mb-4 group">
                  <MapPin className="w-5 h-5 text-[#3BB36B] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300 dark:text-gray-400">Politécnico Virgen de la Altagracia, Higüey, RD</span>
                </div>
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-inner bg-gray-800/50 border border-white/5">
                  <iframe 
                    title="Politécnico Virgen de la Altagracia Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.457143431105!2d-68.71661602377314!3d18.618605582502677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8abe2e22c9539%3A0xc34571999903e659!2sPolitecnico%20Virgen%20de%20la%20Altagracia!5e0!3m2!1ses-419!2sdo!4v1714571999974!5m2!1ses-419!2sdo" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-[#3BB36B] mr-3 group-hover:rotate-12 transition-transform" />
                <span className="text-sm text-gray-300 dark:text-gray-400">+1 (809) 541-1234</span>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-[#3BB36B] mr-3 group-hover:-rotate-12 transition-transform" />
                <span className="text-sm text-gray-300 dark:text-gray-400">info@skillfor.edu.do</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-sm">Nuestras Redes</h3>
            <div className="flex space-x-4">
              <a href="#" title="Facebook" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#1877F2] transition-all hover:-translate-y-1">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" title="TikTok" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#000000] border border-white/5 transition-all hover:-translate-y-1">
                <Music2 className="w-6 h-6" />
              </a>
              <a href="#" title="Instagram" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] transition-all hover:-translate-y-1">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div className="space-y-1">
            <p className="text-xs text-gray-400 dark:text-gray-500 italic">
              © {new Date().getFullYear()} {SITE_CONFIG.fullName}. Todos los derechos reservados.
            </p>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Diseño por {SITE_CONFIG.designBy}
            </p>
          </div>
          <div className="flex space-x-6 items-center">
            <span className="text-[10px] font-bold text-brand-accent tracking-[0.3em] uppercase">Excelencia Académica</span>
            <Link to="/admin" className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">Admin Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
