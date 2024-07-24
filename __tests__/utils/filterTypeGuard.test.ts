import { filterTypeGuard } from '../../src/utils/filterTypeGuard';
import { changeFilter as changeProductFilter } from '../../src/store/slices/productFilterSlice';
import { changeFilter as changeBlogFilter } from '../../src/store/slices/blogFilterSlice';

import type { AppDispatch } from '../../src/store/store';
import type { ProductFilterAction, InitProductFilter } from '../../src/types/product/productFilterType';
import type { BlogFilterAction, InitBlogFilter } from '../../src/types/blog/blogFilterTypes';


describe('filterTypeGuard', () => {
    let dispatch: AppDispatch;

    beforeEach(() => {
        dispatch = jest.fn() as unknown as AppDispatch;
    });

    it('should dispatch changeProductFilter when filter is of type InitProductFilter', () => {
        const productFilter: InitProductFilter = {
            search: '',
            categoryValue: [],
            price: { min: '', max: '' },
            rating: [],
            tag: '',
            date: 'newest',
            productsLength: 0
        };
        const action: ProductFilterAction = { key: 'search', value: 'new search' };

        filterTypeGuard(dispatch, productFilter, action);

        expect(dispatch).toHaveBeenCalledWith(changeProductFilter(action));
    });

    it('should dispatch changeBlogFilter when filter is of type InitBlogFilter', () => {
        const blogFilter: InitBlogFilter = {
            search: '',
            categoryValue: [],
            tag: '',
            date: 'newest',
            blogsLength: 0
        };
        const action: BlogFilterAction = { key: 'search', value: 'new search' };

        filterTypeGuard(dispatch, blogFilter, action);

        expect(dispatch).toHaveBeenCalledWith(changeBlogFilter(action));
    });

    it('should log error when filter type is unknown', () => {
        const unknownFilter:any = { unknownKey: '' };
        const action: ProductFilterAction = { key: 'search', value: 'new search' };
        console.error = jest.fn();

        filterTypeGuard(dispatch, unknownFilter, action);

        expect(console.error).toHaveBeenCalledWith('🚨 Error: none of the filters were found 🚨');
    });
});
