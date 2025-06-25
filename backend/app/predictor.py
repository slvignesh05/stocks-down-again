def predict_stock(info: dict) -> str:
    pe           = info.get("trailingPE", 0)                  # P/E ratio
    eps_growth   = info.get("earningsQuarterlyGrowth", 0)     # QoQ EPS growth
    debt_equity  = info.get("debtToEquity", 0)                # leverage
    return "Buy" if pe < 20 and eps_growth > 0.10 and debt_equity < 100 else "Sell"
