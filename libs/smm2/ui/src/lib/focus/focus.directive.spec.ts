import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FocusDirective } from './focus.directive';

@Component({
  template: ' <button smm2Focus>Test</button> ',
})
class TestComponent {}

describe('FocusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [FocusDirective, TestComponent],
      imports: [NoopAnimationsModule],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
