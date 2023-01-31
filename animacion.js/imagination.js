var valor = 2
var obj1 = document.getElementById("1");
var obj4 = document.getElementById("4");
var obj5 = document.getElementById("5");
var obj8 = document.getElementById("8");

function zero() { 
    obj1.style.cssText = `grid-column: 1; grid-row: 1`;
    obj4.style.cssText = `grid-column: 4; grid-row: 1`;
    obj5.style.cssText = `grid-column: 1; grid-row: 4`;
    obj8.style.cssText = `grid-column: 4; grid-row: 4`;
}

function first() {
    obj1.style.cssText = `grid-column: 1; grid-row: 2`;
    obj4.style.cssText = `grid-column: 3; grid-row: 1`;
    obj5.style.cssText = `grid-column: 2; grid-row: 4`;
    obj8.style.cssText = `grid-column: 4; grid-row: 3`;
}

function second() {
    obj1.style.cssText = `grid-column: 1; grid-row: 3`;
    obj4.style.cssText = `grid-column: 2; grid-row: 1`;
    obj5.style.cssText = `grid-column: 3; grid-row: 4`;
    obj8.style.cssText = `grid-column: 4; grid-row: 2`;
}

for (var i = 1; i <= 5; i++) {
    var tick = function(i) {
        return function() {
            var valor=1;
        }
    };
    setTimeout(tick(i), 500 * i);
}


switch (valor) {
    case 0:
        zero();
        break;
    case 1:
        first();
        break;
    case 2:
        second();
        break;       
}


