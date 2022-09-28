import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST is allowed" });
  }

  try {
    const data = schema.parse(req.body);

    const userExist = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    data.password = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data,
    });

    res.status(200).json({
      message: "User created successfully",
    });
  } catch (e) {
    res.status(400).json({
      message: "Error creating user",
    });
  }
};
