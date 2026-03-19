import React from 'react';
import { Card, MetricCard } from '../components/ui/Card';
import RiskScoreVisualizer from '../components/charts/RiskScoreVisualizer';
import { demoRiskScore } from '../data/demo-data';
import { AlertTriangle, Shield, TrendingUp, FileText } from 'lucide-react';

const PlatformOverview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-secondary-900">
          Platform Overview
        </h1>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Your organization's cybersecurity risk profile with explainable, audit-ready intelligence.
        </p>
      </div>

      {/* Risk Score Section */}
      <Card className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              Current Risk Score
            </h2>
            <div className="flex justify-center lg:justify-start">
              <RiskScoreVisualizer riskScore={demoRiskScore} size="lg" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                Score Explanation
              </h3>
              <div className="space-y-3 text-secondary-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-secondary-900">740/850 (Low Risk):</strong> Your organization demonstrates 
                    strong cybersecurity controls with minimal exposure to critical threats.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-secondary-900">Methodology:</strong> Score calculated using 47 security 
                    control categories, threat intelligence feeds, and asset vulnerability assessments.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warning-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-secondary-900">Trending Up:</strong> Recent security improvements 
                    have increased your risk score by 12 points over the last 30 days.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-success-50 border border-success-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-5 w-5 text-success-600" />
                <span className="font-semibold text-success-800">Explainable & Audit-Ready</span>
              </div>
              <p className="text-sm text-success-700">
                This score is generated using transparent methodologies that can be fully audited 
                and explained to regulators, board members, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Active Threats"
          value="3"
          description="Predicted threat scenarios"
          trend="down"
          trendValue="2 from last month"
          icon={<AlertTriangle className="h-6 w-6 text-warning-500" />}
          variant="warning"
        />
        <MetricCard
          title="Assets Monitored"
          value="1,247"
          description="Internet-facing assets"
          trend="stable"
          trendValue="No change"
          icon={<Shield className="h-6 w-6 text-primary-500" />}
        />
        <MetricCard
          title="Compliance Score"
          value="94%"
          description="Across 4 frameworks"
          trend="up"
          trendValue="2% improvement"
          icon={<FileText className="h-6 w-6 text-success-500" />}
          variant="success"
        />
        <MetricCard
          title="Risk Trend"
          value="Improving"
          description="30-day trajectory"
          trend="up"
          trendValue="Strong progress"
          icon={<TrendingUp className="h-6 w-6 text-success-500" />}
          variant="success"
        />
      </div>

      {/* Scoring Methodology */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          How Your Score is Calculated
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">40%</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Asset Vulnerabilities</h3>
            <p className="text-sm text-secondary-600">
              Known vulnerabilities across your attack surface, weighted by severity and exploitability
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">35%</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Security Controls</h3>
            <p className="text-sm text-secondary-600">
              Implementation and effectiveness of security controls across 47 categories
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">25%</span>
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Threat Intelligence</h3>
            <p className="text-sm text-secondary-600">
              Industry-specific threats and attack patterns targeting your sector
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-secondary-50 rounded-lg p-6">
          <h4 className="font-semibold text-secondary-900 mb-3">Notice to Reader</h4>
          <p className="text-sm text-secondary-700 leading-relaxed">
            This risk score represents a point-in-time assessment based on available data and 
            established cybersecurity frameworks. It should be used alongside other business intelligence 
            and risk management processes. The score is updated continuously as new data becomes available 
            and should be reviewed regularly as part of your organization's risk management program.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PlatformOverview;