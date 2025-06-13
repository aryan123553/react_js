import React, { createContext } from 'react';
import ChildA from './ChildA';

const FName = createContext();
const App=()=> {
  
  return (
    <>
    <FName.Provider value="Aryan is master of App developer">
       <ChildA />
    </FName.Provider>
    
    </>
  );
};
export default App;
export { FName };