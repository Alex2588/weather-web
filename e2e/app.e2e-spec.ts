import { WeatherWebPage } from './app.po';

describe('weather-web App', function() {
  let page: WeatherWebPage;

  beforeEach(() => {
    page = new WeatherWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
