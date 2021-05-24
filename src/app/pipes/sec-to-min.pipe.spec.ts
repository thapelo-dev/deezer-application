import { SecToMinPipe } from './sec-to-min.pipe';

describe('SecToMinPipe', () => {
  it('create an instance', () => {
    const pipe = new SecToMinPipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert second to minutes', () => {
    const pipe = new SecToMinPipe();
    expect(pipe.transform(100)).toEqual(1);
    expect(pipe.transform(null)).toEqual(0);
  });
});
