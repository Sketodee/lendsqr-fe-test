export interface FilterPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onFilter: (filters: FilterState) => void;
  }
  
  export interface FilterState {
    organization: string;
    username: string;
    email: string;
    date: string;
    phoneNumber: string;
    status: string;
  }

  export interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
  }
  

  export interface StatCardProps {
    icon: any;
    title: string;
    value: number;
    color: string;
  }

  interface Profile {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  }
  
  interface Guarantor {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  }
  
  interface Socials {
    facebook: string;
    instagram: string;
    twitter: string;
  }
  
  interface Education {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[]; 
    loanRepayment: string;
  }
  
  export interface UserData {
    createdAt: string; 
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string; 
    profile: Profile;
    guarantor: Guarantor;
    accountBalance: string;
    accountNumber: string;
    socials: Socials;
    education: Education;
    id: string;
  }
  
  export interface Column {
    key: keyof User;
    header: string;
  }

  export interface User {
    id: number
    createdAt: string;
    lastActiveDate: string
    userName: string;
    orgName: string;
    email: string;
    phoneNumber: string;
}