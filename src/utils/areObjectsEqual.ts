import {UserDataCountryType,UserDataSettingsOrAddressType} from "../types/userTypes";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    country: UserDataCountryType;
    region: string;
    zipCode: string;
    company: string;
    orderNotes: string;
}

type ChangedField = {[K in keyof UserDataSettingsOrAddressType]?: UserDataSettingsOrAddressType[K]};

type AreObjectsEqual = (formData:FormValues, defaultValues:UserDataSettingsOrAddressType)=>ChangedField[]

export const areObjectsEqual:AreObjectsEqual=(formData, defaultValues)=>{
    const difFields: ChangedField[] = [];

    (Object.keys(defaultValues) as Array<keyof UserDataSettingsOrAddressType>).forEach((key)=>{
        if(key in formData && formData[key] !== defaultValues[key]){
            difFields.push({[key]:formData[key]})
        }
    })

    return difFields;
}
