import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Body Fat Percentage</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding body fat percentage is crucial for assessing health and fitness. Learn what it means and why it matters.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>What is Body Fat Percentage?</h2>
          <p>
            Body fat percentage is the proportion of your total body weight that is composed of fat. It includes both essential fat (necessary for basic physiological functions) and storage fat (adipose tissue that accumulates in the body).
          </p>
          
          <p>
            Unlike BMI (Body Mass Index), which only factors in your height and weight, body fat percentage gives you a more accurate picture of your body composition by differentiating between fat mass and lean mass (muscles, bones, organs, etc.).
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
              <p className="text-primary-700 m-0">
                Two individuals can have the same BMI but vastly different body fat percentages. An athlete with significant muscle mass might be classified as "overweight" by BMI standards while having a healthy body fat percentage.
              </p>
            </div>
          </div>

          <h2>Why Body Fat Percentage Matters</h2>
          <p>
            Body fat percentage is a key indicator of health and fitness for several reasons:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-start gap-3 mb-2">
                <Heart className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold m-0">Health Assessment</h3>
              </div>
              <p className="m-0 text-gray-700">
                Excessive body fat is linked to numerous health conditions including heart disease, type 2 diabetes, hypertension, and certain cancers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-start gap-3 mb-2">
                <Activity className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold m-0">Fitness Tracking</h3>
              </div>
              <p className="m-0 text-gray-700">
                Monitoring changes in body fat percentage provides a more accurate measure of progress than weight alone, especially during fitness programs.
              </p>
            </div>
          </div>

          <h2>Essential Fat vs. Storage Fat</h2>
          <p>
            Body fat can be categorized into two main types:
          </p>

          <ul>
            <li>
              <strong>Essential Fat:</strong> This is the minimum amount of fat necessary for normal physiological functioning. It's found in bone marrow, organs, the central nervous system, and for women, in sex-specific areas like the breasts and pelvis. Essential fat levels are typically 2-5% for men and 10-13% for women.
            </li>
            <li>
              <strong>Storage Fat:</strong> This is the accumulated fat that serves as an energy reserve. It's found under the skin (subcutaneous fat) and around organs (visceral fat). Excessive storage fat is associated with increased health risks.
            </li>
          </ul>

          <h2>Healthy Body Fat Percentage Ranges</h2>
          <p>
            Healthy body fat ranges vary based on sex and age. Here are the generally accepted ranges:
          </p>

          <h3>For Men:</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left border border-gray-200">Category</th>
                  <th className="p-3 text-left border border-gray-200">Body Fat Percentage</th>
                  <th className="p-3 text-left border border-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Essential Fat</td>
                  <td className="p-3 border border-gray-200">2-5%</td>
                  <td className="p-3 border border-gray-200">Minimum level needed for basic health</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Athletic</td>
                  <td className="p-3 border border-gray-200">6-13%</td>
                  <td className="p-3 border border-gray-200">Typical for competitive athletes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Fitness</td>
                  <td className="p-3 border border-gray-200">14-17%</td>
                  <td className="p-3 border border-gray-200">Lean, visible muscle definition</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Acceptable</td>
                  <td className="p-3 border border-gray-200">18-24%</td>
                  <td className="p-3 border border-gray-200">General population average</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Obese</td>
                  <td className="p-3 border border-gray-200">25% or higher</td>
                  <td className="p-3 border border-gray-200">Increased health risk</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>For Women:</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left border border-gray-200">Category</th>
                  <th className="p-3 text-left border border-gray-200">Body Fat Percentage</th>
                  <th className="p-3 text-left border border-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Essential Fat</td>
                  <td className="p-3 border border-gray-200">10-13%</td>
                  <td className="p-3 border border-gray-200">Minimum level needed for basic health</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Athletic</td>
                  <td className="p-3 border border-gray-200">14-20%</td>
                  <td className="p-3 border border-gray-200">Typical for competitive athletes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Fitness</td>
                  <td className="p-3 border border-gray-200">21-24%</td>
                  <td className="p-3 border border-gray-200">Lean, some muscle definition</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Acceptable</td>
                  <td className="p-3 border border-gray-200">25-31%</td>
                  <td className="p-3 border border-gray-200">General population average</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Obese</td>
                  <td className="p-3 border border-gray-200">32% or higher</td>
                  <td className="p-3 border border-gray-200">Increased health risk</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-warning-50 border-l-4 border-warning-500 p-4 my-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-warning-500 flex-shrink-0 mt-1" />
              <p className="text-warning-700 m-0">
                It's important to note that extremely low body fat percentages (below the essential fat levels) can lead to serious health problems, including hormonal imbalances, weakened immunity, and organ damage.
              </p>
            </div>
          </div>

          <h2>Factors That Affect Body Fat Percentage</h2>
          <p>
            Several factors influence your body fat percentage:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" />
              <p className="m-0"><strong>Diet:</strong> Caloric balance and macronutrient composition</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" />
              <p className="m-0"><strong>Physical Activity:</strong> Both cardio and resistance training</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" />
              <p className="m-0"><strong>Genetics:</strong> Fat distribution patterns and metabolic factors</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" />
              <p className="m-0"><strong>Age:</strong> Body fat tends to increase with age</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" />
              <p className="m-0"><strong>Hormones:</strong> Especially during puberty, pregnancy, and menopause</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-1" />
              <p className="m-0"><strong>Sleep:</strong> Poor sleep can affect hormones that regulate appetite</p>
            </div>
          </div>

          <h2>Common Myths About Body Fat</h2>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <XCircle className="w-5 h-5 text-error-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-semibold m-0 mb-1">Myth: Spot reduction works for losing fat in specific areas</h4>
                <p className="m-0 text-gray-700">
                  Fact: You can't target fat loss in specific body parts. Fat reduction occurs throughout the body when in a caloric deficit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <XCircle className="w-5 h-5 text-error-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-semibold m-0 mb-1">Myth: Lower body fat is always healthier</h4>
                <p className="m-0 text-gray-700">
                  Fact: Extremely low body fat (below essential levels) can cause serious health problems, especially for women.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <XCircle className="w-5 h-5 text-error-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-semibold m-0 mb-1">Myth: Body fat measurements are 100% accurate</h4>
                <p className="m-0 text-gray-700">
                  Fact: All measurement methods have some margin of error. Even DEXA scans, considered the gold standard, have a margin of error of 1-2%.
                </p>
              </div>
            </div>
          </div>

          <h2>How to Measure Body Fat Percentage</h2>
          <p>
            Several methods exist for measuring body fat percentage, each with varying levels of accuracy:
          </p>

          <ul>
            <li>
              <strong>DEXA (Dual-Energy X-ray Absorptiometry):</strong> Considered the gold standard, this medical scan provides highly accurate measurements but requires specialized equipment.
            </li>
            <li>
              <strong>Hydrostatic Weighing:</strong> Also very accurate, this method involves being weighed underwater.
            </li>
            <li>
              <strong>Skinfold Calipers:</strong> A trained professional measures fat thickness at multiple sites using calipers.
            </li>
            <li>
              <strong>Navy Method:</strong> Uses measurements of neck, waist, and hip circumferences to estimate body fat.
            </li>
            <li>
              <strong>Bioelectrical Impedance (BIA):</strong> Devices send a small electrical current through the body to measure impedance, which is used to estimate body fat.
            </li>
            <li>
              <strong>BMI-Based Estimation:</strong> Uses formulas based on BMI, age, and sex to estimate body fat percentage.
            </li>
          </ul>

          <div className="text-center my-8">
            <Link to="/calculator" className="inline-block bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-primary-700 transition-colors">
              Try Our Body Fat Calculator
            </Link>
          </div>

          <h2>Tips for Healthy Body Fat Management</h2>
          <p>
            If you're looking to manage your body fat percentage in a healthy way:
          </p>

          <ol>
            <li>
              <strong>Focus on body composition, not just weight:</strong> Aim to build or maintain muscle while losing fat through resistance training.
            </li>
            <li>
              <strong>Adopt a balanced, sustainable diet:</strong> Prioritize protein, fiber, and nutrient-dense whole foods.
            </li>
            <li>
              <strong>Combine cardio and strength training:</strong> Both have unique benefits for body composition.
            </li>
            <li>
              <strong>Stay consistent:</strong> Long-term habits matter more than short-term efforts.
            </li>
            <li>
              <strong>Prioritize sleep and stress management:</strong> Poor sleep and chronic stress can sabotage fat loss efforts.
            </li>
            <li>
              <strong>Set realistic goals:</strong> Healthy fat loss is typically 0.5-1% of body weight per week.
            </li>
            <li>
              <strong>Consider working with professionals:</strong> Dietitians, personal trainers, and healthcare providers can provide personalized guidance.
            </li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            Body fat percentage is a valuable metric for assessing health and fitness, providing insights that weight alone cannot. Understanding your body composition can help you set appropriate goals and monitor progress effectively.
          </p>
          <p>
            Remember that healthy body fat levels vary between individuals, and extremely low levels can be as problematic as excessively high levels. Focus on achieving a body composition that supports your health, energy levels, and quality of life rather than chasing an arbitrary number.
          </p>
          <p>
            Our <Link to="/calculator" className="text-primary-600 hover:text-primary-700">Body Fat Calculator</Link> can help you estimate your current body fat percentage using several proven methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;