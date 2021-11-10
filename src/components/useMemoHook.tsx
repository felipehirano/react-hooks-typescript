import React, { 
    useState,
    useMemo,
    
  } from 'react';
  
import User from '../interfaces/user';

  const UseMemoHook: React.FC = () => {
  
    const [users, setUsers] = useState<[User]>();

    // Armazena o valor de uma variável sem chamar novamente toda vez que o componente renderiza.
    // Caso o state altere, ai sim é feito um cálculo através do useEffect.
    // Nesse caso o useMemo ja esta fazendo inferência de tipos devido ao retorno do join que é uma string
    const names = useMemo(() => users?.map( user => user.name).join(', '), [users]);

    return (
      <div>
        {users?.map(user => user.login)}
      </div>
    );
  }
  
  export default UseMemoHook;
  