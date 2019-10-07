import { StringifyDurationPipe } from './stringify-duration.pipe';

describe('StringifyDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new StringifyDurationPipe();
    expect(pipe).toBeTruthy();
  });
});
