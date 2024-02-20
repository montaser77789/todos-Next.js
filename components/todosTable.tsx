import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Itodo } from "@/Interfaces";
import { Badge } from "./ui/badge";
import TodoTableAction from "./TodoTableAction";

export default function Todotable({ todos }: { todos: Itodo[] }) {
  return (
    
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>
                {todo.completed ? (
                  <Badge>Completed</Badge>
                ) : (
                  <Badge variant="secondary">Uncompleted</Badge>
                )}
              </TableCell>
              <TableCell className="flex items-center justify-end space-x-2">
                <TodoTableAction todo={todo} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
   
  );
}
