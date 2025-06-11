import {useState} from 'react'
import {Link} from 'react-router-dom';

const Signup = () => {

  const [userData,setUserData] = useState({

    username: "",
    email: "",
    password: ""
  })

  //Assignment

  // ** username must be a string (letters)
  // ** email must be a valid email syntax
  // ** password must contain strings,numbers min length is 8, max length is 20

  // Regular expression (you can use chatgpt to just get the pattern)

  // Arrow function in ES6
  const registerUser = (e)=>{

    e.preventDefault()

    let arr = []

    const usersLocalStorage = window.localStorage.getItem("gpt-users");

    const validations = [
      { field: "username", regex: /^[a-zA-Z]+$/, message: "Username must contain only letters." },
      { field: "email", regex: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, message: "Email must be valid." },
      { field: "password", regex: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/, message: "Password must contain letters and numbers (8-20 characters)." },
    ];
    
    for (const { field, regex, message } of validations) {
      if (!regex.test(userData[field])) {
        alert(message);
        return;
      }
    }

    if(!usersLocalStorage){

      arr.push(userData);

      window.localStorage.setItem("gpt-users",JSON.stringify(arr));

    } else{

      const users = JSON.parse(usersLocalStorage)

      const usersList = users.filter(user=>user.email === userData.email)

      if(usersList.length > 0){

        alert("User Already Signed up");
        return;
      }

      arr = users;

      arr.push(userData);

      window.localStorage.setItem("gpt-users",JSON.stringify(arr))
    }

    alert("User Signed!")
  }

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from input
    setUserData((prevData) => ({
      ...prevData, 
      [name]: value // Dynamically update the correct field
    }));
  };


  return (
    <>
  
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={registerUser} className="space-y-6">

        <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6">
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                className="block w-full rounded-md px-[15px] outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6">
              Email address
            </label>
            <div className="mt-2">
              <input 
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="block w-full rounded-md px-[15px] outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="block w-full rounded-md px-[15px] outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already Have an account?{' '}
          <Link to="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default Signup
