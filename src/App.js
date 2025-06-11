import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Header,Footer } from "./containers";


function App() {
  return (
    <>
    <Header />
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<Signup />} />

    </Routes>

    <Footer />
    </>
    
  );
}

export default App;
