import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Learn Without Limits</h1>
          <p className="text-xl mb-8">Access quality education from anywhere in the world</p>
          <Link
            to="/courses"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
          >
            Start Learning
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <BookOpen className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Diverse Courses</h3>
            <p className="text-gray-600">Choose from hundreds of courses across various subjects</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <GraduationCap className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
            <p className="text-gray-600">Learn from industry experts and experienced educators</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
            <p className="text-gray-600">Connect with peers and engage in collaborative learning</p>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-indigo-600 font-semibold hover:text-indigo-800"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const featuredCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript basics",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Data Science Essentials",
    description: "Master the basics of data analysis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Learn modern marketing strategies",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default Home;