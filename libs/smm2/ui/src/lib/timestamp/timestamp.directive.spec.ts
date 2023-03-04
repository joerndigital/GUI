import { Component, ElementRef, Renderer2 } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Smm2TimestampDirective } from './timestamp.directive';

@Component({
  template: '<span smm2Timestamp>01:14.444</span>',
})
class TestComponent {
  constructor(public el: ElementRef) {}
}

describe('TimestampDirective', () => {
  describe('On a component', () => {
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [Smm2TimestampDirective],
      }).createComponent(TestComponent);

      fixture.detectChanges(); // initial binding
    });

    it('should create an instance', () => {
      expect(fixture).toBeTruthy();
    });

    it('should add style to the tenths', fakeAsync(() => {
      const parentSpan: HTMLSpanElement = fixture.debugElement.query(
        By.directive(Smm2TimestampDirective),
      ).nativeElement;
      const [tenthsSpan] = Array.from(parentSpan.children);

      tick(1); // we need a tick so that the uinnerText is correctly filled

      expect(parentSpan.innerText).toBe('01:14.');
      expect((tenthsSpan as HTMLSpanElement).innerText).toBe('444');
      expect((tenthsSpan as HTMLSpanElement).style.fontSize).toBe('medium');
    }));
  });

  describe('As a class', () => {
    let directive: Smm2TimestampDirective;

    beforeEach(() => {
      directive = new Smm2TimestampDirective(
        {
          nativeElement: {
            textContent: '',
          },
        } as ElementRef,
        {} as Renderer2,
      );
    });

    it('should be defined', () => {
      expect(directive).toBeDefined();
    });

    describe('#ngOnInit', () => {
      it('should throw an error IF text content has not the correct format', () => {
        directive['el'].nativeElement.textContent = 'any';
        expect(() => directive.ngOnInit()).toThrow(
          'This is not a SMM2 timestamp (dd:dd.ddd).',
        );
      });
    });

    describe('#isTimestamp', () => {
      it('should check IF the string is a correct timestamp', () => {
        expect(directive['isTimestamp']('01:01.010')).toBe(true);
        expect(directive['isTimestamp']('1:01.0101')).toBe(false);
        expect(directive['isTimestamp']('100:01.0101')).toBe(false);
        expect(directive['isTimestamp']('01:1.0101')).toBe(false);
        expect(directive['isTimestamp']('01:01.10')).toBe(false);
        expect(directive['isTimestamp']('01:101.100')).toBe(false);
        expect(directive['isTimestamp']('01:01.1000')).toBe(false);
        expect(directive['isTimestamp']('01:1:0101')).toBe(false);
      });
    });
  });
});
