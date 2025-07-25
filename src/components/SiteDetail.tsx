import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Globe, CheckCircle, Monitor, Tablet, Smartphone, ChevronDown } from 'lucide-react';
import { Site } from '../types/Site';
import { PricingCard } from './PricingCard';
import { SiteDetailSidebar } from './SiteDetailSidebar';
import { pricingPlans } from '../data/plans';
import { sites } from '../data/sites';
import { Footer } from './Footer';

interface SiteDetailProps {
  site: Site;
  onBack: () => void;
  onSiteSelect: (site: Site) => void;
}

export const SiteDetail: React.FC<SiteDetailProps> = ({ site, onBack, onSiteSelect }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showSiteDropdown, setShowSiteDropdown] = useState(false);

  // Asegurar que la página inicie desde arriba
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSiteChange = (newSite: Site) => {
    setShowSiteDropdown(false);
    onSiteSelect(newSite);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 lg:py-6">
          <div className="mb-4">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Splanding</span>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                Descubra sitios web hermosos y modernos diseñados con atención al detalle.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                Volver al listado
              </button>
              <div className="hidden sm:block h-6 w-px bg-gray-300" />
              <span className="text-xs sm:text-sm lg:text-base text-gray-600">
                Viendo: <span className="font-semibold">{site.name}</span>
              </span>
              
              {/* Site Switcher Dropdown */}
              <div className="relative sm:ml-4">
                <button
                  onClick={() => setShowSiteDropdown(!showSiteDropdown)}
                  className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm w-full sm:w-auto justify-between sm:justify-start"
                >
                  <span className="text-gray-700">Cambiar sitio</span>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-500 transition-transform ${showSiteDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showSiteDropdown && (
                  <div className="absolute top-full left-0 right-0 sm:left-0 sm:right-auto mt-2 w-full sm:w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 sm:max-h-80 overflow-y-auto">
                    <div className="p-2">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide px-2 sm:px-3 py-2 mb-1">
                        Seleccionar sitio
                      </div>
                      {sites.map((siteOption) => (
                        <button
                          key={siteOption.id}
                          onClick={() => handleSiteChange(siteOption)}
                          className={`w-full text-left px-2 sm:px-3 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2 sm:gap-3 ${
                            siteOption.id === site.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                          }`}
                        >
                          <img
                            src={siteOption.image}
                            alt={siteOption.name}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-xs sm:text-sm truncate">
                              {siteOption.name}
                            </div>
                            <div className="text-xs text-gray-500 truncate hidden sm:block">
                              {siteOption.category}
                            </div>
                          </div>
                          {siteOption.id === site.id && (
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="section overflow-hidden pt-6 md:pt-12">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Left Column - Preview and Description */}
            <div className="xl:col-span-2">
              
              {/* Live Preview */}
              <div className="mb-6 lg:mb-7">

                <div className="browser-preview">
                  <div className="browser-preview-header bg-gray-100 px-2 sm:px-3 md:px-4 py-2 md:py-3 border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center justify-between text-sm md:text-base">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                        </div>
                        <span className="text-xs md:text-sm text-gray-600 ml-2 md:ml-4 hidden md:inline">La vista previa está cargada</span>
                      </div>
                      
                      {/* Preview Controls in Header */}
                      <div className="hidden md:flex items-center justify-end flex-1">
                        <div className="flex items-center bg-white rounded-md p-0.5 shadow-sm border border-gray-200 mr-3">
                          <button
                            onClick={() => setViewMode('desktop')}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                              viewMode === 'desktop' 
                                ? 'bg-blue-600 text-white shadow-sm' 
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                            title="Desktop View"
                          >
                            <Monitor className="w-3 h-3" />
                            <span className="hidden lg:inline">Desktop</span>
                          </button>
                          <button
                            onClick={() => setViewMode('tablet')}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                              viewMode === 'tablet' 
                                ? 'bg-blue-600 text-white shadow-sm' 
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                            title="Tablet View"
                          >
                            <Tablet className="w-3 h-3" />
                            <span className="hidden lg:inline">Tablet</span>
                          </button>
                          <button
                            onClick={() => setViewMode('mobile')}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                              viewMode === 'mobile' 
                                ? 'bg-blue-600 text-white shadow-sm' 
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                            title="Mobile View"
                          >
                            <Smartphone className="w-3 h-3" />
                            <span className="hidden lg:inline">Mobile</span>
                          </button>
                        </div>
                      </div>
                      
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs md:text-sm text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="browser-preview-body relative bg-white rounded-b-lg overflow-hidden">
                    {!iframeLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 text-sm">
                        <div className="text-gray-500 transition-opacity duration-300">
                          Loading {viewMode} preview...
                        </div>
                      </div>
                    )}
                    <div className={`w-full ${
                      viewMode === 'desktop' ? 'h-[600px]' : 
                      viewMode === 'tablet' ? 'h-[400px] sm:h-[580px] flex justify-center items-center bg-gray-100 py-4 sm:py-8' : 
                      'h-[400px] sm:h-[580px] flex justify-center items-center bg-gray-100 py-4 sm:py-8'
                    }`}>
                      <iframe
                        id={`${site.name.toLowerCase().replace(/\s+/g, '-')}-preview`}
                        src={site.url}
                        className={`browser-preview-frame ${viewMode}`}
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                        loading="lazy"
                        onLoad={() => setIframeLoaded(true)}
                        title={`${viewMode} preview of ${site.name}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme Description */}
              <div className="mt-4 sm:mt-6 lg:mt-8 py-4 lg:py-5 pr-0 lg:pr-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3">
                  Descripción del sitio
                </h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 lg:mb-6">
                    {site.description}
                  </p>
                  
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">Características principales</h4>
                  <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-600">
                    {site.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="xl:col-span-1">
              <SiteDetailSidebar site={site} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section - Independent Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Elige el plan perfecto para ti
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra el paquete adecuado que se ajuste a tus objetivos y presupuesto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch mb-8 sm:mb-12">
            {pricingPlans.map((plan) => (
              <PricingCard 
                key={plan.id} 
                plan={plan} 
                siteName={plan.id === 'individual' ? site.name : undefined}
              />
            ))}
          </div>

          {/* Security Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 sm:mb-6">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm sm:text-base text-gray-600 text-center">
                Pagos 100% seguros y protegidos con tecnología de - <strong>MercadoPago</strong>
              </span>
            </div>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};