import { createContext, useState, useContext, useMemo } from 'react';

const AppContext = createContext(null as any);

export function useAppContext() {
    return useContext(AppContext);
}

export default function AppProvider({ children }: any) {
    const [appState, setAppState] = useState(true);
    const contextValue = useMemo(() => {
        return [appState, setAppState];
    }, [appState, setAppState]);
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
