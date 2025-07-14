import React from "react";
import TaskManager from "../components/TaskManager";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="space-y-6">
      <Card title="Welcome to PLP Task Manager">
        <p className="mb-4">
          Manage your tasks efficiently with this simple and intuitive task
          manager.
        </p>
      </Card>
      <TaskManager />
    </div>
  );
};

export default Home;
