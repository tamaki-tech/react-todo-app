import { Grid, Button, Checkbox } from "@material-ui/core";
import React from "react";
import { TodoItem } from "../TodoItem";
import TodoName from "./TodoName";

type TodoRowProps = {
  todo: TodoItem;
  onTodoCheck: (id: number, checkd: boolean) => void;
};

const TodoRow = (props: TodoRowProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onTodoCheck(props.todo.id, e.target.checked);
  };

  return (
    <Grid container>
      <Grid item xs={1}>
        <Checkbox
          checked={props.todo.status}
          onChange={handleOnChange}
        />
      </Grid>

      <Grid item xs={9}>
        <TodoName status={props.todo.status} name={props.todo.name}></TodoName>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoRow;
