import {isBlogFilterEmpty} from '../../../src/utils/filter/isBlogFilterEmpty';

import type { InitBlogFilter } from "../../../src/types/blog/blogFilterTypes";


describe('isBlogFilterEmpty', () => {
    it('should return true when all filters are empty or set to default values', () => {
        const filter: InitBlogFilter = {
            search: '',
            categoryValue: [],
            tag: '',
            date: 'newest',
            blogsLength: 0,
        };

        expect(isBlogFilterEmpty(filter)).toBe(true);
    });

    it('should return false when search filter is not empty', () => {
        const filter: InitBlogFilter = {
            search: 'Tech',
            categoryValue: [],
            tag: '',
            date: 'newest',
            blogsLength: 0,
        };

        expect(isBlogFilterEmpty(filter)).toBe(false);
    });

    it('should return false when categoryValue filter is not empty', () => {
        const filter: InitBlogFilter = {
            search: '',
            categoryValue: ['Tech'],
            tag: '',
            date: 'newest',
            blogsLength: 0,
        };

        expect(isBlogFilterEmpty(filter)).toBe(false);
    });

    it('should return false when tag filter is not empty', () => {
        const filter: InitBlogFilter = {
            search: '',
            categoryValue: [],
            tag: 'technology',
            date: 'newest',
            blogsLength: 0,
        };

        expect(isBlogFilterEmpty(filter)).toBe(false);
    });

    it('should return false when date filter is not set to default value', () => {
        const filter: InitBlogFilter = {
            search: '',
            categoryValue: [],
            tag: '',
            date: 'oldest',
            blogsLength: 0,
        };

        expect(isBlogFilterEmpty(filter)).toBe(false);
    });

});
