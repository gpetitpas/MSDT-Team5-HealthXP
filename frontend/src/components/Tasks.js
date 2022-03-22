import React from "react";
import ManageTasks from "./ManageTasks";


function Tasks() {
  return (
    <div className="Tasks">
      <div class="container">
        <div class="row align-items-center my-5">
            <h1 class="text-white">Tasks</h1>
        </div>
        <div>
          <p class="text-white">Enter and manage any one-off or non-recurring tasks.</p>
        </div>
        <div>
          <ManageTasks />
        </div>
      </div>
    </div>
  );
}

export default Tasks;