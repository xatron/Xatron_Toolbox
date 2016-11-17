import { XatronToolboxPage } from './app.po';

describe('xatron-toolbox App', function() {
  let page: XatronToolboxPage;

  beforeEach(() => {
    page = new XatronToolboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
