import React from 'react';
import { Card, MetricCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { demoComplianceFrameworks } from '../data/demo-data';
import { 
  FileCheck, 
  Shield, 
  AlertTriangle, 
  Download, 
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const ComplianceCenter: React.FC = () => {
  const getFrameworkStatusVariant = (status: string) => {
    switch (status) {
      case 'Aligned': return 'success';
      case 'At Risk': return 'warning';
      case 'Non-Compliant': return 'danger';
      default: return 'default';
    }
  };

  const getFrameworkIcon = (status: string) => {
    switch (status) {
      case 'Aligned': return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'At Risk': return <Clock className="h-5 w-5 text-warning-500" />;
      case 'Non-Compliant': return <XCircle className="h-5 w-5 text-danger-500" />;
      default: return <Shield className="h-5 w-5 text-secondary-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-secondary-900">
          Compliance & Trust Center
        </h1>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Automated compliance monitoring with real-time mapping to regulatory frameworks 
          and audit-ready documentation.
        </p>
      </div>

      {/* Compliance Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Overall Compliance"
          value="92%"
          description="Across all frameworks"
          trend="up"
          trendValue="3% improvement"
          icon={<Shield className="h-6 w-6 text-success-500" />}
          variant="success"
        />
        <MetricCard
          title="Frameworks Monitored"
          value="4"
          description="Active compliance tracking"
          trend="stable"
          trendValue="No change"
          icon={<FileCheck className="h-6 w-6 text-primary-500" />}
        />
        <MetricCard
          title="Total Requirements"
          value="311"
          description="Tracked control points"
          trend="up"
          trendValue="12 new this quarter"
          icon={<CheckCircle className="h-6 w-6 text-primary-500" />}
        />
        <MetricCard
          title="Open Gaps"
          value="29"
          description="Requiring attention"
          trend="down"
          trendValue="7 closed"
          icon={<AlertTriangle className="h-6 w-6 text-warning-500" />}
          variant="warning"
        />
      </div>

      {/* Compliance Frameworks Status */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-secondary-900">Regulatory Framework Status</h2>
          <Badge variant="info" size="sm">Auto-Updated</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demoComplianceFrameworks.map((framework) => (
            <div key={framework.id} className="border border-secondary-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getFrameworkIcon(framework.status)}
                  <h3 className="text-lg font-semibold text-secondary-900">{framework.name}</h3>
                </div>
                <Badge variant={getFrameworkStatusVariant(framework.status)} size="sm">
                  {framework.status}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Coverage</span>
                  <span className="font-medium text-secondary-900">{framework.coverage}%</span>
                </div>
                
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      framework.coverage >= 90 ? 'bg-success-500' : 
                      framework.coverage >= 70 ? 'bg-warning-500' : 'bg-danger-500'
                    }`}
                    style={{ width: `${framework.coverage}%` }}
                  ></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-secondary-600">Requirements:</span>
                    <span className="font-medium text-secondary-900 ml-2">{framework.requirements}</span>
                  </div>
                  <div>
                    <span className="text-secondary-600">Gaps:</span>
                    <span className="font-medium text-secondary-900 ml-2">{framework.gaps}</span>
                  </div>
                </div>
                
                <div className="text-sm text-secondary-600">
                  Last audit: {new Date(framework.lastAudit).toLocaleDateString()}
                </div>
                
                <button className="w-full mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium">
                  View Detailed Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Detailed GDPR Compliance View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">GDPR Compliance Detail</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-success-50 border border-success-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success-600" />
                <span className="font-medium text-success-800">Data Processing Records</span>
              </div>
              <Badge variant="success" size="sm">Complete</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-success-50 border border-success-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success-600" />
                <span className="font-medium text-success-800">Privacy Impact Assessments</span>
              </div>
              <Badge variant="success" size="sm">Complete</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-success-50 border border-success-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success-600" />
                <span className="font-medium text-success-800">Data Subject Rights</span>
              </div>
              <Badge variant="success" size="sm">Complete</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-warning-50 border border-warning-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-warning-600" />
                <span className="font-medium text-warning-800">Data Breach Procedures</span>
              </div>
              <Badge variant="warning" size="sm">Partial</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-warning-50 border border-warning-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-warning-600" />
                <span className="font-medium text-warning-800">Cross-Border Transfers</span>
              </div>
              <Badge variant="warning" size="sm">In Progress</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-danger-50 border border-danger-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <XCircle className="h-5 w-5 text-danger-600" />
                <span className="font-medium text-danger-800">Vendor Data Processing Agreements</span>
              </div>
              <Badge variant="danger" size="sm">Overdue</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">Recent Compliance Activities</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
              <FileCheck className="h-5 w-5 text-success-500 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-secondary-900">HIPAA Security Assessment</h4>
                <p className="text-sm text-secondary-600 mb-1">
                  Completed comprehensive security control review
                </p>
                <p className="text-xs text-secondary-500">Completed 2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
              <Shield className="h-5 w-5 text-primary-500 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-secondary-900">ISO 27001 Gap Analysis</h4>
                <p className="text-sm text-secondary-600 mb-1">
                  Identified 5 new control implementation opportunities
                </p>
                <p className="text-xs text-secondary-500">Completed yesterday</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-secondary-900">NIST CSF Mapping Update</h4>
                <p className="text-sm text-secondary-600 mb-1">
                  Automated control mapping updated with latest framework
                </p>
                <p className="text-xs text-secondary-500">Completed 3 days ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Audit-Ready Reports */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-secondary-900 mb-6">Audit-Ready Report Preview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-secondary-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-secondary-900">SOC 2 Type II</h3>
              <Download className="h-4 w-4 text-secondary-500" />
            </div>
            <p className="text-sm text-secondary-600 mb-3">
              Comprehensive security controls assessment with evidence collection
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-secondary-500">Last generated:</span>
              <span className="text-secondary-900">Jan 15, 2024</span>
            </div>
            <button className="w-full mt-3 text-sm btn-secondary">
              Generate Report
            </button>
          </div>
          
          <div className="border border-secondary-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-secondary-900">GDPR Compliance</h3>
              <Download className="h-4 w-4 text-secondary-500" />
            </div>
            <p className="text-sm text-secondary-600 mb-3">
              Data protection impact assessment and compliance status summary
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-secondary-500">Last generated:</span>
              <span className="text-secondary-900">Jan 20, 2024</span>
            </div>
            <button className="w-full mt-3 text-sm btn-secondary">
              Generate Report
            </button>
          </div>
          
          <div className="border border-secondary-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-secondary-900">Executive Summary</h3>
              <Download className="h-4 w-4 text-secondary-500" />
            </div>
            <p className="text-sm text-secondary-600 mb-3">
              Board-ready compliance posture overview with risk assessments
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-secondary-500">Last generated:</span>
              <span className="text-secondary-900">Jan 22, 2024</span>
            </div>
            <button className="w-full mt-3 text-sm btn-secondary">
              Generate Report
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ComplianceCenter;