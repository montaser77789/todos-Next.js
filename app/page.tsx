import { getTodosListAction } from "@/Actions/todosAction";
import DialogForm from "@/components/DialogForm";
import Todotable from "@/components/todosTable";

export default async function Home() {
  const todos = await getTodosListAction();

  return (
    <main className="container">
      <DialogForm />

      <Todotable todos={todos} />
    </main>
  );
}
