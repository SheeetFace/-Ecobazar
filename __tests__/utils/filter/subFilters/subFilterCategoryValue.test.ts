import { subFilterCategoryValue } from '../../../../src/utils/filter/subFilters/subFilterCategoryValue';

describe('subFilterCategoryValue', () => {
    it('should return true if filterCategory is empty', () => {
        const result = subFilterCategoryValue([], 'exampleCategory');
        expect(result).toBe(true);
    });

    it('should return true if contentCategory is in filterCategory', () => {
        const result = subFilterCategoryValue(['examplecategory', 'anothercategory'], 'exampleCategory');
        expect(result).toBe(true);
    });

    it('should return false if contentCategory is not in filterCategory', () => {
        const result = subFilterCategoryValue(['examplecategory', 'anothercategory'], 'nonexistentCategory');
        expect(result).toBe(false);
    });
});
