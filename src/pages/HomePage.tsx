import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Info, Activity, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The Most Accurate Body Fat Calculator
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Calculate your body fat percentage using multiple proven methods
            </p>
            <Link
              to="/calculator"
              className="inline-block bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-primary-50 transition-all transform hover:scale-105"
            >
              Calculate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Use Our Body Fat Calculator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 text-primary-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Multiple Methods</h3>
              <p className="text-gray-600">
                Get accurate results using different calculation methods including Navy, BMI, and 3/4/7-site Jackson-Pollock.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 text-primary-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Detailed Insights</h3>
              <p className="text-gray-600">
                Learn what your body fat percentage means for your health and fitness goals with personalized recommendations.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 text-primary-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Progress Tracking</h3>
              <p className="text-gray-600">
                Track your body composition changes over time to stay motivated and see how your efforts are paying off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Understanding Body Fat Percentage</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4 text-gray-700">
                Body fat percentage is a key metric that reveals the proportion of your body weight that consists of fat. Unlike BMI (Body Mass Index), which only considers height and weight, body fat percentage provides a more accurate representation of your body composition.
              </p>
              
              <p className="mb-4 text-gray-700">
                Maintaining a healthy body fat percentage is crucial for overall health and wellbeing. Excessively high body fat levels are associated with increased risks of heart disease, type 2 diabetes, and other metabolic conditions. Conversely, having too little body fat can also lead to health issues such as hormonal imbalances and weakened immune function.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Different Body Fat Measurement Methods</h3>
              
              <p className="mb-4 text-gray-700">
                There are several ways to estimate body fat percentage, each with varying levels of accuracy:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">
                  <strong>Navy Method:</strong> Uses measurements of neck, waist, and hip circumferences along with height to estimate body fat. It's accurate for most people and easy to perform at home.
                </li>
                <li className="mb-2">
                  <strong>Skinfold Methods (Jackson-Pollock):</strong> Measures the thickness of skin folds at various sites using calipers. The 3-site, 4-site, and 7-site variations offer increasing accuracy.
                </li>
                <li className="mb-2">
                  <strong>BMI-Based Estimation:</strong> While less accurate, this method can provide a general estimate based on your Body Mass Index, age, and sex.
                </li>
                <li className="mb-2">
                  <strong>DEXA Scans:</strong> Considered the gold standard, these medical scans provide highly accurate body composition analysis but require specialized equipment.
                </li>
              </ul>

              <p className="mb-6 text-gray-700">
                Our calculator provides estimates using the most practical methods that can be performed at home: the Navy Method and BMI-based estimation. For the most accurate results, consider using multiple methods and averaging the results.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Healthy Body Fat Percentage Ranges</h3>

              <p className="mb-4 text-gray-700">
                Healthy body fat percentages vary based on age, sex, and fitness goals:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-left">Category</th>
                      <th className="py-2 px-4 border-b text-left">Men</th>
                      <th className="py-2 px-4 border-b text-left">Women</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Essential Fat</td>
                      <td className="py-2 px-4 border-b">2-5%</td>
                      <td className="py-2 px-4 border-b">10-13%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Athletes</td>
                      <td className="py-2 px-4 border-b">6-13%</td>
                      <td className="py-2 px-4 border-b">14-20%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Fitness</td>
                      <td className="py-2 px-4 border-b">14-17%</td>
                      <td className="py-2 px-4 border-b">21-24%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Acceptable</td>
                      <td className="py-2 px-4 border-b">18-24%</td>
                      <td className="py-2 px-4 border-b">25-31%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Obese</td>
                      <td className="py-2 px-4 border-b">25%+</td>
                      <td className="py-2 px-4 border-b">32%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/calculator"
                className="inline-block bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-primary-700 transition-colors"
              >
                Calculate Your Body Fat Percentage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary-300" />
            <h2 className="text-3xl font-bold mb-6">Take Control of Your Health Today</h2>
            <p className="text-xl mb-8 text-primary-100">
              Understanding your body composition is the first step toward achieving your health and fitness goals.
            </p>
            <Link
              to="/calculator"
              className="inline-block bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-primary-50 transition-all transform hover:scale-105"
            >
              Try Our Calculator Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;