import { render, screen } from '@testing-library/react';
import Pod from './Pod';
test('Render Card component', () => {
  render(<Pod status={[]}></Pod>);
});
