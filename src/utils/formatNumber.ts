export const formatPercentage = (value: number): string => {
  return `${Math.round(value)}%`;
};

export const formatScore = (value: number): string => {
  return `${Math.round(value)}/100`;
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
};
