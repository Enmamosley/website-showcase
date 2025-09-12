import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, MessageCircle, Clock, FileText, Search, ChevronDown, ChevronUp } from 'lucide-react';

interface SupportProps {
  onBack: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const Support: React.FC<SupportProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Todas las categorías' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Técnico' },
    { id: 'billing', name: 'Facturación' },
    { id: 'support', name: 'Soporte' }
  ];

  const faqs: FAQItem[] = [
    {
      question: '¿Qué incluye el hosting gratis de por vida?',
      answer: 'El hosting incluye almacenamiento SSD, certificado SSL gratuito, copias de seguridad automáticas, y soporte 24/7. No hay límites de tráfico para sitios web normales.',
      category: 'general'
    },
    {
      question: '¿Cuánto tiempo toma completar mi sitio web?',
      answer: 'Los tiempos varían según el plan: Plan Básico (72 horas), Plan Pro (48 horas), Plan Pro Plus y Pro Ecommerce (24 horas). Los tiempos se cuentan a partir de la entrega de todo el contenido necesario.',
      category: 'general'
    },
    {
      question: '¿Puedo cambiar el diseño después de que esté listo?',
      answer: 'Sí, incluimos revisiones menores sin costo adicional durante los primeros 30 días. Para cambios mayores, ofrecemos paquetes de actualización.',
      category: 'technical'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos transferencias bancarias, PayPal, tarjetas de crédito y débito. Para planes anuales, ofrecemos descuentos por pago adelantado.',
      category: 'billing'
    },
    {
      question: '¿Ofrecen soporte después de la entrega?',
      answer: 'Sí, todos los planes incluyen soporte técnico gratuito. Plan Básico y Pro (3 meses), Plan Pro Plus y Pro Ecommerce (6 meses). Después de este período, ofrecemos planes de mantenimiento.',
      category: 'support'
    },
    {
      question: '¿Puedo migrar mi dominio existente?',
      answer: 'Absolutamente. Te ayudamos con la migración de tu dominio sin costo adicional. El proceso usualmente toma 24-48 horas.',
      category: 'technical'
    },
    {
      question: '¿Qué pasa si no estoy satisfecho con el resultado?',
      answer: 'Ofrecemos garantía de satisfacción. Si no estás contento con el resultado, trabajaremos contigo hasta que estés satisfecho o te reembolsamos tu dinero.',
      category: 'general'
    },
    {
      question: '¿Incluyen capacitación para administrar mi sitio?',
      answer: 'Sí, incluimos una sesión de capacitación para que aprendas a administrar tu sitio web, actualizar contenido y usar las herramientas disponibles.',
      category: 'support'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al Catálogo
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Centro de Soporte</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Encuentra respuestas a las preguntas más frecuentes o ponte en contacto con nuestro equipo.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Chat en Vivo</h3>
            <p className="text-gray-600 mb-4">Respuesta inmediata vía WhatsApp</p>
            <a
              href="https://wa.me/528122590296?text=Hola,%20necesito%20soporte%20técnico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              Iniciar Chat
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentación</h3>
            <p className="text-gray-600 mb-4">Guías y tutoriales detallados</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Ver Documentos
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Horarios</h3>
            <p className="text-gray-600 mb-2">Lun - Vie: 9AM - 6PM</p>
            <p className="text-gray-600">Sáb: 10AM - 2PM</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h3>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar en preguntas frecuentes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* FAQ List */}
          <div className="divide-y divide-gray-200">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="p-6">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h4 className="text-lg font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h4>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedFAQ === index && (
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-12 text-center">
                <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron resultados
                </h3>
                <p className="text-gray-600">
                  Intenta con otros términos de búsqueda o ponte en contacto con nosotros.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Aún necesitas ayuda?
          </h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está aquí para ayudarte con cualquier pregunta o problema.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/528122590296?text=Hola,%20necesito%20soporte%20técnico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </a>
            <button
              onClick={() => window.location.href = 'mailto:soporte@mosley.mx'}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Enviar Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
