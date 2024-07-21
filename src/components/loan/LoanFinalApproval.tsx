import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const LoanFinalApproval = ({ applicationData, validationData, onSubmit }: LoanFinalApprovalProps) => {
  const [approvalData, setApprovalData] = useState<ApprovalData>({
    managerReview: '',
    interestRate: '',
    loanTerm: '',
    additionalConditions: '',
    disbursementDate: '',
    disbursementMethod: '',
    managerNotes: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setApprovalData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setApprovalData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(approvalData)
  }

  return (
    <Card className="w-[450px] mx-auto">
      <CardHeader>
        <CardTitle>Final Loan Approval</CardTitle>
        <CardDescription>Please review and make the final decision on the loan application.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Applicant Information</h3>
            <p>Name: {applicationData.fullName}</p>
            <p>Email: {applicationData.email}</p>
            <p>Loan Amount: ${applicationData.loanAmount}</p>
            <p>Purpose: {applicationData.purpose}</p>
          </div>
          {/* <div>
            <h3 className="font-semibold">Validation Results</h3>
            {Object.entries(validationData).map(([key, value]) => (
              <p key={key}>{key}: {value}</p>
            ))}
          </div> */}
          <div className="space-y-2">
            <Label>Manager Review</Label>
            <RadioGroup name="managerReview" onValueChange={(value) => handleSelectChange('managerReview', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="approved" id="reviewApproved" />
                <Label htmlFor="reviewApproved">Approved</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rejected" id="reviewRejected" />
                <Label htmlFor="reviewRejected">Rejected</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moreInfo" id="reviewMoreInfo" />
                <Label htmlFor="reviewMoreInfo">Need More Information</Label>
              </div>
            </RadioGroup>
          </div>
          {approvalData.managerReview === 'approved' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input id="interestRate" name="interestRate" type="number" step="0.01" value={approvalData.interestRate} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loanTerm">Loan Term (months)</Label>
                <Input id="loanTerm" name="loanTerm" type="number" value={approvalData.loanTerm} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalConditions">Additional Conditions</Label>
                <Textarea id="additionalConditions" name="additionalConditions" value={approvalData.additionalConditions} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disbursementDate">Disbursement Date</Label>
                <Input id="disbursementDate" name="disbursementDate" type="date" value={approvalData.disbursementDate} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disbursementMethod">Disbursement Method</Label>
                <Select name="disbursementMethod" onValueChange={(value) => handleSelectChange('disbursementMethod', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select disbursement method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bankTransfer">Bank Transfer</SelectItem>
                    <SelectItem value="check">Check</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          <div className="space-y-2">
            <Label htmlFor="managerNotes">Manager Notes</Label>
            <Textarea id="managerNotes" name="managerNotes" value={approvalData.managerNotes} onChange={handleInputChange} required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Submit Final Decision</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default LoanFinalApproval
