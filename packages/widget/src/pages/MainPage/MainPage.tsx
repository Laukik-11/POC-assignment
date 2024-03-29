import { Box } from '@mui/material';
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

export const MainPage: React.FC = () => {
  const expandable = useExpandableVariant();
  const { subvariant, contractComponent, hiddenUI } = useWidgetConfig();
  const nft = subvariant === 'nft';
  const showPoweredBy = !hiddenUI?.includes(HiddenUI.PoweredBy);

  return (
    <>
    <div style={{display:"flex",alignItems:"center", justifyContent:"flex-end",height:"80px",border:"2px solid white",paddingRight:"20px", marginBottom:"30px",marginInline:"24px"}}>
        <img height={40} width={40} src="https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png"/>
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
