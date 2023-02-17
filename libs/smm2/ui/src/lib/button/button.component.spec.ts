import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smm2ButtonComponent } from './button.component';

describe(Smm2ButtonComponent.name, () => {
  let component: Smm2ButtonComponent;
  let fixture: ComponentFixture<Smm2ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smm2ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Smm2ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
