# VANTA — Stock Intelligence

A buildless, responsive stock-market research and recordkeeping application designed for GitHub Pages, desktop browsers and modern iOS Safari. Black surfaces, violet accents, system typography, touch-sized controls and a mobile bottom dock. No card, bank or brokerage credentials are collected by the app.

Read **[PUBLISHING.md](PUBLISHING.md)** for the TraderZ/vanta upload instructions.

## Included and functional

- **Overview:** marked portfolio value, daily marked change, realized/unrealized P/L, historical equity chart, contribution overlay, allocation, holdings and watchlist sparklines.
- **Portfolio:** record holdings/purchases/sales in dollars or shares, FIFO cost basis including transaction fees, partial-sale accounting, cash/deposit/withdrawal/dividend records, P/L bars, sale-event win/loss metrics, calendar and CSV export.
- **Markets:** daily candlestick/line charts, hover/touch readouts, SMA overlays, RSI/MACD/simple ATR metrics, managed watchlist, sorting, price/sector map, manual marks and validated OHLCV CSV import. Independent public TradingView chart with its own timeframes and indicators.
- **Opportunity radar:** explainable ranking of supplied price/volume activity, moving-average context and research links. Scores are activity weights, not probabilities of gains; current news/catalysts are not independently verified by the local engine.
- **Analyst:** local arithmetic and rules for P/L attribution, portfolio concentration, stock indicators and percentage-move scenarios. Optional external language-model connection with an explicit portfolio-summary sharing checkbox.
- **Risk and strategies:** position sizing, long-position assumed-stop calculations, portfolio scenarios, and a historical moving-average regime replay with previous-close signals and next-open fills, fees and adverse slippage. Results are hypothetical, not live trades.
- **Journal:** create, edit and recoverably remove notes with dates, symbols and mindset labels.
- **Alerts:** create, pause, re-arm and remove conditions. Conditions evaluate once on a newly supplied quote while the app is open. No always-on server or closed-app market monitoring is implied.
- **Settings:** tab-memory data/AI connections, preferences, compact tables, JSON backup import/export, five recovery snapshots and installation/privacy help.
- **PWA:** relative asset URLs work under GitHub project subpaths; app icons, a web manifest, safe-area-aware navigation and a cache-based offline application shell are included.

## Data integrity

The default example contains **synthetic prices and holdings**. It is labeled throughout the UI and is separate from the empty personal workspace. Importing an example backup retains example classification.

Portfolio values use supplied price marks. Unpriced holdings are labeled incomplete; missing historical prices produce chart gaps rather than fabricated history. Cash contributions do not count as profit. Recorded purchases can explicitly create a matching external contribution for an existing holding funded outside tracked cash. Tracked cash is an accounting result, not a verified brokerage balance.

The current version is **USD only** and does not automatically reconcile stock splits, taxes, corporate actions, borrow costs or unrecorded fees. Check and correct records when these apply. Sale-event win rate counts partial exits as separate events. Historical replay does not model intraday execution, market impact or partial fills. Stops are assumed levels, not guarantees of execution.

## Real market data

The **Twelve Data adapter** accepts a key supplied by the visitor in Settings. It fetches quotes and daily history over HTTPS, validates results, retains saved quotes on errors, and applies a local eight-request/minute request budget. Provider plan limits may differ. Optional refresh updates only the selected symbol, every 90 seconds while the tab is visible. A saved key is labeled unverified until a successful quote response. The app does not promise universal real-time coverage, unlimited access or free provider service.

Keyless public charts are displayed in **cross-origin TradingView frames**. Third-party chart scripts are not loaded into the portfolio document. The widget has its own feed, delays, data entitlements and terms. Its prices are not scraped or used as portfolio marks. External news and SEC links open independent research destinations.

Manual prices, sources and timestamps remain explicitly attributed. CSV input expects `date,open,high,low,close,volume` (or `time`/`datetime` for the date field), one row per day. Prices must be positive; volume nonnegative; OHLC relationships and duplicate dates are validated.

## Analyst connection and privacy

Without an external endpoint, Vanta Analyst is a **local calculation/rules engine, not a connected AI language model**. It does not invent live news, explain price causes without evidence, or promise returns. Supported questions include “How is my portfolio performing?”, “What if AMZN drops 5%?”, “Where is my biggest exposure?” and ticker-based technical summaries.

An optional compatible chat-completions endpoint must use HTTPS and permit browser requests. When explicitly enabled, sending a question also sends a summary of the currently selected portfolio to that endpoint. The provider's pricing and policies apply. Rendering uses escaped text; received AI responses do not execute HTML or place orders.

API tokens stay in JavaScript memory for the tab. They are not included in local storage, recovery snapshots, exports or the shipped source. **Never commit your own keys or portfolio backups to GitHub.** Connections reset when the page is reloaded. Other scripts/apps you trust on the same GitHub Pages origin and people using your browser profile can affect browser storage; this is not an encrypted financial-account service.

The app submits **no stock orders**, has no brokerage funding flow, and cannot run a background trading bot from static hosting. Its trading records, analysis and scenarios work without payment information. No automatic cross-device sync is claimed; use backup export/import.

## Local development

Requires Node 20+; there are **no npm dependencies** to install.

```sh
npm test
npm run build
npm start
```

Open the printed HTTP URL. Do not double-click `index.html`: ES modules and service workers require an HTTP(S) origin. `npm run build` writes the uploadable site to `dist/`. `npm start` serves a `/vanta/` path as well as the root to test GitHub project-page routing.

## Verification

See **VERIFICATION.md** for the actual checks and their limits. Tested calculation fixtures cover FIFO fees, contributions, overselling, scenario arithmetic, indicators, replay timing, CSV validation, alert triggers and safe backup import. Provider/AI adapters are tested with controlled responses, not a paid key. A public TradingView frame was checked in the browser and displayed provider content.

Responsive browser checks used 1440×1000 desktop and 390×844 mobile viewports. This is not a claim of testing on physical iPhone hardware. Target modern iOS Safari (16.4+) and modern desktop browsers. Browser storage, downloads and third-party embeds remain subject to browser settings and connectivity.

## Primary sources

[Twelve Data API documentation](https://twelvedata.com/docs) · [TradingView chart widgets](https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/) · [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) · [SEC day-trading risks](https://www.sec.gov/about/reports-publications/investorpubsdaytipshtm)
