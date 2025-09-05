// Mock data for Fintrio Investment Dashboard
import { Account, Offer, Transaction, Redemption, DistributionRun } from '@/types';

export const mockAccounts: Account[] = [
  {
    id: '1',
    investorName: 'Kelley, Knox',
    email: 'bbhadja@panvatech.com',
    kycStatus: 'auto_approved',
    currency: 'USD',
    balance: 2.00,
    createdAt: '2024-08-29',
    updatedAt: '2024-08-29',
    accountType: 'individual',
    lastActivity: '2024-08-29'
  },
  {
    id: '2',
    investorName: 'Micheal, Smith',
    email: 'tarikap847@mogash.com',
    kycStatus: 'auto_approved',
    currency: 'USD',
    balance: 10000,
    createdAt: '2024-08-29',
    updatedAt: '2024-08-29',
    accountType: 'individual',
    lastActivity: '2024-08-29'
  },
  {
    id: '3',
    investorName: 'Dennis, McGhee',
    email: 'ricawina@teleg.eu',
    kycStatus: 'auto_approved',
    currency: 'USD',
    balance: 500000,
    createdAt: '2024-11-13',
    updatedAt: '2024-11-13',
    accountType: 'corporate',
    lastActivity: '2024-11-13'
  }
];

export const mockOffers: Offer[] = [
  {
    id: '1',
    name: 'Energy Campuses AI Development',
    type: 'real_estate',
    targetIRR: 12.5,
    minInvestment: 2000,
    openDate: '2024-01-01',
    closeDate: '2027-02-01',
    status: 'active',
    totalRaised: 118000000,
    targetAmount: 118000000,
    description: 'AI-driven energy campus development in Hawthorne, CA',
    fundingEndDate: '2027-02-01',
    offeringSize: 118000000
  },
  {
    id: '2',
    name: 'Westing House',
    type: 'real_estate',
    targetIRR: 15.2,
    minInvestment: 10000,
    openDate: '2024-01-01',
    closeDate: '2027-02-01',
    status: 'active',
    totalRaised: 118000000,
    targetAmount: 118000000,
    description: 'Premium residential development project',
    fundingEndDate: '2027-02-01',
    offeringSize: 118000000
  },
  {
    id: '3',
    name: 'Star Avenue Serenity',
    type: 'real_estate',
    targetIRR: 14.8,
    minInvestment: 100000,
    openDate: '2024-01-01',
    closeDate: '2026-11-30',
    status: 'active',
    totalRaised: 10000000,
    targetAmount: 10000000,
    description: 'Luxury residential complex with modern amenities',
    fundingEndDate: '2026-11-30',
    offeringSize: 10000000
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2024-08-29',
    type: 'subscription',
    accountId: '1',
    accountName: 'Kelley, Knox',
    offerId: '2',
    offerName: 'Westing House',
    amount: 2000,
    currency: 'USD',
    status: 'completed',
    reference: 'TXN-2024-001'
  },
  {
    id: '2',
    date: '2024-08-29',
    type: 'subscription',
    accountId: '2',
    accountName: 'Micheal, Smith',
    offerId: '3',
    offerName: 'Star Avenue Serenity',
    amount: 100000,
    currency: 'USD',
    status: 'completed',
    reference: 'TXN-2024-002'
  },
  {
    id: '3',
    date: '2024-11-13',
    type: 'subscription',
    accountId: '3',
    accountName: 'Dennis, McGhee',
    offerId: '3',
    offerName: 'Star Avenue Serenity',
    amount: 500000,
    currency: 'USD',
    status: 'completed',
    reference: 'TXN-2024-003'
  }
];

