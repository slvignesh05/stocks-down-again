import math

def _num(v, default):
    """Return numeric `v` or fallback `default` if v is None/NaN/invalid."""
    try:
        if v is None or (isinstance(v, float) and math.isnan(v)):
            return default
        return float(v)
    except (TypeError, ValueError):
        return default


def classify_stock(info: dict) -> str:
    # --------- SAFE METRIC EXTRACTION ---------
    pe       = _num(info.get("trailingPE"),          999)
    peg      = _num(info.get("trailingPegRatio"),    999)
    roe      = _num(info.get("returnOnEquity"),        0)   # already decimal (0.20 = 20 %)
    eps_g    = _num(info.get("earningsQuarterlyGrowth"), 0)
    de_ratio = _num(info.get("debtToEquity"),        999)
    price    = _num(info.get("currentPrice"),          0)
    sma50    = _num(info.get("fiftyDayAverage"),     price)  # fall back to price if missing

    # --------- CLASSIFICATION RULES ---------
    # Long-term compounder
    if (
        peg      < 1.5   and
        roe      > 0.15  and
        de_ratio < 100   and
        eps_g    > 0.05
    ):
        return "long_term"

    # Mid-term momentum
    if (
        pe    < 35   and
        eps_g > 0.10 and
        price > sma50
    ):
        return "mid_term"

    # Everything else
    return "watchlist"
