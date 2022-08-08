import { useState } from "react";

const AddTAsk = ({
  onAdd,
  tasks,
  taskCounter,
  isEditing,
  setIsEditing,
  setValue,
  value,
  UpdateTask,
}) => {
  const [text, setText] = useState("");

  const handleCancelEdit = () => {
    setIsEditing(false);
    setValue("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text });
    setText("");
  };
  const onSave = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please add a task");
      return;
    }

    UpdateTask();
    setIsEditing(false);
    setValue("");
  };

  if (isEditing) {
    return (
      <form className="add-form" onSubmit={onSave}>
        <div className="form-control ">
          <input
            type="text"
            placeholder="Add new to do"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <input type="submit" value="Save" className="btn" />
        <input
          type="submit"
          value="Cancel"
          className="btn"
          onClick={handleCancelEdit}
        />

        <p>
          {" "}
          [{taskCounter} of {tasks} items completed]{" "}
        </p>
      </form>
    );
  } else {
    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control ">
          <input
            type="text"
            placeholder="Add new to do"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input type="submit" value="ADD" className="btn btn-block" />

        <p>
          {" "}
          [{taskCounter} of {tasks} items completed]{" "}
        </p>
      </form>
    );
  }
};

export default AddTAsk;
