import { persist, createJSONStorage } from 'zustand/middleware'
import { create } from 'zustand'
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserInfo } from '@types';

interface AuthStoreProps {
    loggedIn: boolean;
    setLoggedIn: () => void;
    userData: UserInfo;
    setUserData: (data: UserInfo) => void;
    loginError: string;
    setLoginError: (error: string) => void;
}

const useAuthStore = create<AuthStoreProps>()(persist(
    set => ({
        loggedIn: false,
        setLoggedIn: () => set((state) => ({ loggedIn: !state.loggedIn })),
        userData: {
            email: '',
            familyName: '',
            givenName: '',
            id: '',
            name: '',
            photo: '',
        },
        setUserData: (data) => set({ userData: data }),
        loginError: '',
        setLoginError: (error) => set({ loginError: error }),
    }),
    {
        name: 'auth-storage',
        storage: createJSONStorage(() => AsyncStorage),
    }
))

export { useAuthStore }
