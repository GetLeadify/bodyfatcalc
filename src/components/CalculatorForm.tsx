import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

type Gender = 'male' | 'female';
type Method = 'navy' | 'bmi';

interface FormData {
  gender: Gender;
  age: number;
  height: number;
  weight: number;
  neck: number;
  waist: number;
  hip: number;
}

interface CalculatorFormProps {
  onCalculate: (result: {bodyFat: number; category: string; method: string}) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<FormData>({
    gender: 'male',
    age: 30,
    height: 175,
    weight: 75,
    neck: 38,
    waist: 85,
    hip: 90
  });
  
  const [method, setMethod] = useState<Method>('navy');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'gender') {
      setFormData(prev => ({ ...prev, [name]: value as Gender }));
    } else {
      setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    }
  };

  const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMethod(e.target.value as Method);
  };

  const validateForm = () => {
    if (formData.age < 18 || formData.age > 100) {
      setError('Age must be between 18 and 100');
      return false;
    }
    
    if (formData.height < 100 || formData.height > 250) {
      setError('Height must be between 100 and 250 cm');
      return false;
    }
    
    if (formData.weight < 30 || formData.weight > 300) {
      setError('Weight must be between 30 and 300 kg');
      return false;
    }
    
    if (method === 'navy') {
      if (formData.neck < 20 || formData.neck > 60) {
        setError('Neck measurement must be between 20 and 60 cm');
        return false;
      }
      
      if (formData.waist < 50 || formData.waist > 200) {
        setError('Waist measurement must be between 50 and 200 cm');
        return false;
      }
      
      if (formData.gender === 'female' && (formData.hip < 50 || formData.hip > 200)) {
        setError('Hip measurement must be between 50 and 200 cm');
        return false;
      }
    }
    
    setError('');
    return true;
  };

  const calculateNavyMethod = () => {
    const { gender, height, neck, waist, hip } = formData;
    let bodyFat = 0;
    
    if (gender === 'male') {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }
    
    return Math.max(Math.min(bodyFat, 60), 2);
  };

  const calculateBMIMethod = () => {
    const { gender, age, height, weight } = formData;
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let bodyFat = 0;
    
    if (gender === 'male') {
      bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
      bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
    }
    
    return Math.max(Math.min(bodyFat, 60), 2);
  };

  const getCategory = (bodyFat: number) => {
    const { gender } = formData;
    
    if (gender === 'male') {
      if (bodyFat < 6) return 'Essential Fat';
      if (bodyFat < 14) return 'Athletic';
      if (bodyFat < 18) return 'Fitness';
      if (bodyFat < 25) return 'Acceptable';
      return 'Obese';
    } else {
      if (bodyFat < 14) return 'Essential Fat';
      if (bodyFat < 21) return 'Athletic';
      if (bodyFat < 25) return 'Fitness';
      if (bodyFat < 32) return 'Acceptable';
      return 'Obese';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    setTimeout(() => {
      try {
        let bodyFat = 0;
        const methodName = method === 'navy' ? 'Navy Method' : 'BMI Method';
        
        if (method === 'navy') {
          bodyFat = calculateNavyMethod();
        } else {
          bodyFat = calculateBMIMethod();
        }
        
        const category = getCategory(bodyFat);
        
        onCalculate({
          bodyFat: parseFloat(bodyFat.toFixed(1)),
          category,
          method: methodName
        });
      } catch (err) {
        setError('Error calculating body fat percentage. Please check your measurements.');
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Body Fat Calculator</h2>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-error-50 text-error-700 rounded-lg border border-error-200 text-sm md:text-base">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <fieldset className="border rounded-lg p-4 border-gray-200">
            <legend className="text-sm font-medium text-gray-700 px-2">Calculation Method</legend>
            <div className="flex flex-wrap gap-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio text-primary-600 w-4 h-4"
                  name="calculationMethod"
                  value="navy"
                  checked={method === 'navy'}
                  onChange={handleMethodChange}
                />
                <span className="ml-2 text-gray-700 text-sm md:text-base">Navy Method</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio text-primary-600 w-4 h-4"
                  name="calculationMethod"
                  value="bmi"
                  checked={method === 'bmi'}
                  onChange={handleMethodChange}
                />
                <span className="ml-2 text-gray-700 text-sm md:text-base">BMI Method</span>
              </label>
            </div>
          </fieldset>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="block w-full px-3 py-2 text-base md:text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age (years)</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="18"
              max="100"
              className="block w-full px-3 py-2 text-base md:text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              min="100"
              max="250"
              className="block w-full px-3 py-2 text-base md:text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              min="30"
              max="300"
              className="block w-full px-3 py-2 text-base md:text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        </div>
        
        {method === 'navy' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <label htmlFor="neck" className="block text-sm font-medium text-gray-700 mb-1">Neck (cm)</label>
              <input
                type="number"
                id="neck"
                name="neck"
                value={formData.neck}
                onChange={handleChange}
                min="20"
                max="60"
                className="block w-full px-3 py-2 text-base md:text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="waist" className="block text-sm font-medium text-gray-700 mb-1">Waist (cm)</label>
              <input
                type="number"
                id="waist"
                name="waist"
                value={formData.waist}
                onChange={handleChange}
                min="50"
                max="200"
                className="block w-full px-3 py-2 text-base md:text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            
            {formData.gender === 'female' && (
              <div>
                <label htmlFor="hip" className="block text-sm font-medium text-gray-700 mb-1">Hip (cm)</label>
                <input
                  type="number"
                  id="hip"
                  name="hip"
                  value={formData.hip}
                  onChange={handleChange}
                  min="50"
                  max="200"
                  className="block w-full px-3 py-2 text-base md:text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            )}
          </div>
        )}
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 px-4 text-lg rounded-lg font-medium hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Calculating...' : 'Calculate Body Fat'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;