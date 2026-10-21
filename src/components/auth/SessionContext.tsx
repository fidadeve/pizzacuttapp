'use client';

import { createContext, useContext, type ReactNode } from 'react';

type SessionContextValue = {
  user: { id?: string; name?: string; email?: string | null; role?: string } | null;
  logout: () => Promise<void>;
};

const SessionContext = createContext<SessionContextValue>({
  user: null,
  logout: async () => {
    if (typeof window !== 'undefined') window.location.assign('/');
  },
});

export function SessionProvider({ children, value }: { children: ReactNode; value?: SessionContextValue }) {
  return <SessionContext.Provider value={value ?? { user: null, logout: async () => { if (typeof window !== 'undefined') window.location.assign('/'); } }}>{children}</SessionContext.Provider>;
}

export function useSession() {
  return useContext(SessionContext);
}
