import { subFilterTag } from '../../../../src/utils/filter/subFilters/subFilterTag';

describe('subFilterTag', () => {
    it('should return true if filterCategory is empty', () => {
        expect(subFilterTag('', ['category1', 'category2'])).toBe(true);
    });

    it('should return false if filterCategory is not included in contentCategory', () => {
        expect(subFilterTag('category1', ['category2', 'category3'])).toBe(false);
        expect(subFilterTag('category1', [])).toBe(false);
    });

    it('should return true if filterCategory is included in contentCategory', () => {
        expect(subFilterTag('category1', ['category1', 'category2'])).toBe(true);
        expect(subFilterTag('category1', ['category2', 'category1'])).toBe(true);
    });

    it('should handle cases where both filterCategory and contentCategory are empty', () => {
        expect(subFilterTag('', [])).toBe(true);
    });
});
