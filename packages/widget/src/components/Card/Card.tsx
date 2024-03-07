import type { BoxProps, Theme } from '@mui/material';
import { Box, alpha, darken, lighten, styled } from '@mui/material';
import type { MouseEventHandler } from 'react';

type CardVariant = 'default' | 'selected' | 'error';

export type CardProps = {
  variant?: CardVariant;
  selectionColor?: 'primary' | 'secondary';
  indented?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  pointerEvents?: 'auto' | 'none';
} & BoxProps;

const getBackgroundColor = (
  theme: Theme,
  variant?: CardVariant,
  selectionColor?: 'primary' | 'secondary',
) =>
  variant === 'selected'
    ? selectionColor === 'primary'
      ? theme.palette.mode === 'light'
        ? alpha(theme.palette.primary.main, 0.04)
        : alpha(theme.palette.primary.main, 0.42)
      : alpha(
          theme.palette.secondary.main,
          theme.palette.mode === 'light' ? 0.08 : 0.12,
        )
    : theme.palette.background.paper;

export const Card = styled(Box, {
  shouldForwardProp: (prop) =>
    !['variant', 'indented', 'selectionColor', 'pointerEvents'].includes(
      prop as string,
    ),
})<CardProps>(({
  theme,
  variant = 'default',
  selectionColor = 'primary',
  indented,
  pointerEvents,
  onClick,
}) => {
  const backgroundColor = getBackgroundColor(theme, variant, selectionColor);
  const backgroundHoverColor = onClick
    ? theme.palette.mode === 'light'
      ? darken(backgroundColor, 0.02)
      : lighten(backgroundColor, 0.02)
    : backgroundColor;
  return {
    backgroundColor: "black",
    // border: variant === 'default' ? 'none' : '1px solid',
    border: '2px solid white',
    borderRadius: "4px",
    // boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.04)',
    overflow: 'hidden',
    position: 'relative',
    padding: indented ? theme.spacing(2) : 0,
    boxSizing: 'border-box',
    '&:hover': {
      cursor: onClick ? 'pointer' : 'default',
      backgroundColor: "none",
    },
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border-color'],
      {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      },
    ),
    pointerEvents,
  };
});
