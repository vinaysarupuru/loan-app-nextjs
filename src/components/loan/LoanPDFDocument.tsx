import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, marginBottom: 10 },
  section: { marginBottom: 10 },
  label: { fontWeight: 'bold' },
})

interface ApplicationData {
    fullName: string
    loanAmount: number
    approval: {
      interestRate: number
      loanTerm: number
      disbursementDate: string
      disbursementMethod: string
      additionalConditions: string
    }
  }

  
  const LoanDocument: React.FC<{ application: ApplicationData }> = ({ application }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Loan Approval Document</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Applicant Name: </Text>
          <Text>{application.fullName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Loan Amount: </Text>
          <Text>${application.loanAmount}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Interest Rate: </Text>
          <Text>{application.approval.interestRate}%</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Loan Term: </Text>
          <Text>{application.approval.loanTerm} months</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Disbursement Date: </Text>
          <Text>{application.approval.disbursementDate}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Disbursement Method: </Text>
          <Text>{application.approval.disbursementMethod}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Additional Conditions: </Text>
          <Text>{application.approval.additionalConditions}</Text>
        </View>
      </Page>
    </Document>
  )

  export default LoanDocument;