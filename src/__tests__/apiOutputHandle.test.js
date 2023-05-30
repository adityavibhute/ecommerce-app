import { handleResponse } from '../apiUtils/apiOutputHandle';

describe('check the handling of apis', () => {
    it('returns data if response is ok', () => {
        const mockData = { message: 'Success' };
        const mockResponse = {
            ok: true,
            json: jest.fn().mockResolvedValue(mockData),
        };

        return handleResponse(mockResponse).then((data) => {
            expect(data).toEqual(mockData);
            expect(mockResponse.json).toHaveBeenCalledTimes(1);
        });
    });

    it('returns null if response is not ok', () => {
        const mockResponse = {
            ok: false,
            json: jest.fn(),
        };

        expect(mockResponse.ok).toBeFalsy();
    });
});