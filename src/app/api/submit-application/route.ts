import fs from 'fs'
import path from 'path'


// creat nextjs14.2 post api
// https://nextjs.org/docs/api-routes/introduction

export async function POST(req: Request,res:Response) {

    const data = {"fullName":"asflknfb","email":"technorhyno@gmail.com","loanAmount":5453,"purpose":"dsdsgsdg","income":345345,"employment":"435345"};
    // console.log(data);
    const id = Date.now().toString()
    const application = { id, ...data, status: 'pending' }
   
    // const filePath = path.join(process.cwd(), 'data', 'applications.json')
    let applications = []
    
    // if (fs.existsSync(filePath)) {
    //   const fileContent = fs.readFileSync(filePath, 'utf-8')
    //   applications = JSON.parse(fileContent)
    // }
    
    applications.push(application)
    console.log(applications)
    // fs.writeFileSync(filePath, JSON.stringify(applications, null, 2))
    
    return  Response.json(application);
}

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const data = req.body
//     const id = Date.now().toString()
//     const application = { id, ...data, status: 'pending' }
    
//     const filePath = path.join(process.cwd(), 'data', 'applications.json')
//     let applications = []
    
//     if (fs.existsSync(filePath)) {
//       const fileContent = fs.readFileSync(filePath, 'utf-8')
//       applications = JSON.parse(fileContent)
//     }
    
//     applications.push(application)
//     fs.writeFileSync(filePath, JSON.stringify(applications, null, 2))
    
//     res.status(200).json(application)
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }