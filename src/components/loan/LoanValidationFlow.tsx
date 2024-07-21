import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'


interface LoanValidationFlowProps {
  applicationData: ApplicationData
  onSubmit: (data: ValidationData) => void
}

const LoanValidationFlow: React.FC<LoanValidationFlowProps> = ({ applicationData, onSubmit }) => {
  const [validationData, setValidationData] = useState<ValidationData>({
    personalInfoVerified: '',
    cibilScore: '',
    cibilScoreVerified: '',
    incomeVerified: '',
    employmentVerified: '',
    legalChecks: ''
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValidationData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleRadioChange = (name: keyof ValidationData, value: string) => {
    setValidationData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(validationData)
  }

  return (
    <Card className="w-[450px] mx-auto">
      <CardHeader>
        <CardTitle>Loan Application Validation</CardTitle>
        <CardDescription>Please verify the applicant`&apos;s information.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Applicant Information</h3>
            <p>Name: {applicationData.fullName}</p>
            <p>Email: {applicationData.email}</p>
            <p>Loan Amount: ${applicationData.loanAmount}</p>
            <p>Purpose: {applicationData.purpose}</p>
            <p>Income: ${applicationData.income}</p>
            <p>Employment: {applicationData.employment}</p>
          </div>
          <div className="space-y-2">
            <Label>Personal Information Verified</Label>
            <RadioGroup name="personalInfoVerified" onValueChange={(value) => handleRadioChange('personalInfoVerified', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="personalInfoYes" />
                <Label htmlFor="personalInfoYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="personalInfoNo" />
                <Label htmlFor="personalInfoNo">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cibilScore">CIBIL Score</Label>
            <Input id="cibilScore" name="cibilScore" type="number" value={validationData.cibilScore} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label>CIBIL Score Verified</Label>
            <RadioGroup name="cibilScoreVerified" onValueChange={(value) => handleRadioChange('cibilScoreVerified', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="cibilYes" />
                <Label htmlFor="cibilYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="cibilNo" />
                <Label htmlFor="cibilNo">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Income Verified</Label>
            <RadioGroup name="incomeVerified" onValueChange={(value) => handleRadioChange('incomeVerified', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="incomeYes" />
                <Label htmlFor="incomeYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="incomeNo" />
                <Label htmlFor="incomeNo">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Employment Verified</Label>
            <RadioGroup name="employmentVerified" onValueChange={(value) => handleRadioChange('employmentVerified', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="employmentYes" />
                <Label htmlFor="employmentYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="employmentNo" />
                <Label htmlFor="employmentNo">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Legal Checks Passed</Label>
            <RadioGroup name="legalChecks" onValueChange={(value) => handleRadioChange('legalChecks', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="legalYes" />
                <Label htmlFor="legalYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="legalNo" />
                <Label htmlFor="legalNo">No</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Submit Validation</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default LoanValidationFlow
