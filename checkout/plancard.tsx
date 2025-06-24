import { CheckCircle } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  popular: boolean;
  features: string[];
  icon: any;
}

interface PlanCardProps {
  plan: Plan;
  isSelected: boolean;
  onSelect: () => void;
}

const PlanCard = ({ plan, isSelected, onSelect }: PlanCardProps) => {
  const IconComponent = plan.icon;

  return (
    <div
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-300 dark:hover:border-purple-600'
      }`}
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
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
          <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
        <div className="text-3xl font-bold text-gray-900 dark:text-white">
          R$ {plan.price}
          <span className="text-lg text-gray-500 dark:text-gray-400">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
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
export default PlanCard;