import { subFilterSearch } from '../../../../src/utils/filter/subFilters/subFilterSearch';

describe('subFilterSearch', () => {

    it('should return true if sharedTitle includes filterSearch (case insensitive)', () => {
        expect(subFilterSearch('test', 'This is a Test title')).toBe(true);
        expect(subFilterSearch('TEST', 'This is a Test title')).toBe(true);
        expect(subFilterSearch('Test', 'This is a Test title')).toBe(true);
    });

    it('should return false if sharedTitle does not include filterSearch', () => {
        expect(subFilterSearch('test', 'This is a title')).toBe(false);
        expect(subFilterSearch('example', 'This is a Test title')).toBe(false);
        expect(subFilterSearch('Test', 'This is a title')).toBe(false);
    });

    it('should return true if filterSearch is an empty string', () => {
        expect(subFilterSearch('', 'This is a title')).toBe(true);
    });

    it('should handle case where sharedTitle is an empty string', () => {
        expect(subFilterSearch('test', '')).toBe(false); 
    });

    it('should return true if both filterSearch and sharedTitle are empty strings', () => {
        expect(subFilterSearch('', '')).toBe(true);
    });

});
