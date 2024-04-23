export enum Network {
  ETHEREUM_SEPOLIA = 'ethereum-sepolia',
  ETHEREUM = 'ethereum',
  ZETACHAIN_TESTNET = 'zetachain-testnet',
  ZETACHAIN_MAINNET = 'zetachain-mainnet-beta'
}

export const getNetworkUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      return 'https://eth-sepolia.g.alchemy.com/v2/fYFybLQFR9Zr2GCRcgALmAktStFKr0i0';
    case Network.ETHEREUM: 
      return 'https://eth-mainnet.g.alchemy.com/v2/fYFybLQFR9Zr2GCRcgALmAktStFKr0i0';
    case Network.ZETACHAIN_TESTNET:
      return 'https://zetachain-athens-evm.blockpi.network/v1/rpc/public';
    case Network.ZETACHAIN_MAINNET:
      return 'https://zetachain-mainnet-archive.allthatnode.com:8545';
    default:
      throw new Error('Network not supported');
  }
};

export const getChainId = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      return 11155111;
    case Network.ETHEREUM:
      return 1;
    case Network.ZETACHAIN_TESTNET:
      return 7001;
    case Network.ZETACHAIN_MAINNET:
      return 7000;
  }
};

export const getNetworkToken = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM:
    case Network.ETHEREUM_SEPOLIA:
      return 'ETH';
    case Network.ZETACHAIN_TESTNET:
    case Network.ZETACHAIN_MAINNET:
      return 'ZETA';
  }
};

export const getFaucetUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      return 'https://sepoliafaucet.com/';
  }
};

export const getNetworkName = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      return 'Ethereum (Sepolia)';
    case Network.ETHEREUM:
      return 'Ethereum (Mainnet)';
    case Network.ZETACHAIN_MAINNET:
      return 'Zetachain (Mainnet)';
    case Network.ZETACHAIN_TESTNET:
      return 'Zetachain (Testnet)';
  }
};

export const getBlockExplorer = (address: string) => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM:
      return `https://etherscan.io/address/${address}`;
    case Network.ETHEREUM_SEPOLIA:
      return `https://sepolia.etherscan.io/address/${address}`;
    case Network.ZETACHAIN_MAINNET:
      return `https://explorer.zetachain.com/address/${address}`;
    case Network.ZETACHAIN_TESTNET:
      return `https://athens.explorer.zetachain.com/address/${address}`;
  }
};

export const isEip1559Supported = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.ETHEREUM_SEPOLIA:
      case Network.ETHEREUM:
      case Network.ZETACHAIN_MAINNET:
      case Network.ZETACHAIN_TESTNET:
        return true;
    }
};
