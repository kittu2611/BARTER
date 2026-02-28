export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name from lucide
  isHot?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  logo: string;
  sponsorshipType: "cash" | "barter" | "both";
  minBudget: number;
  maxBudget: number;
  matchPercentage?: number;
  description?: string;
  proposalTemplate?: string;
}

export interface SponsorshipRequest {
  id: string;
  brandName: string;
  brandLogo: string;
  eventName: string;
  date: string;
  status: 'PENDING' | 'SENT' | 'ACCEPTED' | 'REJECTED';
  attendance: string;
}
