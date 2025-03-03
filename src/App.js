import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Define Course List
const courseList = [
  { title: "Web Development", desc: "HTML, CSS, JavaScript, React & more." },
  { title: "Machine Learning", desc: "Learn AI, data science & Python." },
  { title: "Java Programming", desc: "OOP concepts, Spring Boot, and more." },
  { title: "Data Structures & Algorithms", desc: "Master sorting, searching, and problem-solving techniques." },
  { title: "Cyber Security", desc: "Learn ethical hacking, cryptography & network security." },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Platform Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
        📚 Online Learning Platform
      </h1>

      {/* Login & Signup Buttons */}
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mb-8">
        <Link to="/login" className="bg-blue-500 px-6 py-2 text-white rounded-md shadow-md hover:bg-blue-600 transition">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 px-6 py-2 text-white rounded-md shadow-md hover:bg-green-600 transition">
          Signup
        </Link>
      </div>

      {/* Courses Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">🔥 Our Courses</h2>

      {/* Courses Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {courseList.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 text-center">
            <h3 className="text-lg font-semibold text-blue-600">{course.title}</h3>
            <p className="text-gray-600">{course.desc}</p>
            <Link to="/login">
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Join Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/signup" element={<h2>Signup Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
