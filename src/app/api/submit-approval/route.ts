import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

import { sendEmail } from '@/lib/utils/emailSender'

export async function POST(req: Request) {
    const data = await req.json();
    const { id, approval } = data;
 
    // const filePath = path.join(process.cwd(), 'data', 'applications.json')

    return Response.json({...data, status: 'approved' }, { status: 200 });

    
    // if (fs.existsSync(filePath)) {
    //   const fileContent = fs.readFileSync(filePath, 'utf-8')
    //   let applications = JSON.parse(fileContent)
      
    //   const applicationIndex = applications.findIndex((app: { id: any }) => app.id === id)
    //   if (applicationIndex !== -1) {
    //     const updatedApplication = { ...applications[applicationIndex], approval, status: 'approved' }
    //     applications[applicationIndex] = updatedApplication
    //     fs.writeFileSync(filePath, JSON.stringify(applications, null, 2))
        
    //     if (approval.managerReview === 'approved') {
    //       const pdfBuffer = Buffer.alloc(10);
    //       await sendEmail(updatedApplication.email, 'Loan Approval Confirmation', 'Your loan has been approved. Please find the attached details.', pdfBuffer)
    //     }
        
    //     res.json(updatedApplication)
    //     res.status(200).json(updatedApplication)
    //   } else {
    //     res.status(404).json({ error: 'Application not found' })
    //   }
    // } else {
    //   res.status(404).json({ error: 'No applications found' })
    // }
}
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { id, approval } = req.body
//     const filePath = path.join(process.cwd(), 'data', 'applications.json')
    
//     if (fs.existsSync(filePath)) {
//       const fileContent = fs.readFileSync(filePath, 'utf-8')
//       let applications = JSON.parse(fileContent)
      
//       const applicationIndex = applications.findIndex((app: { id: any }) => app.id === id)
//       if (applicationIndex !== -1) {
//         const updatedApplication = { ...applications[applicationIndex], approval, status: 'approved' }
//         applications[applicationIndex] = updatedApplication
//         fs.writeFileSync(filePath, JSON.stringify(applications, null, 2))
        
//         if (approval.managerReview === 'approved') {
//           const pdfBuffer = Buffer.alloc(10);
//           await sendEmail(updatedApplication.email, 'Loan Approval Confirmation', 'Your loan has been approved. Please find the attached details.', pdfBuffer)
//         }
        
//         res.status(200).json(updatedApplication)
//       } else {
//         res.status(404).json({ error: 'Application not found' })
//       }
//     } else {
//       res.status(404).json({ error: 'No applications found' })
//     }
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }