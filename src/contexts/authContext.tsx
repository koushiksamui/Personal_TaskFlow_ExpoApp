import {
    createContext,
    useState,
    ReactNode,
    useEffect
} from "react";
import { authContextType, user } from "../types/auth";
import { saveToken, getUser, getToken, saveUser, clearStorage } from "@/services/storage";
export const AuthContext = createContext<authContextType | undefined>(undefined);

type props = {
    children: ReactNode;
};

export const AuthProvider = ({children}: props) => {
    const [user, setUser] = useState<user | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await getToken();
            const userData = await getUser();
            if (token && userData) {
                setUser(JSON.parse(userData));
            }
            setLoading(false);
        };
        checkAuth();
    }, []);
    
    // login function
    async function login(userData: user){
        await saveToken(userData.id);
        await saveUser(userData);
        setUser(userData);
    }

    // logout function
    async function logout(){
        await clearStorage();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, loading, login, logout, isAuthenticated: !!user}}>
            {children}
        </AuthContext.Provider>
    )

}