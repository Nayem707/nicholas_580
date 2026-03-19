import React from 'react';
import { Shield, User, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Xcigence' }) => {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'Cybersecurity Intelligence Platform';
      case '/platform':
        return 'Platform Overview';
      case '/ciso':
        return 'CISO Dashboard';
      case '/executive':
        return 'Executive View';
      case '/supply-chain':
        return 'Supply Chain Risk';
      case '/compliance':
        return 'Compliance Center';
      default:
        return 'Cybersecurity Intelligence Platform';
    }
  };

  return (
    <header className="bg-white border-b border-secondary-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-secondary-900">{title}</span>
            </Link>
            {location.pathname !== '/' && (
              <div className="hidden md:block">
                <span className="text-secondary-400 mx-2">/</span>
                <span className="text-lg font-medium text-secondary-700">{getPageTitle()}</span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/platform"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/platform'
                  ? 'text-primary-600'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Platform
            </Link>
            <Link
              to="/ciso"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/ciso'
                  ? 'text-primary-600'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              CISO Dashboard
            </Link>
            <Link
              to="/executive"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/executive'
                  ? 'text-primary-600'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Executive View
            </Link>
            <Link
              to="/supply-chain"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/supply-chain'
                  ? 'text-primary-600'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Supply Chain
            </Link>
            <Link
              to="/compliance"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/compliance'
                  ? 'text-primary-600'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Compliance
            </Link>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-secondary-400 hover:text-secondary-600 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-primary-600" />
              </div>
              <span className="text-sm font-medium text-secondary-700 hidden sm:block">Demo User</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;