import {NextApiRequest, NextApiResponse} from 'next';

type messageData = {
  message: string,
  email: string,
  name: string,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<messageData>) {
  
}