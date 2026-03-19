export interface RiskScore {
  value: number;
  maxValue: number;
  level: 'Low' | 'Medium' | 'High' | 'Critical';
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
}

export interface ThreatIndicator {
  id: string;
  name: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  probability: number;
  description: string;
  impact: string;
  timeframe: string;
}

export interface Asset {
  id: string;
  name: string;
  type: 'Server' | 'Database' | 'Application' | 'Network Device' | 'Endpoint';
  riskScore: number;
  vulnerabilities: number;
  lastScan: string;
  status: 'Secure' | 'At Risk' | 'Critical';
}

export interface Vendor {
  id: string;
  name: string;
  riskScore: number;
  tier: 'Critical' | 'Important' | 'Standard';
  lastAssessment: string;
  vulnerabilities: number;
  complianceStatus: 'Compliant' | 'Non-Compliant' | 'Under Review';
}

export interface ComplianceFramework {
  id: string;
  name: string;
  status: 'Aligned' | 'At Risk' | 'Non-Compliant';
  coverage: number;
  lastAudit: string;
  requirements: number;
  gaps: number;
}

export interface RemediationItem {
  id: string;
  title: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  impact: string;
  effort: 'Low' | 'Medium' | 'High';
  category: 'Vulnerability' | 'Configuration' | 'Policy' | 'Training';
  dueDate: string;
  assignee: string;
  status: 'Open' | 'In Progress' | 'Completed';
}

export interface UserRiskSignal {
  id: string;
  userId: string;
  userName: string;
  department: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  signals: string[];
  lastActivity: string;
}

export interface DashboardMetric {
  label: string;
  value: string | number;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: string;
}