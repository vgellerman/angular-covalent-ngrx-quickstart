import { VgAngularQuickstartPage } from './app.po';

describe('vg-angular-quickstart App', () => {
  let page: VgAngularQuickstartPage;

  beforeEach(() => {
    page = new VgAngularQuickstartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to vg!');
  });
});
