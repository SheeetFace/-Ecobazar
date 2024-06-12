import type { User } from "firebase/auth";

export const createUserData = (user: User, displayName: string) => {

    const defaultPhotoUrl = 'https://static-cdn.jtvnw.net/jtv_user_pictures/aeecb672-a65e-485d-a97a-634b7cef5a5f-profile_image-70x70.png'

    return{
        uid: user?.uid || '',
        userType: 'Customer',
        accountSettings:{
            displayName: displayName || '',
            firstName: '',
            lastName: '',
            email: user?.email || '',
            photoURL: user?.photoURL || defaultPhotoUrl,
            phone: '',
        },
        billingAddress:{
            firstName: '',
            lastName: '',
            email: user?.email || '',
            phone: '',
            address: '',
            country: '',
            region: '',
            zipCode: '',
            company: ''
        }
    };
};