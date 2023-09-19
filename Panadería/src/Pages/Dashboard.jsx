import React from "react";
import NavDashboard from "../Components/NavDashboard";
import ListaPanes from "../Components/ListaPanes";

const Dashboard = () => {
  return (
    <div className="flex justify-center bg-amber-100">
      <div className="w-screen h-screen">
        <NavDashboard />
        <ListaPanes />
      </div>
    </div>
  );
};

export default Dashboard;
