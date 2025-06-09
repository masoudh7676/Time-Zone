import NavBar from '@/Components/NavBar/NavBar'
import { Field, Form, Formik, FastField } from 'formik'
import React, { memo, useState } from 'react'
import { Link } from 'react-router'

function allowOnlyEnglishInput(event, setNonEnglishInput) {
  // Allow control keys like backspace, delete, arrow keys
  if (
    event.ctrlKey ||
    event.altKey ||
    event.metaKey ||
    event.key.length > 1
  ) {
    return;
  }
  // Regex to allow English letters, numbers, and common symbols for email and password
  const englishRegex = /^[a-zA-Z0-9@._\-!#$%&'*+/=?^_`{|}~]+$/;
  const char = event.key;
  if (!englishRegex.test(char)) {
    event.preventDefault();
    setNonEnglishInput(true);
  } else {
    setNonEnglishInput(false);
  }
}

const MemoizedField = memo(({ name, type, placeholder, required, className, setIsNonEnglishInput }) => {
  return (
    <>
      <FastField
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={className}
        onKeyPress={(e) => allowOnlyEnglishInput(e, setIsNonEnglishInput)}
      />
    </>
  )
})

export default function User() {
  const [isNonEnglishInput, setIsNonEnglishInput] = useState(false);

  return (
    <>
      <NavBar />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (values.email === '') {
            errors.email = 'enter your E-mail';
          } else if (!/^\w+([\.-]?\w)*@\w*(\.\w{2,7})+$/i.test(values.email)) {
            errors.email = 'please enter a Valid E-mail!';
          }
          if (values.password === '') {
            errors.password = 'please enter a password';
          } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{4,}$/i.test(values.password)) {
            errors.password = 'Password must be at least 4 characters long, contain an uppercase letter and a special character';
          }
          return errors;
        }}
      >
        {({ errors, touched }) => (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
              <h2 className="title font-bold text-gray-900 mb-6 text-xl text-center">Log In</h2>
              {isNonEnglishInput && <h4 className=' text-center text-xl text-red-500 mb-8'>(only type english!)</h4>}
              <Form className="space-y-4">
                <div className='margin__bottom'>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <MemoizedField
                    type="email"
                    name='email'
                    className="w-full px-4 py-2 !important border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="your@email.com"
                    setIsNonEnglishInput={setIsNonEnglishInput}
                    required
                  />
                  {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb__1">Password</label>
                  <MemoizedField
                    type="password"
                    name='password'
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="••••••••"
                    setIsNonEnglishInput={setIsNonEnglishInput}
                    required
                  />
                  {errors.password && touched.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                </div>

                <div className="flex items-center justify-between mb__custom margin">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>

                <button type='submit' className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium padding rounded-lg transition-colors">
                  Log In
                </button>
              </Form>

              <div className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?
                <Link to="/signup" className="text-indigo-600 hover:text-indigo-500 font-medium"> Sign up</Link>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}
