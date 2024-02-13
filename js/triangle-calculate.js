//Function structure
/**
 *  Objective: get base, height of triangle. Calculate the area by using the provide formula and than display the area.
 *  Step -->1: get base value of the triangle
 *  Step -->2: added an id in  the base input field
 *  Step -->3: get value from the input field (value )
 */

// Card--->01: Triangle-Calculate
function calculateTriangleArea(){
    // console.log('Mehedi Hasan will one day be the best programmer in the world');
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseInput2=document.getElementById('triangle-base-2');
    const triangleBaseText2=triangleBaseInput2.value;
    // console.log(triangleBaseInput2)
    const triangleBaseText=triangleBaseInput.value;
    const num=parseFloat(triangleBaseText)
    const num2=parseFloat(triangleBaseText2)
    const triangleBaseInputAll=0.5*num*num2;
    // console.log(typeof num);
    // console.log(typeof num2);
    console.log('Area of the triangle is:',triangleBaseInputAll);

    const mainOutput=document.getElementById('totalOutput');
    mainOutput.innerHTML=triangleBaseInputAll;
}

// Card--->02: Rectangle-Calculate
function calculateRectangleArea(){
    // console.log('Mehedi Hasan is the best programmer in the world')
    const rectangle=document.getElementById('rectangle-width');
    const rectangle2=document.getElementById('rectangle-land');
    const rectangleText=rectangle.value;
    const rectangleText2=rectangle2.value;
    const numb1=parseFloat(rectangleText);
    const numb2=parseFloat(rectangleText2);
    // console.log(typeof numb1)
    // console.log(typeof numb2)
    const calculationValue=numb1*numb2;
    console.log('Area of the rectangle is:',calculationValue);
    const areaValue=document.getElementById('areaSpan');
    areaValue.innerHTML=calculationValue;
}
