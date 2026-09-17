import type { Preview } from '@storybook/react-vite';
import { DesignSystemProvider } from '../src/providers/DesignSystemProvider';
import '../src/styles/index.css';
import '../src/stories/stories.css';

const preview: Preview = {
  globalTypes: {
    theme: { description: 'Color mode', defaultValue: 'light', toolbar: { icon: 'mirror', items: ['light', 'dark'] } },
    product: { description: 'Product theme', defaultValue: 'universe', toolbar: { icon: 'component', items: ['universe', 'social'] } }
  },
  decorators: [(Story, context) => <DesignSystemProvider theme={context.globals.theme} product={context.globals.product}><div style={{ minHeight: '100vh', padding: '2rem' }}><Story /></div></DesignSystemProvider>],
  parameters: { controls: { expanded: true }, a11y: { test: 'error' }, backgrounds: { disable: true }, layout: 'fullscreen' },
  tags: ['autodocs']
};
export default preview;
