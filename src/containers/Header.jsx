import {useState} from 'react'
import {Link} from 'react-router-dom'
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";


const Buttons = ()=>(

  <div className="buttons flex gap-[20px]">
    <Link className='nav-button' to="auth/login">Sign in</Link>
    <Link className='nav-button bg-red-500' to="auth/signup">Sign up</Link>

  </div>
)

const Header = () => {

  const [toggle,setToggle] = useState(false);


  return (
    <div className='bg__gradient flex justify-between items-center px-[50px] py-[35px]'>
      <Link to="/" className='font-semibold text-[25px] whitespace-nowrap'>
      GPT-4
      </Link>

     <ul className={`fixed w-full h-full bg-red-400 ${toggle ? "top-0" : '-top-[100%]'} left-0
     flex flex-col justify-center xl:relative xl:top-0 xl:-left-0 xl:bg-transparent xl:flex-row 
      items-center gap-[30px]`}>
      <li><a className='nav-item' href="#">Home</a></li>
      <li><a className='nav-item' href="what-gpt">What is GPT?</a></li>
      <li><a className='nav-item' href="open-ai">Open AI</a></li>
      <li><a className='nav-item' href="#case-studies">Case Studies</a></li>
      <li><a className='nav-item' href="#library">Library</a></li>

      <div className="sm:hidden">
        <Buttons />
      </div>

     </ul>

     <div className="hidden sm:block">
     <Buttons />
     </div>

     <div className="toggle xl:hidden cursor-pointer text-[35px] z-[3]">
      {
        toggle ? <MdClose onClick={()=>setToggle(false)} />
        : <HiBars3 onClick={()=>setToggle(true)} />
      }
     </div>
    </div>
  )
}

export default Header
