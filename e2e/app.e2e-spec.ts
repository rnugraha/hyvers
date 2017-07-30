import { HyversPage } from './app.po';

describe('hyvers App', () => {
  let page: HyversPage;

  beforeEach(() => {
    page = new HyversPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
