import { TestBed } from '@angular/core/testing';
import { Smm2FocusDirectiveModule } from '../focus/focus.module';
import { Smm2ButtonComponent } from './button.component';

const DEFAULT_SVG_FOCUS_ELEMENTS = 4;

describe(Smm2ButtonComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(Smm2ButtonComponent, {
      add: {
        imports: [Smm2FocusDirectiveModule],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount('<button smm2-button>Start Over</button>');
  });

  it('should show focus svg elements on hover', () => {
    cy.mount(
      '<button data-cy="smm2-button" smm2-button smm2Focus>Start Over</button>',
      {
        imports: [Smm2FocusDirectiveModule],
      },
    );
    cy.get('[data-cy="smm2-button"]').trigger('pointerover');
    cy.get('[data-cy="smm2-focus"]').should(
      'have.length',
      DEFAULT_SVG_FOCUS_ELEMENTS,
    );
  });

  it('should show focus svg elements on focus', () => {
    cy.mount(
      '<button data-cy="smm2-button" smm2-button smm2Focus>Start Over</button>',
      {
        imports: [Smm2FocusDirectiveModule],
      },
    );
    cy.get('[data-cy="smm2-button"]').focus();
    cy.get('[data-cy="smm2-focus"]').should(
      'have.length',
      DEFAULT_SVG_FOCUS_ELEMENTS,
    );
  });
});
