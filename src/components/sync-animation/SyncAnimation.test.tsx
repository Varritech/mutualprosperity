import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SyncAnimation from './SyncAnimation';

describe('SyncAnimation', () => {
  it('renders the component with all pillars', () => {
    const { getByText } = render(<SyncAnimation />);
    
    // Check if all pillar letters are present
    expect(getByText('S')).toBeInTheDocument();
    expect(getByText('Y')).toBeInTheDocument();
    expect(getByText('N')).toBeInTheDocument();
    expect(getByText('C')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-class';
    const { getByTestId } = render(<SyncAnimation className={customClass} />);
    
    const container = getByTestId('sync-animation-container');
    expect(container).toHaveClass(customClass);
  });
}); 
