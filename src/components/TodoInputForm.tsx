import { Box, Button, Input } from "@material-ui/core";
import { TodoItem } from "../TodoItem";

type TodoInputFormProps = {
  todo: TodoItem;
  onNameCahge: (name: string) => void;
  onAddTodo: () => void;
};

const TodoInputForm = (props: TodoInputFormProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onNameCahge(e.target.value);
  };

  const handleOnAdd = () => {
    props.onAddTodo();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "50%",
      }}
    >
      <Box sx={{ p: 1, m: 1, width: "100%" }}>
        <Input type="text" onChange={handleOnChange} fullWidth />
      </Box>
      <Box sx={{ p: 1, m: 1 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOnAdd}
          fullWidth
        >
          add
        </Button>
      </Box>
    </Box>
  );
};

export default TodoInputForm;
