import { manageModalDisplay } from '../../src/utils/manageModalDisplay';

describe('manageModalDisplay', () => {
    let modalRef: React.RefObject<HTMLDivElement>;
    let isFirstOpen: React.MutableRefObject<boolean>;

    beforeEach(() => {
        modalRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement>;
        isFirstOpen = { current: false };
    });

    it('should display modal and add show class when isShow is true', () => {
        const classShow = 'show';
        const classHide = 'hide';
        
        manageModalDisplay(true, isFirstOpen, modalRef, classShow, classHide);

        expect(modalRef.current!.style.display).toBe('block');
        expect(modalRef.current!.classList.contains(classShow)).toBe(true);
        expect(modalRef.current!.classList.contains(classHide)).toBe(false);
        expect(isFirstOpen.current).toBe(true);
    });

    it('should hide modal and add hide class when isShow is false and isFirstOpen is true', () => {
        const classShow = 'show';
        const classHide = 'hide';
        
        isFirstOpen.current = true;
        modalRef.current!.classList.add(classShow);
        
        manageModalDisplay(false, isFirstOpen, modalRef, classShow, classHide);

        expect(modalRef.current!.style.display).toBe('');
        expect(modalRef.current!.classList.contains(classShow)).toBe(false);
        expect(modalRef.current!.classList.contains(classHide)).toBe(true);
    });

    it('should hide modal and not add hide class when isShow is false and isFirstOpen is false', () => {
        const classShow = 'show';
        const classHide = 'hide';
        
        manageModalDisplay(false, isFirstOpen, modalRef, classShow, classHide);

        expect(modalRef.current!.style.display).toBe('none');
        expect(modalRef.current!.classList.contains(classShow)).toBe(false);
        expect(modalRef.current!.classList.contains(classHide)).toBe(false);
    });
});
