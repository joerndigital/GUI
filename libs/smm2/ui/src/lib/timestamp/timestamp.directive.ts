import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export type Timestamp = string & { __brand: 'Timestamp' };

@Directive({
  selector: '[smm2Timestamp]',
  standalone: true,
})
export class Smm2TimestampDirective implements OnInit {
  @Input() tenthsFontsize = 'medium';

  private span!: HTMLSpanElement;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    const timestamp: string = this.el.nativeElement.textContent;

    if (!this.isTimestamp(timestamp)) {
      throw new Error('This is not a SMM2 timestamp (dd:dd.ddd).');
    }

    const [time, tenths] = timestamp.split('.');
    this.createTenthsElement(tenths);
    this.updateTimestamp(time);
  }

  private isTimestamp(timestamp: string): timestamp is Timestamp {
    return /^[0-9]{2}:[0-9]{2}\.[0-9]{3}$/.test(timestamp);
  }

  private createTenthsElement(tenths: string): void {
    this.span = this.renderer2.createElement('span');
    this.span.innerText = tenths;

    this.renderer2.setStyle(this.span, 'font-size', this.tenthsFontsize);
  }

  private updateTimestamp(time: string): void {
    this.renderer2.setProperty(this.el.nativeElement, 'innerText', `${time}.`);
    this.renderer2.appendChild(this.el.nativeElement, this.span);
  }
}
