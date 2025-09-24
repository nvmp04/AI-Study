import { createContext, useContext, useState } from "react";
import {useQuery} from '@tanstack/react-query'
import { fetchAPI } from "../utils/fetchAPI";
import { useAuth } from "../hooks/useAuth";
const SetsContext = createContext();
export function SetsProvider({children}){
  const {isLoggedIn} = useAuth();
  const {data, isLoading, error} = useQuery({
    queryKey:['sets'],
    queryFn: async ()=> await fetchAPI('http://localhost:5000/ai/data', 'GET', null, true),
    enabled: isLoggedIn
  })
  return (
    <SetsContext.Provider value = {{studySets: data?.sets ??[], isLoading, error}}>
      {children}
    </SetsContext.Provider>
  )
}
export function useSets(){
    return useContext(SetsContext);
}