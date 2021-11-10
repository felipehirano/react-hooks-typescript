import React, { 
    useState,
    useMemo,
    useCallback,
    
  } from 'react';
  
import User from '../interfaces/user';

  const UseCallBackHook: React.FC = () => {
  
    const [users, setUsers] = useState<[User]>();

    const names = useMemo(() => users?.map( user => user.name).join(', '), [users]);

    //useCallBack se atentar a tipagem dos parâmtros passados e não do retorno que já é inferido.
    const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), []);

    return (
      <div>
      </div>
    );
  }
  
  export default UseCallBackHook;
  