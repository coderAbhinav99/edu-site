import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Calculator, FlaskRound as Flask, Palette, Music, Brain, Globe } from 'lucide-react';

const Subjects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Browse by Subject</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              to={`/courses?subject=${subject.id}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-100 p-4 rounded-full mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                <p className="text-gray-600 text-sm">{subject.courseCount} courses</p>
                <p className="text-gray-500 mt-3 text-sm">{subject.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Subject */}
        <div className="mt-16 bg-indigo-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Computer Science</h2>
              <p className="text-indigo-100 mb-6">
                Master programming, algorithms, and software development with our comprehensive computer science courses.
              </p>
              <Link
                to="/courses?subject=computer-science"
                className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors inline-block"
              >
                Explore Courses
              </Link>
            </div>
            <div className="bg-indigo-500 p-6 rounded-full">
              <Code className="h-24 w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const subjects = [
  {
    id: 'computer-science',
    name: 'Computer Science',
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    courseCount: 45,
    description: 'Programming, algorithms, and software development'
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: <Calculator className="h-8 w-8 text-indigo-600" />,
    courseCount: 32,
    description: 'Algebra, calculus, and statistics'
  },
  {
    id: 'science',
    name: 'Science',
    icon: <Flask className="h-8 w-8 text-indigo-600" />,
    courseCount: 28,
    description: 'Physics, chemistry, and biology'
  },
  {
    id: 'arts',
    name: 'Arts',
    icon: <Palette className="h-8 w-8 text-indigo-600" />,
    courseCount: 24,
    description: 'Drawing, painting, and digital art'
  },
  {
    id: 'music',
    name: 'Music',
    icon: <Music className="h-8 w-8 text-indigo-600" />,
    courseCount: 18,
    description: 'Theory, composition, and performance'
  },
  {
    id: 'psychology',
    name: 'Psychology',
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
    courseCount: 22,
    description: 'Human behavior and mental processes'
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
    courseCount: 35,
    description: 'Learn new languages and cultures'
  },
  {
    id: 'literature',
    name: 'Literature',
    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
    courseCount: 20,
    description: 'Classic and contemporary literature'
  }
];

export default Subjects;