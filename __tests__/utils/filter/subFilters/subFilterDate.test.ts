import { subFilterDate } from '../../../../src/utils/filter/subFilters/subFilterDate';

import type { ProductDataType } from "../../../../src/types/product/productDataTypes";
import type { BlogDataTypes } from "../../../../src/types/blog/blogDataTypes";

describe('subFilterDate', () => {
    const productData: ProductDataType[] = [
        { name: 'Product 1', id: '1', src: '', currentCost: '', oldCost: '', sale: '', rating: '', promotedCategories: [], weight: '', color: '', type: '', category: '', stockStatus: '', date: '2024-01-01', tag: [], description: '' },
        { name: 'Product 2', id: '2', src: '', currentCost: '', oldCost: '', sale: '', rating: '', promotedCategories: [], weight: '', color: '', type: '', category: '', stockStatus: '', date: '2023-12-31', tag: [], description: '' },
        { name: 'Product 3', id: '3', src: '', currentCost: '', oldCost: '', sale: '', rating: '', promotedCategories: [], weight: '', color: '', type: '', category: '', stockStatus: '', date: '2024-01-02', tag: [], description: '' }
    ];

    const blogData: BlogDataTypes[] = [
        { id: '1', category: '', owner: '', commentsCount: '', title: '', src: '', date: '2024-01-01', tag: [], post: [] },
        { id: '2', category: '', owner: '', commentsCount: '', title: '', src: '', date: '2023-12-31', tag: [], post: [] },
        { id: '3', category: '', owner: '', commentsCount: '', title: '', src: '', date: '2024-01-02', tag: [], post: [] }
    ];

    it('should sort products by date in descending order when filterDate is "newest"', () => {
        const result = subFilterDate(productData, 'newest');
        expect(result[0].date).toBe('2024-01-02');
        expect(result[1].date).toBe('2024-01-01');
        expect(result[2].date).toBe('2023-12-31');
    });

    it('should sort products by date in ascending order when filterDate is "oldest"', () => {
        const result = subFilterDate(productData, 'oldest');
        expect(result[0].date).toBe('2023-12-31');
        expect(result[1].date).toBe('2024-01-01');
        expect(result[2].date).toBe('2024-01-02');
    });

    it('should sort blog posts by date in descending order when filterDate is "newest"', () => {
        const result = subFilterDate(blogData, 'newest');
        expect(result[0].date).toBe('2024-01-02');
        expect(result[1].date).toBe('2024-01-01');
        expect(result[2].date).toBe('2023-12-31');
    });

    it('should sort blog posts by date in ascending order when filterDate is "oldest"', () => {
        const result = subFilterDate(blogData, 'oldest');
        expect(result[0].date).toBe('2023-12-31');
        expect(result[1].date).toBe('2024-01-01');
        expect(result[2].date).toBe('2024-01-02');
    });

    it('should handle empty data array', () => {
        const result = subFilterDate([], 'newest');
        expect(result).toEqual([]);
    });

    it('should handle data array with single item', () => {
        const singleProductData: ProductDataType[] = [
            { name: 'Product 1', id: '1', src: '', currentCost: '', oldCost: '', sale: '', rating: '', promotedCategories: [], weight: '', color: '', type: '', category: '', stockStatus: '', date: '2024-01-01', tag: [], description: '' }
        ];
        const result = subFilterDate(singleProductData, 'oldest');
        expect(result).toEqual(singleProductData);
    });
});
