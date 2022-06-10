import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { GameDetails } from '@/components/GameDetails';
import { item as gameDetailsMock } from '@/components/GameDetails/mock';

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />);

    expect(
      screen.getByRole('heading', { name: /developer/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /release date/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /platforms/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /publisher/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rating/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /genres/i }),
    ).toBeInTheDocument();
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />);

    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
  });

  it('should render the formatted date', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render FREE rating BR0', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} rating="BR0" />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 10+ rating BR10', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} rating="BR10" />);

    expect(screen.getByText(/10\+/i)).toBeInTheDocument();
  });

  it('should render 12+ rating BR12', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} rating="BR12" />);

    expect(screen.getByText(/12\+/i)).toBeInTheDocument();
  });

  it('should render 14+ rating BR14', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} rating="BR14" />);

    expect(screen.getByText(/14\+/i)).toBeInTheDocument();
  });

  it('should render 16+ rating BR16', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} rating="BR16" />);

    expect(screen.getByText(/16\+/i)).toBeInTheDocument();
  });

  it('should render 18+ rating BR18', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />);

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument();
  });
});
