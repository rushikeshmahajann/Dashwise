import React, { useMemo, useState } from "react";
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
      className="col-container bg-gray-100 border-gray-300 border-[1px] bg-opacity-10 w-[350px] h-[500px] max-h-[500px] flex flex-col rounded-lg"
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
          {/* <div className="flex justify-center items-center bg-gray-700"></div> */}
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-transparent  rounded outline-none px-2 hover:cursor-text"
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
          <div className="flex flex-row-reverse gap-2"><button
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

      {/* Column footer */}
    </div>
  );
};

export default ColumnContainer;