export const mockRedemptions: Redemption[] = [
  {
    id: '1',
    accountId: '1',
    accountName: 'Kelley, Knox',
    offerId: '2',
    offerName: 'Westing House',
    requestedAmount: 0,
    investedAmount: 0,
    redeemAmount: 2.00,
    fee: 0,
    method: 'bank_transfer',
    status: 'completed',
    requestedAt: '2024-08-29',
    kycStatus: 'Auto Approved',
    redeemStatus: 'completed',
    createdAt: '2024-08-29'
  },
  {
    id: '2',
    accountId: '2',
    accountName: 'Micheal, Smith',
    offerId: '3',
    offerName: 'Star Avenue Serenity',
    requestedAmount: 100000,
    investedAmount: 100000,
    redeemAmount: 10000,
    fee: 0,
    method: 'bank_transfer',
    status: 'completed',
    requestedAt: '2024-08-29',
    kycStatus: 'Auto Approved',
    redeemStatus: 'completed',
    createdAt: '2024-08-29'
  },
  {
    id: '3',
    accountId: '3',
    accountName: 'Dennis, McGhee',
    offerId: '3',
    offerName: 'Star Avenue Serenity',
    requestedAmount: 2833300,
    investedAmount: 2833333,
    redeemAmount: 500000,
    fee: 0,
    method: 'bank_transfer',
    status: 'completed',
    requestedAt: '2024-11-13',
    kycStatus: 'Auto Approved',
    redeemStatus: 'completed',
    createdAt: '2024-11-13'
  }
];

export const mockDistributions: DistributionRun[] = [
  {
    id: '1',
    date: '2024-09-01',
    offerId: '1',
    offerName: 'Energy Campuses AI Development',
    totalAmount: 250000,
    method: 'bank_transfer',
    status: 'completed',
    recordDate: '2024-08-31',
    payDate: '2024-09-01',
    accountsCount: 15
  },
  {
    id: '2',
    date: '2024-09-15',
    offerId: '2',
    offerName: 'Westing House',
    totalAmount: 180000,
    method: 'bank_transfer',
    status: 'completed',
    recordDate: '2024-09-14',
    payDate: '2024-09-15',
    accountsCount: 12
  }
];

export const dashboardKPIs = [
  {
    label: 'Investors',
    value: 38,
    change: 8.2,
    changeType: 'increase' as const,
    trend: [20, 25, 30, 35, 38]
  },
  {
    label: 'Invested',
    value: '12.3K',
    change: 15.4,
    changeType: 'increase' as const,
    trend: [8000, 9500, 10200, 11800, 12300]
  },
  {
    label: 'Distributed',
    value: '2.1K',
    change: 3.2,
    changeType: 'increase' as const,
    trend: [1500, 1700, 1900, 2000, 2100]
  },
  {
    label: 'Redeemed All',
    value: '2.2K',
    change: -2.1,
    changeType: 'decrease' as const,
    trend: [2800, 2600, 2400, 2300, 2200]
  }
];

export const chartData = {
  monthlyFlow: [
    { month: 'Jan', invested: 50000, distributed: 15000, redeemed: 8000 },
    { month: 'Feb', invested: 75000, distributed: 18000, redeemed: 12000 },
    { month: 'Mar', invested: 60000, distributed: 22000, redeemed: 15000 },
    { month: 'Apr', invested: 90000, distributed: 25000, redeemed: 18000 },
    { month: 'May', invested: 120000, distributed: 28000, redeemed: 20000 },
    { month: 'Jun', invested: 85000, distributed: 30000, redeemed: 25000 },
    { month: 'Jul', invested: 110000, distributed: 35000, redeemed: 22000 },
    { month: 'Aug', invested: 250000, distributed: 40000, redeemed: 30000 }
  ],
  investorAllocation: [
    { name: 'Star Avenue Serenity', value: 7820000, investors: 256 },
    { name: 'Energy Campuses AI Data Center', value: 6890000, investors: 189 },
    { name: 'Westing House', value: 4750000, investors: 167 },
    { name: 'PITES Solution', value: 3200000, investors: 134 },
    { name: 'Others', value: 2100000, investors: 98 }
  ]
};

// Mock API simulation with artificial delay
export const mockAPI = {
  async getAccounts(): Promise<Account[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockAccounts;
  },

  async getOffers(): Promise<Offer[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockOffers;
  },

  async getTransactions(): Promise<Transaction[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockTransactions;
  },

  async getRedemptions(): Promise<Redemption[]> {
    await new Promise(resolve => setTimeout(resolve, 450));
    return mockRedemptions;
  },

  async getDistributions(): Promise<DistributionRun[]> {
    await new Promise(resolve => setTimeout(resolve, 350));
    return mockDistributions;
  }
};