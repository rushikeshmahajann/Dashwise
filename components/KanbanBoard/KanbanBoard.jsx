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
import Plus from "../../icons/Plus";
import Stack from "../../icons/Stack";
import SectionTitle from "../SectionTitle";

const KanbanBoard = () => {
  const [columns, setColumns] = useState([
    { id: 5700, title: "To-Do 🥱" },
    { id: 6618, title: "In Progress 👷🏻" },
    { id: 9025, title: "Done 😮‍💨" },
  ]);
  const [tasks, setTasks] = useState([
    { id: 9469, columnId: 5700, content: 'This is Kanban Board you can click and grab near top of either column or task container to make it move but make sure to do it slowly.' },
    { id: 7380, columnId: 5700, content: 'You can easily change title or task by clicking on it.' },
    { id: 7862, columnId: 5700, content: 'If my app crashes because of kanban I am sorry but u can always go back to base url:)' },
    { id: 9120, columnId: 6618, content: 'BTW I asked you to move things slowly because I believe React 19 has a bug where it goes to infinite render mode and app crashes and I dont want you to see me fail miserably.' },
    { id: 710, columnId: 6618, content: 'I am using an insane library called dnd kit to make things move here.' },
    { id: 7861, columnId: 9025, content: 'I didnt know how to do this before but I learnt it recently.' },
    { id: 3952, columnId: 9025, content: 'Adding Task and Adding more column is pretty self explanatory also the colors are randomized for now on every render.' }
  ]);
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

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
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
    console.log(tasks);
    
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
    setActiveColumn(null);
    setActiveTask(null);

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

    if (!isActiveTask) return;

    //Secanario 1: Dropping a task over another task.
    if (isActiveTask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        tasks[activeIndex].columnId = tasks[overIndex].columnId;

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";
    //Secanario 2: Dropping a task over a column

    if (isActiveTask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  };

  const generateId = () => {
    return Math.floor(Math.random() * 10001);
  };

  return (
    <>
      <SectionTitle title={"Kanban Board"} subHeading={"Streamline your tasks"} icon={<Stack />} />
      <button
        className="add-column-btn rounded-md stroke-neutral-500 hover:stroke-neutral-800 text-neutral-500 hover:text-neutral-800 tracking-tight flex items-center bg-gray-100 px-1.5 py-1 mb-2"
        onClick={() => createNewColumn()}
      >
        <Plus />Add Column
      </button>

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
