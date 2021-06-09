import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MaterialButtonComponent } from './material-button/material-button.component';

@NgModule({
  declarations: [MaterialButtonComponent],
  imports: [MatButtonModule],
})
export class MyUiModule {}
