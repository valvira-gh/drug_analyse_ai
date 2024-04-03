'use server'

import { SetStateAction } from "react";

export const handleUser = async (formData: FormData, setUser: React.Dispatch<SetStateAction<any>>) => {
    try {
        const response = await fetch('/api/register-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })

        if (!response.ok) {
            throw new Error("Registeration failed");
        }

        const data = await response.json();
        setUser(data);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    };
