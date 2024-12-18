"use server";

import db from "../lib/db";
import { revalidateTag } from "next/cache";

export async function createUser() {
  const data = {
    name: Math.random().toString(36).substring(2, 11),
    id: Math.random() * (100 - 1) + 1,
    email: Math.random().toString(36).substring(2, 11),
    password: Math.random().toString(36).substring(2, 11),
  };
  console.log(data);

  const user = await db.user.create({
    data: {
      username: data.name,
      email: data.email,
      password: data.password,
    },
    select: {
      id: true,
    },
  });

  revalidateTag("users");
}
