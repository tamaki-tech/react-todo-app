import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import TodoInputForm from "./components/TodoInputForm";
import TodoRow from "./components/TodoRow";
import { TodoItem } from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([] as TodoItem[]);
  const [todo, setTodo] = useState({ id: 0, name: "", status: false });

  const handleOnCheck = (id: number, check: boolean) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, status: check } : todo;
    });
    setTodos(newTodos);
  };

  const handleNameChange = (name: string) => {
    const newTodo = { ...todo, name: name };
    setTodo(newTodo);
  };

  const handleAddTodo = () => {
    if (todo.name === "") {
      alert("タスク名を入力して下さい。");
    } else {
      const clerTodo = { id: 0, name: "", status: false };
      setTodo(clerTodo);

      const newTodo: TodoItem = { ...todo, id: todos.length };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);

      handleNameChange("");
    }
  };

  const todoItems = todos.map((todo, idx) => {
    return (
      <section key={idx}>
        <TodoRow
          todo={todo}
          onTodoCheck={(id, check) => handleOnCheck(id, check)}
        />
        <hr />
      </section>
    );
  });

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={8}>
        <Typography variant="h3" component="div" gutterBottom>
          ToDo List
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <TodoInputForm
          todo={todo}
          onNameCahge={(name) => handleNameChange(name)}
          onAddTodo={() => handleAddTodo()}
        />
      </Grid>

      <Grid item xs={8}>
        {todoItems}
      </Grid>
    </Grid>
  );
}

export default App;
