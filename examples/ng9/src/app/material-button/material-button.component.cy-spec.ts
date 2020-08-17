import { initEnv, mount, setConfig } from 'cypress-angular-unit-test';
import { MaterialButtonComponent } from './material-button.component';
import { MatButtonModule } from '@angular/material/button';

describe('MaterialButtonComponent', () => {

  beforeEach(() => {
    setConfig({ cssFile: 'node_modules/@angular/material/prebuilt-themes/indigo-pink.css' });
    initEnv(MaterialButtonComponent, { imports: [MatButtonModule] });
  });

  it.skip('should create', () => {
    mount(MaterialButtonComponent);
  });

});
