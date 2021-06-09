import { initEnv, mount, setConfig } from 'cypress-angular-unit-test';
import { MaterialButtonComponent } from './material-button.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from '../app.module';
import { MyUiModule } from '../my-ui.module';

describe('MaterialButtonComponent', () => {
  beforeEach(() => {
    setConfig({
      stylesheet:
        'node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
    });
  });

  it('should create', () => {
    initEnv(MaterialButtonComponent, {
      imports: [MatButtonModule, BrowserAnimationsModule],
    });
    const fixture = mount(MaterialButtonComponent);
    fixture.detectChanges();
  });

  it('should create with AppModule', () => {
    initEnv({ imports: [AppModule] });
    const fixture = mount(MaterialButtonComponent);
    fixture.detectChanges();
  });

  it('should create with MyUiModule', () => {
    initEnv({ imports: [MyUiModule] });
    const fixture = mount(MaterialButtonComponent);
    fixture.detectChanges();
  });
});
