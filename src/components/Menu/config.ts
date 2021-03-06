import { MenuEntry } from '@sunswap/sunswap-finance-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://sunswapfinance.com'
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://sunswapfinance.com/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://sunswapfinance.com/pools'
  },
  // {
  //   label: 'Oceans',
  //   icon: 'WaveIcon',
  //   href: 'https://sunswapfinance.com/oceans',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://sunswapfinance.com/lottery',
  // },
  // {
  //   label: 'Launchpad (IDOs)',
  //   icon: 'IdoIcon',
  //   href: 'https://sunswapfinance.com/ido',
  // },
  {
    label: "Audit By TechRate",
    icon: "AuditIcon",
    href: "https://docs.sunswapfinance.com/audit",
  },
  // {
  //   label: 'Price Graph',
  //   icon: 'GraphIcon',
  //   href: 'https://sunswapfinance.com/graph',
  // },
  // {
  //   label: 'Listings',
  //   icon: 'ListingIcon',
  //   items: [
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/saltswap-finance',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/saltswap',
  //     },
  //     {
  //       label: 'DappRadar',
  //       href: 'https://dappradar.com/binance-smart-chain/defi/saltswap',
  //     },
  //   ],
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://sunswapfinance.com/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'SaltSwap',
  //       href: 'https://saltswap.info/token/TODO',
  //     },
  //   ]
  // },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/sunswap-finance",
        icon: "GithubIcon",
      },
      {
        label: "Docs",
        href: "https://docs.sunswapfinance.com",
        icon: "GitbookIcon",
      },
      {
        label: "Blog",
        href: "https://medium.com/@SunSwap.Finance",
        icon: "MediumIcon",
      },
    ],
  },
]

export default config
