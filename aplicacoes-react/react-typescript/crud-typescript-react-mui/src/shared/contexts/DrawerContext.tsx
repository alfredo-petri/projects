import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOptions[];
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}

interface IDrawerProviderProps {
    children: React.ReactNode;
}

interface IDrawerOptions {
    label: string;
    path: string;
    icon: React.ReactNode;
    color: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({
    children,
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen((oldIsDrawerOpen) => !oldIsDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider
            value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions:handleSetDrawerOptions }}
        >
            {children}
        </DrawerContext.Provider>
    );
};
