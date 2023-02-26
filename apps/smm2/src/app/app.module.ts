import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Smm2ButtonComponent, Smm2FocusDirectiveModule, Smm2PauseMenuComponent } from '@gui/smm2/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Smm2ButtonComponent, Smm2FocusDirectiveModule, Smm2PauseMenuComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
