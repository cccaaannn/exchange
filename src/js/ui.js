class UI {

    constructor(defaultUnit1, defaultUnit2){
        this.defaultUnit1 = defaultUnit1;
        this.defaultUnit2 = defaultUnit2;
    }

    addUnits(units){
        const unit1 = document.getElementById("unit1");
        const unit2 = document.getElementById("unit2");

        for (var unit in units) {
            if(units[unit] === this.defaultUnit1){
                unit1.innerHTML += `
                    <option selected="selected" value="${units[unit]}">${units[unit]} </option>
                `;
            }
            else{
                unit1.innerHTML += `
                    <option value="${units[unit]}">${units[unit]}</option>
                `;
            }

            if(units[unit] === this.defaultUnit2){
                unit2.innerHTML += `
                    <option selected="selected" value="${units[unit]}">${units[unit]} </option>
                `;
            }
            else{
                unit2.innerHTML += `
                    <option value="${units[unit]}">${units[unit]}</option>
                `;
            }
        }

    }

    addValue(value){
        const result_div = document.getElementById("result_div");
        result_div.innerHTML = `
            ${value}
        `;
    }

    displayToastMessages(type, delay, message){
        
        const alert = document.createElement("div");

        alert.className = `alert alert-${type}`;
        alert.textContent = message;

        const message_div = document.getElementById("message_div");
        message_div.appendChild(alert);

        //1 second delay
        window.setTimeout(function(){
            alert.remove();
        },delay*1000);

    }

}