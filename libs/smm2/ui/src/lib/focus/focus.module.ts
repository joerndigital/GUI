import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './focus.directive';

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule.withConfig({
      disableAnimations: prefersReducedMotion(),
    }),
  ],
  declarations: [FocusDirective],
  exports: [FocusDirective],
})
export class Smm2FocusDirectiveModule {}
