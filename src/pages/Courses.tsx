import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">All Courses</h1>
        
        {/* Course Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {course.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{course.duration}</span>
                  <Link
                    to={`/courses/${course.id}`}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    category: "Programming",
    description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Data Science Essentials",
    category: "Data Science",
    description: "Master the fundamentals of data analysis and visualization.",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Digital Marketing",
    category: "Marketing",
    description: "Learn modern digital marketing strategies and techniques.",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Mobile App Development",
    category: "Programming",
    description: "Create mobile applications for iOS and Android platforms.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Business Analytics",
    category: "Business",
    description: "Learn to make data-driven business decisions.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Graphic Design Basics",
    category: "Design",
    description: "Master the fundamentals of graphic design and visual communication.",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default Courses;