import { getAvgTime } from '../utils.js';

describe('test utils', () => {
  test('getAvgTime', async () => {
    const state = { spentTime: 100, score: 10 };

    expect(getAvgTime(state)).toEqual(10);
  });
});
