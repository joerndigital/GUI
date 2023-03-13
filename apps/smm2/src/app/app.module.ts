import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Smm2ButtonComponent, Smm2FocusDirectiveModule, Smm2ListComponent, Smm2PauseMenuComponent } from '@gui/smm2/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Smm2ButtonComponent, Smm2FocusDirectiveModule, Smm2PauseMenuComponent, Smm2ListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
