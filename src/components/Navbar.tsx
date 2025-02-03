import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <BookOpen className="h-6 w-6" />
          <span>EduLearn</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/courses" className="hover:text-indigo-200">Courses</Link>
          <Link to="/subjects" className="hover:text-indigo-200">Subjects</Link>
          <Link to="/pricing" className="hover:text-indigo-200">Pricing</Link>
          <Link to="/account" className="flex items-center space-x-1 hover:text-indigo-200">
            <User className="h-5 w-5" />
            <span>Account</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
            <LogIn className="h-5 w-5" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;