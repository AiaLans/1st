import AddList from "../add-list/add-list";

const TaskList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <AddList key={id} {...itemProps} onDelete={() => onDelete(id)} />;
  });
  return <ul>{elements}</ul>;
};

export default TaskList;