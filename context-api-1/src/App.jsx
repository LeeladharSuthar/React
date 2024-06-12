import './App.css'
import Profile from './components/Profile';
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider'
function App() {
  
  return (
    <UserContextProvider>
      <Profile />
      <Login />
    </UserContextProvider>
  );
}

export default App;
