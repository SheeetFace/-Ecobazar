import { getValidationOptions } from '../../src/utils/getValidationOptions';

describe('getValidationOptions', () => {
    it('should return required validation when isRequired is true', () => {
        const result = getValidationOptions(/.+/, 'input');
        expect(result).toEqual({
            required: 'This Field is Required',
            pattern: {
                value: /.+/,
                message: 'Please enter a valid input',
            }
        });
    });

    it('should return no required validation when isRequired is false', () => {
        const result = getValidationOptions(/.+/, 'input', false);
        expect(result).toEqual({
            required: false,
            pattern: {
                value: /.+/,
                message: 'Please enter a valid input',
            }
        });
    });

    it('should include a message in the pattern validation', () => {
        const result = getValidationOptions(/^\d+$/, 'number');
        expect(result).toEqual({
            required: 'This Field is Required',
            pattern: {
                value: /^\d+$/,
                message: 'Please enter a valid number',
            }
        });
    });

    it('should handle different pattern values correctly', () => {
        const result1 = getValidationOptions(/[a-zA-Z]+/, 'letters');
        const result2 = getValidationOptions(/[0-9]+/, 'digits');

        expect(result1).toEqual({
            required: 'This Field is Required',
            pattern: {
                value: /[a-zA-Z]+/,
                message: 'Please enter a valid letters',
            }
        });

        expect(result2).toEqual({
            required: 'This Field is Required',
            pattern: {
                value: /[0-9]+/,
                message: 'Please enter a valid digits',
            }
        });
    });
});
