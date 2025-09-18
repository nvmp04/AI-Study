import { createContext, useContext, useState } from "react";

const AISumContext = createContext();
export function AISummaryProvider({children}){
    const [aiSummaryContent, setAIsummaryContent] = useState('');
    return (
        <AISumContext.Provider value = {{aiSummaryContent, setAIsummaryContent}}>
            {children}
        </AISumContext.Provider>
    )
}
export function useAIcontent(){
    return useContext(AISumContext);
}