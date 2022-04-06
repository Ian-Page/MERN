let canAfford = (itemPrice,acountBalance) => {
    return itemPrice > acountBalance
    ? `cant afford $ ${itemPrice - acountBalance} short`
    :'can afford';
};

let myBankAcountBalance = 1000;
const drone = 1001;

let droneOnSale = drone - drone * 0.03;

console.log(canAfford(drone, myBankAcountBalance));
console.log(canAfford(droneOnSale,myBankAcountBalance));

