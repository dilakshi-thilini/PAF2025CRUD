import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in by looking for userId in localStorage
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId); // Set to true if userId exists
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('userId'); // Clear userId from localStorage
    setIsLoggedIn(false);
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex">
        <div
          className="text-white text-lg font-bold cursor-pointer"
          onClick={() => (window.location.href = '/')}
        >
          My App
        </div>
        <div className="ml-auto flex space-x-4">
          {!isLoggedIn ? (
            <>
              <button
                className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={() => (window.location.href = '/register')}
              >
                Register
              </button>
              <button
                className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={() => (window.location.href = '/login')}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={() => (window.location.href = '/profile')}
              >
                Profile
              </button>
              <button
                className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;