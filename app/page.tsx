import DialogForm from "@/components/DialogForm";


export default function Home() {
  // const todos = await getTodosListAction();

  return (
    <main className="container">
      {/* <pre> {JSON.stringify(todos,undefined,2)}</pre> */}
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      <DialogForm/>

    </main>
  );
}
