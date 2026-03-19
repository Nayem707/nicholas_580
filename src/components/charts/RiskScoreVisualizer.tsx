import React from 'react';
import type { RiskScore } from '../../types';

interface RiskScoreVisualizerProps {
  riskScore: RiskScore;
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
}

const RiskScoreVisualizer: React.FC<RiskScoreVisualizerProps> = ({ 
  riskScore, 
  size = 'md',
  showDetails = true 
}) => {
  const percentage = (riskScore.value / riskScore.maxValue) * 100;
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-24 h-24';
      case 'md':
        return 'w-32 h-32';
      case 'lg':
        return 'w-40 h-40';
      default:
        return 'w-32 h-32';
    }
  };

  const getScoreColor = () => {
    switch (riskScore.level) {
      case 'Low':
        return 'text-success-600';
      case 'Medium':
        return 'text-warning-600';
      case 'High':
        return 'text-danger-500';
      case 'Critical':
        return 'text-danger-700';
      default:
        return 'text-secondary-600';
    }
  };

  const getProgressColor = () => {
    switch (riskScore.level) {
      case 'Low':
        return 'stroke-success-500';
      case 'Medium':
        return 'stroke-warning-500';
      case 'High':
        return 'stroke-danger-500';
      case 'Critical':
        return 'stroke-danger-700';
      default:
        return 'stroke-secondary-500';
    }
  };

  const getTrendIcon = () => {
    switch (riskScore.trend) {
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

  const radius = size === 'sm' ? 36 : size === 'lg' ? 60 : 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className={`relative ${getSizeClasses()}`}>
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-secondary-200"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={getProgressColor()}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`text-2xl font-bold ${getScoreColor()}`}>
            {riskScore.value}
          </div>
          <div className="text-xs text-secondary-500">
            / {riskScore.maxValue}
          </div>
        </div>
      </div>
      
      {showDetails && (
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <span className={`font-semibold ${getScoreColor()}`}>
              {riskScore.level} Risk
            </span>
            <span className="text-secondary-400">
              {getTrendIcon()}
            </span>
          </div>
          <p className="text-xs text-secondary-500">
            Last updated: {new Date(riskScore.lastUpdated).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default RiskScoreVisualizer;