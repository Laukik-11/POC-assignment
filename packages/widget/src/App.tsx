'use client';
import { forwardRef, useMemo } from 'react';
import { AppDefault } from './AppDefault.js';
import type { WidgetDrawer } from './AppDrawer.js';
import { AppDrawer } from './AppDrawer.js';
import { AppProvider } from './AppProvider.js';
import type { WidgetConfig, WidgetProps } from './types/widget.js';
import { Header } from './components/Header/Header.js';

export const App = forwardRef<WidgetDrawer, WidgetProps>(
  ({ elementRef, open, onClose, integrator, ...other }, ref) => {
    const config: WidgetConfig = useMemo(() => {
      const config = { integrator, ...other, ...other.config };
      if (config.variant === 'drawer') {
        config.containerStyle = {
          height: '100%',
          ...config?.containerStyle,
        };
      }
      return config;
    }, [integrator, other]);

    if (config.variant === 'drawer') {
      return (
        <AppProvider config={config}>
          {/* <AppDrawer
            ref={ref}
            elementRef={elementRef}
            config={config}
            open={open}
            onClose={onClose}
          >
            <AppDefault />
          </AppDrawer> */}
        </AppProvider>
      );
    }

    return (
      <AppProvider config={config}>
        <AppDefault />
      </AppProvider>
    );
  },
);
