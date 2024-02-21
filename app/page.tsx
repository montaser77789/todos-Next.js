import { getTodosListAction } from "@/Actions/todosAction";
import CreateDialogForm from "@/components/CreatrDialogForm";
import Todotable from "@/components/todosTable";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const {userId} = auth();
  const todos = await getTodosListAction({userId});
  

  return (
    <main className="container flex flex-col justify-end items-end p-x-9">
      <CreateDialogForm userId={userId} />

      <Todotable todos={todos} />
    </main>
  );
}
