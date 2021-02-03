const dataJson = {
  displayedName: {
    displayedName: {
      value: ["Профиль маячковый ПВХ 10 мм L3м"],
      description: "Полное наименование товара для клиента"
    }
  },
  stock: {
    stocks: {
      "34": {
        "2": "35",
        "3": "42",
        "4": "58",
        "5": "57",
        "6": "112",
        "20": "51",
        "22": "78",
        "26": "34",
        "32": "22",
        "35": "358",
        "40": "28",
        "43": "68",
        "45": "58",
        "49": "31",
        "51": "29",
        "56": "42",
        "62": "26",
        "64": "0",
        "65": "57",
        "86": "15",
        "114": "41",
        "117": "46",
        "143": "46",
        "162": "4",
        "171": "0",
        "176": "12"
      }
    }
  }
};
// 1. получить название товара
function getStockName(data) {
  return data.displayedName.displayedName.value[0];
}

// 2. получить массив номеров магазинов, в которых есть товары в наличии
function getShopNumbersWithStocks(data) {
  const stocks = data.stock.stocks;
  const stocksObj = Object.values(stocks)[0];
  const shopNumbersWithStocksArray = [];
  for (key in stocksObj) {
    if (stocksObj[key] > 0) {
      shopNumbersWithStocksArray.push(key);
    }
  }
  return shopNumbersWithStocksArray;
}

//3.найти максимальное количество товара в регионе, вернуть это количество и номер магазина
function getMaxStock(data) {
  const stocks = data.stock.stocks;
  const stocksObj = Object.values(stocks)[0];
  let maxStock = { "0": "-1" };
  for (key in stocksObj) {
    if (stocksObj[key] > Object.values(maxStock)[0]) {
      maxStock = { [key]: stocksObj[key] };
    }
  }
  return maxStock;
}

console.log("название товара: ", getStockName(dataJson));
console.log(
  "массив номеров магазинов, в которых есть товары в наличии: ",
  getShopNumbersWithStocks(dataJson)
);
console.log(
  "максимальное количество товара и номер его магазина: ",
  getMaxStock(dataJson)
);
