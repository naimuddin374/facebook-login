import { Router } from '@reach/router';
import FacebookLogin from 'react-facebook-login';


const Dashboard = () => {
  return (
    <div>
      <h1>Welcome Dashboard</h1>
    </div>
  )
}
const Login = () => {
  const componentClicked = (e) => console.log('clicked', e)
  const responseFacebook = (e) => console.log('callback', e)

  return (
    <div>
      <h1>Welcome Login</h1>
      <FacebookLogin
        appId="583105393230615"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />
    </div>
  )
}

const Home = () => <h1>Welcome to home page</h1>

function App() {
  return (
    <Router>
      <Login path='/login' />
      <Dashboard path='/dashboard' />
      <Home path='/' />
    </Router>
  );
}

export default App;
