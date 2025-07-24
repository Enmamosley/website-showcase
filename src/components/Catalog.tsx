import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Sparkles } from 'lucide-react';
import { Site } from '../types/Site';
import { SiteCard } from './SiteCard';
import { Footer } from './Footer';

interface CatalogProps {
  sites: Site[];
  onSiteSelect: (site: Site) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ sites, onSiteSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(sites.map(site => site.category))];
    return cats;
  }, [sites]);

  const filteredSites = useMemo(() => {
    return sites.filter(site => {
      const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           site.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           site.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || site.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [sites, searchTerm, selectedCategory]);

  const featuredSites = sites.filter(site => site.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Website Showcase
              </h1>
              <p className="text-sm lg:text-base text-gray-600">
                Discover beautiful, modern websites crafted with attention to detail
              </p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Section */}
      {featuredSites.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500" />
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Featured Websites</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {featuredSites.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                onClick={() => onSiteSelect(site)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-5 lg:h-5" />
            <input
              type="text"
              placeholder="Search websites, categories, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 lg:pl-10 pr-3 lg:pr-4 py-2 lg:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm lg:text-base"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 lg:px-4 py-2 lg:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm lg:text-base"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            All Websites
            <span className="text-base lg:text-lg font-normal text-gray-500 ml-2">
              ({filteredSites.length} results)
            </span>
          </h2>
        </div>

        {filteredSites.length === 0 ? (
          <div className="text-center py-8 lg:py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-8 h-8 lg:w-12 lg:h-12 mx-auto" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">No websites found</h3>
            <p className="text-sm lg:text-base text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        ) : (
          <div className={`grid gap-4 lg:gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredSites.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                onClick={() => onSiteSelect(site)}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};