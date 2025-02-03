import React from 'react';
import { User, Book, Clock, Award } from 'lucide-react';

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <User className="h-12 w-12 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Book className="h-6 w-6 text-indigo-600" />
                <h3 className="text-lg font-semibold">Enrolled Courses</h3>
              </div>
              <p className="text-3xl font-bold">4</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-indigo-600" />
                <h3 className="text-lg font-semibold">Hours Learned</h3>
              </div>
              <p className="text-3xl font-bold">27</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-indigo-600" />
                <h3 className="text-lg font-semibold">Certificates</h3>
              </div>
              <p className="text-3xl font-bold">2</p>
            </div>
          </div>

          {/* Current Courses */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Current Courses</h2>
            <div className="space-y-4">
              {currentCourses.map((course) => (
                <div key={course.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.progress}% Complete</p>
                  </div>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Certificates</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <div key={cert.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">Completed on {cert.date}</p>
                  <button className="text-indigo-600 hover:text-indigo-800">
                    Download Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const currentCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    progress: 75
  },
  {
    id: 2,
    title: "Data Science Essentials",
    progress: 45
  },
  {
    id: 3,
    title: "Digital Marketing",
    progress: 90
  }
];

const certificates = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "React Development",
    date: "February 28, 2024"
  }
];

export default Account;