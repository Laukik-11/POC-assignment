import { cardHeaderClasses, styled } from '@mui/material';
import { CardHeader } from '../Card/CardHeader.js';

export const SelectTokenCardHeader = styled(CardHeader, {
  shouldForwardProp: (prop) =>
    !['selected', 'compact'].includes(prop as string),
})<{ selected?: boolean; compact?: boolean }>(
  ({ theme, selected, compact }) => ({
    padding: theme.spacing(2),
    [`.${cardHeaderClasses.title}`]: {
      color: selected
        ? theme.palette.text.primary
        : theme.palette.text.primary,
      // textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      fontFamily: 'Major Mono Display, monospace',
      // width: compact ? 96 : 256,
      fontSize: compact && !selected ? "16px" : "16px",
      fontWeight: selected ? 300 : 300,
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        width: compact ? 96 : 224,
      },
    },
    [`.${cardHeaderClasses.subheader}`]: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      // width: compact ? 96 : 256,
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        // width: compact ? 96 : 224,
      },
    },
  }),
);
