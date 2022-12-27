import React from "react";
export const Navbar = () => {
  return (
    <header className="flex font-medium w-full text-sm p-5 text-gray-700 justify-between">
      <div className="flex space-x-4 items-center">
        <p className="hover:underline cursor-pointer">About</p>
        <p className="hover:underline cursor-pointer">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="hover:underline cursor-pointer">Gmail</p>
        <p className="hover:underline cursor-pointer">Images</p>
        <img
          class="inline cursor-pointer object-cover w-12 h-12 mr-2 rounded-full transition duration-150 transform hover:scale-110"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>
    </header>
  );
};
