import {filterProducts} from '../../../src/utils/filter/filterProducts';

import type { ProductDataType } from "../../../src/types/product/productDataTypes";
import type { InitProductFilter} from "../../../src/types/product/productFilterType";

jest.mock('../../../src/utils/filter/subFilters/subFilterDate');
jest.mock('../../../src/utils/filter/subFilters/subFilterSearch');
jest.mock('../../../src/utils/filter/subFilters/subFilterCategoryValue');
jest.mock('../../../src/utils/filter/subFilters/subFilterTag');

import { subFilterCategoryValue } from "../../../src/utils/filter/subFilters/subFilterCategoryValue";
import { subFilterTag } from "../../../src/utils/filter/subFilters/subFilterTag";
import { subFilterDate } from "../../../src/utils/filter/subFilters/subFilterDate";
import { subFilterSearch } from "../../../src/utils/filter/subFilters/subFilterSearch";

describe('filterProducts', () => {
    const mockProducts: ProductDataType[] = [
      { 
        id: '1', name: 'Product 1', src: 'path/to/image1.jpg', category: 'Category1', 
        currentCost: '100', oldCost: '120', sale: '20%', rating: '4', tag: ['tag1'], 
        date: '2023-01-01', promotedCategories: ['promo1'], weight: '1kg',
        color: 'red', type: 'type1', stockStatus: 'in stock',
        description: 'Description for Product 1'
      },
      { 
        id: '2', name: 'Product 2', src: 'path/to/image2.jpg', category: 'Category2', 
        currentCost: '200', oldCost: '220', sale: '10%', rating: '5', tag: ['tag2'], 
        date: '2023-02-01', promotedCategories: ['promo2'], weight: '2kg',
        color: 'blue', type: 'type2', stockStatus: 'in stock',
        description: 'Description for Product 2'
      },
      { 
        id: '3', name: 'Product 3', src: 'path/to/image3.jpg', category: 'Category1', 
        currentCost: '150', oldCost: '180', sale: '30%', rating: '3', tag: ['tag1', 'tag2'], 
        date: '2023-03-01', promotedCategories: ['promo1', 'promo2'], weight: '1.5kg',
        color: 'green', type: 'type3', stockStatus: 'out of stock',
        description: 'Description for Product 3'
      },
    ];
  
    beforeEach(() => {
        jest.clearAllMocks();
        (subFilterDate as jest.Mock).mockReturnValue(mockProducts);
        (subFilterSearch as jest.Mock).mockReturnValue(true);
        (subFilterCategoryValue as jest.Mock).mockReturnValue(true);
        (subFilterTag as jest.Mock).mockReturnValue(true);
      });
  
    it('should filter products based on all criteria', () => {
      const filter: InitProductFilter = {
        search: 'Product',
        categoryValue: ['Category1'],
        price: { min: '100', max: '200' },
        rating: [4, 5],
        tag: 'tag1',
        date: 'newest',
        productsLength: 3
      };
  
      const result = filterProducts(mockProducts, filter);
  
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('1');
      expect(result[1].id).toBe('2');
    });
  
    it('should filter products by price range', () => {
      const filter: InitProductFilter = {
        search: '',
        categoryValue: [],
        price: { min: '150', max: '200' },
        rating: [],
        tag: '',
        date: 'newest',
        productsLength: 3
      };
  
      const result = filterProducts(mockProducts, filter);
  
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('2');
      expect(result[1].id).toBe('3');
    });
  
    it('should filter products by rating', () => {
      const filter: InitProductFilter = {
        search: '',
        categoryValue: [],
        price: { min: '', max: '' },
        rating: [4, 5],
        tag: '',
        date: 'newest',
        productsLength: 3
      };
  
      const result = filterProducts(mockProducts, filter);
  
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('1');
      expect(result[1].id).toBe('2');
    });
  
    it('should return empty array when no products match the filter', () => {
        const filter: InitProductFilter = {
            search: 'NonexistentProduct',
            categoryValue: [],
            price: { min: '', max: '' },
            rating: [],
            tag: '',
            date: 'newest',
            productsLength: 3
        };

        (subFilterSearch as jest.Mock<boolean, [string, string]>).mockReturnValue(false);

        const result = filterProducts(mockProducts, filter);

        expect(result).toHaveLength(0);
    });
  
    it('should apply all sub-filters', () => {
        const filter: InitProductFilter = {
            search: 'Product',
            categoryValue: ['Category1'],
            price: { min: '100', max: '200' },
            rating: [4, 5],
            tag: 'tag1',
            date: 'newest',
            productsLength: 3
        };
      
        const result = filterProducts(mockProducts, filter);
      
        expect(subFilterDate).toHaveBeenCalledWith(mockProducts, 'newest');
        expect(subFilterSearch).toHaveBeenCalledTimes(mockProducts.length);
        expect(subFilterCategoryValue).toHaveBeenCalledTimes(mockProducts.length);
        expect(subFilterTag).toHaveBeenCalledTimes(result.length);
    });
  });