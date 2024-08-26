import InputFormField from '../InputFormField/InputFormField';
import SelectFormField from '../SelectFormField/SelectFormField';

import { regionData,statesData } from '../../../../data/selects';

import styles from '../BillingAddressInfo/BillingAddressInfo.module.scss';

import { UserDataCountryType } from '../../../../types/userTypes';

interface FieldOptions {
    isErrors: boolean
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register: any
    errorMessage?: string
}

interface BillingAddressInfo{
    firstName: FieldOptions
    lastName: FieldOptions
    company: FieldOptions
    address:FieldOptions
    country:FieldOptions
    region:FieldOptions
    zipCode:FieldOptions
    email:FieldOptions
    phone:FieldOptions

    watchCountryOrRegionValue: UserDataCountryType
}
interface BillingAddressInfoProps{
    options:BillingAddressInfo
    disabled?:boolean
}


const BillingAddressInfo:React.FC<BillingAddressInfoProps> = ({options,disabled=false}) => {

    const state =options.watchCountryOrRegionValue;
    const stateValue = state ? statesData[state]:statesData["United States"]

    return (
        <div className={styles.BillingAddressInfo}>
            <div className={styles._header}>
                <div className={styles._container}>
                    <label>First Name</label>
                    <InputFormField 
                        className=''
                        inputType='text'
                        placeholder='Your first Name'
                        isErrors={options.firstName.isErrors}
                        register={options.firstName.register}
                        errorMessage={options.firstName.errorMessage}
                        disabled={disabled}
                    />
                </div>

                <div className={styles._container}>
                    <label>Last Name</label>
                    <InputFormField 
                        className=''
                        inputType='text'
                        placeholder='Your last Name'
                        isErrors={options.lastName.isErrors}
                        register={options.lastName.register}
                        errorMessage={options.lastName.errorMessage}
                        disabled={disabled}
                    />
                </div>

                <div className={styles._container}>
                    <label>Company
                        <span>(optional)</span>
                    </label>
                    <InputFormField 
                        className=''
                        inputType='text'
                        placeholder='Company Name'
                        isErrors={options.company.isErrors}
                        register={options.company.register}
                        errorMessage={options.company.errorMessage}
                        disabled={disabled}
                    />
                </div>
            </div>

            <div>
                <label>Street Address</label>
                <InputFormField 
                        className=''
                        inputType='text'
                        placeholder='Street Address'
                        isErrors={options.address.isErrors}
                        register={options.address.register}
                        errorMessage={options.address.errorMessage}
                        maxLength={150}
                        disabled={disabled}
                />
            </div>

            <div className={styles._selects}>
                <div className={styles._item}>
                    <SelectFormField    label={regionData.label}
                                        regions={regionData.regions}
                                        register={options.country.register}
                                        isErrors={options.country.isErrors}
                                        errorMessage={options.country.errorMessage}
                    />
                </div>

                <div className={styles._item}>
                    <SelectFormField    label={statesData.label}
                                        regions={stateValue}
                                        register={options.region.register}
                                        isErrors={options.region.isErrors}
                                        errorMessage={options.region.errorMessage}
                    />
                </div>
                
                <div className={styles._width30}>
                    <label>Zip Code</label>
                    <InputFormField 
                            className={styles._zipCode}
                            inputType='text'
                            placeholder='Zip Code'
                            isErrors={options.zipCode.isErrors}
                            register={options.zipCode.register}
                            errorMessage={options.zipCode.errorMessage}
                            maxLength={10}
                            disabled={disabled}
                    />
                </div>
            </div>

            <div className={styles._footer}>

                <div className={styles._footerInput}>
                    <label>Email</label>
                    <InputFormField 
                            className=''
                            inputType='text'
                            placeholder='Email Address'
                            isErrors={options.email.isErrors}
                            register={options.email.register}
                            errorMessage={options.email.errorMessage}
                            disabled={disabled}
                    />
                </div>

                <div className={styles._footerInput}>
                    <label>Phone</label>
                    <InputFormField 
                            className=''
                            inputType='text'
                            placeholder='Phone Number'
                            isErrors={options.phone.isErrors}
                            register={options.phone.register}
                            errorMessage={options.phone.errorMessage}
                            disabled={disabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default BillingAddressInfo;