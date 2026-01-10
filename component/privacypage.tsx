import React from 'react';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-15 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2" style={{ borderColor: '#dcdcdc' }}>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="rounded-full p-4" style={{ backgroundColor: '#d4ad5f20' }}>
              <Shield className="w-12 h-12" style={{ color: '#d4ad5f' }} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 9, 2026</p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        <div className="border-t mb-8" style={{ borderColor: '#dcdcdc' }}></div>

        {/* Section 1 */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-3">
            <FileText className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#d4ad5f' }} />
            <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
          </div>
          <div className="ml-9">
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Personal identification information (name, email address, phone number)</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Payment and billing information</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Communication preferences and feedback</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Usage data and analytics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-3">
            <Eye className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#d4ad5f' }} />
            <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
          </div>
          <div className="ml-9">
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Provide, maintain, and improve our services</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Process transactions and send related information</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Send you technical notices and support messages</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Respond to your comments and questions</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Protect against fraudulent or illegal activity</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-3">
            <Lock className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#d4ad5f' }} />
            <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
          </div>
          <div className="ml-9">
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure, and we cannot guarantee 
              absolute security.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-3">
            <FileText className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#d4ad5f' }} />
            <h2 className="text-2xl font-semibold text-gray-800">Your Rights</h2>
          </div>
          <div className="ml-9">
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Access and receive a copy of your personal data</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Request correction of inaccurate data</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Request deletion of your personal data</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Object to or restrict processing of your data</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#d4ad5f' }}>•</span>
                <span>Withdraw consent at any time</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-3">
            <FileText className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#d4ad5f' }} />
            <h2 className="text-2xl font-semibold text-gray-800">Cookies and Tracking</h2>
          </div>
          <div className="ml-9">
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <div className="flex items-start gap-3 mb-3">
            <FileText className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#d4ad5f' }} />
            <h2 className="text-2xl font-semibold text-gray-800">Changes to This Policy</h2>
          </div>
          <div className="ml-9">
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: '#dcdcdc' }}>
          {/* Contact Section */}
          <div className="rounded-xl p-6" style={{ backgroundColor: '#d4ad5f10' }}>
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-6 h-6" style={{ color: '#d4ad5f' }} />
              <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@example.com" className="font-semibold hover:underline" style={{ color: '#d4ad5f' }}>
                privacy@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a href='/'
              className="bg-gradient-to-t from-[var(--primary-gold)] to-[var(--secondary-silver)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:opacity-95 group relative overflow-hidden"
            >
              {/* <span className="relative z-10 flex items-center justify-center gap-2"> */}
                {/* <UserCircle className="w-5 h-5" /> */}
                Back To Home
              {/* </span> */}
            </a>
        </div>
      </div>
    </div>
  );
}
