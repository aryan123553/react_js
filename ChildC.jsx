import React from 'react';
import {FName} from './App';

const ChildC=()=> {
  return (
    <>
    <FName.Consumer>
      {
        (FName)=>{
          return <h1>My name is {FName}</h1>;
        
 
        }
      }

    </FName.Consumer>

    </>
    
  );
};
export default ChildC; 