import { initEnv, mount } from 'cypress-angular-unit-test';
import { AssetsImageComponent } from './assets-image.component';

describe('AssetsImageComponent', () => {
  it('should create', () => {
    initEnv(AssetsImageComponent);
    mount(AssetsImageComponent);
  });
});
