import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Plan } from '../types/Plan';

interface PricingCardProps {
  plan: Plan;
  siteName?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, siteName }) => {
  return (
    <div className={`bg-white border-2 rounded-xl p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow relative ${
      plan.isPopular ? 'border-blue-500' : 'border-gray-200'
    }`}>
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {plan.id === 'individual' && siteName ? siteName : plan.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
        
        {plan.originalPrice && (
          <div className="mb-2">
            <span className="text-sm text-red-500 line-through">ORIGINALLY ${plan.originalPrice}</span>
            {plan.discount && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded ml-2">
                {plan.discount}
              </span>
            )}
          </div>
        )}
        
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
          <span className="text-sm text-gray-500 ml-1">{plan.period}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{plan.access}</p>
        <p className="text-sm font-medium text-gray-700 mb-6">{plan.projects}</p>
        
        <div className="space-y-3 text-sm mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className={`flex items-center gap-2 ${
              !feature.included ? 'text-red-500' : feature.highlighted ? 'text-blue-600' : ''
            }`}>
              {feature.included ? (
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              ) : (
                <span className="w-4 h-4 text-center flex-shrink-0">✕</span>
              )}
              <span className={feature.highlighted ? 'font-medium' : ''}>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
        plan.buttonStyle === 'popular' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-800 text-white hover:bg-gray-900'
      }`}>
        {plan.buttonText}
      </button>
    </div>
  );
};