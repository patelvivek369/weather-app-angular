import { UnixToDatePipe } from './unix-to-date.pipe';

describe('UnixToDatePipe', () => {
  let pipe: UnixToDatePipe;

  beforeEach(() => {
    pipe = new UnixToDatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a unix timestamp to a formatted date', () => {
    const input = 1645047362;
    const expectedOutput = '9 PM';
    expect(pipe.transform(input)).toEqual(expectedOutput);
  });

  it('should transform a different unix timestamp to a formatted date', () => {
    const input = 1645072575;
    const expectedOutput = '4 AM';
    expect(pipe.transform(input)).toEqual(expectedOutput);
  });
});
