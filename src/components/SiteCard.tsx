import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { Site } from '../types/Site';

interface SiteCardProps {
  site: Site;
  onClick: () => void;
}

export const SiteCard: React.FC<SiteCardProps> = ({ site, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={site.image}
          alt={`Screenshot of ${site.name}`}
          className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 lg:top-3 right-2 lg:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 text-gray-700" />
          </div>
        </div>
        {site.featured && (
          <div className="absolute top-2 lg:top-3 left-2 lg:left-3">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-2 lg:px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 lg:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 flex-1 pr-2">
            {site.name}
          </h3>
          <span className="text-xs lg:text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-medium flex-shrink-0">
            {site.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2">
          {site.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-4">
          {site.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-md"
            >
              <Tag className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
              {tag}
            </span>
          ))}
          {site.tags.length > 3 && (
            <span className="text-xs text-gray-400 px-1">
              +{site.tags.length - 3} more
            </span>
          )}
        </div>
        
        <button
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-3 lg:px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] text-sm lg:text-base"
          onClick={onClick}
        >
          Ver detalles
        </button> 
      </div>
    </div>
  );
};