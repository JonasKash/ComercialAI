import React from 'react';
import { Star, Zap, Crown, Check } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  icon: 'star' | 'zap' | 'crown';
  gradient: string;
}

interface PlanCardProps {
  plan: Plan;
  isSelected: boolean;
  onSelect: () => void;
  theme: 'light' | 'dark';
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isSelected, onSelect, theme }) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'star':
        return <Star className="w-6 h-6" />;
      case 'zap':
        return <Zap className="w-6 h-6" />;
      case 'crown':
        return <Crown className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  return (
    <div
      className={`
        relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
        ${isSelected
          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg transform scale-105'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md'
        }
      `}
      onClick={onSelect}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Mais Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <div className={`w-12 h-12 ${plan.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
          <div className="text-white">
            {getIcon(plan.icon)}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            R$ {plan.price}
          </span>
          {plan.originalPrice && (
            <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-2">
              R$ {plan.originalPrice}
            </span>
          )}
          <span className="text-lg text-gray-500 dark:text-gray-400 ml-1">/mês</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className={`w-full h-1 rounded-full ${
        isSelected ? 'bg-purple-500' : 'bg-gray-200 dark:bg-gray-700'
      }`} />
    </div>
  );
};

export default PlanCard;
