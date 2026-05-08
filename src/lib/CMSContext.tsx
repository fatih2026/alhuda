import React, { createContext, useContext } from 'react';
import { useCMS } from './useCMS';

const CMSContext = createContext<any>(null);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const cms = useCMS();
  return (
    <CMSContext.Provider value={cms}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMSContext() {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMSContext must be used within a CMSProvider');
  }
  return context;
}
