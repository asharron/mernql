import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const User = (props) => {

    const { loading, error, data } = useQuery(gql`
  {
    hello
  }
  `);
  debugger;
   console.log(data);

    return (
        <div>
            <p>Test</p>
        </div>
    );
}

export default User;