//Function structure
/**
 *  Objective: get base, height of triangle. Calculate the area by using the provide formula and than display the area.
 *  Step -->1: get base value of the triangle
 *  Step -->2: added an id in  the base input field
 *  Step -->3: get value from the input field (value )
 */

// Card--->01: Triangle-Calculate
function calculateTriangleArea() {
  // console.log('Mehedi Hasan will one day be the best programmer in the world');
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseInput2 = document.getElementById("triangle-base-2");
  const triangleBaseText2 = triangleBaseInput2.value;
  // console.log(triangleBaseInput2)
  const triangleBaseText = triangleBaseInput.value;
  const num = parseFloat(triangleBaseText);
  const num2 = parseFloat(triangleBaseText2);
  const triangleBaseInputAll = 0.5 * num * num2;
  // console.log(typeof num);
  // console.log(typeof num2);
  console.log("Area of the triangle is:", triangleBaseInputAll);

  const mainOutput = document.getElementById("totalOutput");
  // mainOutput.innerHTML=triangleBaseInputAll;
  const spanAreaId = document.getElementById("spanid");
  spanAreaId.innerText = triangleBaseInputAll;
}

// Card--->02: Rectangle-Calculate
function calculateRectangleArea() {
  // console.log('Mehedi Hasan is the best programmer in the world')
  const rectangle = document.getElementById("rectangle-width");
  const rectangle2 = document.getElementById("rectangle-land");
  const rectangleText = rectangle.value;
  const rectangleText2 = rectangle2.value;
  const numb1 = parseFloat(rectangleText);
  const numb2 = parseFloat(rectangleText2);
  // console.log(typeof numb1)
  // console.log(typeof numb2)
  const calculationValue = numb1 * numb2;
  console.log("Area of the rectangle is:", calculationValue);
  const areaValue = document.getElementById("areaSpan");
  // areaValue.innerHTML=calculationValue;
  const spanArea = document.getElementById("spanId");
  spanArea.innerText = calculationValue;
}

// Card--->03: Parallelogram-Calculate
function parallelogramCalculateArea() {
  const parallelogramValue = document.getElementById("parallelogram-base1");
  const parallelogramValue2 = document.getElementById("parallelogram-base2");
  const parallelogramText = parallelogramValue.value;
  const parallelogramText2 = parallelogramValue2.value;
  const mainValue1 = parseFloat(parallelogramText);
  const mainValue2 = parseFloat(parallelogramText2);
//   console.log(mainValue1);
//   console.log(mainValue2);
const totalValue=mainValue1*mainValue2;
console.log("Area of the Parallelogram is:", totalValue);
//   console.log(totalValue)
  const spanValue=document.getElementById('spanCm');
  const spanValue2=document.getElementById('span0');
  spanValue2.innerText=totalValue;
}

// Card--->04: Rhombus-Calculate
function CalculateParallelogramArea(){
    const base=getInputValueById('parallelogram-base')
    const height=getInputValueById('parallelogram-height')
    const area=base*height;
    // console.log(base)
    setInnerTextById('base1',area)
    console.log("Area of the Rhombus is:",area)
    const valus=getInputValueById('spanvalu0')
    valus.innerText=area;
}

function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputValueText=inputField.value;
    const inputValue=parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}
function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId)
    element.innerText=area;
}
