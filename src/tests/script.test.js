const { isValidUrl, checkUrlExistence } = require('../js/app.js');

describe('URL validation tests', () => {
describe('URL validation tests', () => {
    test('Valid URL should return true', () => {
        expect(isValidUrl('http://www.example.com')).toBe(true);
    });

    test('Invalid URL should return false', () => {
        expect(isValidUrl('not_a_valid_url')).toBe(false);
    });
});

describe('URL existence tests', () => {
    test('Mock URL existence check', () => {
        return checkUrlExistence('http://www.example.com/file.html').then(data => {
            expect(data).toBe('URL exists and is a file');
        });
    });
});
})
