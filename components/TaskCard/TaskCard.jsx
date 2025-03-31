import React, { useState } from "react";
import "./taskcard.css";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Trash from "../../icons/Trash";
import Minus from "../../icons/Minus";

const TaskCard = ({ task, deleteTask, updateTask }) => {
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
        className="task-container bg-white opacity-60 flex items-center justify-between  task relative rounded-lg task h-[100px]"
      >
        Dragging Task
      </div>
    );
  }
  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="task-container bg-white flex items-center justify-between text-neutral-300 task relative rounded-lg hover:ring-1 hover:ring-inset hover:ring-neutral-300 cursor-grab"
      >
        <textarea
          className="task-content w-full my-auto h-[100px] overflow-x-hidden overflow-y-auto whitespace-pre-wrap text-md tracking-tight text-neutral-700 cursor-text  focus:outline-none focus:ring-0 "
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
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="task-container bg-white flex items-baseline justify-between border-[1px] text-neutral-300 task relative rounded-lg hover:ring-1 hover:ring-inset hover:ring-neutral-300 cursor-grab"

      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="task-content my-auto h-[100px] overflow-x-hidden overflow-y-auto whitespace-pre-wrap text-md tracking-tight text-neutral-700 cursor-text ">
        {task.content}
      </p>
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
