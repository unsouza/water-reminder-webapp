import React, { useContext, useEffect, useMemo, useState } from 'react';
import UserService from '../services/user.service';

const service = new UserService();

interface User {
    name: string;
    weight: number
}

interface UserContextProps {
    user: User | null;
    fetchUser: () => Promise<void>;
}

const defaultContext: UserContextProps = {
    user: null,
    fetchUser: async () => { },
};

export const UserContext = React.createContext<UserContextProps>(defaultContext);

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const res = await service.find();
            setUser(res);
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    };

    const value = useMemo(() => ({
        user,
        fetchUser,
    }), [user]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);

export default UserProvider;
