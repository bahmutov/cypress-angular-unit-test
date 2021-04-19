import { initEnv, mount, setConfig } from 'cypress-angular-unit-test';
import { MaterialButtonComponent } from './material-button.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from '../app.module';

describe('MaterialButtonComponent', () => {
  beforeEach(() => {
    setConfig({
      cssFile: 'node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
    });
  });

  it('should create', () => {
    initEnv(MaterialButtonComponent, {
      imports: [MatButtonModule, BrowserAnimationsModule],
    });
    const fixture = mount(MaterialButtonComponent);
    fixture.detectChanges();
  });

  it('should create with module', () => {
    initEnv({ imports: [AppModule] });
    const fixture = mount(MaterialButtonComponent);
    fixture.detectChanges();
  });
});
