import { getTodosListAction } from "@/Actions/todosAction";
import CreateDialogForm from "@/components/CreatrDialogForm";
import Todotable from "@/components/todosTable";

export default async function Home() {
  const todos = await getTodosListAction();

  return (
    <main className="container flex flex-col justify-end items-end p-x-9">
      <CreateDialogForm />

      <Todotable todos={todos} />
    </main>
  );
}
