import type { UserDataSettingsOrAddressType } from "../types/userTypes";

type HasFormValuesUpdatedType = (formDataValue:UserDataSettingsOrAddressType, defaultValues:UserDataSettingsOrAddressType)=>boolean

export const hasFormValuesUpdated:HasFormValuesUpdatedType = (formDataValue, defaultValues)=>{

    const dataArray = Object.values(formDataValue)
    const defaultValuesArray = Object.values(defaultValues)

    return  dataArray.every((value, i) => value === defaultValuesArray[i]);

}