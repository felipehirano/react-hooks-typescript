import React, { 
    useState,
    useMemo,
    useRef,
    useImperativeHandle,    
  } from 'react';
  
import User from '../interfaces/user';

  const UseHooks: React.FC = () => {

    // Utilizado para referenciar elementos html
    const inputRef = useRef<HTMLInputElement>(null);

    const [users, setUsers] = useState<[User]>();

    const names = useMemo(() => users?.map( user => user.name).join(', '), [users]);

    // Vai disparar o focus do input
    inputRef.current?.focus();

    return (
      <form>
          <input type="text" ref={inputRef} />
      </form>
    );
  }
  
  export default UseHooks;
  