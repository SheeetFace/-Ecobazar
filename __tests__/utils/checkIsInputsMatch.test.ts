import{ checkIsInputsMatch} from '../../src/utils/checkIsInputsMatch';

describe('checkIsInputsMatch', () => {
    it('should return true if values match', () => {
        const result = checkIsInputsMatch('test', 'test', 'error message');
        expect(result).toBe(true);
    });

    it('should return message if values do not match', () => {
        const result = checkIsInputsMatch('test', 'different', 'error message');
        expect(result).toBe('error message');
    });

    it('should return message if value or watchInput is empty', () => {
        const result1 = checkIsInputsMatch('', '', 'error message');
        const result2 = checkIsInputsMatch('', 'non-empty', 'error message');
        const result3 = checkIsInputsMatch('non-empty', '', 'error message');
        
        expect(result1).toBe(true);
        expect(result2).toBe('error message');
        expect(result3).toBe('error message');
    });
});
