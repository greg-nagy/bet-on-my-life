import { text, number, boolean } from '@storybook/addon-knobs';
import { LoginFormComponent } from './login-form.component';

export default {
  title: 'LoginFormComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: LoginFormComponent,
  props: {
    yo: text('yo', 'my peeps'),
  }
})
