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
                
            {/* <div>
                <label>Street Address</label>
                <InputFormField 
                        className=''
                        inputType='text'
                        placeholder='Street Address'
                        isErrors={options.streetAddress.isErrors}
                        register={options.streetAddress.register}
                        errorMessage={options.streetAddress.errorMessage}
                />
            </div> */}
            </div>
        </div>
    )
}

export default BillingAddressInfo;