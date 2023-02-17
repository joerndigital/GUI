import {
  moduleMetadata,
  Story,
  Meta,
} from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Smm2FocusDirectiveModule } from '../focus/focus.module';
import { Smm2ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: Smm2ButtonComponent,
  parameters: {
    actions: {
      handles: ['pointerover button', 'click button'],
    },
  },
  argTypes: {
    ngContent: {
      table: {
        category: 'NgContent',
      },
      description: 'Declare some content to the button.',
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Smm2FocusDirectiveModule],
    }),
  ],
} as Meta<Smm2ButtonComponent>;

const defaultArgs = {
  ngContent: 'Start Over',
};

type Smm2ButtonStory = Smm2ButtonComponent & { ngContent: unknown };

const Template: Story<Smm2ButtonStory> = (args: Smm2ButtonStory) => ({
  props: args,
  template: `<button data-testid="smm2-button" smm2-button>${args['ngContent']}</button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
};

const TemplateWithFocus: Story<Smm2ButtonStory> = (args: Smm2ButtonStory) => ({
  props: args,
  template: `<button data-testid="smm2-button" smm2-button smm2Focus>${args['ngContent']}</button>`,
});

export const PrimaryWithFocus = TemplateWithFocus.bind({});
PrimaryWithFocus.args = {
  ...defaultArgs,
  ngContent: 'Hover me',
};

// TESTS

Primary.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  await expect(canvas.getAllByTestId('smm2-button')).toBeDefined();
};

PrimaryWithFocus.play = async ({ canvasElement }): Promise<void> => {
  const DEFAULT_SVG_FOCUS_ELEMENTS = 4;

  const canvas = within(canvasElement);
  await expect(canvas.getAllByTestId('smm2-button')).toBeDefined();

  await userEvent.hover(canvas.getByTestId('smm2-button'));
  await expect(canvas.getAllByTestId('smm2-focus')).toHaveLength(
    DEFAULT_SVG_FOCUS_ELEMENTS,
  );

  await userEvent.unhover(canvas.getByTestId('smm2-button'));

};
