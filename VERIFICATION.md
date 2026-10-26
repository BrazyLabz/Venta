# VANTA verification

## Automated: 28 passing Node checks

- Dollar/share arithmetic, FIFO lot costs, purchase/sale fees, cash contribution separation, unpriced holdings and prevented overselling.
- Consistent removal of linked trade/contribution records, identifier/date validation and rejection of malformed imported records.
- CSV quote handling, OHLC consistency, duplicate dates and spreadsheet-formula-safe export.
- Indicator warmup/flat-price behavior, bounded risk sizing and hypothetical price-change arithmetic.
- Previous-close/next-open replay timing, specified costs and an honestly marked open final position.
- One-shot alert firing, missing-data handling in activity scores and explicit synthetic-data labels.
- Local analyst assumptions and missing historical-mark chart gaps.
- Quote-adapter source/timestamps, retention on quota failure, non-USD rejection, AI consent gating, token-free backups and example-preserving imports.

## Browser checks completed

- Desktop dashboard at 1440×1000 and mobile layout at 390×844.
- Mobile page-wide overflow check: none; mobile More drawer navigation verified.
- Recorded a disposable example $1,000 AMZN purchase at $200: five additional shares were reflected in the portfolio and P/L.
- Restored the previous snapshot successfully.
- Risk sizing with $1,000 account value, 1% risk, $100 entry and $95 stop returned two whole shares and $10 assumed loss.
- AMZN −5% scenario matched the independent local-analyst calculation.
- Historical replay produced a chart and documented open final position.
- Added a journal fixture through the mobile form and verified its persisted display.
- Created a price condition and verified it triggered once after a supplied quote.
- Public TradingView frame loaded an AMZN chart with provider controls/content. The final integration uses its cross-origin iframe endpoint, not a script with access to portfolio storage.
- Browser console was checked during the main workflow; no application errors were observed at those checks.
- The provider chart later logged HTTP 403 responses from its own support endpoint; the stock chart and controls still loaded. These were third-party widget messages, not VANTA calculation failures.

## Limits

No private market-data key, external AI account, funded brokerage, or physical iPhone was used. Provider adapters were validated with controlled responses; actual availability depends on the visitor's provider access, rate limits and browser CORS rules. No real orders are implemented or submitted. No live GitHub deployment is claimed: the user requested uploadable files.
