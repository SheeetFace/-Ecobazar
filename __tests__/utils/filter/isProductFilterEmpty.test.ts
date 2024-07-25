import {isProductFilterEmpty} from '../../../src/utils/filter/isProductFilterEmpty';


import type { InitProductFilter } from "../../../src/types/product/productFilterType"


describe('isProductFilterEmpty', () => {
    
    it('should return true when all filters are empty or set to default values', () => {
        const filter: InitProductFilter = {
            search: '',
            categoryValue: [],
            price: { min: '', max: '' },
            rating: [],
            tag: '',
            date: 'newest',
            productsLength: 0
        };

        expect(isProductFilterEmpty(filter)).toBe(true);
    });

    it('should return false when search filter is not empty', () => {
        const filter: InitProductFilter = {
            search: 'Gadget',
            categoryValue: [],
            price: { min: '', max: '' },
            rating: [],
            tag: '',
            date: 'newest',
            productsLength: 0
        };

        expect(isProductFilterEmpty(filter)).toBe(false);
    });

    it('should return false when categoryValue filter is not empty', () => {
        const filter: InitProductFilter = {
            search: '',
            categoryValue: ['Electronics'],
            price: { min: '', max: '' },
            rating: [],
            tag: '',
            date: 'newest',
            productsLength: 0
        };

        expect(isProductFilterEmpty(filter)).toBe(false);
    });

    it('should return false when price filter is not empty', () => {
        const filter: InitProductFilter = {
            search: '',
            categoryValue: [],
            price: { min: '100', max: '500' },
            rating: [],
            tag: '',
            date: 'newest',
            productsLength: 0
        };

        expect(isProductFilterEmpty(filter)).toBe(false);
    });

    it('should return false when rating filter is not empty', () => {
        const filter: InitProductFilter = {
            search: '',
            categoryValue: [],
            price: { min: '', max: '' },
            rating: [4],
            tag: '',
            date: 'newest',
            productsLength: 0
        };

        expect(isProductFilterEmpty(filter)).toBe(false);
    });

    it('should return false when tag filter is not empty', () => {
        const filter: InitProductFilter = {
            search: '',
            categoryValue: [],
            price: { min: '', max: '' },
            rating: [],
            tag: 'electronics',
            date: 'newest',
            productsLength: 0
        };

        expect(isProductFilterEmpty(filter)).toBe(false);
    });

    it('should return false when date filter is not set to default value', () => {
        const filter: InitProductFilter = {
            search: '',
            categoryValue: [],
            price: { min: '', max: '' },
            rating: [],
            tag: '',
            date: 'oldest',
            productsLength: 0
        };

        expect(isProductFilterEmpty(filter)).toBe(false);
    });
});