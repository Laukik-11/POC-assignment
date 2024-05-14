'use client';
import { IconButton } from '@mui/material';
import { AppRoutes } from './AppRoutes.js';
import {
  AppContainer,
  AppExpandedContainer,
  FlexContainer,
} from './components/AppContainer.js';
import { Header } from './components/Header/Header.js';
import { Initializer } from './components/Initializer.js';
import { RoutesExpanded } from './components/Routes/RoutesExpanded.js';
import { useExpandableVariant } from './hooks/useExpandableVariant.js';
import { useWidgetConfig } from './providers/WidgetProvider/WidgetProvider.js';
import { ElementId, createElementId } from './utils/elements.js';
import { backButtonRoutes, navigationRoutes } from './utils/navigationRoutes.js';
import { ArrowBack } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useNavigateBack } from './hooks/useNavigateBack.js';
import { InsuraceLogo } from './icons/InsuraceLogo.js';
import Invite from './pages/Invite/Invite.js';
import ComingSoon from './pages/ComingSoon/ComingSoon.js';

export const AppDefault = () => {
  const { elementId } = useWidgetConfig();
  const expandable = useExpandableVariant();
  const { navigateBack } = useNavigateBack();
  const { pathname } = useLocation();
  const cleanedPathname = pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;
  const path = cleanedPathname.substring(cleanedPathname.lastIndexOf('/') + 1);
  return (
    <>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%" }}>
          <div style={{ display: "grid", placeItems: "center" }}>
            <InsuraceLogo />
          </div>
          <Header />
        </div>
        {/* <Header /> */}
        { pathname.includes(navigationRoutes.invite) ?
          <>
            <Invite />
          </>
          :
          <AppExpandedContainer
            id={createElementId(ElementId.AppExpandedContainer, elementId)}
          >

            <AppContainer>
              {backButtonRoutes.includes(path) ? (
                <IconButton size="medium" sx={{ textAlign: "left", width: "40px" }} onClick={navigateBack}>
                  <ArrowBack />
                </IconButton>
              ) : null}
              <FlexContainer disableGutters>
                <AppRoutes />
              </FlexContainer>
              <Initializer />
            </AppContainer>
            {expandable ? <RoutesExpanded /> : null}
          </AppExpandedContainer>
        }
      </div>
    </>
  );
};
