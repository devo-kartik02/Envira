export interface PollutionData {
  aqi: number;
  pm25: number;
  pm10: number;
  waterQuality: number;
  location: string;
  timestamp: string;
}

export interface Alert {
  id: string;
  type: 'air' | 'water';
  severity: 'low' | 'moderate' | 'high' | 'severe';
  message: string;
  location: string;
  timestamp: string;
}

export interface PollutionReport {
  id: string;
  type: string;
  description: string;
  location: string;
  status: 'pending' | 'investigating' | 'resolved';
  timestamp: string;
  imageUrl?: string;
}