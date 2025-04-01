import React, { useState } from "react";
import "./taskcard.css";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Trash from "../../icons/Trash";
import Minus from "../../icons/Minus";

const TaskCard = ({ task, deleteTask, updateTask, columnId }) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="task-container bg-white opacity-60 flex items-center justify-between relative rounded-lg task h-[100px] border-2 border-dashed border-neutral-400"
      />

    );
  }
  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="task-container w-[100%] bg-white flex items-center justify-between text-neutral-300 task relative rounded-lg hover:ring-1 hover:ring-inset hover:ring-neutral-300 cursor-grab "
      >
        <div className="flex flex-col w-full">
        <h4 className="col-id bg-gray-200 text-gray-500 rounded-sm text-sm tracking-tight">{columnId}</h4>
        <textarea
          className="task-content-edit my-auto w-full h-[100px] overflow-x-hidden overflow-y-auto text-md tracking-tight text-neutral-700 cursor-text resize-none focus:outline-none focus:ring-0"
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) toggleEditMode();
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        ></textarea>
        </div>
      </div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="task-container bg-white flex items-baseline justify-between border-[1px] text-neutral-300 task relative rounded-lg hover:ring-1 hover:ring-inset text-wrap hover:ring-neutral-300 cursor-grab"

      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <div className="flex flex-col relative w-full">
      <h4 className="col-id bg-gray-200 text-gray-500 rounded-sm text-sm tracking-tight">{columnId}</h4>
      <textarea className="task-content my-auto h-[100px] overflow-x-hidden overflow-y-auto text-md tracking-tight text-neutral-700 cursor-text resize-none focus:outline-none focus:ring-0" >
        {task.content}
      </textarea>
      </div>
      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="trash-button stroke-neutral-500 hover:stroke-neutral-700 bg-transparent"
        >
          <Trash />
        </button>
      )}
    </div>
  );
};

export default TaskCard;
