import React from 'react';
import { Activity, Info, Zap } from 'lucide-react';

interface ResultDisplayProps {
  bodyFat: number;
  category: string;
  method: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ bodyFat, category, method }) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'Essential Fat':
        return 'text-warning-600';
      case 'Athletic':
        return 'text-success-600';
      case 'Fitness':
        return 'text-success-700';
      case 'Acceptable':
        return 'text-secondary-600';
      case 'Obese':
        return 'text-error-600';
      default:
        return 'text-gray-700';
    }
  };

  const getFitnessAdvice = () => {
    switch (category) {
      case 'Essential Fat':
        return 'This is the minimum level of body fat needed for basic physiological functions. For most people, it\'s not advisable to maintain this level long-term. Consider adding some lean mass through proper nutrition and resistance training.';
      case 'Athletic':
        return 'You have a body fat percentage typical of athletes. This level requires dedicated training and nutrition. Focus on maintaining this through balanced macronutrients and regular exercise.';
      case 'Fitness':
        return 'Your body fat is in the fitness range, indicating good exercise habits and nutrition. Continue with your balanced exercise routine combining strength training and cardiovascular activities.';
      case 'Acceptable':
        return 'Your body fat is within a generally healthy range. For improved fitness, consider incorporating more regular exercise (3-5 times weekly) combining cardio and strength training, along with a slight caloric deficit if fat loss is desired.';
      case 'Obese':
        return 'This body fat level increases health risks. Focus on creating sustainable lifestyle changes: regular physical activity (start with walking), a moderate caloric deficit, increased protein intake, and plenty of fruits and vegetables. Consider consulting with healthcare professionals.';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-8 animate-fade-in">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Your Results</h3>
      
      <div className="mb-6 md:mb-8">
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-500 mb-1">Body Fat Percentage ({method})</p>
          <div className="flex items-center justify-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600">{bodyFat}%</div>
          </div>
          <p className={`text-lg md:text-xl font-medium mt-2 ${getCategoryColor()}`}>{category}</p>
        </div>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-primary-100 text-primary-700 p-2 rounded-md">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-medium text-gray-800 mb-1">What This Means</h4>
            <p className="text-sm md:text-base text-gray-600">
              Your body fat percentage of {bodyFat}% places you in the <span className={`font-medium ${getCategoryColor()}`}>{category}</span> category. 
              {category === 'Acceptable' ? ' This is within the healthy range for most individuals.' : 
                category === 'Obese' ? ' This is above the recommended range for optimal health.' : 
                category === 'Essential Fat' ? ' This is at the lower end of the healthy range.' : 
                ' This is associated with a physically active lifestyle and good fitness.'}
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-primary-100 text-primary-700 p-2 rounded-md">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-medium text-gray-800 mb-1">Fitness Advice</h4>
            <p className="text-sm md:text-base text-gray-600">
              {getFitnessAdvice()}
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-primary-100 text-primary-700 p-2 rounded-md">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-medium text-gray-800 mb-1">Calculation Method</h4>
            <p className="text-sm md:text-base text-gray-600">
              Your result was calculated using the {method}, which {
                method === 'Navy Method' 
                  ? 'estimates body fat based on circumference measurements of specific body parts. This method provides a good estimate for most individuals.'
                  : 'uses your BMI, age, and gender to estimate body fat percentage. While not as accurate as direct measurement methods, it provides a reasonable estimate.'
              }
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200 text-xs md:text-sm text-gray-500">
        <p>
          <strong>Note:</strong> This calculator provides an estimate only. For the most accurate body fat measurement, 
          consider professional methods like DEXA scans or hydrostatic weighing.
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;