import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addUser } from './redux/userSlice';
import Header from './components/Header';
import Email from './components/Email';
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Email />
    </div>
  ) 
}

export default App
