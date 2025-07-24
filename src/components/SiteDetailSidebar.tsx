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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-900 mb-3">
            {site.name}
          </h1>
        </div>

        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>One-time Payment</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Instant Access</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Commercial License</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Free Updates</span>
          </li>
        </ul>

        <div className="space-y-3">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white border border-blue-600 text-blue-600 font-medium py-2.5 px-4 rounded-md hover:bg-blue-50 transition-colors text-center block text-sm"
          >
            Live Preview
          </a>
          <button
            onClick={() => setShowContactForm(true)}
            className="w-full bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            ¡Lo quiero!
          </button>
        </div>
      </div>

      {/* Theme Information */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 text-center py-4 border-b border-gray-200">
          Información del sitio
        </h4>
        
        <div className="p-4">
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Updated:</span>
              <span className="font-medium text-gray-900">{site.updated}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Released:</span>
              <span className="font-medium text-gray-900">{site.released}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Product Type:</span>
              <span className="font-medium text-gray-900 uppercase">{site.category}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Astro Version:</span>
              <span className="font-medium text-gray-900">{site.version}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Theme Version:</span>
              <span className="font-medium text-gray-900">{site.themeVersion}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Changelog:</span>
              <button 
                onClick={() => setShowChangelog(!showChangelog)}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-medium hover:bg-blue-200 transition-colors"
              >
                Show →
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <a
              href={site.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors inline-block"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {site.testimonial && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <blockquote className="text-sm text-gray-600 italic mb-4 leading-relaxed">
            "{site.testimonial.quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            <img
              src={site.testimonial.avatar}
              alt={site.testimonial.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-gray-900 text-sm flex items-center gap-1">
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
              <div className="text-xs text-gray-500">{site.testimonial.role}</div>
            </div>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h4 className="text-base font-semibold text-gray-900 mb-3">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {site.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors"
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
                      Full Name *
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
                      Email Address *
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
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="similar">Similar to {site.name}</option>
                      <option value="custom">Custom Design</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="maintenance">Website Maintenance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
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
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};