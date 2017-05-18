import { CheckingPage } from './app.po';

describe('checking App', () => {
  let page: CheckingPage;

  beforeEach(() => {
    page = new CheckingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
