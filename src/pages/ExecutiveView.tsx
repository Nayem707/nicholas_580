import React from 'react';
import { Card, MetricCard } from '../components/ui/Card';
import RiskScoreVisualizer from '../components/charts/RiskScoreVisualizer';
import { demoRiskScore } from '../data/demo-data';
import { TrendingUp, Shield, AlertTriangle, FileText, DollarSign } from 'lucide-react';

const ExecutiveView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-secondary-900">
          Executive Risk Overview
        </h1>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Board-ready cybersecurity risk assessment with clear business impact explanations
        </p>
      </div>

      {/* Risk Score and Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
            Current Risk Score
          </h2>
          <div className="flex justify-center">
            <RiskScoreVisualizer riskScore={demoRiskScore} size="lg" />
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            30-Day Risk Trend
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-success-600">
                <TrendingUp className="h-6 w-6 mr-2" />
                <span className="text-2xl font-bold">+12 points</span>
              </div>
              <div className="text-sm text-secondary-600">
                Risk score improvement over 30 days
              </div>
            </div>
            
            <div className="bg-secondary-50 rounded-lg p-4">
              <h3 className="font-semibold text-secondary-900 mb-2">Key Improvements</h3>
              <ul className="space-y-1 text-sm text-secondary-600">
                <li>• Patched 15 critical vulnerabilities</li>
                <li>• Implemented enhanced access controls</li>
                <li>• Completed security awareness training</li>
                <li>• Updated incident response procedures</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Business Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Potential Annual Risk"
          value="$2.4M"
          description="Estimated exposure"
          trend="down"
          trendValue="$800K reduction"
          icon={<DollarSign className="h-6 w-6 text-success-500" />}
          variant="success"
        />
        <MetricCard
          title="Compliance Posture"
          value="94%"
          description="Regulatory alignment"
          trend="stable"
          trendValue="Maintained"
          icon={<FileText className="h-6 w-6 text-success-500" />}
          variant="success"
        />
        <MetricCard
          title="Critical Issues"
          value="3"
          description="Requiring immediate attention"
          trend="down"
          trendValue="2 resolved"
          icon={<AlertTriangle className="h-6 w-6 text-warning-500" />}
          variant="warning"
        />
        <MetricCard
          title="Security Maturity"
          value="Advanced"
          description="Industry benchmarking"
          trend="up"
          trendValue="Tier improvement"
          icon={<Shield className="h-6 w-6 text-success-500" />}
          variant="success"
        />
      </div>

      {/* Business Impact Explanation */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          Business Impact Assessment
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-success-600" />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Strong Defense Posture</h3>
            <p className="text-sm text-secondary-600">
              Your organization maintains robust cybersecurity controls that significantly reduce 
              the likelihood of successful attacks.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Improving Trajectory</h3>
            <p className="text-sm text-secondary-600">
              Recent security investments are demonstrating measurable improvements in 
              risk reduction and operational resilience.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-warning-600" />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Focused Attention Areas</h3>
            <p className="text-sm text-secondary-600">
              Limited high-priority items require targeted investment to maintain 
              our strong security posture.
            </p>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary-800 mb-3">Executive Summary</h3>
          <p className="text-primary-700 leading-relaxed">
            The organization demonstrates a <strong>Low Risk</strong> cybersecurity profile with an improving trend. 
            Our current score of 740/850 places us in the top quartile of peer organizations. 
            The estimated annual risk exposure of $2.4M represents less than 0.1% of annual revenue, 
            indicating strong ROI on cybersecurity investments. Continued focus on the 3 remaining 
            critical items will further strengthen our position and support business growth objectives.
          </p>
        </div>
      </Card>

      {/* Notice to Reader */}
      <Card className="p-8 bg-secondary-50 border-secondary-200">
        <h2 className="text-xl font-bold text-secondary-900 mb-4">
          Notice to Reader
        </h2>
        <div className="space-y-4 text-secondary-700">
          <p>
            <strong>Risk Score Interpretation:</strong> The cybersecurity risk score of 740/850 represents 
            a comprehensive assessment of your organization's security posture based on quantifiable metrics 
            and industry-standard frameworks. This score should be interpreted alongside other business 
            risk factors and operational considerations.
          </p>
          
          <p>
            <strong>Methodology:</strong> This assessment employs the proprietary Xcigence Engine, which 
            analyzes 47 security control categories, real-time threat intelligence, and asset vulnerability 
            data. The scoring methodology has been validated by third-party security firms and aligns with 
            NIST Cybersecurity Framework guidelines.
          </p>
          
          <p>
            <strong>Limitations:</strong> While comprehensive, this assessment represents current known risks 
            and may not account for unknown vulnerabilities or sophisticated advanced persistent threats. 
            Regular reassessment is recommended as the threat landscape evolves.
          </p>
          
          <p>
            <strong>Recommendation:</strong> Use this intelligence to inform board discussions, regulatory 
            reporting, and strategic security planning. The quarterly trend analysis provides valuable 
            insights for measuring security program effectiveness and ROI.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ExecutiveView;