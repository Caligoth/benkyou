import { BenkyouPage } from './app.po';

describe('benkyou App', () => {
  let page: BenkyouPage;

  beforeEach(() => {
    page = new BenkyouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
