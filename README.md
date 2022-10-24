# [BARBERSHOP-DApp](https://devashley10.github.io/web3-barber-shop)

This Dapp provides a way for a barber shop to handle their customer appointments using the Celo Blockchain.
There is a set fee for each service rendered(Hair Cut, Hair Treatment, e.t.c) and customer priority(Home Service, VIP, Regular) in the smart contract.

User can pay the fee and book an appointment at any time within 5days of the booking time, and the appointment expires once the booking time and date passes.

Each Customer is identified by their celo address(msg.sender) and their transactions are stored using their address as key.

# Install

```

npm install

```

or

```

yarn install

```

# Start

```

npm run dev

```

# Build

```

npm run build

```

# Usage

1. Visit https://devashley10.github.io/web3-barber-shop/ to test the dapp on the celo testnet.
2. Install the [CeloExtensionWallet](https://chrome.google.com/webstore/detail/celoextensionwallet/kkilomkmpmkbdnfelcpgckmpcaemjcdh?hl=en) from the google chrome store.
3. Create a wallet.
4. Go to [https://celo.org/developers/faucet](https://celo.org/developers/faucet) and get tokens for the alfajores testnet.
5. Switch to the alfajores testnet in the CeloExtensionWallet.
