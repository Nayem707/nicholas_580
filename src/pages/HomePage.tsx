import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Eye, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Cybersecurity Risk Scoring',
      description: 'Real-time risk quantification with transparent, audit-ready calculations'
    },
    {
      icon: <Brain className="h-8 w-8 text-primary-600" />,
      title: 'AI-Driven Threat Prediction',
      description: 'Proprietary machine learning algorithms predict future risk scenarios'
    },
    {
      icon: <Eye className="h-8 w-8 text-primary-600" />,
      title: 'Attack Surface Visibility',
      description: 'Complete visibility into your internet-facing assets and vulnerabilities'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: 'Xcigence Engine',
      description: 'Patented scoring methodology trusted by Fortune 500 companies'
    }
  ];

  const principles = [
    'Objective scoring based on quantifiable data points',
    'Transparent methodologies with full audit trails',
    'Defensible intelligence for board-level reporting'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 leading-tight">
                Turn Cybersecurity Risk Into
                <span className="text-primary-600 block">Business Intelligence</span>
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Enterprise-grade cybersecurity risk platform that transforms complex security data 
                into clear, actionable business intelligence for executives, CISOs, and risk leaders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/platform">
                <Button size="lg" className="w-full sm:w-auto">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/ciso">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Start Risk Assessment
                </Button>
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-sm text-secondary-500 mb-4">Trusted by Fortune 500 Companies</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="w-20 h-8 bg-secondary-200 rounded"></div>
                <div className="w-20 h-8 bg-secondary-200 rounded"></div>
                <div className="w-20 h-8 bg-secondary-200 rounded"></div>
                <div className="w-20 h-8 bg-secondary-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="bg-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Objective. Transparent. Defensible.
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our intelligence platform provides the clarity and confidence needed 
              for critical business decisions in an uncertain threat landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center">
                <CheckCircle className="h-12 w-12 text-success-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-secondary-900">{principle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Core Platform Capabilities
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity risk management built for enterprise scale and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Cybersecurity Risk Management?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            See how Xcigence delivers enterprise-grade cybersecurity intelligence 
            that boards and executives can trust and act upon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/platform">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50">
                View Platform Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/executive">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-primary-500">
                Executive Overview
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;