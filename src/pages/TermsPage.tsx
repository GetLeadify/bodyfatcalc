import React from 'react';
import { FileText } from 'lucide-react';

const TermsPage: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <FileText className="w-10 h-10 text-primary-600 mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Terms of Service</h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-6">Last Updated: {formattedDate}</p>

            <p>
              Welcome to BodyFatCalculator. Please read these Terms of Service ("Terms") carefully before using our website.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              BodyFatCalculator provides an online tool to estimate body fat percentage using various calculation methods. The service is provided "as is" and "as available" without any warranties.
            </p>

            <h2>3. Medical Disclaimer</h2>
            <p>
              The information provided by BodyFatCalculator is for general informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>

            <p>
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>

            <p>
              Body fat calculations are estimates and may not be accurate for all individuals. Results should be used as general guidance only and not for medical diagnosis or treatment decisions.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>
              When using our calculator, you agree to provide accurate information to the best of your knowledge. We are not responsible for inaccurate results due to incorrect user input.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistributing, use, or publication by you of any such matters or any part of the website is strictly prohibited without our express prior written permission.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall BodyFatCalculator, its operators, or any third parties mentioned on the website be liable for any damages whatsoever (including, without limitation, incidental and consequential damages, lost profits, or damages resulting from lost data or business interruption) resulting from the use or inability to use the website or the material, whether based on warranty, contract, tort, or any other legal theory, and whether or not we are advised of the possibility of such damages.
            </p>

            <h2>7. Links to Other Websites</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by BodyFatCalculator. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>

            <h2>8. Modifications to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes. Your continued use of the website following the posting of any changes to these Terms constitutes acceptance of those changes.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> terms@bodyfatcalculator.xyz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;