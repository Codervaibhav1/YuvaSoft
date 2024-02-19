
import AddUserForm from './component/FormSection/AddUserForm'
import LoginForm from './component/FormSection/LoginForm'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import DashBoard from './component/dashboard/DashBoard'
import User from './component/User/User'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/adduserform' element={<AddUserForm/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </Router>
  )
}

export default App