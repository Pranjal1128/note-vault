import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import AdminSidebar from "./AdminSidebar";

interface CardProps {
  semester: number;
}

const MainComponent: React.FC<CardProps> = ({ semester }) => {
  return (
    <Link to={`/material/${semester}`}>
      <div className="bg-white shadow-md rounded-lg p-4 transform transition-transform hover:scale-105 hover:shadow-lg text-center">
        <h2 className="text-xl font-semibold">Semester {semester}</h2>
      </div>
    </Link>
  );
};

const Semester: React.FC = () => {
  return (
    <div className="admin-container flex flex-col items-center justify-center min-h-screen">
      <AdminSidebar />
      <main className="dashboard mx-4 md:mx-10">
        <section className="my-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mt-20 md:mt-0">Choose Your Semester</h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2  gap-4 mb-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
            <MainComponent key={semester} semester={semester} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Semester;
