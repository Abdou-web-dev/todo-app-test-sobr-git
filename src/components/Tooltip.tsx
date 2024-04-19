import React from "react";
import { Task } from "../types/taskType";

interface TooltipProps {
  show: boolean;
  content: string;
  task: Task;
}

const Tooltip: React.FC<TooltipProps> = ({ show, content, task }) => {
  let show_valid_tooltip = task.ongoing && !task.isDone && !task.isValidated;
  let show_done_tooltip = task.ongoing && !task.isDone && task.isValidated;

  if (!show) return null;

  return (
    <span
      className={`rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
      tooltip absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1
       ${show_done_tooltip ? "show_done_tooltip" : ""}
      ${show_valid_tooltip ? "show_valid_tooltip" : ""}
      `}
    >
      {content}
    </span>
  );
};

export default Tooltip;