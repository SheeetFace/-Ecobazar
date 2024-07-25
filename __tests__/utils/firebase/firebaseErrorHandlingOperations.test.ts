import {firebaseErrorHandlingOperations} from "../../../src/utils/firebase/firebaseErrorHandlingOperations";
import { formatAuthError } from '../../../src/utils/firebase/formatAuthError';

import { FirebaseError } from 'firebase/app';

jest.mock('../../../src/utils/firebase/formatAuthError');


describe('firebaseErrorHandlingOperations', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return data when operation is successful', async () => {
        const mockOperation = jest.fn().mockResolvedValue('success data');

        const result = await firebaseErrorHandlingOperations(mockOperation);

        expect(result).toEqual({
            data: 'success data',
            error: {
                status: false,
                message: ''
            }
        });
        expect(mockOperation).toHaveBeenCalledTimes(1);
    });

    it('should handle FirebaseError correctly', async () => {
        const mockOperation = jest.fn().mockRejectedValue(new FirebaseError('auth/invalid-email', 'Invalid email'));
        (formatAuthError as jest.Mock).mockReturnValue('Formatted Firebase error');

        const result = await firebaseErrorHandlingOperations(mockOperation);

        expect(result).toEqual({
            data: {},
            error: {
                status: true,
                message: 'Formatted Firebase error'
            }
        });
        expect(mockOperation).toHaveBeenCalledTimes(1);
        expect(formatAuthError).toHaveBeenCalledWith('auth/invalid-email');
    });

    it('should handle generic Error correctly', async () => {
        const mockOperation = jest.fn().mockRejectedValue(new Error('Generic error'));

        const result = await firebaseErrorHandlingOperations(mockOperation);

        expect(result).toEqual({
            data: {},
            error: {
                status: true,
                message: 'Generic error'
            }
        });
        expect(mockOperation).toHaveBeenCalledTimes(1);
    });

    it('should handle unknown error correctly', async () => {
        const mockOperation = jest.fn().mockRejectedValue('Unknown error');

        const result = await firebaseErrorHandlingOperations(mockOperation);

        expect(result).toEqual({
            data: {},
            error: {
                status: true,
                message: 'An unexpected error occurred'
            }
        });
        expect(mockOperation).toHaveBeenCalledTimes(1);
    });
});
