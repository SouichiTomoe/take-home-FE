import { render, screen } from '@testing-library/react';
import Card from './Card';
test('Render Card component', () => {
  render(<Card total={{ background: '', options: [] }}></Card>);
});
