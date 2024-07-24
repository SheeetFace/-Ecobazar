import { hasFormValuesUpdated } from '../../src/utils/hasFormValuesUpdated';
import { UserDataSettingsOrAddressType } from '../../src/types/userTypes';

describe('hasFormValuesUpdated', () => {
    const defaultValues: UserDataSettingsOrAddressType = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Main St',
        country: 'United States',
        region: 'CA',
        zipCode: '90001',
        company: 'Company Inc.',
        photoURL: '',
        displayName: '',
    };

    const formDataValue: UserDataSettingsOrAddressType = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Main St',
        country: 'United States',
        region: 'CA',
        zipCode: '90001',
        company: 'Company Inc.',
        photoURL: '',
        displayName: '',
    };

    test('should return true when all values match', () => {
        const result = hasFormValuesUpdated(formDataValue, defaultValues);
        expect(result).toBe(true);
    });

    test('should return false when at least one value is different', () => {
        const changedFormDataValue = { ...formDataValue, firstName: 'Jane' };
        const result = hasFormValuesUpdated(changedFormDataValue, defaultValues);
        expect(result).toBe(false);
    });

    test('should return true for empty values', () => {
        const emptyFormDataValue: UserDataSettingsOrAddressType = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            country: '',
            region: '',
            zipCode: '',
            company: '',
            photoURL: '',
            displayName: '',
        };

        const emptyDefaultValues: UserDataSettingsOrAddressType = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            country: '',
            region: '',
            zipCode: '',
            company: '',
            photoURL: '',
            displayName: '',
        };

        const result = hasFormValuesUpdated(emptyFormDataValue, emptyDefaultValues);
        expect(result).toBe(true);
    });

    test('should handle different data types correctly', () => {
        const differentDataTypeFormDataValue = { ...formDataValue, phone: 1234567890 as any };
        const result = hasFormValuesUpdated(differentDataTypeFormDataValue, defaultValues);
        expect(result).toBe(false);
    });
});
