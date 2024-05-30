import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
import Layout from "./components/Layout"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<LoginForm/>}/>
        <Route path="/home" element={<Home/>}  />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/registerform" element={<RegisterForm/>} />
        <Route path="/loginform" element={<LoginForm/>} />
      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
