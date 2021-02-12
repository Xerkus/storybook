import { DiComponent } from './di.component';

export default {
  title: 'Basics / Component with / Provider',
  component: DiComponent,
};

export const InputsAndInjectDependencies = () => ({
  props: {
    title: 'Component dependencies',
  },
});

InputsAndInjectDependencies.storyName = 'inputs and inject dependencies';

export const InputsAndInjectDependenciesWithArgs = (args) => ({
  props: args,
});
InputsAndInjectDependenciesWithArgs.storyName = 'inputs and inject dependencies with args';
InputsAndInjectDependenciesWithArgs.argTypes = {
  title: { control: 'text' },
};
InputsAndInjectDependenciesWithArgs.args = {
  title: 'Component dependencies',
};
