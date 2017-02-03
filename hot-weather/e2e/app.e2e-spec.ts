import { HotWeatherPage } from './app.po';

describe('hot-weather App', function() {
  let page: HotWeatherPage;

  beforeEach(() => {
    page = new HotWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
