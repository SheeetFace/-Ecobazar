export interface UserDataType {
    uid: string,
    userType: 'Customer',
    accountSettings:{
        displayName: string,
        firstName: string,
        lastName: string,
        email: string,
        photoURL: string,
        phone: string,
    },
    billingAddress:{
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        address: string,
        country: string,
        region: string,
        zipCode: string,
        company: string,
    }
}