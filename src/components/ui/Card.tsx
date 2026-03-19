import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ children, className = '', padding = 'md' }) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`card ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
  trend,
  trendValue,
  icon,
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'border-secondary-200',
    success: 'border-success-200 bg-success-50',
    warning: 'border-warning-200 bg-warning-50',
    danger: 'border-danger-200 bg-danger-50'
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      case 'stable':
        return '→';
      default:
        return '';
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-success-600';
      case 'down':
        return 'text-danger-600';
      case 'stable':
        return 'text-secondary-500';
      default:
        return '';
    }
  };

  return (
    <Card className={`${variantClasses[variant]} text-center`}>
      {icon && (
        <div className="flex justify-center mb-3">
          {icon}
        </div>
      )}
      <h3 className="text-sm font-medium text-secondary-600 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-secondary-900 mb-1">{value}</div>
      {description && (
        <p className="text-sm text-secondary-500 mb-2">{description}</p>
      )}
      {trend && trendValue && (
        <div className={`flex items-center justify-center text-sm font-medium ${getTrendColor()}`}>
          <span className="mr-1">{getTrendIcon()}</span>
          <span>{trendValue}</span>
        </div>
      )}
    </Card>
  );
};

export { Card, MetricCard };