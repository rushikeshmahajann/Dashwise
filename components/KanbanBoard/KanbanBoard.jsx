import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import "./kanbanboard.css";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import TaskCard from "../TaskCard/TaskCard";
import Plus from '../../icons/Plus'

const KanbanBoard = () => {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [activeColumn, setActiveColumn] = useState(null);
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3, // 3 in px
      },
    })
  );

  const createNewColumn = () => {
    const columnToAdd = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  };

  const deleteColumn = (id) => {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
    
    const newTasks = tasks.filter((t)=> 
      t.columnId !== id
    )
    setTasks(newTasks)
  };

  const updateColumn = (id, title) => {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  };

  const createTask = (columnId) => {
    const newTasks = {
      id: generateId(),
      columnId,
      content: `Tasks ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTasks]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const updateTask = (id, content) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });
    setTasks(newTasks);
  };

  const onDragStart = (event) => {
    console.log(event);

    if (event.active?.data?.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }
    if (event.active?.data?.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  };

  const onDragEnd = (event) => {
    setActiveColumn(null)
    setActiveTask(null)
    const { active, over } = event;
    if (!over) return;

    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex(
        (col) => col.id === activeColumnId
      );

      const overColumnIndex = columns.findIndex(
        (col) => col.id === overColumnId
      );
      if (activeColumnIndex === overColumnIndex) return columns;

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  };

  const onDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if(!isActiveTask) return;

    //Secanario 1: Dropping a task over another task.
    if (isActiveTask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);
        
        tasks[activeIndex].columnId = tasks[overIndex].columnId

        return arrayMove(tasks, activeIndex, overIndex)
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";
    //Secanario 2: Dropping a task over a column

    if(isActiveTask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        
        
        tasks[activeIndex].columnId = overId

        return arrayMove(tasks, activeIndex, activeIndex)
      });
    }
  };

  const generateId = () => {
    return Math.floor(Math.random() * 10001);
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="overflow-y-hidden">
          <div className="flex gap-2">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <div key={col.id}>
                  <ColumnContainer
                    column={col}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                    createTask={createTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    tasks={tasks.filter((task) => task.columnId === col.id)}
                  />
                </div>
              ))}
            </SortableContext>
          </div>

          <button
            className="add-column-btn rounded-md stroke-neutral-500 hover:stroke-neutral-800 text-white fixed bottom-10 right-10"
            onClick={() => createNewColumn()}
          >
            <Plus />
          </button>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                deleteTask={deleteTask}
                createTask={createTask}
                updateTask={updateTask}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id
                )}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </>
  );
};

export default KanbanBoard;
