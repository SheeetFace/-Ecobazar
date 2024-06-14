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
        country: UserDataCountryType,
        region: string,
        zipCode: string,
        company: string,
    }
}

export type UserDataSettingsOrAddressType= UserDataType['accountSettings'] | UserDataType['billingAddress'];

export type UserDataCountryType ="United States"|"Canada"|"United Kingdom"|""