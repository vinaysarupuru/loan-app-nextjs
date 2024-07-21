
interface ApplicationData {
    fullName: string;
    email: string;
    loanAmount: number;
    purpose: string;
    income: number
  employment: string
  }
  
  interface ValidationData {
    [key: string]: string;
  }
  
  interface ApprovalData {
    managerReview: string;
    interestRate: string;
    loanTerm: string;
    additionalConditions: string;
    disbursementDate: string;
    disbursementMethod: string;
    managerNotes: string;
  }
  
  interface LoanFinalApprovalProps {
    applicationData: ApplicationData;
    validationData: ValidationData;
    onSubmit: (data: ApprovalData) => void;
  }
  

  
interface FormData {
    fullName: string
    email: string
    loanAmount: string
    purpose: string
    income: string
    employment: string
  }
  
  interface LoanRequestFlowProps {
    onSubmit: (data: FormData) => void
  }


  
interface ValidationData {
    personalInfoVerified: string
    cibilScore: string
    cibilScoreVerified: string
    incomeVerified: string
    employmentVerified: string
    legalChecks: string
  }
  
  

interface ApprovalData {
    managerReview: string
    interestRate: string
    loanTerm: string
    additionalConditions: string
    disbursementDate: string
    disbursementMethod: string
    managerNotes: string
  }
  