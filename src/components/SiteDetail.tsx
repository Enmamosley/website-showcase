import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Globe, CheckCircle, Monitor, Tablet, Smartphone, Grid, List } from 'lucide-react';
import { Site } from '../types/Site';
import { PricingCard } from './PricingCard';
import { SiteDetailSidebar } from './SiteDetailSidebar';
import { pricingPlans } from '../data/plans';
import { Footer } from './Footer';

interface SiteDetailProps {
  site: Site;
  onBack: () => void;
}

export const SiteDetail: React.FC<SiteDetailProps> = ({ site, onBack }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Asegurar que la página inicie desde arriba
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-4 mb-2">
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Volver al listado
                </button>
                <div className="h-6 w-px bg-gray-300" />
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl lg:text-3xl font-bold text-gray-900">Splanding</span>
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 ml-12">
                Viendo detalles de <span className="font-semibold">{site.name}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button className="p-2 rounded-md text-gray-400 cursor-not-allowed">
                  <Grid className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
                <button className="p-2 rounded-md text-gray-400 cursor-not-allowed">
                  <List className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="section overflow-hidden pt-6 md:pt-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Left Column - Preview and Description */}
            <div className="xl:col-span-2">
              
              {/* Live Preview */}
              <div className="mb-6 lg:mb-7">

                <div className="browser-preview">
                  <div className="browser-preview-header bg-gray-100 px-3 md:px-4 py-2 md:py-3 border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center justify-between text-sm md:text-base">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                        </div>
                        <span className="text-xs md:text-sm text-gray-600 ml-2 md:ml-4 hidden sm:inline">La vista previa está cargada</span>
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
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                        <div className="text-gray-500 transition-opacity duration-300">
                          Loading {viewMode} preview...
                        </div>
                      </div>
                    )}
                    <div className={`w-full ${
                      viewMode === 'desktop' ? 'h-[600px]' : 
                      viewMode === 'tablet' ? 'h-[538px] flex justify-center' : 
                      'h-[896px] flex justify-center'
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
              <div className="mt-6 lg:mt-8 py-4 lg:py-5 pr-0 lg:pr-8">
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
                      <li key={index} className="flex items-start gap-3">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Elige el plan perfecto para ti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra el paquete adecuado que se ajuste a tus objetivos y presupuesto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
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
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600">
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