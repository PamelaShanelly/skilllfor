import React from 'react';
import { motion } from 'motion/react';
import { 
  ClipboardList, 
  Search, 
  Filter, 
  Printer, 
  Calendar, 
  User as UserIcon, 
  Activity, 
  Shield, 
  ArrowLeft,
  ArrowRight,
  Download,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { User } from '../types';

interface AuditLog {
  id: string;
  userId: string;
  userEmail: string;
  action: string;
  details: string;
  status: string;
  timestamp: string;
  ip: string;
  device: string;
}

export default function AdminAuditoria({ user }: { user: User | null }) {
  const [logs, setLogs] = React.useState<AuditLog[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterAction, setFilterAction] = React.useState('ALL');
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  React.useEffect(() => {
    const fetchLogs = async () => {
      try {
        const logsSnap = await getDocs(query(collection(db, 'auditLogs'), orderBy('timestamp', 'desc')));
        const fetchedLogs: AuditLog[] = [];
        logsSnap.forEach((doc) => {
          const data = doc.data();
          fetchedLogs.push({
            id: doc.id,
            userId: data.userId,
            userEmail: data.userEmail || 'Desconocido',
            action: data.action,
            details: data.details,
            status: data.status,
            timestamp: data.timestamp?.toDate ? data.timestamp.toDate().toISOString() : data.timestamp,
            ip: data.ip || '0.0.0.0',
            device: data.device || 'Admin Device'
          });
        });
        setLogs(fetchedLogs);
      } catch (error) {
        console.error('Error fetching logs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLogs();
  }, []);

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterAction === 'ALL' || log.status === filterAction;
    
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrint = () => {
    window.print();
  };

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-3xl shadow-xl border border-red-100 max-w-sm">
          <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Acceso Denegado</h2>
          <p className="text-gray-500 mb-6">No tienes permisos para ver esta sección.</p>
          <Link to="/" className="inline-block px-8 py-3 bg-petroleo text-white rounded-xl font-bold transition-all hover:scale-105">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-petroleo rounded-xl flex items-center justify-center text-white">
                <ClipboardList className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-display font-bold text-gray-800 dark:text-white">Panel de Auditoría</h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium italic">Control y seguimiento de acciones del sistema en tiempo real.</p>
          </div>
          
          <div className="flex items-center gap-3 no-print">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm"
            >
              <Printer className="w-5 h-5" />
              Imprimir Reporte
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-petroleo dark:bg-brand-accent text-white rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
              <Download className="w-5 h-5" />
              Exportar CSV
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 no-print">
          {[
            { label: 'Total Acciones', val: logs.length, icon: Activity, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
            { label: 'Inicios de Sesión', val: logs.filter(l => l.action === 'LOGIN_SUCCESS').length, icon: UserIcon, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20' },
            { label: 'Fallos Detectados', val: logs.filter(l => l.status === 'FELLED').length, icon: Info, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-900/20' },
            { label: 'Usuarios Únicos', val: new Set(logs.map(l => l.userId)).size, icon: Shield, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm flex items-center gap-5"
            >
              <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.val}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm mb-8 no-print">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Buscar usuarios, acciones o detalles..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-petroleo/20 dark:focus:ring-brand-accent/20 transition-all text-sm dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-4 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/10 rounded-2xl">
                <Filter className="w-4 h-4 text-gray-400" />
                <select 
                  className="bg-transparent text-sm font-bold text-gray-700 dark:text-gray-300 outline-none cursor-pointer"
                  value={filterAction}
                  onChange={(e) => setFilterAction(e.target.value)}
                >
                  <option value="ALL">Todos los Estados</option>
                  <option value="COMPLETED">Completados</option>
                  <option value="FELLED">Fallidos</option>
                </select>
              </div>
              <Link to="/admin" className="px-6 py-4 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-2xl font-bold text-sm hover:bg-gray-200 dark:hover:bg-white/10 transition-all">
                Panel Admin
              </Link>
            </div>
          </div>
        </div>

        {/* Main Table */}
        <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 dark:bg-black/20 border-b border-gray-100 dark:border-white/5">
                  <th className="px-6 py-5 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center">Fecha y Hora</th>
                  <th className="px-6 py-5 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Usuario</th>
                  <th className="px-6 py-5 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Acción / Estado</th>
                  <th className="px-6 py-5 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Dispositivo / IP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                {isLoading ? (
                  Array(5).fill(0).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={4} className="px-6 py-10 text-center text-gray-300">Cargando registros...</td>
                    </tr>
                  ))
                ) : paginatedLogs.length > 0 ? (
                  paginatedLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50/80 dark:hover:bg-white/[0.02] transition-all group">
                      <td className="px-6 py-6">
                        <div className="flex items-center justify-center gap-3">
                          <Calendar className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                          <div className="text-center">
                            <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{new Date(log.timestamp).toLocaleDateString()}</p>
                            <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono italic">{new Date(log.timestamp).toLocaleTimeString()}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 font-display">
                        <div className="flex items-center gap-4">
                           <div className="w-8 h-8 bg-hueso dark:bg-black/30 rounded-lg flex items-center justify-center text-petroleo dark:text-brand-accent font-bold text-xs uppercase border border-petroleo/10 dark:border-brand-accent/10">
                              {log.userEmail.charAt(0)}
                           </div>
                           <div>
                              <p className="text-xs font-bold text-gray-800 dark:text-white">{log.userEmail}</p>
                              <p className="text-[10px] text-gray-400 font-mono italic">ID: {log.userId}</p>
                           </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <div className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-tighter ${
                            log.status === 'COMPLETED' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          }`}>
                            {log.status}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tighter">{log.action}</p>
                            <p className="text-[10px] text-gray-500 dark:text-gray-500 italic max-w-xs truncate">{log.details}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                           <div className="text-right">
                              <p className="text-xs font-bold text-gray-700 dark:text-gray-300">{log.ip}</p>
                              <p className="text-[9px] text-gray-400 dark:text-gray-500 font-medium truncate max-w-[150px]">{log.device}</p>
                           </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic">No se encontraron registros activos.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 no-print">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              className="p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-white/5 transition-all font-bold text-petroleo dark:text-brand-accent"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl font-bold text-sm text-gray-600 dark:text-gray-400">
              Página {currentPage} de {totalPages}
            </div>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              className="p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-white/5 transition-all font-bold text-petroleo dark:text-brand-accent"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      
      {/* Footer Info */}
      <div className="mt-12 text-center opacity-40 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 dark:text-gray-600 no-print">
         SISTEMA DE SEGURIDAD INTERNA - SKILLFOR AUDIT LOGS v1.0
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .bg-gray-50 { background: white !important; }
          .shadow-xl, .shadow-sm, .shadow-2xl { box-shadow: none !important; border: 1px solid #eee !important; }
          table { width: 100% !important; border-collapse: collapse !important; }
          th, td { border-bottom: 1px solid #eee !important; padding: 10px !important; }
          .dark { background: white !important; color: black !important; }
        }
      `}</style>
    </div>
  );
}
