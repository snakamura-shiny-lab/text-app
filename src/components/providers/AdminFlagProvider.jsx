import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const {children} = props;
    
    const [num, setNum] = useState(0);

    return (
        <AdminFlagContext.Provider value={{num, setNum}}>
            {children}
        </AdminFlagContext.Provider>
    );
};