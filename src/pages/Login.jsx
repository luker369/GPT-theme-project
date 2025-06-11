import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();

  const [userData,setUserData] = useState({
    
    email: "",
    password: ""
  })

  const validations = [
    { field: "email", regex: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, message: "Email must be valid." },
    { field: "password", regex: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/, message: "Password must contain letters and numbers (8-20 characters)." },
  ];

  const loginUser = (e)=>{

    for (const { field, regex, message } of validations) {
      if (!regex.test(userData[field])) {
        alert(message);
        return;
      }
    };


    e.preventDefault()

    const usersLocalStorage = window.localStorage.getItem('gpt-users');

    if(!usersLocalStorage){

      alert("No User Found");
      return false;

    } 

    const users = JSON.parse(usersLocalStorage);

    const user = users.filter(user=>user.email === userData.email);

    if(user.length === 0){

      alert("No User Found");
      return;
    }

    if(user[0].password !== userData.password){

      alert("Incorrect Password");
      return;
    }

    alert('User Logged Successfully!');
    navigate("/");

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  return (
    <>
  
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={loginUser} className="space-y-6">
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
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't Have an account?{' '}
          <Link to="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Signup
          </Link>
        </p>
      </div>
    </div>

  </>
  )
}

export default Login
