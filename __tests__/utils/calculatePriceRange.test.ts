import {calculatePriceRange} from '../../src/utils/calculatePriceRange';
import type { ProductDataType } from '../../src/types/product/productDataTypes';

describe('calculatePriceRange', () => {

    it('should return default price range when products array is empty', () => {
        const products: ProductDataType[] = [];
        const result = calculatePriceRange(products);
        expect(result).toEqual({ minPrice: 0, maxPrice: 100 });
    });

    it('should calculate correct min and max price for a single product with a valid price', () => {
        const products: ProductDataType[] = [
            {
                name: "Product 1",
                id: "1",
                src: "image1.jpg",
                currentCost: "5.99",
                oldCost: "",
                sale: "",
                rating: "3",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type A",
                category: "Category X",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            }
        ];
        const result = calculatePriceRange(products);
        expect(result).toEqual({ minPrice: 5.99, maxPrice: 5.99 });
    });

    it('should calculate correct min and max price when all currentCost values are valid numbers for multiple products', () => {
        const products:ProductDataType[] = [
            {
            name: "Product 1",
            id: "1",
            src: "image1.jpg",
            currentCost: "5.99",
            oldCost: "",
            sale: "",
            rating: "3",
            promotedCategories: [],
            weight: "",
            color: "",
            type: "Type A",
            category: "Category X",
            stockStatus: "",
            date: "2023-12-31",
            tag: [],
            description: ""
            },
            {
            name: "Product 2",
            id: "2",
            src: "image2.jpg",
            currentCost: "3.49",
            oldCost: "",
            sale: "",
            rating: "4",
            promotedCategories: [],
            weight: "",
            color: "",
            type: "Type B",
            category: "Category Y",
            stockStatus: "",
            date: "2023-12-31",
            tag: [],
            description: ""
            },
            {
            name: "Product 3",
            id: "3",
            src: "image3.jpg",
            currentCost: "7.25",
            oldCost: "",
            sale: "",
            rating: "5",
            promotedCategories: [],
            weight: "",
            color: "",
            type: "Type C",
            category: "Category Z",
            stockStatus: "",
            date: "2023-12-31",
            tag: [],
            description: ""
            },
            {
            name: "Product 4",
            id: "4",
            src: "image4.jpg",
            currentCost: "2.50",
            oldCost: "",
            sale: "",
            rating: "4.5",
            promotedCategories: [],
            weight: "",
            color: "",
            type: "Type D",
            category: "Category W",
            stockStatus: "",
            date: "2023-12-31",
            tag: [],
            description: ""
            }
        ];
        const result = calculatePriceRange(products);
        expect(result).toEqual({ minPrice: 2.50, maxPrice: 7.25 });
    });

    it('should ignore products with non-numeric currentCost values', () => {
        const products: ProductDataType[] = [
            {
                name: "Product 1",
                id: "1",
                src: "image1.jpg",
                currentCost: "5.99",
                oldCost: "",
                sale: "",
                rating: "3",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type A",
                category: "Category X",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            },
            {
                name: "Product 2",
                id: "2",
                src: "image2.jpg",
                currentCost: "abc",
                oldCost: "",
                sale: "",
                rating: "4",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type B",
                category: "Category Y",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            }
        ];
        const result = calculatePriceRange(products);
        expect(result).toEqual({ minPrice: 5.99, maxPrice: 5.99 });
    });


    it('should ignore products with NaN prices', () => {
        const products: ProductDataType[] = [
            {
                name: "Product 1",
                id: "1",
                src: "image1.jpg",
                currentCost: "5.99",
                oldCost: "",
                sale: "",
                rating: "3",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type A",
                category: "Category X",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            },
            {
                name: "Product 2",
                id: "2",
                src: "image2.jpg",
                currentCost: "NaN",
                oldCost: "",
                sale: "",
                rating: "4",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type B",
                category: "Category Y",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            }
        ];
        const result = calculatePriceRange(products);
        expect(result).toEqual({ minPrice: 5.99, maxPrice: 5.99 });
    });

    it('should ignore products with negative prices', () => {
        const products: ProductDataType[] = [
            {
                name: "Product 1",
                id: "1",
                src: "image1.jpg",
                currentCost: "5.99",
                oldCost: "",
                sale: "",
                rating: "3",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type A",
                category: "Category X",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            },
            {
                name: "Product 2",
                id: "2",
                src: "image2.jpg",
                currentCost: "-3.49",
                oldCost: "",
                sale: "",
                rating: "4",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type B",
                category: "Category Y",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            }
        ];
        const result = calculatePriceRange(products);
        expect(result).toEqual({ minPrice: 5.99, maxPrice: 5.99 });
    });

    it('should ignore products with zero prices', () => {
        const products: ProductDataType[] = [
            {
                name: "Product 1",
                id: "1",
                src: "image1.jpg",
                currentCost: "5.99",
                oldCost: "",
                sale: "",
                rating: "3",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type A",
                category: "Category X",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            },
            {
                name: "Product 2",
                id: "2",
                src: "image2.jpg",
                currentCost: "0.00",
                oldCost: "",
                sale: "",
                rating: "4",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type B",
                category: "Category Y",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            }
        ];
        const result = calculatePriceRange(products);
        expect(result).toEqual({ minPrice: 0.00, maxPrice: 5.99 });
    });

    it('should ignore products with undefined types in currentCost', () => {
        const products: ProductDataType[] = [
            {
                name: "Product 1",
                id: "1",
                src: "image1.jpg",
                currentCost: "5.99",
                oldCost: "",
                sale: "",
                rating: "3",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type A",
                category: "Category X",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            },
            {
                name: "Product 2",
                id: "2",
                src: "image2.jpg",
                currentCost: 'undefined',
                oldCost: "",
                sale: "",
                rating: "4",
                promotedCategories: [],
                weight: "",
                color: "",
                type: "Type B",
                category: "Category Y",
                stockStatus: "",
                date: "2023-12-31",
                tag: [],
                description: ""
            }
        ];
        const result = calculatePriceRange(products);
        expect(result).toEqual({ minPrice: 5.99, maxPrice: 5.99 });
    });

})