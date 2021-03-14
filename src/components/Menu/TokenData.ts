class TokenData {
    data : ethereum;
}

class ethereum {
    ethereum : dexTrades;
}

class dexTrades {
    dexTrades: dexTradesItem[];
}

class date{
    date:Date;
}

class sellCurrency{
    symbol: string;
    address:string;
}

class dexTradesItem{
    close : string;
    count : number;
    date : date;
    high:number;
    low:number;
    open:string;
    sellCurrency: sellCurrency;
    tradeAmount:number;
}
export default TokenData;