import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Github, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Calculator className="w-6 h-6 text-primary-400" />
              <span className="text-lg font-bold">BodyFatCalculator</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Get accurate body fat percentage calculations using multiple proven methods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-400 hover:text-white transition-colors">Calculator</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Body Fat</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.cdc.gov/healthyweight/assessing/index.html" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  CDC Weight Assessment
                </a>
              </li>
              <li>
                <a href="https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/body-fat/art-20044142" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Mayo Clinic Body Fat Guide
                </a>
              </li>
              <li>
                <a href="https://www.acefitness.org/education-and-resources/lifestyle/blog/112/what-are-the-guidelines-for-percentage-of-body-fat-loss/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  ACE Fitness Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <p>© {currentYear} BodyFatCalculator. All rights reserved.</p>
          <p className="mt-2" id="disclaimer">
            Disclaimer: This calculator provides estimates only and should not be used for medical purposes. 
            Consult with healthcare professionals for accurate health assessments.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;