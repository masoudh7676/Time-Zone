import React from 'react'
import './user.css'
import { Link } from 'react-router'
export default function User() {
  return (
    <>
       
<div className="min-h-screen bg-gray-100 flex items-center justify-center p__4">
  <div className="max-w-md w-full bg-white rounded-xl shadow-lg p__8">
    <h2 className="title font-bold text-gray-900 mb__6 text-center">Sign In</h2>
    
    <form className="space-y-4">
      <div className='margin__bottom'>
        <label class="block text-sm font-medium text-gray-700 mb__1">Email</label>
        <input 
          type="email" 
          className="w-full px__4 py__2 !important border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb__1">Password</label>
        <input 
          type="password" 
          className="w-full px__4 py__2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="••••••••"
        />
      </div>

      <div className="flex items-center justify-between mb__custom margin">
        <label className="flex items-center">
          <input type="checkbox" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <span className="ml__2 text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
      </div>

      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium padding rounded-lg transition-colors">
        Sign In
      </button>
    </form>

    <div className="mt__6 text-center text-sm text-gray-600">
      Don't have an account? 
      <Link to="/signup" class="text-indigo-600 hover:text-indigo-500 font-medium"> Sign up</Link>
    </div>
  </div>
</div>
    </>
  )
}
