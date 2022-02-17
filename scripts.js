isValid = (num) => {
    if (num <= 0 || !num) {
    return false
    }
    return true
}
alertIsNotValid = () => {
    alert('enter valid number')
}

let findAreaOfSquare = () => {
    let sideOfSquare = Number(document.getElementById('input-square').value);
    isValid(sideOfSquare) ? alert('the area is ' + (sideOfSquare ** 2)) : alertIsNotValid();
}
let findPerimeterOfSquare = () => {
    let sideOfSquare = Number(document.getElementById('input-square').value);
    isValid(sideOfSquare) ? alert('the perimeter is ' + (sideOfSquare * 4)) : alertIsNotValid();
}



 let findAreaOfRectangle = () => {
     let sideOfRectangle1 = Number(document.getElementById('first-side-rectangle-input').value);
     let sideOfRectangle2 = Number(document.getElementById('second-side-rectangle-input').value);
   if (isValid(sideOfRectangle1) && isValid(sideOfRectangle2)) {
       alert('the area of rectangle is ' + sideOfRectangle1 * sideOfRectangle2);
   } else {
       alertIsNotValid()
   }
}
let findPerimeterOfRectangle = () => {
    let sideOfRectangle1 = Number(document.getElementById('first-side-rectangle-input').value);
    let sideOfRectangle2 = Number(document.getElementById('second-side-rectangle-input').value);
    if (isValid(sideOfRectangle1) && isValid(sideOfRectangle2)) {
        alert(`the perimeter of rectangle is ${sideOfRectangle1 * 2 + sideOfRectangle2 * 2}`);
    } else {
        alertIsNotValid()
    }
 }



 let findAreaOfCircle = () => {
     let radiusOfCircle = Number(document.getElementById('input-circle').value);
    if (isValid(radiusOfCircle)) {
        alert('the area of circle is ' + (radiusOfCircle ** 2 * 3.14));
    } else {
        alertIsNotValid()
    }
 }
 let findPerimeterOfCircle = () => {
     let radiusOfCircle = Number(document.getElementById('input-circle').value);
    if (isValid(radiusOfCircle)) {
        alert('the perimeter of circle is ' + (radiusOfCircle * 3.14 * 2));
    } else {
        alertIsNotValid()
    }
 }


 let findAreaOfTriangle = () => {
     let baseOfTriangle = Number(document.getElementById('base-triangle-input').value);
    let heightOfTriangle = Number(document.getElementById('triangle-height-input').value);
   if (isValid(baseOfTriangle) && isValid(heightOfTriangle)) {
       alert(`the area of triangle is ${heightOfTriangle * baseOfTriangle / 2}`);
   } else {
       alertIsNotValid()
   }
}

let findPerimeterOfTriangle = () => {
    let baseOfTriangle = Number(document.getElementById('base-triangle-input').value);
    let firstSideOfTriangle = Number(document.getElementById('first-side-triangle-input').value);
    let secondSideOfTriangle = Number(document.getElementById('second-side-triangle-input').value);
    if (isValid(baseOfTriangle) && isValid(firstSideOfTriangle) && isValid(secondSideOfTriangle)) {
        alert(`the perimeter of triangle is ${baseOfTriangle + firstSideOfTriangle + secondSideOfTriangle}`);
    } else {
        alertIsNotValid()
    }
 }
