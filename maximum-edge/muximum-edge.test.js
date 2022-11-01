const testMaximumEdge = require('./muximum-edge');

describe('finds the maximum range of a triangle third edge', () => {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  it('where the side lengths are all integers.', () => {
    expect(testMaximumEdge.nextEdge(5, 4)).toEqual(8);
  });

  it('where the side lengths are all integers.', () => {
    expect(testMaximumEdge.nextEdge(8, 3)).toEqual(10);
  });

  it('where the side lengths are all integers.', () => {
    expect(testMaximumEdge.nextEdge(7, 9)).toEqual(15);
  });
});
