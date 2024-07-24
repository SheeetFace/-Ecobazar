import { areObjectsEqual } from '../../src/utils/areObjectsEqual';
import { UserDataSettingsOrAddressType, UserDataCountryType } from '../../src/types/userTypes';

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

describe('areObjectsEqual', () => {
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

    const formValues: FormValues = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Main St',
        country: 'United States',
        region: 'CA',
        zipCode: '90001',
        company: 'Company Inc.',
        orderNotes: '',
    };

    test('should return an empty array when all fields match', () => {
        const result = areObjectsEqual(formValues, defaultValues);
        expect(result).toEqual([]);
    });

    test('should return changed field when one field is different', () => {
        const changedFormValues = { ...formValues, firstName: 'Jane' };
        const result = areObjectsEqual(changedFormValues, defaultValues);
        expect(result).toEqual([{ firstName: 'Jane' }]);
    });

    test('should return changed fields when multiple fields are different', () => {
        const changedFormValues = { ...formValues, firstName: 'Jane', lastName: 'Smith' };
        const result = areObjectsEqual(changedFormValues, defaultValues);
        expect(result).toEqual([{ firstName: 'Jane' }, { lastName: 'Smith' }]);
    });


    test('should handle different data types', () => {
        const changedFormValues = { ...formValues, phone: 1234567890 as any };
        const result = areObjectsEqual(changedFormValues as any, defaultValues);
        expect(result).toEqual([{ phone: 1234567890 }]);
    });

    test('should ignore fields that are not part of comparison', () => {
        const changedFormValues = { ...formValues, country: 'Canada' as UserDataCountryType };
        const result = areObjectsEqual(changedFormValues, defaultValues);
        expect(result).toEqual([]);
    });
});
