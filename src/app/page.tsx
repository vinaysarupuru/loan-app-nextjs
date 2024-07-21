"use client";
import LoanFinalApproval from '@/components/loan/LoanFinalApproval'
import LoanRequestFlow from '@/components/loan/LoanRequestFlow'
import LoanValidationFlow from '@/components/loan/LoanValidationFlow'
import { useState } from 'react'
export default function Home() {
  const [stage, setStage] = useState<'request' | 'validation' | 'approval' | 'complete'>('request')
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null)
  const [validationData, setValidationData] = useState<ValidationData | null>(null)

  const handleLoanRequest = async (data: ApplicationData) => {
    const response = await fetch('/api/submit-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    setApplicationData(result)
    setStage('validation')
  }

  const handleValidation = async (data: ValidationData) => {
    const response = await fetch('/api/submit-validation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...applicationData, validation: data }),
    })
    const result = await response.json();
  
    setValidationData(result)
    setStage('approval')
    
  }

  const handleApproval = async (data: ApprovalData) => {
    const response = await fetch('/api/submit-approval', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...applicationData, ...validationData, approval: data }),
    })
    const result = await response.json()
    setStage('complete')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Loan Approval System</h1>
      {stage === 'request' && <LoanRequestFlow onSubmit={handleLoanRequest} />}
      {stage === 'validation' && applicationData && <LoanValidationFlow applicationData={applicationData} onSubmit={handleValidation} />}
      {/* {stage === 'approval' && applicationData && <LoanValidationFlow applicationData={applicationData} onSubmit={handleValidation} />} */}
      {stage === 'approval' && applicationData && validationData && <LoanFinalApproval applicationData={applicationData} validationData={validationData} onSubmit={handleApproval} />}
      {stage === 'complete' && <div>Loan process completed!</div>}
    </div>
  )
}
