export interface user {
    id: string;
    name: string;
    email: string;
}

export interface authContextType{
    user: user | null;
    loading: boolean;
    isAuthenticated: boolean;
    login: (user: user) => void;
    logout: ()=> void;
}