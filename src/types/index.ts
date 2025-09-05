// Core data types for Fintrio Investment Dashboard

export interface Account {
  id: string;
  investorName: string;
  email: string;
  kycStatus: 'pending' | 'approved' | 'rejected' | 'auto_approved';
  currency: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  accountType: 'individual' | 'corporate' | 'trust';
  lastActivity?: string;
}

export interface Offer {
  id: string;
  name: string;
  type: 'real_estate' | 'private_equity' | 'venture_capital' | 'hedge_fund';
  targetIRR: number;
  minInvestment: number;
  openDate: string;
  closeDate: string;
  status: 'active' | 'closed' | 'coming_soon' | 'paused';
  totalRaised: number;
  targetAmount: number;
  image?: string;
  description?: string;
  fundingEndDate: string;
  offeringSize: number;
}

export interface Transaction {
  id: string;
  date: string;
  type: 'subscription' | 'redemption' | 'distribution' | 'transfer';
  accountId: string;
  accountName: string;
  offerId: string;
  offerName: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  reference: string;
  fee?: number;
}

export interface DistributionRun {
  id: string;
  date: string;
  offerId: string;
  offerName: string;
  totalAmount: number;
  method: 'bank_transfer' | 'check' | 'reinvestment';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  recordDate: string;
  payDate: string;
  accountsCount: number;
}

export interface Redemption {
  id: string;
  accountId: string;
  accountName: string;
  offerId: string;
  offerName: string;
  requestedAmount: number;
  investedAmount: number;
  redeemAmount: number;
  fee: number;
  method: 'bank_transfer' | 'check';
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  requestedAt: string;
  settlementDate?: string;
  kycStatus: string;
  redeemStatus: 'pending' | 'completed';
  createdAt: string;
}

export interface Report {
  id: string;
  name: string;
  type: 'investor_statement' | 'cash_flow' | 'aum_history' | 'compliance';
  params: Record<string, any>;
  createdAt: string;
  createdBy: string;
  status: 'generating' | 'completed' | 'failed';
  downloadUrl?: string;
}

export interface DashboardKPI {
  label: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease';
  trend?: number[];
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
  [key: string]: any;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  avatar?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: any;
  badge?: string;
  children?: NavigationItem[];
}