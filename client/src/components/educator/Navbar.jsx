/* Logoo with animation
   title , greting user full name , Sing out from Clerk */
import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

const Navbar = ({ bgColor }) => {
  const { isEducator } = useContext(AppContext);
  const { user } = useUser();

  return isEducator && user && (
    <motion.div 
      initial={{ y: -40, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-300 shadow-sm ${bgColor}`}
    >
      {/* Logo and Heading Section */}
      <Link to="/" className="flex items-center gap-3">
        <motion.img 
          src={assets.logo} 
          alt="Logo" 
          className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
        />
        <motion.h1 
          className="text-lg md:text-xl font-bold text-indigo-600 tracking-wide animate-heading"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Study Notion by Aditya Uniyal
        </motion.h1>
      </Link>

      {/* User Info Section */}
      <div className="flex items-center gap-4 text-gray-700 text-sm md:text-base font-medium">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi! {user.fullName}
        </motion.p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </motion.div>
  );
};

export default Navbar;
