import { parsePathToBreadcrumb } from '../../src/utils/parsePathToBreadcrumb';

describe('parsePathToBreadcrumb', () => {
    it('should return Home for root path', () => {
      expect(parsePathToBreadcrumb('/')).toEqual([{ name: 'Home', pathBack: '/' }]);
    });
  
    it('should parse simple paths correctly', () => {
      expect(parsePathToBreadcrumb('/about')).toEqual([
        { name: 'Home', pathBack: '/' },
        { name: 'About', pathBack: '/about' },
      ]);
  
      expect(parsePathToBreadcrumb('/about/team')).toEqual([
        { name: 'Home', pathBack: '/' },
        { name: 'About', pathBack: '/about' },
        { name: 'Team', pathBack: '/team' },
      ]);
    });
  
    it('should replace %20 with spaces and capitalize words', () => {
      expect(parsePathToBreadcrumb('/about%20us/team')).toEqual([
        { name: 'Home', pathBack: '/' },
        { name: 'About us', pathBack: '/about%20us' },
        { name: 'Team', pathBack: '/team' },
      ]);
    });
  
    it('should replace - with spaces and capitalize words', () => {
      expect(parsePathToBreadcrumb('/about-us/team-members')).toEqual([
        { name: 'Home', pathBack: '/' },
        { name: 'About us', pathBack: '/about-us' },
        { name: 'Team members', pathBack: '/team-members' },
      ]);
    });
  
    it('should handle empty string', () => {
      expect(parsePathToBreadcrumb('')).toEqual([]);
    });
  
    it('should handle paths with multiple segments correctly', () => {
      expect(parsePathToBreadcrumb('/products/electronics/phones')).toEqual([
        { name: 'Home', pathBack: '/' },
        { name: 'Products', pathBack: '/products' },
        { name: 'Electronics', pathBack: '/electronics' },
        { name: 'Phones', pathBack: '/phones' },
      ]);
    });
  
    it('should handle leading and trailing slashes correctly', () => {
      expect(parsePathToBreadcrumb('/products/electronics/phones/')).toEqual([
        { name: 'Home', pathBack: '/' },
        { name: 'Products', pathBack: '/products' },
        { name: 'Electronics', pathBack: '/electronics' },
        { name: 'Phones', pathBack: '/phones' },
      ]);
  
      expect(parsePathToBreadcrumb('products/electronics/phones')).toEqual([
        { name: 'Home', pathBack: '/' },
        { name: 'Products', pathBack: '/products' },
        { name: 'Electronics', pathBack: '/electronics' },
        { name: 'Phones', pathBack: '/phones' },
      ]);
    });
  });