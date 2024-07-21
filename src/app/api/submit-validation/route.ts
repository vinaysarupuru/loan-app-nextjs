import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'


export async function POST(req: Request) {
  const data = await req.json();
    const { id, validation } = data;
    return Response.json({...data, status: 'validated' }, { status: 200 });
    // const filePath = path.join(process.cwd(), 'data', 'applications.json')
    
    // if (fs.existsSync(filePath)) {
    //   const fileContent = fs.readFileSync(filePath, 'utf-8')
    //   let applications = JSON.parse(fileContent)
      
    //   const applicationIndex = applications.findIndex((app: { id: any }) => app.id === id)
    //   if (applicationIndex !== -1) {
    //     applications[applicationIndex] = { ...applications[applicationIndex], validation, status: 'validated' }
    //     fs.writeFileSync(filePath, JSON.stringify(applications, null, 2))
    //     res.status(200).json(applications[applicationIndex])
    //   } else {
    //     res.status(404).json({ error: 'Application not found' })
    //   }
    // } else {
    //   res.status(404).json({ error: 'No applications found' })
    // }
}
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { id, validation } = req.body
//     const filePath = path.join(process.cwd(), 'data', 'applications.json')
    
//     if (fs.existsSync(filePath)) {
//       const fileContent = fs.readFileSync(filePath, 'utf-8')
//       let applications = JSON.parse(fileContent)
      
//       const applicationIndex = applications.findIndex((app: { id: any }) => app.id === id)
//       if (applicationIndex !== -1) {
//         applications[applicationIndex] = { ...applications[applicationIndex], validation, status: 'validated' }
//         fs.writeFileSync(filePath, JSON.stringify(applications, null, 2))
//         res.status(200).json(applications[applicationIndex])
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