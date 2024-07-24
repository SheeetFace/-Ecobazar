import { validateSearchOrSubscribe } from '../../src/utils/validateSearchOrSubscribe';

import { ValidateSearchOrSubscribeTypes } from '../../src/types/validateSearchOrSubscribeTypes';

describe('validateSearchOrSubscribe', () => {
    it('should return false with reason "leadingSpace" if value starts with a space', () => {
        const result = validateSearchOrSubscribe(' test', ValidateSearchOrSubscribeTypes.SEARCH);
        expect(result).toEqual({ result: false, reason: 'leadingSpace' });
    });

    it('should return false with reason "leadingSpace" if value starts with multiple spaces', () => {
        const result = validateSearchOrSubscribe('   test', ValidateSearchOrSubscribeTypes.SEARCH);
        expect(result).toEqual({ result: false, reason: 'leadingSpace' });
    });

    it('should return false with reason "inputEmpty" if search value is empty after trimming', () => {
        const result = validateSearchOrSubscribe('', ValidateSearchOrSubscribeTypes.SEARCH);
        expect(result).toEqual({ result: false, reason: 'inputEmpty' });
    });

    it('should return false with reason "inputEmpty" if subscribe value is empty after trimming', () => {
        const result = validateSearchOrSubscribe('', ValidateSearchOrSubscribeTypes.SUBSCRIBE);
        expect(result).toEqual({ result: false, reason: 'inputEmpty' });
    });

    it('should return false with reason "invalidEmailFormat" if subscribe value is not a valid email', () => {
        const result = validateSearchOrSubscribe('invalid-email', ValidateSearchOrSubscribeTypes.SUBSCRIBE);
        expect(result).toEqual({ result: false, reason: 'invalidEmailFormat' });
    });

    it('should return true with empty reason if search value is valid', () => {
        const result = validateSearchOrSubscribe('valid search', ValidateSearchOrSubscribeTypes.SEARCH);
        expect(result).toEqual({ result: true, reason: '' });
    });

    it('should return true with empty reason if subscribe value is a valid email', () => {
        const result = validateSearchOrSubscribe('test@example.com', ValidateSearchOrSubscribeTypes.SUBSCRIBE);
        expect(result).toEqual({ result: true, reason: '' });
    });
});
