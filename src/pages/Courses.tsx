import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Edit, Save, Trash2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

type Course = {
  id: string;
  name: string;
  status: 'Concluído' | 'Em andamento';
  progress: number;
};

const Courses = () => {
  const initialCourses: Course[] = [
    { id: '1', name: 'YOLO + OpenCV + Python', status: 'Em andamento', progress: 65 },
    { id: '2', name: 'Front-end (HTML5, CSS3, REACT...)', status: 'Concluído', progress: 100 },
    { id: '3', name: 'Pacote Office + VBA', status: 'Concluído', progress: 100 },
    { id: '4', name: 'SQL, MySQL, SQL Server', status: 'Concluído', progress: 100 },
  ];

  const [courses, setCourses] = useState<Course[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [newCourse, setNewCourse] = useState<Omit<Course, 'id'>>({
    name: '',
    status: 'Em andamento',
    progress: 0,
  });

  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    } else {
      setCourses(initialCourses);
    }
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      localStorage.setItem('courses', JSON.stringify(courses));
    }
  }, [courses]);

  const handleAddCourse = () => {
    if (newCourse.name.trim()) {
      const course = {
        ...newCourse,
        id: Date.now().toString(),
      };
      setCourses([...courses, course]);
      setNewCourse({
        name: '',
        status: 'Em andamento',
        progress: 0,
      });
      setIsModalOpen(false);
    }
  };

  const handleUpdateCourse = () => {
    if (editingCourse && editingCourse.name.trim()) {
      setCourses(
        courses.map((course) =>
          course.id === editingCourse.id ? editingCourse : course
        )
      );
      setEditingCourse(null);
    }
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const getProgressColor = (status: string, progress: number) => {
    if (status === 'Concluído') return 'bg-green-500';
    if (progress > 75) return 'bg-green-500';
    if (progress > 50) return 'bg-yellow-500';
    if (progress > 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="section-container">
          <h2 className="section-title">Meus Cursos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                {editingCourse && editingCourse.id === course.id ? (
                  // Edit mode
                  <div className="p-6">
                    <div className="mb-4">
                      <label className="block text-gray-400 mb-2">Nome do Curso</label>
                      <input
                        type="text"
                        value={editingCourse.name}
                        onChange={(e) =>
                          setEditingCourse({ ...editingCourse, name: e.target.value })
                        }
                        className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-400 mb-2">Status</label>
                      <select
                        value={editingCourse.status}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            status: e.target.value as 'Concluído' | 'Em andamento',
                            progress: e.target.value === 'Concluído' ? 100 : editingCourse.progress,
                          })
                        }
                        className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluído">Concluído</option>
                      </select>
                    </div>
                    {editingCourse.status === 'Em andamento' && (
                      <div className="mb-4">
                        <label className="block text-gray-400 mb-2">
                          Progresso: {editingCourse.progress}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="99"
                          value={editingCourse.progress}
                          onChange={(e) =>
                            setEditingCourse({
                              ...editingCourse,
                              progress: parseInt(e.target.value),
                            })
                          }
                          className="w-full"
                        />
                      </div>
                    )}
                    <div className="flex justify-end space-x-2 mt-4">
                      <button
                        onClick={() => setEditingCourse(null)}
                        className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700 transition-colors flex items-center space-x-1"
                      >
                        <X size={16} />
                        <span>Cancelar</span>
                      </button>
                      <button
                        onClick={handleUpdateCourse}
                        className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-1"
                      >
                        <Save size={16} />
                        <span>Salvar</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  // View mode
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{course.name}</h3>
                      {isAdmin && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setEditingCourse(course)}
                            className="text-gray-400 hover:text-blue-500 transition-colors"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteCourse(course.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          course.status === 'Concluído'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}
                      >
                        {course.status}
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`progress-bar-inner ${getProgressColor(
                          course.status,
                          course.progress
                        )}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="mt-2 text-right text-gray-400 text-sm">
                      {course.progress}% completo
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            
            {/* Add Course Card */}
            {isAdmin && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center cursor-pointer h-64"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex flex-col items-center text-gray-400">
                  <Plus size={40} className="mb-2" />
                  <span>Adicionar Curso</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Add Course Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Adicionar Novo Curso</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Nome do Curso</label>
                <input
                  type="text"
                  value={newCourse.name}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, name: e.target.value })
                  }
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: React Fundamentals"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Status</label>
                <select
                  value={newCourse.status}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      status: e.target.value as 'Concluído' | 'Em andamento',
                      progress: e.target.value === 'Concluído' ? 100 : newCourse.progress,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Em andamento">Em andamento</option>
                  <option value="Concluído">Concluído</option>
                </select>
              </div>
              
              {newCourse.status === 'Em andamento' && (
                <div className="mb-6">
                  <label className="block text-gray-400 mb-2">
                    Progresso: {newCourse.progress}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="99"
                    value={newCourse.progress}
                    onChange={(e) =>
                      setNewCourse({
                        ...newCourse,
                        progress: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>
              )}
              
              <div className="flex justify-end">
                <button
                  onClick={handleAddCourse}
                  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                  disabled={!newCourse.name.trim()}
                >
                  Adicionar Curso
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Courses;