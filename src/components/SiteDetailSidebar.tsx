import React, { useState } from 'react';
import { ExternalLink, Tag, CheckCircle } from 'lucide-react';
import { Site } from '../types/Site';

interface SiteDetailSidebarProps {
  site: Site;
}

export const SiteDetailSidebar: React.FC<SiteDetailSidebarProps> = ({ site }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'similar'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowContactForm(false);
        setFormData({ name: '', email: '', message: '', projectType: 'similar' });
      }, 2000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Purchase Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {site.name}
          </h1>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Pago único</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Listo en 48 horas</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Hosting gratis de por vida</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Actualizaciones gratuitas</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white border-2 border-blue-600 text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors text-center block"
          >
            Ver el sitio
          </a>
          <button
            onClick={() => setShowContactForm(true)}
            className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ¡Lo quiero!
          </button>
        </div>
      </div>

      {/* Theme Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <h4 className="text-xl font-semibold text-gray-900 text-center py-6 border-b border-gray-200">
          Información del sitio
        </h4>
        
        <div className="p-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between py-1">
              <span className="text-gray-600">Actualizado:</span>
              <span className="font-medium text-gray-900">{site.updated}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-gray-600">Lanzado:</span>
              <span className="font-medium text-gray-900">{site.released}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-gray-600">Tipo de producto:</span>
              <span className="font-medium text-gray-900 uppercase">{site.category}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-gray-600">Versión de Astro:</span>
              <span className="font-medium text-gray-900">{site.version}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-gray-600">Google PageSpeed:</span>
              <span className="font-medium text-gray-900">{site.themeVersion}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-gray-600">Changelog:</span>
              <button 
                onClick={() => setShowChangelog(!showChangelog)}
                className="bg-blue-100 text-blue-600 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                Mostrar →
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <a
              href={site.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 border-2 border-blue-600 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block"
            >
              Ver Documentación
            </a>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {site.testimonial && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <blockquote className="text-gray-600 italic mb-6 leading-relaxed">
            "{site.testimonial.quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            <img
              src={site.testimonial.avatar}
              alt={site.testimonial.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-gray-900 flex items-center gap-1">
                {site.testimonial.author}
                {site.testimonial.link && (
                  <a
                    href={site.testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <div className="text-sm text-gray-500">{site.testimonial.role}</div>
            </div>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {site.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Changelog Modal */}
      {showChangelog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Changelog</h3>
                <button
                  onClick={() => setShowChangelog(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                {site.changelog.map((entry, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{entry.version}</span>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {entry.changes.map((change, changeIndex) => (
                        <li key={changeIndex} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Custom Design</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección de Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Proyecto
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="similar">Similar a {site.name}</option>
                      <option value="custom">Diseño Personalizado</option>
                      <option value="redesign">Rediseño de Sitio Web</option>
                      <option value="maintenance">Mantenimiento de Sitio Web</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detalles del Proyecto
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mensaje Enviado!</h3>
                <p className="text-gray-600">Nos pondremos en contacto contigo en 24 horas.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};