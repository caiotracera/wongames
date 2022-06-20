import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { ExploreSidebar } from '@/components/ExploreSidebar';
import { items as exploreSidebarMock } from '@/components/ExploreSidebar/mock';

describe('<ExploreSidebar />', () => {
  it('should render the <ExploreSidebar />', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={jest.fn} />,
    );

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /sort by/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /system/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument();
  });

  it('should render inputs', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={jest.fn} />,
    );

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('radio', { name: /low to high/i }),
    ).toBeInTheDocument();
  });

  it('should render the filter button', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={jest.fn} />,
    );

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebarMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={jest.fn}
      />,
    );

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked();
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked();
  });

  it('should filter with initial values', () => {
    const onFilter = jest.fn();
    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebarMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' });
  });

  it('should filter with checked values', () => {
    const onFilter = jest.fn();
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={onFilter} />,
    );

    fireEvent.click(screen.getByLabelText(/linux/i));
    fireEvent.click(screen.getByLabelText(/mac/i));
    fireEvent.click(screen.getByLabelText(/high to low/i));

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({
      linux: true,
      macos: true,
      sort_by: 'high-to-low',
    });
  });

  it('should altern between radio options', () => {
    const onFilter = jest.fn();
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={onFilter} />,
    );

    fireEvent.click(screen.getByLabelText(/low to high/i));
    fireEvent.click(screen.getByLabelText(/high to low/i));

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({
      sort_by: 'high-to-low',
    });
  });
});
