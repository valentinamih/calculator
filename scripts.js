isValid = (num) => {
    if (num <= 0 || !num) {
        return false
    }
    return true
}
alertIsNotValid = () => {
    alert('enter valid number')
}
const getElementById = (id) => {
    return Number(document.getElementById(id).value)
}

let findAreaOfSquare = () => {
    let sideOfSquare = getElementById('tab-content__square-input')
    isValid(sideOfSquare) ? alert('the area is ' + (sideOfSquare ** 2)) : alertIsNotValid()
}
let findPerimeterOfSquare = () => {
    let sideOfSquare = getElementById('tab-content__square-input')
    isValid(sideOfSquare) ? alert('the perimeter is ' + (sideOfSquare * 4)) : alertIsNotValid()
}

let findAreaOfRectangle = () => {
    let sideOfRectangle1 = getElementById('tab-content__side1-rectangle-input')
    let sideOfRectangle2 = getElementById('tab-content__side2-rectangle-input')
    if (isValid(sideOfRectangle1) && isValid(sideOfRectangle2)) {
        alert('the area of rectangle is ' + sideOfRectangle1 * sideOfRectangle2);
    } else {
        alertIsNotValid()
    }
}
let findPerimeterOfRectangle = () => {
    let sideOfRectangle1 = getElementById('tab-content__side1-rectangle-input')
    let sideOfRectangle2 = getElementById('tab-content__side2-rectangle-input')
    if (isValid(sideOfRectangle1) && isValid(sideOfRectangle2)) {
        alert(`the perimeter of rectangle is ${sideOfRectangle1 * 2 + sideOfRectangle2 * 2}`);
    } else {
        alertIsNotValid()
    }
}

let findAreaOfCircle = () => {
    let radiusOfCircle = getElementById('tab-content__circle-input')
    if (isValid(radiusOfCircle)) {
        alert('the area of circle is ' + (radiusOfCircle ** 2 * 3.14));
    } else {
        alertIsNotValid()
    }
}
let findPerimeterOfCircle = () => {
    let radiusOfCircle = getElementById('tab-content__circle-input')
    if (isValid(radiusOfCircle)) {
        alert('the perimeter of circle is ' + (radiusOfCircle * 3.14 * 2));
    } else {
        alertIsNotValid()
    }
}

let findAreaOfTriangle = () => {
    let baseOfTriangle = getElementById('tab-content__triangle-base-input')
    let heightOfTriangle = getElementById('tab-content__triangle-height-input')
    if (isValid(baseOfTriangle) && isValid(heightOfTriangle)) {
        alert(`the area of triangle is ${heightOfTriangle * baseOfTriangle / 2}`);
    } else {
        alertIsNotValid()
    }
}
let findPerimeterOfTriangle = () => {
    let baseOfTriangle = getElementById('tab-content__triangle-base-input')
    let firstSideOfTriangle = getElementById('tab-content__triangle-side1-input')
    let secondSideOfTriangle = getElementById('tab-content__triangle-side2-input')
    if (isValid(baseOfTriangle) && isValid(firstSideOfTriangle) && isValid(secondSideOfTriangle)) {
        alert(`the perimeter of triangle is ${baseOfTriangle + firstSideOfTriangle + secondSideOfTriangle}`);
    } else {
        alertIsNotValid()
    }
}
