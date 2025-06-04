import { useState } from "react";
import UserSevice from "../services/user.service";
import { useNavigate } from "react-router-dom";

const service = new UserSevice();

type UserPropertyKeys = "name" | "weight";

interface PropertyUser {
    name: string
    weight: number
}

const RegisterUserContoller = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [userData, setUserData] = useState<PropertyUser>({ name: "", weight: 0 });

    function setProperty(value: number | string, key: UserPropertyKeys) {
        setUserData((oldState) => ({
            ...oldState,
            [key]: value
        }));
    }

    async function register() {
        try {
            let response = await service.store({ name: userData.name, weight: userData.weight })
            localStorage.setItem("USER_ID", response.id)
            navigate("/home");
        } catch (error: any) {
            setError(error)
        }
    }

    return { error, setProperty, register }
}

export default RegisterUserContoller;