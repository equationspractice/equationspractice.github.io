function createSvg(type, parameters = {color: '#ffffff'}) {

    let color = parameters.color
    let textWidth = parameters.textWidth ?? '0.38'

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    
    text.setAttribute('xml:space', 'preserve')
    text.setAttribute('style', `font-weight:normal;font-size:6.65px;font-family:Arial;fill:${color};stroke:${color};stroke-width:${textWidth};`)
    text.setAttribute('x', '3.75')
    text.setAttribute('y', '7.96')
    text.append(tspan)

    if (!type) return
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(translateName(type))) {
        svg.setAttribute('viewBox', "0 0 11.1 11.1")
        tspan.innerHTML = translateName(type)
        svg.append(text)
        return svg
    }

    switch (type) {
        case 'add':
            svg.setAttribute('viewBox', "0 0 11.1 11.1")
            tspan.innerHTML = '+'
            svg.append(text)
            return svg
        case 'subtract':
            svg.setAttribute('viewBox', "0 0 11.1 11.1")
            tspan.innerHTML = '−'
            svg.append(text)
            return svg
        case 'multiply':
            svg.setAttribute('viewBox', "0 0 11.1 11.1")
            path1.setAttribute('style', `stroke:${color};stroke-width:1.01661;stroke-linecap:round`)
            path2.setAttribute('style', `stroke:${color};stroke-width:1.01661;stroke-linecap:round`)
            path1.setAttribute('d', 'M 4.1826278,4.0193123 6.9298722,7.0931877')
            path2.setAttribute('d', 'M 6.9298722,4.0193123 4.1826278,7.0931877')
            svg.append(path1)
            svg.append(path2)
            return svg
        case 'divide':
            svg.setAttribute('viewBox', "0 0 11.1 11.1")
            const rect1 = document.createElementNS("http://www.w3.org/2000/svg", 'rect')
            const rect2 = document.createElementNS("http://www.w3.org/2000/svg", 'rect')
            rect1.setAttribute('style', `fill:${color};stroke:${color};stroke-width:0.259387`)
            rect2.setAttribute('style', `fill:${color};stroke:${color};stroke-width:0.259387`)
            rect1.setAttribute('width', '3.8750029')
            rect1.setAttribute('height', '0.77358282')
            rect1.setAttribute('x', '3.6187487')
            rect1.setAttribute('y', '5.2693243')
            rect2.setAttribute('width', '0.88394552')
            rect2.setAttribute('height', '0.88394552')
            rect2.setAttribute('x', '5.1142774')
            rect2.setAttribute('y', '3.6016934')
            const rect3 = rect2.cloneNode()
            rect3.setAttribute('y', '6.8610659')
            svg.append(rect1, rect2, rect3)
            return svg
        case 'exponent':
            svg.setAttribute('viewBox', "0 0 11.1 11.1")
            path1.setAttribute('style', `fill-opacity:0;stroke:${color};stroke-width:0.95;stroke-linecap:round;stroke-linejoin:round;`)
            path1.setAttribute('d', 'M 4.0737627,5.5028923 5.5560671,3.20896 7.0387373,5.5028923');
            svg.append(path1)
            return svg
        case 'square-root':
            svg.setAttribute('viewBox', "0 0 11.1 11.1")
            path1.setAttribute('style', `fill-opacity:0;stroke:${color};stroke-width:0.79;stroke-linecap:round;stroke-linejoin:round;`)
            path1.setAttribute('d', 'M 2.9470262,5.6193748 H 3.5128817 L 4.41406,8.0295011 5.7134321,3.0835025 8.1654739,3.0830742');
            svg.append(path1)
            return svg
    }
}
function translateName(input) {
    switch (input.toString()) {
        case "one": return "1";
        case "two": return "2";
        case "three": return "3";
        case "four": return "4";
        case "five": return "5";
        case "six": return "6";
        case "seven": return "7";
        case "eight": return "8";
        case "nine": return "9";
        case "zero": return "0";
        case "add": return "+";
        case "subtract": return "−";
        case "multiply": return "x";
        case "divide": return "÷";
        case "exponent": return "^";
        case "square-root": return "√";
        case "log": return "l";
        case "imaginary": return "i";
        case "factorial": return "!";
        case "left-parenthesis": return "(";
        case "right-parenthesis": return ")";
        case "1": return "one";
        case "2": return "two";
        case "3": return "three";
        case "4": return "four";
        case "5": return "five";
        case "6": return "six";
        case "7": return "seven";
        case "8": return "eight";
        case "9": return "nine";
        case "0": return "zero";
        case "+": return "add";
        case "-": return "subtract";
        case "−": return "subtract";
        case "*": return "multiply";
        case "x": return "multiply";
        case "/": return "divide";
        case "÷": return "divide";
        case "^": return "exponent";
        case "s": return "square-root";
        case "√": return "square-root";
        case "l": return "log";
        case "i": return "imaginary";
        case "!": return "factorial";
        case "(": return "left-parenthesis";
        case ")": return "right-parenthesis";
        case "Backspace": return "backspace"
        case ".": return "decimal";
        case "decimal": return "."
    };
}


const notification = document.createElement('div')
notification.classList.add('notification')

function notify(message, parameters = {}) {

    let color = parameters.color ?? 'red'
    let animation = parameters.animation ?? 'bounce'
    let duration = parameters.duration ?? 1500
    let height = parameters.height ?? ''
    let width = parameters.width ?? ''

    notification.getAnimations().forEach(val => val.cancel())
    notification.innerText = message
    switch (color) {
        case 'red': notification.style.backgroundColor = 'rgb(219, 58, 52)'; break;
        case 'yellow': notification.style.backgroundColor = 'rgb(219, 58, 52)'; break;
        case 'green': notification.style.backgroundColor = 'rgb(51, 186, 65)'; break;
    }
    notification.style.height = height
    notification.style.width = width
    document.body.append(notification)
    if (animation === 'bounce') {
        notification.animate(
            [
                { top: 0, opacity: 0, easing: 'ease', },
                { top: 72 + 'px', opacity: 1, offset: 0.4, easing: 'ease', },
                { top: 68 + 'px', opacity: 1, offset: 0.8, easing: 'ease', },
                { top: 70 + 'px', opacity: 1, easing: 'ease', }
            ], {
            fill: "forwards",
            duration: 370,
        });
    }
    if (duration === 'persistent') return;
    notification.animate(
        [
            { top: 0, opacity: 1, easing: 'ease', },
            { top: 72 + 'px', opacity: 1, offset: 0.4, easing: 'ease', }
        ], {
        fill: "forwards",
        duration: 300,
        direction: 'reverse',
        delay: duration,
    });
}

function getSelectedCube(width) {
    let selectedCubeIndex, wrap
    if (currInput === 'solution-container') {
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        wrap = inputValues.solution.wrap
    } else {
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        wrap = inputValues.goal.wrap
    }
    let value = width ? wrap.widths : wrap.elements
    let cube = value[selectedCubeIndex.row][selectedCubeIndex.column]
    return cube ? cube : null
}