import { CareerManagementToolPage } from './app.po';

describe('career-management-tool App', () => {
  let page: CareerManagementToolPage;

  beforeEach(() => {
    page = new CareerManagementToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
