import React, { memo } from 'react'
import { Formik, Form, Field, FastField } from 'formik'
import NavBar from '@/Components/NavBar/NavBar'

function allowOnlyEnglishInput(event) {
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
  // For name field, allow space as well
  const nameField = event.target.name === 'name';
  const char = event.key;
  if (nameField) {
    if (!/^[a-zA-Z ]$/.test(char)) {
      event.preventDefault();
    }
  } else {
    if (!englishRegex.test(char)) {
      event.preventDefault();
    }
  }
}

const MemoizedField = memo(({ name, type, placeholder, required, className, onKeyPress }) => (
  <FastField
    name={name}
    type={type}
    placeholder={placeholder}
    required={required}
    className={className}
    onKeyPress={onKeyPress}
  />
))

export default function Signup() {
  return (
    <>
      <NavBar />

      <Formik
        validate={(values) => {
          const errors = {};
          if (values.name === '') {
            errors.name = "please enter a name"
          } else if (values.name.length < 3) {
            errors.name = "name length should not less than 3 words"
          }
          if (values.email === '') {
            errors.email = 'enter your E-mail'
          } else if ((!/^\w+([\.-]?\w)*@\w*(\.\w{2,7})+$/i.test(values.email))) {
            errors.email = 'please enter a Valid E-mail!'
          }
          if (values.password === '') {
            errors.password = 'please enter a password'
          } else if ((!/^\d+\D+\W$/i.test(values.password))) {
            errors.password = 'enter a Valid Password!'
          }

          return errors
        }}
        initialValues={{ email: '', password: '', name: '' }} onSubmit={(values) => {
          console.log('values is:', values)
        }}>
        {({ values, handleChange, handleSubmit, errors }) => (

          <div className="h-screen w-screen bg-gray-100 pt-10 mt-20">
            <div className="max-w-xl mx-auto bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <h2 className='text-center text-2xl mb-12'>Sign Up</h2>
              <h4 className='-mt-10 text-center text-xl text-red-500 mb-8'>(only type english!)</h4>
              <Form className="flex-col space-y-4">
                <label className="block font-medium text-gray-700">E-Mail Adress</label>
                <MemoizedField type="text" name="email" required placeholder="email..." className="shadow-sm block w-full py-2 rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  " onKeyPress={allowOnlyEnglishInput} />
                {errors.email && errors.email}
                <div className="flex flex-col space-y-2">
                  <label className="block font-medium text-gray-700">Password <span className="text-gray-500 font-base text-sm"></span></label>
                  <MemoizedField type="password" placeholder="Password..." className="shadow-sm block w-full py-2  rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none" name="password" onKeyPress={allowOnlyEnglishInput} />
                  {errors.password && errors.password}
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="block font-medium text-gray-700">First and Last Name</label>
                  <MemoizedField type="text" className="shadow-sm block w-full py-2 rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none " name="name" required placeholder="First and Last Name" onKeyPress={allowOnlyEnglishInput} />
                  {errors.name && errors.name}
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-600 font-normal flex items-start space-x-2"><div>
                    <Field type="checkbox" name="checkbox" required className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600" />
                  </div><div>I have read and agree to the <a href="/legal/privacy" target="_blank" className="text-primary-600 hover:text-primary-700">Privacy Policy</a> and <a href="/legal/terms" target="_blank" className="text-primary-600 hover:text-primary-700">Terms and Conditions</a>.</div></label>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white w-full" type="submit" name="_action" value="create"><div className="relative"><div className="">Sign up</div><div className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div></div></button>
                </div>
              </Form>
            </div>
          </div>
        )}

      </Formik>

    </>
  )
}
