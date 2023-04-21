import { ToDegreesPipe } from './to-degrees.pipe';

describe('ToDegreesPipe', () => {
  let pipe: ToDegreesPipe;

  beforeEach(() => {
    pipe = new ToDegreesPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a number to degrees', () => {
    const input = 30.5;
    const expectedOutput = '31°';
    expect(pipe.transform(input)).toEqual(expectedOutput);
  });

  it('should transform negative numbers to degrees', () => {
    const input = -30.5;
    const expectedOutput = '-30°';
    expect(pipe.transform(input)).toEqual(expectedOutput);
  });
});