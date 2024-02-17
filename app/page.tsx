import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getTodosListAction } from "@/Actions/todosAction";

export default async function Home() {
  const todos = await getTodosListAction();

  return (
    <main className="container">
      {/* <pre> {JSON.stringify(todos,undefined,2)}</pre> */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
}
