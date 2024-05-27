import { Box, Typography, alpha, lighten, styled } from '@mui/material';

export const CardLabel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'type',
})<{ type?: 'active' | 'insurance' | 'insurance-icon' }>(({ theme, type }) => ({
  backgroundColor: "black",
  borderRadius: 0,
  color: type?.includes('insurance')
    ? lighten(
        theme.palette.success.main,
        theme.palette.mode === 'light' ? 0 : 0.24,
      )
    : theme.palette.text.primary,
  padding: type === 'insurance' ? theme.spacing(0, 1.5) : 0,
  display: 'flex',
  alignItems: 'center',
  border: '1px solid white',
  justifyContent: 'center',
  height: 24,
  minWidth: 24,
  userSelect: 'none',
  fontSize: '1rem',
  marginRight: theme.spacing(1),
}));

export const CardLabelTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'type',
})<{ type?: 'icon' }>(({ theme, type }) => ({
  padding:
    type === 'icon'
      ? theme.spacing(0.75, 0, 0.75, 0.75)
      : theme.spacing(0.75, 1.5),
  fontSize: 12,
  lineHeight: 1,
  fontWeight: '600',
}));
