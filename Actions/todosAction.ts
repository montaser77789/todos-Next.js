'use server'
import { todoFormValues } from "@/SchemaValidation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodosListAction =async () => {
   return await prisma.todo.findMany({
      orderBy:{
         createdAt:"desc"
      }
   })
};
export const createTodoAction =async ({title , body ,completed}:todoFormValues) => {
   await prisma.todo.create({
      data:{
         title,
         body,
         completed
      }
   }),
   revalidatePath("/")
};
export const updateTodoAction = () => {};
export const deleteTodoAction =async ({id}:{id:string}) => {
   await prisma.todo.delete({
      where:{
         id,
      }
   })
   revalidatePath("/")
};
