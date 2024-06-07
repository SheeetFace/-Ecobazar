import type { User } from "firebase/auth";

export const createUserData = (user: User, displayName: string) => {
    return {
        displayName: displayName || '',
        email: user?.email || '',
        photoURL: user?.photoURL || '',
        uid: user?.uid || '',
        firstName: '',
        lastName: '',
        userType: 'Customer',
        phone: '',
        address: '',
        country: '',
        region: '',
        zipCode: '',
        company: ''
    };
};