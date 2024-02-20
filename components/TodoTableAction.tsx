"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoAction } from "@/Actions/todosAction";
import Spiner from "./Spiner";
import EditDialogForm from "./EditDialogForm";
import { Itodo } from "@/Interfaces";

const TodoTableAction = ({ todo }: { todo: Itodo }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <EditDialogForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo.id as string });
          setLoading(false);
        }}
      >
        {loading ? <Spiner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableAction;
