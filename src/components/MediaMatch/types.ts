import { DefaultBreakpoints } from 'styled-media-query';

export type Breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: Breakpoint;
  greaterThan?: Breakpoint;
};
