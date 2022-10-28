import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';

import App1 from './App1';

describe('App1', () => {
  test('renders App1 component', async () => {
    render(<App1 />);
    screen.debug();
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    screen.debug();
   
  });
});