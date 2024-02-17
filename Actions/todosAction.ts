'use server'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodosListAction =async () => {
   return await prisma.todo.findMany()
};
export const createTodoAction = () => {};
export const updateTodoAction = () => {};
export const deleteTodoAction = () => {};
