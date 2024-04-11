import InputFormField from '../InputFormField/InputFormField';
import SelectFormField from '../SelectFormField/SelectFormField';

import { regionData,statesData } from '../../../../data/selects';

import styles from '../BillingAddressInfo/BillingAddressInfo.module.scss';


type TypeWatchCountryOrRegionValue ="United States"|"Canada"|"United Kingdom"
interface FieldOptions {
    isErrors: boolean
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register: any
    errorMessage?: string
}
interface BillingAddressInfo{
    firstName: FieldOptions
    lastName: FieldOptions
    companyName: FieldOptions
    streetAddress:FieldOptions
    countryOrRegion:FieldOptions
    state:FieldOptions
    zipCode:FieldOptions
    email:FieldOptions
    phone:FieldOptions

    watchCountryOrRegionValue: TypeWatchCountryOrRegionValue
}
interface BillingAddressInfoProps{
    options:BillingAddressInfo
}


const BillingAddressInfo:React.FC<BillingAddressInfoProps> = ({options}) => {

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
                    />
                </div>

                <div className={styles._container}>
                    <label>Company Name
                        <span>(optional)</span>
                    </label>
                    <InputFormField 
                        className=''
                        inputType='text'
                        placeholder='Company Name'
                        isErrors={options.companyName.isErrors}
                        register={options.companyName.register}
                        errorMessage={options.companyName.errorMessage}
                    />
                </div>
            </div>

            <div>
                <label>Street Address</label>
                <InputFormField 
                        className=''
                        inputType='text'
                        placeholder='Street Address'
                        isErrors={options.streetAddress.isErrors}
                        register={options.streetAddress.register}
                        errorMessage={options.streetAddress.errorMessage}
                        maxLength={150}
                />
            </div>

            <div className={styles._selects}>
                <div className={styles._item}>
                    <SelectFormField    label={regionData.label}
                                        regions={regionData.regions}
                                        register={options.countryOrRegion.register}
                                        isErrors={options.countryOrRegion.isErrors}
                                        errorMessage={options.countryOrRegion.errorMessage}
                    />
                </div>

                <div className={styles._item}>
                    <SelectFormField    label={statesData.label}
                                        regions={stateValue}
                                        register={options.state.register}
                                        isErrors={options.state.isErrors}
                                        errorMessage={options.state.errorMessage}
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
                    />
                </div>
            </div>
        </div>
    )
}

export default BillingAddressInfo;