from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
from app.predictor import classify_stock   

app = FastAPI(title="SnapChart API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/analyze/{ticker}")
def analyze_stock(ticker: str):
    stock = yf.Ticker(ticker)
    info  = stock.info or {}
    if "trailingPE" not in info:
        return {"error": "Invalid ticker or data unavailable."}
    return {
        "ticker": ticker.upper(),
        "prediction": classify_stock(info),
        "data": info,
    }
