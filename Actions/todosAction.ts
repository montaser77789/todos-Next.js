"use server";
import { Itodo } from "@/Interfaces";
import { todoFormValues } from "@/SchemaValidation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { date } from "zod";

const prisma = new PrismaClient();

export const getTodosListAction = async () => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
export const createTodoAction = async ({
  title,
  body,
  completed,
}: todoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  }),
    revalidatePath("/");
};
export const updateTodoAction = async ({
  id,
  title,
  body,
  completed,
}: Itodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};
export const deleteTodoAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
