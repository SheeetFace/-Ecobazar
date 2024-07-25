import { formatAuthError } from '../../../src/utils/firebase/formatAuthError';


describe('formatAuthError', () => {
    it('should format error with type and code', () => {
        const error = 'auth/invalid-email';
        const expected = 'Error type: auth (INVALID-EMAIL)';
        const result = formatAuthError(error);
        expect(result).toBe(expected);
    });

    it('should return the same string if error does not include "/"', () => {
        const error = 'invalid-email';
        const result = formatAuthError(error);
        expect(result).toBe(error);
    });

    it('should handle empty string error', () => {
        const error = '';
        const result = formatAuthError(error);
        expect(result).toBe(error);
    });
});
