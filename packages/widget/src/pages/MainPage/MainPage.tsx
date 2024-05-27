import { Box, styled } from '@mui/material';
import { ActiveTransactions } from '../../components/ActiveTransactions/ActiveTransactions.js';
import { AmountInput } from '../../components/AmountInput/AmountInput.js';
import { ContractComponent } from '../../components/ContractComponent/ContractComponent.js';
import { GasRefuelMessage } from '../../components/GasMessage/GasRefuelMessage.js';
import { PageContainer } from '../../components/PageContainer.js';
import { PoweredBy } from '../../components/PoweredBy/PoweredBy.js';
import { Routes } from '../../components/Routes/Routes.js';
import { SelectChainAndToken } from '../../components/SelectChainAndToken.js';
import { SendToWalletButton } from '../../components/SendToWallet/SendToWalletButton.js';
import { SendToWalletExpandButton } from '../../components/SendToWallet/SendToWalletExpandButton.js';
import { useExpandableVariant } from '../../hooks/useExpandableVariant.js';
import { useWidgetConfig } from '../../providers/WidgetProvider/WidgetProvider.js';
import { HiddenUI } from '../../types/widget.js';
import { MainGasMessage } from './MainGasMessage.js';
import { ReviewButton } from './ReviewButton.js';
import { useNavigate } from 'react-router-dom';
import { navigationRoutes } from '../../utils/navigationRoutes.js';

const RelativeContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(() => ({
  lineHeight:1,
  fontSize:"32px",
  fontWeight:400,
  fontFamily: 'Major Mono Display, monospace'
  // fontFamily: 'Inter , sans-serif',
}));

export const MainPage: React.FC = () => {
  const expandable = useExpandableVariant();
  const { subvariant, contractComponent, hiddenUI } = useWidgetConfig();
  const nft = subvariant === 'nft';
  const showPoweredBy = !hiddenUI?.includes(HiddenUI.PoweredBy);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      navigationRoutes.invite
    );
  };
  return (
    <>
    <div style={{display:"flex",background:"black",alignItems:"center", justifyContent:"flex-start",height:"80px",paddingLeft:"20px",border:"2px solid white"}}>
        {/* <img height={40} width={40} src="https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png"/> */}
        <RelativeContainer>BliNqR</RelativeContainer>
    </div>
    <PageContainer>
      {/* <ActiveTransactions mt={1} mb={2} /> */}
      {/* {nft ? (
        <ContractComponent mt={1} mb={2}>
          {contractComponent}
        </ContractComponent>
      ) : null} */}
      <SelectChainAndToken mt={5} mb={2} />
      <AmountInput formType="from" mb={2} />
      {/* {!expandable ? <Routes mb={2} /> : null} */}
      {/* <SendToWalletButton mb={2} /> */}
      {/* <GasRefuelMessage mb={2} /> */}
      {/* <MainGasMessage mb={2} /> */}
      <Box display="flex" mb={5} gap={1.5}>
        <ReviewButton />
        {/* <SendToWalletExpandButton /> */}
      </Box>
      {/* {showPoweredBy ? <PoweredBy /> : null} */}
    </PageContainer>
    </>
  );
};
