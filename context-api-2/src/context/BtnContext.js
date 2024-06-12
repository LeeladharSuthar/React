import React from "react";
import { useContext } from "react";

export const BtnContext = React.createContext();

export const BtnContextProvider = BtnContext.Provider;

export default function useTheme(){
    return useContext(BtnContext);
}