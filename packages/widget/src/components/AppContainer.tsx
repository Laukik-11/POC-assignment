import { Box, Container, ScopedCssBaseline, styled } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { useWidgetConfig } from '../providers/WidgetProvider/WidgetProvider.js';
import type { WidgetVariant } from '../types/widget.js';
import { ElementId, createElementId } from '../utils/elements.js';

export const maxHeight = 682;

export const AppExpandedContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: WidgetVariant }>(({ variant }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems:"flex-start",
  flexDirection:"row-reverse",
  gap:"40px",
  flex: 1,
  background:"black",
  marginTop:"50px",
  // height: variant === 'drawer' ? 'none' : maxHeight,
}));

const RelativeContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: WidgetVariant }>(({ theme, variant }) => ({
  position: 'relative',
  boxSizing: 'content-box',
  width: '100%',
  minWidth: theme.breakpoints.values.xs,
  maxWidth: theme.breakpoints.values.sm,
  maxHeight: variant === 'drawer' ? 'none' : maxHeight,
  overflow: 'auto',
  flex: 1,
  zIndex: 0,
  borderRadius:"0px !important",
}));

const CssBaselineContainer = styled(ScopedCssBaseline, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: WidgetVariant }>(({ variant }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflowX: 'clip',
  margin: 0,
  width: '100%',
  maxHeight: variant === 'drawer' ? 'none' : maxHeight,
  fontFamily: 'Inter , sans-serif',
  overflowY: 'auto',
  background: "black",
  height: '100%',
}));

export const FlexContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap:"40px",
  background: "black",
});

export const AppContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  // const ref = useRef<HTMLDivElement>(null);
  const { containerStyle, variant, elementId } = useWidgetConfig();
  return (
    <RelativeContainer
      sx={containerStyle}
      variant={variant}
      id={createElementId(ElementId.RelativeContainer, elementId)}
    >
      <CssBaselineContainer
        id={createElementId(ElementId.ScrollableContainer, elementId)}
        variant={variant}
        enableColorScheme
        // ref={ref}
      >
        <FlexContainer disableGutters>{children}</FlexContainer>
      </CssBaselineContainer>
      {/* <ScrollToLocation elementRef={ref} /> */}
    </RelativeContainer>
  );
};

// export const ScrollToLocation: React.FC<{
//   elementRef: RefObject<HTMLElement>;
// }> = ({ elementRef }) => {
//   const { pathname } = useLocation();
//   useLayoutEffect(() => {
//     elementRef.current?.scrollTo(0, 0);
//   }, [elementRef, pathname]);
//   return null;
// };
