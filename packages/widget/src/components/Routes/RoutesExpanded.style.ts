import { Box, ScopedCssBaseline, styled } from '@mui/material';
import { maxHeight } from '../AppContainer.js';

export const CollapseContainer = styled(Box)(({ theme }) => ({
  // height: maxHeight,
  zIndex: 0,
}));

export const ScrollableContainer = styled(Box)({
  overflowY: 'auto',
  height: '100%',
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const Container = styled(ScopedCssBaseline)(({ theme }) => ({
  borderRadius:"0px !important",
  backgroundColor: "black",
  overflow: 'auto',
  width: 436,
  maxHeight,
  display: 'flex',
  flexDirection: 'column',
  // marginTop:"54px",
}));

export const Header = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backdropFilter: 'blur(12px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5, 3),
  position: 'sticky',
  top: 0,
  zIndex: 1200,
}));
