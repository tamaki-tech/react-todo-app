type todoNameProps = {
  name: string;
  status?: boolean;
};

const TodoName = (props: todoNameProps) => {
  return props.status ? (
    <s>
      <span>{props.name}</span>
    </s>
  ) : (
    <span>{props.name}</span>
  );
};

export default TodoName;
