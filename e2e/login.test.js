import { device } from 'detox';

describe('Home', () => {
  beforeAll(async () => {
    // Launch the app
    await device.launchApp({
      newinstance: true,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show home screen', async () => {
    await expect(element(by.id('homeScreen'))).toBeVisible();
  });
});
