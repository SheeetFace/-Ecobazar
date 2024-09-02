import {isMobileDevice} from '../../src/utils/isMobileDevice';

describe('isMobileDevice', () => {
  let originalUserAgent: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalUserAgent = Object.getOwnPropertyDescriptor(window.navigator, 'userAgent');
  });

  afterEach(() => {
    if (originalUserAgent) {
      Object.defineProperty(window.navigator, 'userAgent', originalUserAgent);
    }
  });

  const setUserAgent = (userAgent: string) => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgent,
      writable: true,
      configurable: true,
    });
  };

  const mockMatchMedia = (matches: boolean) => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), 
      removeListener: jest.fn(), 
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  };

  it('should return true for a mobile user agent', () => {
    setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1');
    mockMatchMedia(false);

    expect(isMobileDevice()).toBe(true);
  });

  it('should return true for a small screen size', () => {
    setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36');
    mockMatchMedia(true);

    expect(isMobileDevice()).toBe(true);
  });

  it('should return false for a desktop user agent with a large screen size', () => {
    setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36');
    mockMatchMedia(false); 

    expect(isMobileDevice()).toBe(false);
  });

  it('should return true if both mobile user agent and small screen size are detected', () => {
    setUserAgent('Mozilla/5.0 (Android 10; Mobile; rv:79.0) Gecko/79.0 Firefox/79.0');
    mockMatchMedia(true); 

    expect(isMobileDevice()).toBe(true);
  });

  it('should return false if neither mobile user agent nor small screen size are detected', () => {
    setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36');
    mockMatchMedia(false); 

    expect(isMobileDevice()).toBe(false);
  });
});
