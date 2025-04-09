
import React from 'react';
import { Banknote, CreditCard, DollarSign, Percent } from 'lucide-react';

export interface FinancialService {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

// Create icon components as functions to avoid JSX syntax errors in data files
const createBanknoteIcon = () => <Banknote className="h-10 w-10 text-travel-gold" />;
const createDollarSignIcon = () => <DollarSign className="h-10 w-10 text-travel-gold" />;
const createCreditCardIcon = () => <CreditCard className="h-10 w-10 text-travel-gold" />;
const createPercentIcon = () => <Percent className="h-10 w-10 text-travel-gold" />;

export const financialServices: FinancialService[] = [
  {
    title: "Money Transfer",
    description: "Fast and secure international money transfers with competitive exchange rates.",
    features: [
      "IMPS/RTGS transfers",
      "Door step cash collection",
      "Low transaction fees",
      "Real-time tracking"
    ],
    icon: createBanknoteIcon()
  },
  {
    title: "Foreign Exchange",
    description: "Competitive rates for foreign currency exchange for travelers and students.",
    features: [
      "Multiple currency options",
      "Best market rates",
      "Expert market guidance",
      "No hidden fees"
    ],
    icon: createDollarSignIcon()
  },
  {
    title: "Student Services",
    description: "Specialized financial services for international students studying in the UK.",
    features: [
      "Tuition fee transfers",
      "Student living expenses",
      "Educational loan assistance",
      "Documentation support"
    ],
    icon: createCreditCardIcon()
  },
  {
    title: "Travel Finance",
    description: "Financial solutions specifically tailored for international travelers.",
    features: [
      "Travel cash cards",
      "Emergency fund transfers",
      "Travel insurance payment",
      "Hotel & tour payments"
    ],
    icon: createPercentIcon()
  }
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processList: ProcessStep[] = [
  {
    step: "1",
    title: "Consultation",
    description: "Discuss your financial requirements with our experts."
  },
  {
    step: "2",
    title: "Documentation",
    description: "Complete the necessary paperwork for your transaction."
  },
  {
    step: "3",
    title: "Transfer Execution",
    description: "Secure processing of your financial transaction."
  },
  {
    step: "4",
    title: "Confirmation",
    description: "Receive confirmation and tracking details for your transfer."
  }
];
