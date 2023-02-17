import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Smm2ButtonComponent, Smm2FocusDirectiveModule } from '@gui/smm2/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Smm2ButtonComponent, Smm2FocusDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
