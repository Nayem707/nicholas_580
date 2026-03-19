import React from 'react';
import { Card, MetricCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { demoVendors } from '../data/demo-data';
import { 
  Building2, 
  AlertTriangle, 
  Shield, 
  TrendingUp,
  Globe
} from 'lucide-react';

const SupplyChainRisk: React.FC = () => {
  const getVendorRiskColor = (score: number) => {
    if (score >= 700) return 'text-success-600';
    if (score >= 500) return 'text-warning-600';
    return 'text-danger-600';
  };

  const getVendorRiskLevel = (score: number) => {
    if (score >= 700) return 'Low Risk';
    if (score >= 500) return 'Medium Risk';
    return 'High Risk';
  };

  const getComplianceVariant = (status: string) => {
    switch (status) {
      case 'Compliant': return 'success';
      case 'At Risk': return 'warning';
      case 'Non-Compliant': return 'danger';
      default: return 'default';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-secondary-900">
          Third-Party & Supply Chain Risk
        </h1>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Comprehensive visibility into vendor security postures with predictive risk intelligence 
          and 4th-party supply chain monitoring.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Vendors"
          value="247"
          description="Active suppliers"
          trend="stable"
          trendValue="No change"
          icon={<Building2 className="h-6 w-6 text-primary-500" />}
        />
        <MetricCard
          title="Critical Tier Vendors"
          value="12"
          description="Business-critical suppliers"
          trend="down"
          trendValue="2 tier changes"
          icon={<Shield className="h-6 w-6 text-warning-500" />}
          variant="warning"
        />
        <MetricCard
          title="High-Risk Vendors"
          value="3"
          description="Requiring immediate action"
          trend="down"
          trendValue="1 remediated"
          icon={<AlertTriangle className="h-6 w-6 text-danger-500" />}
          variant="danger"
        />
        <MetricCard
          title="4th-Party Exposure"
          value="1,247"
          description="Sub-contractor entities"
          trend="up"
          trendValue="New visibility"
          icon={<Globe className="h-6 w-6 text-primary-500" />}
        />
      </div>

      {/* Vendor Risk Overview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-secondary-900">Vendor Risk Scores</h2>
          <Badge variant="info" size="sm">Updated Daily</Badge>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-secondary-200 text-left">
                <th className="pb-3 font-semibold text-secondary-900">Vendor</th>
                <th className="pb-3 font-semibold text-secondary-900">Risk Score</th>
                <th className="pb-3 font-semibold text-secondary-900">Tier</th>
                <th className="pb-3 font-semibold text-secondary-900">Vulnerabilities</th>
                <th className="pb-3 font-semibold text-secondary-900">Compliance</th>
                <th className="pb-3 font-semibold text-secondary-900">Last Assessment</th>
                <th className="pb-3 font-semibold text-secondary-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {demoVendors.map((vendor) => (
                <tr key={vendor.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-5 w-5 text-secondary-500" />
                      <div>
                        <div className="font-medium text-secondary-900">{vendor.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex flex-col">
                      <span className={`font-semibold ${getVendorRiskColor(vendor.riskScore)}`}>
                        {vendor.riskScore}/850
                      </span>
                      <span className={`text-xs ${getVendorRiskColor(vendor.riskScore)}`}>
                        {getVendorRiskLevel(vendor.riskScore)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <Badge 
                      variant={vendor.tier === 'Critical' ? 'danger' : vendor.tier === 'Important' ? 'warning' : 'default'}
                      size="sm"
                    >
                      {vendor.tier}
                    </Badge>
                  </td>
                  <td className="py-4 text-center">
                    <span className="text-secondary-900 font-medium">{vendor.vulnerabilities}</span>
                  </td>
                  <td className="py-4">
                    <Badge variant={getComplianceVariant(vendor.complianceStatus)} size="sm">
                      {vendor.complianceStatus}
                    </Badge>
                  </td>
                  <td className="py-4 text-sm text-secondary-600">
                    {new Date(vendor.lastAssessment).toLocaleDateString()}
                  </td>
                  <td className="py-4">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* High-Risk Vendor Spotlight */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">High-Risk Vendor Spotlight</h2>
          
          <div className="border border-danger-200 bg-danger-50 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <AlertTriangle className="h-6 w-6 text-danger-600" />
              <div>
                <h3 className="font-semibold text-danger-800">TechSupport Partners</h3>
                <p className="text-sm text-danger-600">Risk Score: 420/850 - High Risk</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-danger-700">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-danger-500 rounded-full"></div>
                <span>12 unpatched critical vulnerabilities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-danger-500 rounded-full"></div>
                <span>Non-compliant with SOC 2 requirements</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-danger-500 rounded-full"></div>
                <span>Recent security incident reported</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-danger-500 rounded-full"></div>
                <span>Access to customer data and internal systems</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-danger-200">
              <p className="text-sm text-danger-800 font-medium">
                Recommended Actions: Immediate contract review, access limitation, 
                and remediation timeline establishment.
              </p>
            </div>
          </div>
        </Card>

        {/* 4th-Party Visibility */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">4th-Party Visibility</h2>
          
          <div className="space-y-4">
            <div className="bg-secondary-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="h-5 w-5 text-primary-600" />
                <h3 className="font-semibold text-secondary-900">CloudTech Solutions</h3>
              </div>
              <p className="text-sm text-secondary-600 mb-3">
                Sub-contractors: 23 entities | Risk exposure: Medium
              </p>
              <div className="space-y-1">
                <div className="text-xs text-secondary-500">• Cloud infrastructure provider: AWS</div>
                <div className="text-xs text-secondary-500">• Payment processor: Stripe</div>
                <div className="text-xs text-secondary-500">• Analytics service: Google Analytics</div>
                <div className="text-xs text-secondary-500">• Support platform: Zendesk</div>
              </div>
            </div>
            
            <div className="bg-warning-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="h-5 w-5 text-warning-600" />
                <h3 className="font-semibold text-secondary-900">DataFlow Inc.</h3>
              </div>
              <p className="text-sm text-secondary-600 mb-3">
                Sub-contractors: 8 entities | Risk exposure: High
              </p>
              <div className="space-y-1">
                <div className="text-xs text-warning-700">• Unvetted data processing partner</div>
                <div className="text-xs text-warning-700">• Non-compliant backup service</div>
                <div className="text-xs text-warning-700">• Offshore development team</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Predictive Alerts */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-secondary-900 mb-6">Predictive Risk Alerts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-warning-200 bg-warning-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <TrendingUp className="h-5 w-5 text-warning-600" />
              <h3 className="font-semibold text-warning-800">Industry Risk Elevation</h3>
            </div>
            <p className="text-sm text-warning-700 mb-3">
              Technology sector experiencing 23% increase in supply chain attacks. 
              Your vendor portfolio shows elevated risk correlation.
            </p>
            <div className="text-xs text-warning-600">
              Predicted impact: Medium | Timeline: 60 days | Confidence: 78%
            </div>
          </div>
          
          <div className="border border-primary-200 bg-primary-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="h-5 w-5 text-primary-600" />
              <h3 className="font-semibold text-primary-800">Vendor Certification Renewal</h3>
            </div>
            <p className="text-sm text-primary-700 mb-3">
              3 critical vendors approaching SOC 2 certification renewal periods. 
              Proactive engagement recommended.
            </p>
            <div className="text-xs text-primary-600">
              Predicted impact: Low | Timeline: 90 days | Confidence: 92%
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SupplyChainRisk;