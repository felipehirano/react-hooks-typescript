import React, { 
    useState,
    useEffect,
  } from 'react';
  
import User from '../interfaces/user';

  const UseStateHook: React.FC = () => {
  
    const [user, setUser] = useState<User>();

    useEffect( () => {
      loadData();
    }, [])
  
    async function loadData() {
      const response = await fetch('https://api.github.com/users/felipehirano');
      const data = await response.json();
  
      setUser(data);
    }
  
    return (
      <div>
        {user?.name}
        {user?.login}
      </div>
    );
  }
  
  export default UseStateHook;
  