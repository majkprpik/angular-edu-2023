import { JewelryPipe } from './jewelry.pipe';

describe('JewelryPipe', () => {
  it('create an instance', () => {
    const pipe = new JewelryPipe();
    expect(pipe).toBeTruthy();
  });
});
