import React from 'react';
import { Card, MetricCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  demoThreatIndicators, 
  demoAssets, 
  demoRemediationItems, 
  demoUserRiskSignals 
} from '../data/demo-data';
import { 
  AlertTriangle, 
  Shield, 
  Server, 
  Users, 
  Clock, 
  TrendingUp,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const CISODashboard: React.FC = () => {
  const getSeverityBadgeVariant = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'danger';
      case 'High': return 'warning';
      case 'Medium': return 'info';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'danger';
      case 'High': return 'warning';
      case 'Medium': return 'info';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  const getAssetStatusColor = (status: string) => {
    switch (status) {
      case 'Secure': return 'text-success-600';
      case 'At Risk': return 'text-warning-600';
      case 'Critical': return 'text-danger-600';
      default: return 'text-secondary-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-secondary-900">CISO Dashboard</h1>
          <p className="text-lg text-secondary-600 mt-2">
            Operational cybersecurity intelligence and threat management overview
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-secondary-500">Last updated</p>
          <p className="text-sm font-medium text-secondary-900">
            {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Attack Surface"
          value="1,247"
          description="Internet-facing assets"
          trend="stable"
          trendValue="No change"
          icon={<Shield className="h-6 w-6 text-primary-500" />}
        />
        <MetricCard
          title="Active Vulnerabilities"
          value="23"
          description="Across all assets"
          trend="down"
          trendValue="5 resolved this week"
          icon={<AlertTriangle className="h-6 w-6 text-warning-500" />}
          variant="warning"
        />
        <MetricCard
          title="High-Risk Users"
          value="3"
          description="Anomalous behavior detected"
          trend="up"
          trendValue="1 new this week"
          icon={<Users className="h-6 w-6 text-danger-500" />}
          variant="warning"
        />
        <MetricCard
          title="Mean Time to Remediation"
          value="4.2 days"
          description="Critical vulnerabilities"
          trend="down"
          trendValue="1.3 days improvement"
          icon={<Clock className="h-6 w-6 text-success-500" />}
          variant="success"
        />
      </div>

      {/* AI-Predicted Threat Indicators */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-secondary-900">AI-Predicted Threat Indicators</h2>
          <Badge variant="info" size="sm">Powered by Xcigence Engine</Badge>
        </div>
        
        <div className="space-y-4">
          {demoThreatIndicators.map((threat) => (
            <div key={threat.id} className="border border-secondary-200 rounded-lg p-4 hover:bg-secondary-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-secondary-900">{threat.name}</h3>
                    <Badge variant={getSeverityBadgeVariant(threat.severity)} size="sm">
                      {threat.severity}
                    </Badge>
                    <div className="flex items-center text-sm text-secondary-500">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {Math.round(threat.probability * 100)}% probability
                    </div>
                  </div>
                  <p className="text-secondary-700 mb-2">{threat.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-secondary-900">Impact: </span>
                      <span className="text-secondary-600">{threat.impact}</span>
                    </div>
                    <div>
                      <span className="font-medium text-secondary-900">Timeframe: </span>
                      <span className="text-secondary-600">{threat.timeframe}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-secondary-400 flex-shrink-0 ml-4" />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Asset Vulnerabilities */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">Asset-Specific Vulnerabilities</h2>
          
          <div className="space-y-4">
            {demoAssets.map((asset) => (
              <div key={asset.id} className="flex items-center justify-between p-3 border border-secondary-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Server className="h-5 w-5 text-secondary-500" />
                  <div>
                    <h3 className="font-medium text-secondary-900">{asset.name}</h3>
                    <p className="text-sm text-secondary-600">{asset.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${getAssetStatusColor(asset.status)}`}>
                    {asset.status}
                  </div>
                  <div className="text-xs text-secondary-500">
                    {asset.vulnerabilities} vulnerabilities
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* User Risk Signals */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">Internal User Risk Signals</h2>
          
          <div className="space-y-4">
            {demoUserRiskSignals.map((user) => (
              <div key={user.id} className="p-3 border border-secondary-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-secondary-900">{user.userName}</h3>
                  <Badge variant={getSeverityBadgeVariant(user.riskLevel)} size="sm">
                    {user.riskLevel} Risk
                  </Badge>
                </div>
                <p className="text-sm text-secondary-600 mb-2">{user.department}</p>
                <div className="space-y-1">
                  {user.signals.map((signal, index) => (
                    <div key={index} className="text-xs text-secondary-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-warning-500 rounded-full mr-2"></div>
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Prioritized Remediation */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-secondary-900">Prioritized Remediation List</h2>
          <a href="#" className="flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium">
            View All Items
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-secondary-200 text-left">
                <th className="pb-3 font-semibold text-secondary-900">Priority</th>
                <th className="pb-3 font-semibold text-secondary-900">Remediation Item</th>
                <th className="pb-3 font-semibold text-secondary-900">Impact</th>
                <th className="pb-3 font-semibold text-secondary-900">Effort</th>
                <th className="pb-3 font-semibold text-secondary-900">Due Date</th>
                <th className="pb-3 font-semibold text-secondary-900">Assignee</th>
              </tr>
            </thead>
            <tbody>
              {demoRemediationItems.slice(0, 4).map((item) => (
                <tr key={item.id} className="border-b border-secondary-100">
                  <td className="py-3">
                    <Badge variant={getPriorityBadgeVariant(item.priority)} size="sm">
                      {item.priority}
                    </Badge>
                  </td>
                  <td className="py-3 font-medium text-secondary-900">{item.title}</td>
                  <td className="py-3 text-sm text-secondary-600">{item.impact}</td>
                  <td className="py-3 text-sm text-secondary-600">{item.effort}</td>
                  <td className="py-3 text-sm text-secondary-600">
                    {new Date(item.dueDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 text-sm text-secondary-600">{item.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default CISODashboard;