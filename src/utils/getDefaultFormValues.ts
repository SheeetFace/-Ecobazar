import { UserDataType,UserDataCountryType } from "../types/userTypes";

export const getDefaultFormValues = (user: UserDataType|null) => {
    return {
      firstName: user?.billingAddress.firstName || '',
      lastName: user?.billingAddress.lastName || '',
      email: user?.billingAddress.email || '',
      phone: user?.billingAddress.phone || '',
      address: user?.billingAddress.address || '',
      country: user?.billingAddress.country || '' as UserDataCountryType,
      region: user?.billingAddress.region || '',
      zipCode: user?.billingAddress.zipCode || '',
      company: user?.billingAddress.company || '',
    };
};