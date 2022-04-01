
# Dweet A decentralized twitter

A decentralized twitter dapp built using next.js and solidity


## Tech Stack

**Frontend:** Typescript, Next.js, TailwindCSS

**Smart contracts / Api :** Solidity, Ethereum, Ethers.js

**Wallet:** Metamask

**Development environment / Testing**: Hardhat, Waffle





## Initialize frontend dApp

We can use npx to initialize our frontend dapp with a NextJS starter. Since we know we want to use Tailwindc CSS, we can directly initialize with the official tailwind example.

```bash
 $ npx create-next-app@latest --typescript --example with-tailwindcss
  ```

  ## Initialize Smart Contract
  To initalize our smart contract, we can first initialize a standard node project using npm and then use Hardhat. You can also read the official instructions from the Hardhat website.

Hardhat will open an interactive menu on the command line, which you can use to configure your project. Please try to follow the steps as shown in the video to get the same results.

```bash
$ mkdir contract
$ cd contract
$ npm init
$ npm install --save-dev hardhat
$ npx hardhat
  ```
  While we're here, we can also try running a local Ethereum node on our computer. Hardhat makes it easy to simulate a lightweight ethereum node on our local machine. Apart from this, we also get a few ethereum accounts with 10000 ETH to play around on our local ethereum network.

```bash
$ npx hardhat node
```
## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)
    
## Author

- [Pranav N](https://github.com/pranavbharadwaj007)


## 🔗 Reach out to me

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pranavbharadwaj007/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/PranaV79977)






