import React, { useEffect, useRef } from "react";
import { Command } from "cmdk";
import Graph from "../../icons/Graph";
import Calendar from "../../icons/Calendar";
import Stack from "../../icons/Stack";
import Invite from "../../icons/Invite";
import Setting from "../../icons/Setting";
import Help from "../../icons/Help";
import { UserButton } from "@clerk/clerk-react";
import { LuCommand } from "react-icons/lu";

const CommandMenu = ({ open, setOpen }) => {
  const commandRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commandRef.current && !commandRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <Command.Dialog
      className="fixed inset-0 bg-neutral-900/60 tracking-tight "
      open={open}
      onOpenChange={setOpen}
      ref={commandRef}
    >
      <div className="bg-white z-999 rounded-lg shadow-xl border-neutral-400 border overflow-hidden w-full max-w-lg mx-auto mt-40 p-5">
        <Command.Input
          className="relative border-b border-neutral-200 text-xl text-neutral-700 pb-1 w-full focus:ring-0 focus:outline-none"
          placeholder="Search"
        />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group className="group-title" heading="Overview">
            <Command.Item className="command-item-name">
              <Graph />
              Dashboard
            </Command.Item>
            <Command.Item className="command-item-name ">
              <Calendar />
              Calendar
            </Command.Item>
            <Command.Item className="command-item-name ">
              <Stack />
              Kanban Board
            </Command.Item>
            <Command.Separator />
          </Command.Group>
          <Command.Group className="group-title" heading="Useful links">
            <Command.Item className="command-item-name">
              <Help />
              Help Center
            </Command.Item>
            <Command.Item className="command-item-name ">
              <Setting />
              Settings
            </Command.Item>
            <Command.Item className="command-item-name ">
              <Invite />
              Invite Teams
            </Command.Item>
            <Command.Separator />
          </Command.Group>
          <Command.Group className="group-title" heading="Session">
            <Command.Item className="command-item-name  flex justify-between">
              <UserButton className="cmd-user-button" />
              <span className="ml-2 flex items-center text-neutral-400">
                <LuCommand />K to exit
              </span>
            </Command.Item>

            <Command.Separator />
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;
