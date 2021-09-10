isValid = (num) => {
    if (num <= 0 || !num) {
    return false
    }
    return true
}



let findAreaOfSquare = () => {
    let sideOfSquare = Number(document.getElementById('input').value);
    isValid(sideOfSquare) ? alert('the area is ' + (sideOfSquare ** 2)) : alert('enter valid num');  
}



let findPerimeterOfSquare = () => {
    let sideOfSquare = Number(document.getElementById('input').value);
    isValid(sideOfSquare) ? alert('the perimeter is ' + (sideOfSquare * 4)) : alert('enter valid num');  
}







 let findAreaOfRectangle = () => {
    let sideOfRectangle1 = Number(document.getElementById('input1').value);
    let sideOfRectangle2 = Number(document.getElementById('input2').value);
   if (isValid(sideOfRectangle1) && isValid(sideOfRectangle2)) {
       alert('the area of rectangle is ' + sideOfRectangle1 * sideOfRectangle2);
   } else {
       alert('enter valid num')
   }
}

let findPerimeterOfRectangle = () => {
    let sideOfRectangle1 = Number(document.getElementById('input1').value);
    let sideOfRectangle2 = Number(document.getElementById('input2').value);
    if (isValid(sideOfRectangle1) && isValid(sideOfRectangle2)) {
        alert(`the perimeter of rectangle is ${sideOfRectangle1 * 2 + sideOfRectangle2 * 2}`);
    } else {
        alert('enter valid num')
    }
 }








 let findAreaOfCircle = () => {
    let radiusOfCircle = Number(document.getElementById('input').value);
    if (isValid(radiusOfCircle)) {
        alert('the area of circle is ' + radiusOfCircle ** 2 * 3,14);
    } else {
        alert('enter valid num')
    }
 }
 
 let findPerimeterOfCircle = () => {
    let radiusOfCircle = Number(document.getElementById('input').value);
    if (isValid(radiusOfCircle)) {
        alert('the perimeter of circle is ' + radiusOfCircle * 3,14 * 2);
    } else {
        alert('enter valid num')
    }
 }








 let findAreaOfTriangle = () => {
    let baseOfTriangle = Number(document.getElementById('input4').value);
    let heightOftriangle = Number(document.getElementById('input7').value);
   if (isValid(baseOfTriangle) && isValid(heightOftriangle)) {
       alert(`the area of triangle is ${heightOftriangle * baseOfTriangle / 2}`);
   } else {
       alert('enter valid num')
   }
}

let findPerimeterOfTriangle = () => {
    let baseOfTriangle = Number(document.getElementById('input4').value);
    let sideOfTriangle1 = Number(document.getElementById('input5').value);
    let sideOfTriangle2 = Number(document.getElementById('input6').value);
    if (isValid(baseOfTriangle) && isValid(sideOfTriangle1) && isValid(sideOfTriangle2)) {
        alert(`the perimeter of triangle is ${baseOfTriangle + sideOfTriangle1 + sideOfTriangle2}`);
    } else {
        alert('enter valid num')
    }
 }
