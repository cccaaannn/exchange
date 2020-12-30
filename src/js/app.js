// get html elements
const unit1 = document.getElementById("unit1");
const unit2 = document.getElementById("unit2");
const quantity = document.getElementById("quantity");

// eventListeners
document.addEventListener("DOMContentLoaded", initUi);
unit1.addEventListener("change", exchangeEvent);
unit2.addEventListener("change", exchangeEvent);
quantity.addEventListener("input", exchangeEvent);

// init classes
exchange = new Exchange("fc2d33590e9204a19352b786");  // please don't steal my api key
ui = new UI("USD", "TRY");



function initUi(){
    exchange.getExchangeUnits()
    .then((result) => {
        ui.addUnits(result);
        ui.displayToastMessages("success", 2, "Exchange units set from api");

        exchange.getExchangeData(quantity.value, unit1.value, unit2.value)
        .then((result) => {
            console.log(result);
            ui.addValue(result);
        }).catch((err) => {
            console.log(err);
        });

    }).catch((err) => {
        ui.displayToastMessages("error", 2, "Can not connected to api");
    });

}


function exchangeEvent(){
    exchange.getExchangeData(quantity.value, unit1.value, unit2.value)
    .then((result) => {
        console.log(result);
        ui.addValue(result);
        ui.displayToastMessages("success", 1, "Success");
    }).catch((err) => {
        ui.displayToastMessages("error", 2, "Error");
    });
}

