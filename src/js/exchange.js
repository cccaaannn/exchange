
class Exchange{

    constructor(apiKey){
        this.url = "https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/";
    }

    async getExchangeUnits(){
        const response = await fetch(this.url + "USD");
        const data = await response.json();
        
        const units = data.conversion_rates;

        return Object.keys(units);
    }

    async getExchangeData(quantity, unit1, unit2){
        const response = await fetch(this.url + unit1);
        const data = await response.json();
        let result = data.conversion_rates[unit2] * quantity;
        result = result.toLocaleString('en-US', {maximumFractionDigits:2});
        return result + " " + unit2;
    }

}

