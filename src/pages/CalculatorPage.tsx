import React, { useState } from 'react';
import CalculatorForm from '../components/CalculatorForm';
import ResultDisplay from '../components/ResultDisplay';
import { Info } from 'lucide-react';

interface CalculationResult {
  bodyFat: number;
  category: string;
  method: string;
}

const CalculatorPage: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (calculationResult: CalculationResult) => {
    setResult(calculationResult);
    
    // Scroll to results if on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }, 100);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Body Fat Percentage Calculator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your body fat percentage using proven methods for accurate results.
          </p>
        </div>

        <div className="bg-primary-50 rounded-lg p-4 mb-8 flex items-start gap-3">
          <div className="text-primary-600 mt-1">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-primary-800 font-medium">How to take measurements</h3>
            <p className="text-primary-700 text-sm mt-1">
              For the most accurate results, take all measurements without clothing or with minimal, form-fitting clothing.
              Use a flexible measuring tape and make sure it's snug but not tight.
            </p>
            <ul className="text-primary-700 text-sm mt-2 list-disc pl-5 space-y-1">
              <li><strong>Neck:</strong> Measure around the middle of your neck, below the larynx (Adam's apple).</li>
              <li><strong>Waist:</strong> Measure at the narrowest part, typically at the level of the navel.</li>
              <li><strong>Hip:</strong> Measure around the widest part of your hips and buttocks.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CalculatorForm onCalculate={handleCalculate} />
          </div>
          
          <div id="results-section">
            {result ? (
              <ResultDisplay 
                bodyFat={result.bodyFat} 
                category={result.category} 
                method={result.method}
              />
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full flex flex-col justify-center items-center text-center">
                <div className="text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Your Results Will Appear Here</h3>
                <p className="text-gray-500">
                  Fill out the calculator form and click "Calculate Body Fat" to see your body fat percentage and personalized insights.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Body Fat Measurements</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Navy Method</h3>
              <p className="text-gray-600">
                The Navy Method uses a formula based on circumference measurements of the neck, waist, and hips (for women). 
                Developed by the U.S. Navy, this method provides a good estimate for most individuals without requiring specialized equipment.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Accuracy:</strong> ±3-4% for most individuals when measurements are taken correctly.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">BMI Method</h3>
              <p className="text-gray-600">
                The BMI Method estimates body fat based on your Body Mass Index, age, and gender. While less accurate than direct 
                measurement methods, it provides a reasonable estimate when other tools aren't available.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Accuracy:</strong> ±5-6% for most individuals, but may be less accurate for athletes, the elderly, or those with unusual muscle mass.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Other Measurement Methods</h3>
              <ul className="text-gray-600 space-y-3">
                <li>
                  <strong>DEXA Scan:</strong> Considered the gold standard for body fat measurement, this medical scan provides highly 
                  accurate results by measuring bone, fat tissue, and lean mass throughout the body.
                </li>
                <li>
                  <strong>Hydrostatic Weighing:</strong> This method involves being weighed underwater and provides very accurate results 
                  based on the principle that fat tissue is less dense than lean tissue.
                </li>
                <li>
                  <strong>Skinfold Calipers:</strong> These measure the thickness of fat at specific body sites. When performed by a trained 
                  professional using the 3, 4, or 7-site protocols, this method can be quite accurate.
                </li>
                <li>
                  <strong>Bioelectrical Impedance (BIA):</strong> Devices like scales that measure body fat work by sending a small electrical 
                  current through the body. Results can vary based on hydration levels and other factors.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;