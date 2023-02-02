import { createContext, ReactNode, useState } from 'react';

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextProps = {
  isSidebarOpen: boolean;
  handleSidebar: () => void;
};

export const SidebarContext = createContext({} as SidebarContextProps);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setisSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, handleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
