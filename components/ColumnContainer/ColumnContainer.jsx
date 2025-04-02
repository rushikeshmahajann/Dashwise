import React, { useMemo, useState, useEffect } from "react";
import "./column-container.css";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "../TaskCard/TaskCard";
import Trash from "../../icons/Trash";
import Plus from "../../icons/Plus";

const ColumnContainer = ({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  deleteTask,
  updateTask,
  tasks,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [bgColor, setBgColor] = useState("");

  // Array of Tailwind bg-colors with -100 variants
  const bgColors = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
    "bg-teal-100",
    "bg-orange-100",
    "bg-cyan-100",
    "bg-rose-100",
    "bg-lime-100",
    "bg-emerald-100",
    "bg-sky-100",
    "bg-violet-100",
    "bg-fuchsia-100",
    "bg-amber-100"
  ];

  // Choose random color on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    setBgColor(bgColors[randomIndex]);
  }, []);

  const tasksIds = useMemo(() => {
    return tasks.map(task => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-neutral-400 opacity-10 w-[350px] h-[500px] max-h-[500px] flex flex-col rounded-md border-3 border-neutral-800 border-dashed"
      />
    );
  }
  
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`col-container ${bgColor} border-gray-300 border-[1px] bg-opacity-40 w-[350px] h-[500px] max-h-[500px] flex flex-col rounded-lg`}
    >
      {/* Column Title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="title-container tracking-tight rounded-md text-neutral-900 font-normal bg-transparent"
      >
        <div className="flex gap-2 justify-between cursor-grab">
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-transparent rounded outline-none px-2 hover:cursor-text"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
          <div className="flex flex-row-reverse gap-2">
            <button
              onClick={() => {
                deleteColumn(column.id);
              }}
              className="delete-btn text-white stroke-neutral-500 hover:stroke-neutral-900 transition-colors ease-in-out"
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col text-white overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
              columnId={column.title}
            />
          ))}
        </SortableContext>
      </div>
      <button
        onClick={() => {
          createTask(column.id);
        }}
        className="add-task-btn stroke-neutral-500 hover:stroke-neutral-900 transition-colors ease-in-out flex gap-1 items-center text-neutral-500 hover:text-neutral-700"
      >
        <Plus />Add Task
      </button>
    </div>
  );
};

export default ColumnContainer;