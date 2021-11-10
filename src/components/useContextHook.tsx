import React, { useContext } from 'react';
import CardContext from './CardContext';

const UseContextHook: React.FC = () => {

    const { products } = useContext(CardContext);

    return (
        <ul>
            {products?.map( product => product.name)}
        </ul>
    );
}

export default UseContextHook;
  