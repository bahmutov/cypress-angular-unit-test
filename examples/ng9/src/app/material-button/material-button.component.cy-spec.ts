import { initEnv, mount, setConfig } from 'cypress-angular-unit-test';
import { MaterialButtonComponent } from './material-button.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MaterialButtonComponent', () => {

  beforeEach(() => {
    setConfig({ cssFile: 'node_modules/@angular/material/prebuilt-themes/indigo-pink.css' });
    initEnv(MaterialButtonComponent, { imports: [MatButtonModule, BrowserAnimationsModule] });
  });

  it('should create', () => {
    const fixture = mount(MaterialButtonComponent);
    fixture.detectChanges();
  });

});
