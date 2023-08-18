function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
 

    // get triangle height value
    const heightField = document.getElementById("triangle-height");
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);


    // calculate
    const area = 0.5 * base * height;


    // show triangle area
    const areaSpan = document.getElementById("triangle-area");
    areaSpan.innerText = area;

    // add to calculation entry
    addToCalculationEntry("Triangle", area);
}


function calculateRectangleArea() {
    // get rectangle width value
    const widthField = document.getElementById("rectangle-width");
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);


    // get rectangle length value
    const lengthField = document.getElementById("rectangle-length");
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
   

    // validation input: width & length
    if (isNaN(width) || isNaN(length)) {
        alert('width not a number');
        return;
    }

    // calculate
    const area = width * length;
 

    // show rectangle area
    const areaSpan = document.getElementById("rectangle-area");
    areaSpan.innerText = area;

    // add to calculation entry
    addToCalculationEntry("Rectangle", area);
}


// reusable function --> reduce duplicate code
function calculateParallelogramArea() {
    const base = getInputValue("parallelogram-base");
   

    const height = getInputValue("parallelogram-height");
  

    // validation
    if (isNaN(base) || isNaN(height)) {
        alert('please insert number');
        return;
    }
    const area = base * height;


    setElementInnerText("parallelogram-area", area);

    // add to calculation entry
    addToCalculationEntry("parallelogram", area);
}


function calculateEllipseArea() {
    const majorRadius = getInputValue("ellipse-major-radius");
    

    const minorRadius = getInputValue("ellipse-minor-radius");
 

    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);

    setElementInnerText("ellipse-area", areaTwoDecimal)

    // add to calculation entry
    addToCalculationEntry("Ellipse", areaTwoDecimal);
}



/* Common */
// reusable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p, div etc text
function setElementInnerText(elementId, ar) {
    const element = document.getElementById(elementId);
    element.innerText = ar;
}

// add to calculation entry
/* 
1. get the element where you want to add the dynamic HTML
2. crate an element you want to need
3. if needed add some class
4. set inner HTML. it could be dynamic template string
5. Append the crated element as the child of the parent
*/
function addToCalculationEntry(areaType, area) {
    console.log(areaType+ ' '+ area);
    const calculationEntry = document.getElementById("calculation-entry");

    const count =calculationEntry.childElementCount;

    const p = document.createElement("p");
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-success btn-sm">Convert</button>`;
    calculationEntry.appendChild(p);

}




// Data validation
/* 
1. set the proper type of the input field. (number, data, email)
2. check type using typeof
3. Nan means: Not a Number. isNaN is checking whether the input
*/