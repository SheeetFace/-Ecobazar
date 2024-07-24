import { formatDate } from '../../src/utils/formatDate';

describe('formatDate', () => {
    test('should format date correctly in short format', () => {
        expect(formatDate('2023-07-22T10:15:30.000Z', 'short')).toBe('22 JUL');
        expect(formatDate(1721805939309, 'short')).toBe('24 JUL'); 
    });

    test('should format date correctly in normal format', () => {
        expect(formatDate('2023-07-22T10:15:30.000Z', 'normal')).toBe('22 JUL, 2023');
        expect(formatDate(1721805939309, 'normal')).toBe('24 JUL, 2024');
    });

    test('should format date correctly in full format', () => {
        const date = new Date('2023-07-22T10:15:30.000Z');
        const localTimeString = `${date.getDate().toString().padStart(2, '0')} ${date.toLocaleString('en-US', { month: 'short' }).toUpperCase()}, ${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        expect(formatDate('2023-07-22T10:15:30.000Z', 'full')).toBe(localTimeString);
        
        const date2 = new Date(1721109330233);
        const localTimeString2 = `${date2.getDate().toString().padStart(2, '0')} ${date2.toLocaleString('en-US', { month: 'short' }).toUpperCase()}, ${date2.getFullYear()} ${date2.getHours().toString().padStart(2, '0')}:${date2.getMinutes().toString().padStart(2, '0')}`;
        expect(formatDate(1721109330233, 'full')).toBe(localTimeString2);
    });

    test('should return Invalid Date for invalid date string', () => {
        expect(formatDate('invalid-date', 'short')).toBe('Invalid Date');
        expect(formatDate('invalid-date', 'normal')).toBe('Invalid Date');
        expect(formatDate('invalid-date', 'full')).toBe('Invalid Date');
    });

    test('should return Invalid Date for invalid date number', () => {
        expect(formatDate(-1, 'short')).toBe('Invalid Date');
        expect(formatDate(-1, 'normal')).toBe('Invalid Date');
        expect(formatDate(-1, 'full')).toBe('Invalid Date');
    });
});
