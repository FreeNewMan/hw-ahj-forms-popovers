import puppeteer from 'puppeteer';

describe('Card Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.cardnumb-form-widget');
  });

  test('Нажимаем на кнопку один раз - показ виджета', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.container');

    const form = await page.$('.user-form');
    const submit = await form.$('.submit');

    await submit.click();
    jest.setTimeout(20000);

    await page.waitForTimeout('.popover');

  });

  test('Нажимаем на кнопку два раза - показ и скрытие', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.container');

    const form = await page.$('.user-form');
    const submit = await form.$('.submit');

    await submit.click();
    await submit.click();

    await page.waitForTimeout('.container');
  });

  
  afterEach(async () => {
    await browser.close();
  });
});
