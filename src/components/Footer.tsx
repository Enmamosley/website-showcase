import React from 'react';
import { Globe, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left side - Brand */}
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">Website Showcase</span>
            </div>
            <p className="text-sm text-gray-600">
              Discover beautiful, modern websites crafted with attention to detail
            </p>
          </div>

          {/* Right side - Links and Credits */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                Documentation
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>© {currentYear}</span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500">
            <div className="mb-2 sm:mb-0">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};