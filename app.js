let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};


const sum = (a, b) => a + b;

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
};

const fromDollarToYen = function(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
};

const fromYenToPound = function(yen) {
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
};

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};