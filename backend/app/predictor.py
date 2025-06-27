def classify_stock(info: dict) -> str:
    pe          = info.get("trailingPE",  999)
    peg         = info.get("trailingPegRatio",  999)
    roe         = info.get("returnOnEquity",    0)
    eps_g       = info.get("earningsQuarterlyGrowth", 0)
    de_ratio    = info.get("debtToEquity",      999)
    price       = info.get("currentPrice",      0)
    sma50       = info.get("fiftyDayAverage",   1)

    if (
        peg < 1.5 and
        roe > 0.15 and
        de_ratio < 100 and
        eps_g > 0.05
    ):
        return "long_term"

    if (
        pe < 35 and
        eps_g > 0.10 and
        price > sma50
    ):
        return "mid_term"

    return "watchlist"
