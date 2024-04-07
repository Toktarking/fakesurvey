

async function enter() {
    var xvalues = document.getElementById("xvalues").value;
    var show = document.getElementById("show");
    var xvalues_number = Number(xvalues);

    show.innerHTML = ""



    for (let i=0; i < xvalues_number; i++) {
        var input = document.createElement("input");
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', `X${i+1}`);
        input.setAttribute('class', 'valuesClass');
        show.appendChild(input);
    }
    
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Y');
    input.setAttribute('class', 'valuesClass');
    show.appendChild(input); 


}


async function marking() {
    count = 0;
    count2 = 0;
    console.log("Marking is on progress");
    var tableinfo = document.getElementById("table_info");
    var respondents_q = document.getElementById("respondents").value;

    let table1 = document.createElement("table");
    
    let row1 = table1.insertRow();

    let cell1 = row1.insertCell();

    cell1.innerHTML = "Переменные"

    for (let i=0; i < Number(respondents_q)+1; i++) {
        let cell = row1.insertCell();
        if (i != 0) {
            cell.innerHTML = `Респ${i}`
        } else {
            cell.innerHTML = "Главный респондент"
        };
        
    };




    var loko = document.querySelectorAll(".valuesClass");
    loko.forEach(element => {
        initials = String(element.value).substring(0,2);
        numbers = String(element.value).substring(2);
        
        for (let i=0; i < Number(numbers); i++) {
            input_cell = document.createElement("input");
            input_cell.setAttribute('type', 'text');
            input_cell.setAttribute('placeholder', "");
            input_cell.setAttribute('class', 'valuesClass');
            input_cell.setAttribute('id', `mr${count2+1}`);
            count2++;
            
            let row2 = table1.insertRow();
            row2.setAttribute('id', `row${count+2}`);
            let cell = row2.insertCell();
            let cell2 = row2.insertCell();
            cell.innerHTML = `${initials}${i+1}`;
            cell2.appendChild(input_cell);
            count++;
        };



    }); 
    tableinfo.appendChild(table1);  
}



async function falsify() {
    var respondents = document.getElementById("respondents").value;
    polo = document.getElementById("dispersion_value").value;
    polo = Number(polo);

    for (let q=2; q < count2+2; q++) {
        for (let t=0; t < respondents; t++) {

            row_number = q;
            marko = document.getElementById(`mr${q-1}`).value;
            marko = Number(marko);
            stat_div = getRandomInt2();

            res = getRandomInt(marko-polo, marko+polo, polo);
            hello2(Number(res), row_number);

        };
    };
     
}



function getRandomInt(min, max, polo) {
    x = Math.random();
    x = Math.round(x*100);
    console.log("////////////////////");
    console.log(x);
    if (x <= 5) {
        min = 1;
        max = 5;
        console.log("b")
    } else if (x > 5 && x <= 28) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log("a");
    } else {
        min = min+polo;
        max = min+polo;
        console.log("c");
    };
    num = Math.floor(Math.random()*(max-min + 1) + min);
    if (num > 5) {
        num = 5;
    } else if (num < 1) {
        num = 1;
    }
    ;
    return num;
}

function getRandomInt2() {
    min = Math.ceil(0);
    max = Math.floor(100);
    num = Math.floor(Math.random()*(max-min + 1) + min);
    return num;
}





async function hello() {
    new_cell = document.getElementById("row2");
    let cell = row2.insertCell();

    cell.innerHTML = `${count2}`;

    cell.appendChild(new_cell);
}

async function hello2(item, row_number) {
    new_cell = document.getElementById(`row${row_number}`);
    let cell = new_cell.insertCell();

    cell.innerHTML = item;
}







