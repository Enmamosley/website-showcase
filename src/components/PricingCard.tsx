import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Plan } from '../types/Plan';

interface PricingCardProps {
  plan: Plan;
  siteName?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, siteName }) => {
  return (
    <div className={`bg-white rounded-2xl p-4 sm:p-6 h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 relative border ${
      plan.isPopular ? 'border-blue-200 sm:scale-105 shadow-lg' : 'border-gray-100'
    }`}>
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full shadow-sm">
            OPCIÓN POPULAR
          </span>
        </div>
      )}
      
      {/* Header */}
      <div className="mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          {plan.id === 'basico' && siteName ? siteName : plan.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{plan.description}</p>
      </div>

      {/* Pricing */}
      <div className="mb-3 sm:mb-4">
        {plan.originalPrice && (
          <div className="mb-1">
            <span className="text-xs sm:text-sm text-orange-500 font-medium">ANTERIORMENTE ${plan.originalPrice}</span>
          </div>
        )}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl sm:text-4xl font-bold text-gray-900">${plan.price}</span>
          {plan.discount && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              {plan.discount}
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-500">{plan.period}</p>
        <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-relaxed">{plan.access}</p>
      </div>
      
      {/* Features - flex-grow para empujar el botón hacia abajo */}
      <div className="flex-grow mb-3 sm:mb-4">
        <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-3">
              {feature.included ? (
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <span className={`leading-relaxed ${
                feature.included ? 'text-gray-700' : 'text-gray-400'
              } ${feature.highlighted ? 'font-medium' : ''}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button - siempre en la parte inferior */}
      <div>
        <a 
          href={plan.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-center inline-block transition-all duration-200 text-sm sm:text-base ${
            plan.buttonStyle === 'popular' 
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md' 
              : 'bg-gray-800 text-white hover:bg-gray-900'
          }`}
        >
          {plan.buttonText}
        </a>
      </div>
    </div>
  );
};