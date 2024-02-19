"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoAction } from "@/Actions/todosAction";
import Spiner from "./Spiner";

const TodoTableAction = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button size={"icon"}>
        <Pen size={16} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id });
          setLoading(false);
        }}
      >
        {loading ? <Spiner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableAction;
