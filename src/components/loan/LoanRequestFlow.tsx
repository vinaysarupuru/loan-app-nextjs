import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

interface LoanRequestFlowProps {
  onSubmit: (data: ApplicationData) => void
}

const LoanRequestFlow: React.FC<LoanRequestFlowProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    loanAmount: '',
    purpose: '',
    income: '',
    employment: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      loanAmount: parseFloat(formData.loanAmount),
      income: parseFloat(formData.income),
    })
  }

  return (
    <Card className="w-[450px] mx-auto">
      <CardHeader>
        <CardTitle>Loan Application</CardTitle>
        <CardDescription>Please fill out the loan application form.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount</Label>
            <Input id="loanAmount" name="loanAmount" type="number" value={formData.loanAmount} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="purpose">Loan Purpose</Label>
            <Input id="purpose" name="purpose" value={formData.purpose} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="income">Annual Income</Label>
            <Input id="income" name="income" type="number" value={formData.income} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employment">Employment Status</Label>
            <Input id="employment" name="employment" value={formData.employment} onChange={handleInputChange} required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Submit Application</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default LoanRequestFlow
