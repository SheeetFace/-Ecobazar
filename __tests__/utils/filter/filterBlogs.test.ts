import {filterBlogs} from '../../../src/utils/filter/filterBlogs';

import type { BlogDataTypes } from "../../../src/types/blog/blogDataTypes";
import type { InitBlogFilter } from "../../../src/types/blog/blogFilterTypes";

jest.mock('../../../src/utils/filter/subFilters/subFilterDate');
jest.mock('../../../src/utils/filter/subFilters/subFilterSearch');
jest.mock('../../../src/utils/filter/subFilters/subFilterCategoryValue');
jest.mock('../../../src/utils/filter/subFilters/subFilterTag');

import { subFilterCategoryValue } from "../../../src/utils/filter/subFilters/subFilterCategoryValue";
import { subFilterTag } from "../../../src/utils/filter/subFilters/subFilterTag";
import { subFilterDate } from "../../../src/utils/filter/subFilters/subFilterDate";
import { subFilterSearch } from "../../../src/utils/filter/subFilters/subFilterSearch";


describe('filterBlogs', () => {
    const mockBlogs: BlogDataTypes[] = [
      {
        id: '1',
        category: 'Technology',
        owner: 'John Doe',
        commentsCount: '5',
        title: 'Introduction to React',
        src: 'image1.jpg',
        date: '2023-01-01',
        tag: ['react', 'javascript'],
        post: []
      },
      {
        id: '2',
        category: 'Science',
        owner: 'Jane Smith',
        commentsCount: '3',
        title: 'The Future of AI',
        src: 'image2.jpg',
        date: '2023-02-01',
        tag: ['ai', 'technology'],
        post: []
      }
    ];
  
    const mockFilter: InitBlogFilter = {
      search: '',
      categoryValue: [],
      tag: '',
      date: 'newest',
      blogsLength: 2
    };
  
    beforeEach(() => {
      jest.clearAllMocks();
      (subFilterDate as jest.Mock).mockReturnValue(mockBlogs);
      (subFilterSearch as jest.Mock).mockReturnValue(true);
      (subFilterCategoryValue as jest.Mock).mockReturnValue(true);
      (subFilterTag as jest.Mock).mockReturnValue(true);
    });
  
    it('should call subFilterDate with correct arguments', () => {
      filterBlogs(mockBlogs, mockFilter);
      expect(subFilterDate).toHaveBeenCalledWith(mockBlogs, 'newest');
    });
  
    it('should filter blogs based on search', () => {
      (subFilterSearch as jest.Mock).mockReturnValueOnce(true).mockReturnValueOnce(false);
      const result = filterBlogs(mockBlogs, mockFilter);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('1');
    });
  
    it('should filter blogs based on category', () => {
      (subFilterCategoryValue as jest.Mock).mockReturnValueOnce(true).mockReturnValueOnce(false);
      const result = filterBlogs(mockBlogs, mockFilter);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('1');
    });
  
    it('should filter blogs based on tag', () => {
      (subFilterTag as jest.Mock).mockReturnValueOnce(true).mockReturnValueOnce(false);
      const result = filterBlogs(mockBlogs, mockFilter);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('1');
    });
  
    it('should return all blogs when all filters pass', () => {
      const result = filterBlogs(mockBlogs, mockFilter);
      expect(result).toHaveLength(2);
    });
  
    it('should return empty array when no blogs pass the filters', () => {
      (subFilterSearch as jest.Mock).mockReturnValue(false);
      const result = filterBlogs(mockBlogs, mockFilter);
      expect(result).toHaveLength(0);
    });
});