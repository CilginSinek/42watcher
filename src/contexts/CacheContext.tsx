import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface CacheContextType {
  dashboardData: unknown;
  setDashboardData: (data: unknown) => void;
  studentsData: unknown;
  setStudentsData: (data: unknown) => void;
  clearCache: () => void;
}

const CacheContext = createContext<CacheContextType | undefined>(undefined);

export function CacheProvider({ children }: { children: ReactNode }) {
  const [dashboardData, setDashboardData] = useState<unknown>(null);
  const [studentsData, setStudentsData] = useState<unknown>(null);

  const clearCache = () => {
    setDashboardData(null);
    setStudentsData(null);
  };

  return (
    <CacheContext.Provider
      value={{
        dashboardData,
        setDashboardData,
        studentsData,
        setStudentsData,
        clearCache,
      }}
    >
      {children}
    </CacheContext.Provider>
  );
}

export const useCache = () => {
  const context = useContext(CacheContext);
  if (context === undefined) {
    throw new Error('useCache must be used within a CacheProvider');
  }
  return context;
};
