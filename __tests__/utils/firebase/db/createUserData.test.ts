import { createUserData } from '../../../../src/utils/firebase/db/createUserData';

import type { User } from 'firebase/auth';

describe('createUserData', () => {
    it('should create user data with default values', () => {
        const user: User = {
            uid: '12345',
            email: 'test@example.com',
            photoURL: null
        } as User;

        const displayName = 'Test User';

        const expected = {
            uid: '12345',
            userType: 'Customer',
            accountSettings: {
                displayName: 'Test User',
                firstName: '',
                lastName: '',
                email: 'test@example.com',
                photoURL: 'https://static-cdn.jtvnw.net/jtv_user_pictures/aeecb672-a65e-485d-a97a-634b7cef5a5f-profile_image-70x70.png',
                phone: '',
            },
            billingAddress: {
                firstName: '',
                lastName: '',
                email: 'test@example.com',
                phone: '',
                address: '',
                country: '',
                region: '',
                zipCode: '',
                company: ''
            }
        };

        const result = createUserData(user, displayName);
        expect(result).toEqual(expected);
    });

    it('should use user photoURL if provided', () => {
        const user: User = {
            uid: '12345',
            email: 'test@example.com',
            photoURL: 'http://example.com/photo.jpg'
        } as User;

        const displayName = 'Test User';

        const expected = {
            uid: '12345',
            userType: 'Customer',
            accountSettings: {
                displayName: 'Test User',
                firstName: '',
                lastName: '',
                email: 'test@example.com',
                photoURL: 'http://example.com/photo.jpg',
                phone: '',
            },
            billingAddress: {
                firstName: '',
                lastName: '',
                email: 'test@example.com',
                phone: '',
                address: '',
                country: '',
                region: '',
                zipCode: '',
                company: ''
            }
        };

        const result = createUserData(user, displayName);
        expect(result).toEqual(expected);
    });

    it('should handle missing displayName', () => {
        const user: User = {
            uid: '12345',
            email: 'test@example.com',
            photoURL: null
        } as User;

        const displayName = '';

        const expected = {
            uid: '12345',
            userType: 'Customer',
            accountSettings: {
                displayName: '',
                firstName: '',
                lastName: '',
                email: 'test@example.com',
                photoURL: 'https://static-cdn.jtvnw.net/jtv_user_pictures/aeecb672-a65e-485d-a97a-634b7cef5a5f-profile_image-70x70.png',
                phone: '',
            },
            billingAddress: {
                firstName: '',
                lastName: '',
                email: 'test@example.com',
                phone: '',
                address: '',
                country: '',
                region: '',
                zipCode: '',
                company: ''
            }
        };

        const result = createUserData(user, displayName);
        expect(result).toEqual(expected);
    });

    it('should handle missing user properties', () => {
        const user: User = {
            uid: '',
            email: '',
            photoURL: ''
        } as User;

        const displayName = 'Test User';

        const expected = {
            uid: '',
            userType: 'Customer',
            accountSettings: {
                displayName: 'Test User',
                firstName: '',
                lastName: '',
                email: '',
                photoURL: 'https://static-cdn.jtvnw.net/jtv_user_pictures/aeecb672-a65e-485d-a97a-634b7cef5a5f-profile_image-70x70.png',
                phone: '',
            },
            billingAddress: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                country: '',
                region: '',
                zipCode: '',
                company: ''
            }
        };

        const result = createUserData(user, displayName);
        expect(result).toEqual(expected);
    });
});
