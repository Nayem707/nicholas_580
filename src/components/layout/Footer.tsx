import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-50 border-t border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-secondary-600">
              © 2024 Xcigence. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-secondary-500">
              <a href="#" className="hover:text-secondary-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary-700 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary-700 transition-colors">
                Security
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-secondary-500">
            <span>Enterprise Grade</span>
            <span>•</span>
            <span>SOC 2 Type II</span>
            <span>•</span>
            <span>ISO 27001</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-secondary-200">
          <p className="text-xs text-secondary-400 text-center">
            This is a demonstration environment. All data shown is simulated for demo purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;