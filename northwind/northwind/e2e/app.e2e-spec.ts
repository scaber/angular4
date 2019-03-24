import { NorthwindPage } from './app.po';

describe('northwind App', () => {
  let page: NorthwindPage;

  beforeEach(() => {
    page = new NorthwindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
