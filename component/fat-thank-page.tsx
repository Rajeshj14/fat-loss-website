  import React from 'react';
  import { CheckCircle, Home, Mail } from 'lucide-react';

  export default function ThankYouPage() {
    return (
      <div className="min-h-screen bg-gray-50 flex mt-7 max-sm:mt-16 items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border-2" style={{ borderColor: '#dcdcdc' }}>
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="rounded-full p-4" style={{ backgroundColor: '#161f2f' }}>
              <CheckCircle className="w-16 h-16" style={{ color: '#ba736b' }} />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Thank You!
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            We've received your submission successfully. We'll get back to you shortly.
          </p>

          {/* Divider */}
          <div className="border-t my-8" style={{ borderColor: '#161f2f' }}></div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a href='/' className="w-full text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 hover:opacity-90" style={{ backgroundColor: '#ba736b' }}>
              <Home className="w-5 h-5" />
              Back to Home
            </a>
            
            <a href='/' className="w-full text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 hover:opacity-80" style={{ backgroundColor: '#161f2f',}}>
              <Mail className="w-5 h-5" />
              Contact Support
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-white mt-8">
            Need help? Email us at support@example.com
          </p>
        </div>
      </div>
    );
  }