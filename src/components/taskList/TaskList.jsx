import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import useAuthStore from "../../store/authUser";

const TaskList = () => {
    const { loggedInEmployee } = useAuthStore();
    
    
  return (
    <div id='tasklist' className=" h-[55%] w-full flex gap-5 overflow-x-auto mt-10 py-5 items-center">
    {loggedInEmployee?.tasks?.map((elem, index) => {
  if (elem.active) {
    return <AcceptTask key={index}  loggedInEmployee={elem}/>;
  }

  if (elem.newTask) {
    return <NewTask key={index} loggedInEmployee={elem} />;
  }

  if (elem.completed) {
    return <CompletedTask key={index} loggedInEmployee={elem} />;
  }

  if (elem.failed) {
    return <FailedTask key={index} loggedInEmployee={elem} />;
  }

  return null;
})}

    </div>
  );
};

export default TaskList;