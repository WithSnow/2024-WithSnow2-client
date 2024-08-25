import {createContext, useContext, useState} from 'react';

export const WelfareContext = createContext();

export const WelfareProvider = ({children}) => {
  const [welfareList, setWelfareList] = useState([]);

  return (
    <WelfareContext.Provider value={{welfareList, setWelfareList}}>
      {children}
    </WelfareContext.Provider>
  );
};
