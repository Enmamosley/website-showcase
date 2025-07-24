import React, { useState, useEffect } from 'react';
import { NavigationState, Site } from './types/Site';
import { Catalog } from './components/Catalog';
import { SiteDetail } from './components/SiteDetail';
import { sites } from './data/sites';

function App() {
  const [navigation, setNavigation] = useState<NavigationState>(() => {
    // Inicializar basado en la URL actual
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const siteId = params.get('site');
    
    if (path === '/site' && siteId) {
      const site = sites.find(s => s.id === siteId);
      if (site) {
        return { view: 'detail', selectedSite: site };
      }
    }
    
    return { view: 'catalog' };
  });

  // Manejar navegación del navegador (botones atrás/adelante)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      const siteId = params.get('site');
      
      if (path === '/site' && siteId) {
        const site = sites.find(s => s.id === siteId);
        if (site) {
          setNavigation({ view: 'detail', selectedSite: site });
        } else {
          setNavigation({ view: 'catalog' });
        }
      } else {
        setNavigation({ view: 'catalog' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSiteSelect = (site: Site) => {
    // Actualizar URL y historial
    const url = `/site?site=${site.id}`;
    window.history.pushState({ siteId: site.id }, '', url);
    
    // Scroll hacia arriba al navegar
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setNavigation({
      view: 'detail',
      selectedSite: site
    });
  };

  const handleBackToCatalog = () => {
    // Actualizar URL y historial
    window.history.pushState({}, '', '/');
    
    // Scroll hacia arriba al regresar al catálogo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setNavigation({
      view: 'catalog'
    });
  };

  return (
    <div className="App">
      {navigation.view === 'catalog' ? (
        <Catalog
          sites={sites}
          onSiteSelect={handleSiteSelect}
        />
      ) : (
        navigation.selectedSite && (
          <SiteDetail
            site={navigation.selectedSite}
            onBack={handleBackToCatalog}
          />
        )
      )}
    </div>
  );
}

export default App;