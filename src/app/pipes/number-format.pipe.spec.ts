import { NumberFormatPipe } from './number-format.pipe';

describe('NumberFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert numbers', () => {
    const pipe = new NumberFormatPipe();
    expect(pipe.transform(100)).toEqual(100);
    expect(pipe.transform(1500)).toEqual('1.5K');
    expect(pipe.transform(2000000)).toEqual('2.0M');
  });
});
