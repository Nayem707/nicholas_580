import type { 
  RiskScore, 
  ThreatIndicator, 
  Asset, 
  Vendor, 
  ComplianceFramework, 
  RemediationItem, 
  UserRiskSignal 
} from '../types';

export const demoRiskScore: RiskScore = {
  value: 740,
  maxValue: 850,
  level: 'Low',
  trend: 'up',
  lastUpdated: new Date().toISOString()
};

export const demoThreatIndicators: ThreatIndicator[] = [
  {
    id: '1',
    name: 'Credential Stuffing Campaign',
    severity: 'Medium',
    probability: 0.72,
    description: 'AI-detected patterns indicate 72% probability of credential stuffing attack targeting login systems within next 30 days.',
    impact: 'Potential unauthorized access to user accounts',
    timeframe: '30 days'
  },
  {
    id: '2',
    name: 'Supply Chain Disruption',
    severity: 'High',
    probability: 0.45,
    description: 'Third-party vendor security incidents suggest elevated risk to supply chain integrity.',
    impact: 'Business continuity and data integrity risks',
    timeframe: '14 days'
  },
  {
    id: '3',
    name: 'Phishing Campaign Targeting',
    severity: 'Medium',
    probability: 0.68,
    description: 'Industry-specific phishing campaigns detected with similar attack vectors.',
    impact: 'Employee credential compromise',
    timeframe: '21 days'
  }
];

export const demoAssets: Asset[] = [
  {
    id: '1',
    name: 'Production Web Server (web-prod-01)',
    type: 'Server',
    riskScore: 8.2,
    vulnerabilities: 3,
    lastScan: '2024-01-22T10:30:00Z',
    status: 'At Risk'
  },
  {
    id: '2',
    name: 'Customer Database (db-customer-01)',
    type: 'Database',
    riskScore: 2.1,
    vulnerabilities: 0,
    lastScan: '2024-01-22T09:15:00Z',
    status: 'Secure'
  },
  {
    id: '3',
    name: 'CRM Application (crm-app-01)',
    type: 'Application',
    riskScore: 5.7,
    vulnerabilities: 1,
    lastScan: '2024-01-22T11:00:00Z',
    status: 'At Risk'
  },
  {
    id: '4',
    name: 'Core Network Switch (net-sw-01)',
    type: 'Network Device',
    riskScore: 1.4,
    vulnerabilities: 0,
    lastScan: '2024-01-22T08:45:00Z',
    status: 'Secure'
  }
];

export const demoVendors: Vendor[] = [
  {
    id: '1',
    name: 'CloudTech Solutions',
    riskScore: 820,
    tier: 'Critical',
    lastAssessment: '2024-01-15',
    vulnerabilities: 2,
    complianceStatus: 'Compliant'
  },
  {
    id: '2',
    name: 'DataFlow Inc.',
    riskScore: 650,
    tier: 'Important',
    lastAssessment: '2024-01-10',
    vulnerabilities: 5,
    complianceStatus: 'Under Review'
  },
  {
    id: '3',
    name: 'SecureComms Ltd.',
    riskScore: 780,
    tier: 'Critical',
    lastAssessment: '2024-01-18',
    vulnerabilities: 1,
    complianceStatus: 'Compliant'
  },
  {
    id: '4',
    name: 'TechSupport Partners',
    riskScore: 420,
    tier: 'Standard',
    lastAssessment: '2024-01-05',
    vulnerabilities: 12,
    complianceStatus: 'Non-Compliant'
  }
];

export const demoComplianceFrameworks: ComplianceFramework[] = [
  {
    id: '1',
    name: 'GDPR',
    status: 'Aligned',
    coverage: 94,
    lastAudit: '2023-12-15',
    requirements: 47,
    gaps: 3
  },
  {
    id: '2',
    name: 'HIPAA',
    status: 'Aligned',
    coverage: 98,
    lastAudit: '2024-01-10',
    requirements: 42,
    gaps: 1
  },
  {
    id: '3',
    name: 'ISO 27001',
    status: 'At Risk',
    coverage: 87,
    lastAudit: '2023-11-30',
    requirements: 114,
    gaps: 15
  },
  {
    id: '4',
    name: 'NIST CSF',
    status: 'Aligned',
    coverage: 91,
    lastAudit: '2024-01-08',
    requirements: 108,
    gaps: 10
  }
];

export const demoRemediationItems: RemediationItem[] = [
  {
    id: '1',
    title: 'Patch CVE-2024-0001 in Web Server',
    priority: 'High',
    impact: 'Prevents potential remote code execution',
    effort: 'Low',
    category: 'Vulnerability',
    dueDate: '2024-01-25',
    assignee: 'Infrastructure Team',
    status: 'Open'
  },
  {
    id: '2',
    title: 'Update Multi-Factor Authentication Policy',
    priority: 'Medium',
    impact: 'Strengthens access controls',
    effort: 'Medium',
    category: 'Policy',
    dueDate: '2024-02-01',
    assignee: 'Security Team',
    status: 'In Progress'
  },
  {
    id: '3',
    title: 'Conduct Phishing Awareness Training',
    priority: 'Medium',
    impact: 'Reduces human error risks',
    effort: 'High',
    category: 'Training',
    dueDate: '2024-02-15',
    assignee: 'HR Team',
    status: 'Open'
  },
  {
    id: '4',
    title: 'Review Vendor Access Permissions',
    priority: 'Critical',
    impact: 'Limits third-party risk exposure',
    effort: 'Medium',
    category: 'Configuration',
    dueDate: '2024-01-24',
    assignee: 'CISO Office',
    status: 'Open'
  }
];

export const demoUserRiskSignals: UserRiskSignal[] = [
  {
    id: '1',
    userId: 'emp-001',
    userName: 'Sarah Johnson',
    department: 'Finance',
    riskLevel: 'Medium',
    signals: ['Unusual login location', 'After-hours data access'],
    lastActivity: '2024-01-22T23:15:00Z'
  },
  {
    id: '2',
    userId: 'emp-002',
    userName: 'Mike Chen',
    department: 'IT',
    riskLevel: 'Low',
    signals: ['Standard patterns'],
    lastActivity: '2024-01-22T17:30:00Z'
  },
  {
    id: '3',
    userId: 'emp-003',
    userName: 'Elena Rodriguez',
    department: 'Sales',
    riskLevel: 'High',
    signals: ['Multiple failed login attempts', 'Suspicious file downloads', 'VPN from new country'],
    lastActivity: '2024-01-22T14:45:00Z'
  }
];