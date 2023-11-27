'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useSignupStore from '@/store/signUpStore';


const Signup: React.FC = () => {
  const { name, email, password, setName, setEmail, setPassword } = useSignupStore();
  const router = useRouter();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && password) {
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
      <h2 className="text-2xl font-semibold mb-4 text-center font-roboto">Sign Up</h2>
      <div className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full border ring-blue-300 ring-opacity-50 shadow-md">
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-offset-0"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-offset-0"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-offset-0"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link href="/login">
            <span className="cursor-pointer text-blue-500">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

