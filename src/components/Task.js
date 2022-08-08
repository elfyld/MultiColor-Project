import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Checkbox from "@material-ui/core/Checkbox";

const Task = ({
  task_id,
  task,
  task_day,
  onDelete,
  onUpdate,
  checkTask,
  taskCompleteness,
  index,
  setIsEditing,
  setIndexOfEdit,
  setValue,
}) => {
  const Editing = () => {
    setIsEditing(true);
    setIndexOfEdit(index);
    setValue(task);
    console.log(task);
  };

  return (
    <div className="task card-body">
      <div class="row justify-content-between">
        {" "}
        <div class="col-sm-auto">
          <Checkbox
            onChange={() => checkTask(task_id)}
            checked={taskCompleteness}
          />{" "}
          <span
            className="col-sm-auto"
            style={{ textDecoration: taskCompleteness ? "line-through" : "" }}
          >
            {task}{" "}
          </span>
        </div>
        <div class="col-sm-auto">
          <FaEdit onClick={() => Editing()} />
          <FaTimes onClick={() => onDelete(task_id)} />
        </div>
      </div>
    </div>
  );
};
export default Task;
