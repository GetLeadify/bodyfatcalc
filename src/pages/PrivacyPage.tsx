import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-10 h-10 text-primary-600 mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Privacy Policy</h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-6">Last Updated: {formattedDate}</p>

            <p>
              At BodyFatCalculator, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide when using our Body Fat Calculator, which may include:
            </p>
            <ul>
              <li>Gender</li>
              <li>Age</li>
              <li>Height and weight measurements</li>
              <li>Body measurements (neck, waist, hip)</li>
            </ul>

            <p>
              We also automatically collect certain information about your device, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring website</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our calculator service</li>
              <li>Improve and optimize our website</li>
              <li>Analyze usage patterns and trends</li>
              <li>Diagnose technical issues</li>
            </ul>

            <p>
              The body measurements and personal information you enter into our calculator are processed in your browser and are not sent to or stored on our servers unless you explicitly opt in to save your results.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>

            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services such as Google Analytics to monitor and analyze the use of our website. These third parties have their own privacy policies addressing how they use such information.
            </p>

            <h2>Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@bodyfatcalculator.xyz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;