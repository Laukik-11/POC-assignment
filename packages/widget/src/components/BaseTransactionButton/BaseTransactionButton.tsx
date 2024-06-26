import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../../hooks/useAccount.js';
import { useChain } from '../../hooks/useChain.js';
import { useWidgetConfig } from '../../providers/WidgetProvider/WidgetProvider.js';
import { useFieldValues } from '../../stores/form/useFieldValues.js';
import { navigationRoutes } from '../../utils/navigationRoutes.js';
import type { BaseTransactionButtonProps } from './types.js';

export const BaseTransactionButton: React.FC<BaseTransactionButtonProps> = ({
  onClick,
  text,
  disabled,
  loading,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { walletConfig } = useWidgetConfig();
  const [fromChainId] = useFieldValues('fromChain');
  const { chain } = useChain(fromChainId);
  const { account } = useAccount({ chainType: chain?.chainType });

  const handleClick = async () => {
    if (account.isConnected) {
      onClick?.();
    } else if (walletConfig?.onConnect) {
      walletConfig.onConnect();
    } else {
      navigate(navigationRoutes.selectWallet);
    }
  };

  const getButtonText = () => {
    if (account.isConnected) {
      if (text) {
        return text;
      }
    }
    return t(`button.connectWallet`);
  };

  return (
    <LoadingButton
      variant="contained"
      sx={{
        fontSize:"32px",
        fontWeight:"300",
        lineHeight:1,
        color: 'black',
        fontFamily: 'Major Mono Display, monospace',
        backgroundColor: 'white',
        border: "1px solid white",
        borderRadius: "4px", // Adjust the border radius as needed
        '&:hover': {
          backgroundColor: 'black', // Change hover background color if needed
        },
      }}
      onClick={handleClick}
      disabled={disabled}
      // loading={loading}
      loadingPosition="center"
      fullWidth
    >
      swaP
    </LoadingButton>
  );
};
