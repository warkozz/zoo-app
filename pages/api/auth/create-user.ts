import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../../src/lib/auth';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    if (req.headers.authorization !== 'Bearer your-admin-secret-token') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const { email, password, role } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(422).json({ message: 'User already exists!' });
    }

    const hashedPassword = await hashPassword(password);

    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role,
        },
      });

      return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
