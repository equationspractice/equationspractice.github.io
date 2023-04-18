let setTimer = new Date();
const width500 = window.innerWidth <= 500

// Start of functions
function clone(arr) {
    return JSON.parse(JSON.stringify(arr))
}
function logTime(message = "") {
    let stopTimer = new Date();
    console.log(message + (stopTimer.getTime() - setTimer.getTime()) / 1000 + " SECONDS")
};
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
function randomSort(input) {
    let arr = [...input];
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
    }
    return arr;
};
function deleteFirstArrItem(array, item) {
    if (!array.includes(item)) return array;
    let index = array.indexOf(item);
    return array.slice(0, index).concat(array.slice(index + 1));
};
function randomArrayValue(arr) {
    return arr[getRandomNumber(0, arr.length - 1)]
};
function compareArr(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
    return true;
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
function convertJK(num) { // Convert J and K to 10 and 11
    switch (num) {
        case 'j': return 10;
        case 'k': return 11;
        default: return num;
    }
}
function createDiv(type) {
    const div = document.createElement('div')

    switch (type) {
        case 'cube-content':
            div.classList.add('cube-content')

            const hoverDiv = document.createElement('div')
            const backgroundDiv = document.createElement('div')
            hoverDiv.classList.add('hover-div')
            backgroundDiv.classList.add('background-div')

            div.append(hoverDiv)
            div.append(backgroundDiv)
            break;
    }
    return div
}
function createSvg(type, parameters = {}) {

    let customText = parameters.customText
    let color = parameters.color ?? '#ffffff'
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
        case 'arrow':
            svg.setAttribute('viewBox', "0 0 24 24")
            svg.setAttribute('stroke', "currentColor")

            path1.setAttribute('d', `M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 
            1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z`);
            svg.append(path1)
            return svg
        case 'settings':
            svg.setAttribute('viewBox', "0 0 24 24")
            svg.setAttribute('fill', "none")
            svg.setAttribute('stroke', "currentColor")
            path1.setAttribute('stroke-width', `2.34791`)
            path2.setAttribute('stroke-width', `2.34791`)
            path1.setAttribute('d', `m 15.521867,11.99822 a 3.5218678,3.5218678 0 1 1 -7.0437347,0 
            3.5218678,3.5218678 0 0 1 7.0437347,0 z`)
            path2.setAttribute('d', `m 21.019503,10.033625 c 2.061465,0.500105 2.061465,3.432646 0,3.932752 
            a 2.0238998,2.0238998 0 0 0 -1.251438,3.020587 c 1.103519,1.811414 -0.969688,3.885794 -2.782274,2.782275 
            a 2.0238998,2.0238998 0 0 0 -3.019416,1.250264 c -0.500105,2.061465 -3.432646,2.061465 -3.932752,0 
            A 2.0238998,2.0238998 0 0 0 7.0130359,19.768066 C 5.2016221,20.871584 3.1272422,18.798378 4.2307606,16.985791 
            A 2.0238998,2.0238998 0 0 0 2.9804977,13.966377 c -2.06146654,-0.500106 -2.06146654,-3.432647 0,-3.932752 
            A 2.0238998,2.0238998 0 0 0 4.2319346,7.0130359 C 3.1284161,5.2016222 5.2016221,3.1272423 7.0142099,4.2307607 
            A 2.0238998,2.0238998 0 0 0 10.033623,2.9804978 c 0.500106,-2.06146641 3.432647,-2.06146641 3.932752,0 a 
            2.0238998,2.0238998 0 0 0 3.020589,1.2514369 c 1.811413,-1.1035184 3.885794,0.9696875 2.782275,2.7822753 
            -0.713765,1.1692598 -0.08217,2.6954023 1.250264,3.019415 z`)
            svg.append(path1)
            svg.append(path2)
            return svg
        case 'warning':
            svg.setAttribute('viewBox', "0 0 16 16")
            svg.setAttribute('stroke', "currentColor")
            svg.setAttribute('fill', "currentColor")
            path1.setAttribute('d', `M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z`)
            path2.setAttribute('d', `M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 
            4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z`)
            svg.append(path1)
            svg.append(path2)
            return svg
        case 'clockwise-arrow':
            svg.setAttribute('viewBox', "0 0 16 16")
            svg.setAttribute('stroke', "currentColor")
            svg.setAttribute('fill', "currentColor")
            path1.setAttribute('d', `M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z`)
            path1.setAttribute('fill-rule', 'evenodd')
            path2.setAttribute('d', `M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z`)
            svg.append(path1)
            svg.append(path2)
            return svg
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
        case 'custom':
            svg.setAttribute('viewBox', "0 0 11.1 11.1")
            tspan.innerHTML = customText
            svg.append(text)
            return svg
    }
}
function number(val) {
    // Determine number types
    let arr = []
    if (typeof val === 'number' || val === 'j' || val === 'k' || math.typeOf(val) === 'BigNumber') {
        // All numbers should include ['number','complex']
        arr.push('number', 'complex')
        // Integers and K and J should return ['number', 'natural', 'complex']
        if (val % 1 === 0 || val === 'j' || val === 'k') return ['number', 'natural', 'complex']
        // Negative numbers should return ['number','complex','negative']
        if (val < 0) arr.push('negative')
        // Fractions should return ['number','complex','fraction']
        if (val % 1 !== 0) arr.push('fraction')
    } else if (typeof val === "string") {
        arr.push('operation')
        if (val === "√") arr.push('root')
    } else if (typeof val === 'object') {
        arr.push('complex')
        arr.push('imaginary')
    }
    return arr
}
function log(number, base) {
    return Math.log(number) / Math.log(base);
}
function getPotentialColors(symbol) {
    if (/[0123]/.test(symbol)) return ["red", "blue"]
    if (/[456\^]/.test(symbol)) return ["green"]
    if (/[789√]/.test(symbol)) return ["black"]
    if (symbol === "+") return ["red", "black"]
    if (symbol === "−") return ["red", "green"]
    if (symbol === "x") return ["blue", "green"]
    if (symbol === "÷") return ["blue", "black"]
}
function recalibrateCubeRestraints() {

    let reqCol = inputValues.required
    let resCol = inputValues.resources
    
    for (let cube of inputValues.solution.wrap.elements.flat()) {
        
        if (!cube.classList.contains('cube')) continue;
        
        let color = cube.dataset.color
        let restraint = cube.dataset.restraint
        let symbol = translateName(cube.classList[0])
        switch (color) {
            case "red": colorIndex = 0; break;
            case "blue": colorIndex = 1; break;
            case "green": colorIndex = 2; break;
            case "black": colorIndex = 3; break;
            default: continue;
        }

        if (reqCol.available[colorIndex].includes(symbol) && restraint !== 'required') {
            // If required colors contains cube and color, move it from available array to used array
            // Then, set its color
            reqCol.available[colorIndex] = deleteFirstArrItem(reqCol.available[colorIndex], symbol)
            reqCol.used[colorIndex].push(symbol)
            cube.dataset.restraint = 'required'
        } else if (resCol.available[colorIndex].includes(symbol) && restraint !== 'resources') {
            // If resources colors contains cube and color, move it from available array to used array
            // Then, set its color
            resCol.available[colorIndex] = deleteFirstArrItem(resCol.available[colorIndex], symbol)
            resCol.used[colorIndex].push(symbol)
            cube.dataset.restraint = 'resource'
        }
    }
}
function setInputFilter(textbox, inputFilter) {
    // Input filter from StackOverflow
    [ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
        textbox.addEventListener(event, function(e) {
            if (!inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = '';
            }
        });
    });
};
// End of functions

// Create elements
const cursor = document.createElement('div')
cursor.id = 'cursor'
cursor.classList.add('blink-animation');
const settingsIcon = createSvg('settings');
const header = document.querySelector('#header')
header.addEventListener('click', () => menuBackground.click())
settingsIcon.id = 'settings-ico'
header.append(settingsIcon)

const variationsArrowBox = document.querySelector('#variations-arrow-box')
variationsArrowBox.addEventListener('click', function () {
    this.parentElement.classList.toggle('shown')
})

const loading = document.querySelector('#loading')
const loadingText = document.createElement('p')
const loadingTextContainer = document.createElement('div')
loadingTextContainer.id = 'loading-text-container'
loadingText.innerText = 'Loading puzzle...'
loading.append(loadingTextContainer)
loadingTextContainer.append(loadingText)
document.body.append(loading)
let loadingInterval, loadTimer = 0;

function showLoading() {
    variationsContainer.parentElement.classList.remove('shown')
    variationsArrowBox.classList.remove('shown')
    loading.classList.add('shown')
    let interval = 1000;
    loadingInterval = setInterval(() => {

        let dotCount = loadingText.innerText.match(/\./g) ?? ''
        dotCount = dotCount.length
        if (dotCount === 3) {
            dotCount = 0
            interval = 1800;
        } else {
            dotCount++
            interval = 850;
        }
        console.log('')
        loadingText.innerText = 'Loading puzzle' + '.'.repeat(dotCount)
        loadTimer += interval
        if (loadTimer >= 3000 && !document.querySelector('#new-puzzle-button')) {
            showNewPuzzleButton()
        }
    }, interval)
}
function hideLoading() {
    loadTimer = 0;
    variationsArrowBox.classList.add('shown')
    loading.classList.remove('shown')
    const puzzleButton = document.querySelector('#new-puzzle-button')
    if (puzzleButton) {
        puzzleButton.classList.remove('shown')
        setTimeout(() => {puzzleButton.remove()}, 100)
    }
    clearInterval(loadingInterval)
    console.groupEnd()
    console.groupEnd()
    console.groupEnd()
}
function showNewPuzzleButton() {
    const newPuzzleButton = document.createElement('div')
    newPuzzleButton.id = 'new-puzzle-button'
    loading.append(newPuzzleButton)
    setTimeout(() => {newPuzzleButton.classList.add('shown')}, 10)
    const newPuzzleButtonText = document.createElement('p')
    newPuzzleButtonText.innerText = 'Generate New Puzzle'
    const arrow = createSvg('clockwise-arrow')
    newPuzzleButton.append(arrow)
    newPuzzleButton.append(newPuzzleButtonText)
    newPuzzleButton.addEventListener('click', () => {
        hideLoading()
        newPuzzle()
        newPuzzleButton.classList.remove('shown')
        setTimeout(() => {newPuzzleButton.remove()}, 100)
    })
}
let puzzleParameters
// puzzleParameters = {
//     randomize:
//         false,
//     setCubes:
//         [
//             [1, '+', 2, 1,3,6,8,9,5,3,4,6],
//             [0, 'x', 'x', 1],
//             [5, '−'],
//             [8]
//         ],
//     setVariations:
//         ['powersOfBase', 'base', 'wild', 'numberOfFactors', 'exponent', 'factorial', 'decimal', 'log', 'imaginary'],
//     setVariationsLength:
//         9,
//     setGoal:
//         [
//             { cube: 1, color: 'red', orientation: 'up' },
//             { cube: '+', color: 'red', orientation: 'up' },
//             { cube: 1, color: 'red', orientation: 'up' }
//         ],
//     setForbidden:
//     {
//         forbiddenArrLength: 0
//     },
// };

puzzleParameters = {
    randomize: true,
    setCubes: null,
    setVariations: [],
    setVariationsLength: 6,
    setGoal: null,
    setForbidden: null,
}

// puzzleParameters.setVariations = []



// New Puzzle
function newPuzzle() {
    showLoading()

    // Reset Containers
    inputValues.solution = {
        selectedCubeIndex: { row: 0, column: null },
        cursorRow: 0,
        wrap: {
            row: 0,
            elements: [[], []],
            widths: [[], []],
            values: [0, 0],
        },
        cubeCount: {
            cubes: [0],
            nonCubes: [0],
            factorial: [0],
        }
    }
    inputValues.goal = {
        selectedCubeIndex: { row: 0 , column: null },
        cursorRow: 0,
        wrap: {
            row: 0,
            elements: [[], []],
            widths: [[], []],
            values: [0, 0],
        },
        cubeCount: {
            nonCubes: [0],
            factorial: [0],
        }
    },
    inputValues.resources = {
        available: [[], [], [], []],
        used: [[], [], [], []],
        values: [[], [], [], []]
    },
    inputValues.required = {
        available: [[], [], [], []],
        used: [[], [], [], []],
        values: [[], [], [], []]
    },
    inputValues.wildCube = null
    solutionContainer.innerHTML = ""
    forbiddenContainer.innerHTML = ""
    requiredContainer.innerHTML = ""
    resourcesContainer.innerHTML = ""
    variationsContainer.querySelector('ul').innerHTML = ""
    goalContainer.innerHTML = ""
    currInput = 'solution-container'
    changeRows()
    currInput = 'goal-container'
    changeRows()
    currInput = null

    // Generate New Puzzle
    let params = Object.values(puzzleParameters)
    console.log(params)

    if (workers.mainWorker) {
        workers.mainWorker.terminate()
    }
    if (workers.queueWorker) {
        workers.queueWorker.terminate()
    }

    const mainPuzzleWorker = new Worker('equations_worker.js');
    workers.mainWorker = mainPuzzleWorker;

    if (queuedPuzzleData) {
        mainPuzzleWorker.postMessage([
            'return',
            queuedPuzzleData
        ])
    } else {
        mainPuzzleWorker.postMessage(params)
    };

    mainPuzzleWorker.onmessage = (e) => {
        puzzleData = e.data
        console.log(puzzleData)

        // Set wild cube
        staticWild = puzzleData.variations.get('wild') ?? null
        if (staticWild === 0) {
            staticWild = 'zero'
        } else if (staticWild === 'x') {
            staticWild = 'multiply'
        }

        // Display forbidden cubes
        let modifiedForbiddenArr = puzzleData.forbidden
        for (let forbiddenCube of modifiedForbiddenArr) {
            const newForbiddenCube = document.createElement("div")
            let name = translateName(forbiddenCube.cube.toString())
            newForbiddenCube.classList.add(name, "cube", "restraint-cube", forbiddenCube.color)
            newForbiddenCube.dataset.type = name
            newForbiddenCube.dataset.color = forbiddenCube.color
            if (name === staticWild) {
                newForbiddenCube.addEventListener('click', toggleCubeOptions)
                newForbiddenCube.classList.add('wild')
                newForbiddenCube.classList.add('pointer')
                newForbiddenCube.classList.add('no-wild-translate')
            }

            const svg = createSvg(name)
            if (svg) {
                newForbiddenCube.append(svg)
                svg.classList.add('svg')
            }
            newForbiddenCube.append(createDiv('cube-content'))
            forbiddenContainer.append(newForbiddenCube);
        };

        // Display goal cubes
        let modifiedGoalArr = puzzleData.goal
        for (let goalCube of modifiedGoalArr) {
            const newGoalCube = document.createElement("div")
            let name = translateName(goalCube.cube.toString())
            newGoalCube.dataset.type = name
            newGoalCube.dataset.color = goalCube.color
            newGoalCube.classList.add(name, "cube", "goal-cube", goalCube.color)
            
            if (name === staticWild) { // Wild
                newGoalCube.addEventListener('click', toggleCubeOptions)
                newGoalCube.classList.add('wild')
                newGoalCube.classList.add('pointer')
                newGoalCube.classList.add('no-wild-translate')
            } else { // Exponent
                let symbol = translateName(name)
                let exponent = puzzleData.variations.get('exponent')
                let numbersArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']
                if (puzzleData.variations.get('base') >= 11) numbersArr.push('exponent')
                if (puzzleData.variations.get('base') >= 12) numbersArr.push('square-root')
                if (goalCube.color === exponent && numbersArr.includes(name)) {
                    newGoalCube.addEventListener('click', toggleCubeOptions)
                    newGoalCube.classList.add('pointer')
                }
            }

            const svg = createSvg(name)
            if (svg) {
                newGoalCube.append(svg)
                svg.classList.add('svg')
            }
            const cubeContent = createDiv('cube-content')
            const hoverDiv = cubeContent.querySelector('.hover-div')
            hoverDiv.dataset.container = 'goal-container'
            newGoalCube.append(cubeContent)
            currInput = 'goal-container'
            checkInputWidth(width500 ? 44 : 46, newGoalCube)
            currInput = null
        };

        function findColorIndex(cube, ...index) {
            let tryIndex = getRandomNumber(0, 3)
            if (index.includes(tryIndex)) {
                if (index.length === 4) return "NOT FOUND";
                return findColorIndex(cube, ...index);
            } else {
                if (puzzleData.modifiedCubes[tryIndex].includes(cube)) return tryIndex;
                index.push(tryIndex);
                return findColorIndex(cube, ...index);
            };
        };

        // Determine required and resources cubes from solution
        let resourcesArr = clone(puzzleData.modifiedCubes)
        let requiredArr = puzzleData.solution.cubes
        console.log(clone(resourcesArr))

        console.log(puzzleData.solution.flag)
        console.log(requiredArr)

        // Occasionally remove a cube from required
        if (getRandomNumber(0, 2)) requiredArr = deleteFirstArrItem(requiredArr, randomArrayValue(requiredArr.toString()))
        console.log(requiredArr)

        // Place cubes from required arr into required
        for (let requiredCube of randomSort(requiredArr)) {
            let colorIndex = findColorIndex(requiredCube), color;
            switch (colorIndex) {
                case 0: color = "red"; break;
                case 1: color = "blue"; break;
                case 2: color = "green"; break;
                case 3: color = "black"; break;
            };
            const newRequiredCube = document.createElement('div')
            let name = translateName(requiredCube)
            newRequiredCube.classList.add(name, 'cube', 'restraint-cube', color)
            newRequiredCube.dataset.type = name
            newRequiredCube.dataset.color = color
            if (name === staticWild) {
                newRequiredCube.addEventListener('click', toggleCubeOptions)
                newRequiredCube.classList.add('wild')
                newRequiredCube.classList.add('pointer')
                newRequiredCube.classList.add('no-wild-translate')
            }
            
            const svg = createSvg(name)
            if (svg) {
                newRequiredCube.append(svg)
                svg.classList.add('svg')
            }
            newRequiredCube.append(createDiv('cube-content'))

            requiredContainer.append(newRequiredCube)
            inputValues.required.values[colorIndex].push(requiredCube.toString())
            inputValues.required.available[colorIndex].push(requiredCube.toString())

            // Remove required cube from resources
            resourcesArr[colorIndex] = deleteFirstArrItem(resourcesArr[colorIndex], requiredCube)
        }
        console.log(clone(resourcesArr))

        // Place cubes from resources arr into resources
        for (let i = 0; i < resourcesArr.length; i++) {
            for (let resourcesCube of resourcesArr[i]) {
                let color;
                switch (i) {
                    case 0: color = "red"; break;
                    case 1: color = "blue"; break;
                    case 2: color = "green"; break;
                    case 3: color = "black"; break;
                };

                let name = translateName(resourcesCube.toString())
                const newResourcesCube = document.createElement('div')
                newResourcesCube.classList.add(name, 'cube', 'resource-cube', color)
                newResourcesCube.dataset.type = name
                newResourcesCube.dataset.color = color
                if (name === staticWild) {
                    newResourcesCube.addEventListener('click', toggleCubeOptions)
                    newResourcesCube.classList.add('wild')
                    newResourcesCube.classList.add('pointer')
                    newResourcesCube.classList.add('no-wild-translate')
                }

                const svg = createSvg(name)
                if (svg) {
                    newResourcesCube.append(svg)
                    svg.classList.add('svg')
                } else {
                    newResourcesCube.innerHTML = resourcesCube
                }
                newResourcesCube.append(createDiv('cube-content'))

                resourcesContainer.append(newResourcesCube)
                inputValues.resources.values[i].push(resourcesCube.toString())
                inputValues.resources.available[i].push(resourcesCube.toString())
            };
        };

        // const testSVG = document.createElement('div')
        // testSVG.classList.add('cube', 'resource-cube', 'blue', 'testSvg')
        // testSVG.append(createDiv('cube-content'))
        // resourcesContainer.append(testSVG)

        // const testSVG2 = document.createElement('div')
        // testSVG2.classList.add('cube', 'resource-cube', 'blue', 'testSvg2')
        // testSVG2.append(createDiv('cube-content'))
        // resourcesContainer.append(testSVG2)

        console.log(inputValues.required)
        console.log(inputValues.resources)

        // Display variations
        const variationsDisplay = variationsContainer.querySelector('ul')
        for (let x of puzzleData.variations) { variationsDisplay.append(document.createElement('li')) }
        for (let i = 0; i < variationsDisplay.children.length; i++) {
            let currVariation = Array.from(puzzleData.variations)[i]
            let variationToPush;
            if (typeof currVariation[1] === "boolean") {
                switch (currVariation[0]) {
                    case "powersOfBase": variationToPush = "Powers of the Base"; break;
                    case "multipleOperations": variationToPush = "Multiple Ops."; break;
                    case "factorial": variationToPush = "Factorial"; break;
                    case "numberOfFactors": variationToPush = "Number of Factors"; break;
                    case "imaginary": variationToPush = "Imaginary"; break;
                    case "decimal": variationToPush = "Decimal in Goal"; break;
                    case "log": variationToPush = "Log"; break;
                }
            } else {
                let argument;
                switch ((currVariation)[0]) {
                    case "wild": 
                        argument = currVariation[1].toString().toUpperCase()
                        variationToPush = argument + " Wild";
                        break;
                    case "base": variationToPush = "Base " + currVariation[1]; break;
                    case "multipleOf": variationToPush = "Multiple of " + currVariation[1]; break;
                    case "exponent":
                        argument = currVariation[1].charAt(0).toUpperCase() + currVariation[1].slice(1)
                        variationToPush = argument + " Exponent";
                        break;
                }
            }
            variationsDisplay.children[i].innerText = variationToPush;
        }
        hideLoading();

        // Queue New Puzzle
        console.groupCollapsed("QUEUE PUZZLE")
        const queuePuzzleWorker = new Worker('equations_worker.js');
        workers.queueWorker = queuePuzzleWorker
        queuePuzzleWorker.postMessage(params)

        queuePuzzleWorker.onmessage = (e) => {
            queuedPuzzleData = e.data
            queuePuzzleWorker.terminate();
            console.log("DONE QUEUE PUZZLE")
            console.groupEnd()
        }

        mainPuzzleWorker.terminate();

        // let string = '1+(1+1)'
        // let string = '0x31+18x58−2'

        // Preset Input

        // −÷√
        // currInput = 'solution-container'
        // changeKeyboardLayout()
        // solutionContainer.classList.add('active')
        // solutionContainer.append(cursor)
        // cursor.dataset.container = 'solution-container' // Prevent redundant error
        // alignCursor([0, 0])
        
        // let string = '(√25)'
        // for (let i = 0; i < string.length; i++) {
        //     inputCube(translateName(string.charAt(i)))
        // }

        // submitInput()


    };
};

// Cube Containers
const boardContainer = document.querySelector('#board-container')
const forbiddenContainer = boardContainer.querySelector('#forbidden-container');
const requiredContainer = boardContainer.querySelector('#required-container');
const resourcesContainer = document.querySelector('#resources-container');
const solutionContainer = boardContainer.querySelector('#solution-container');
const goalContainer = boardContainer.querySelector('#goal-container');
// Misc. Puzzle Containers
const variationsContainer = document.querySelector('#variations-container')
const submitButton = document.querySelector('#submit-button');
// Keyboard
const keyboardContainer = document.querySelector('#keyboard-container');
const keyboardButtons = keyboardContainer.querySelectorAll(".keyboard-row > div")
console.log(keyboardButtons)

solutionContainer.dataset.container = 'solution-container'
goalContainer.dataset.container = 'goal-container'

const workers = {
    mainWorker: null,
    queueWorker: null,
}

const inputValues = {
    solution: {
        selectedCubeIndex: {  row: 0 , column: null },
        cursorRow: 0,
        wrap: {
            row: 0,
            elements: [[], []],
            widths: [[], []],
            values: [0, 0],
        },
        cubeCount: {
            cubes: [0],
            nonCubes: [0],
            factorial: [0],
        }
    },
    goal: {
        selectedCubeIndex: { row: 0 , column: null },
        cursorRow: 0,
        wrap: {
            row: 0,
            elements: [[], []],
            widths: [[], []],
            values: [0, 0],
        },
        cubeCount: {
            nonCubes: [0],
            factorial: [0],
        }
    },
    resources: {
        available: [[], [], [], []],
        used: [[], [], [], []]
    },
    required: {
        available: [[], [], [], []],
        used: [[], [], [], []]
    },
    wildCube: null
}

let puzzleData;
let queuedPuzzleData;
let staticWild = null;
let currInput = null;
newPuzzle()

// Cube Inputs
solutionContainer.addEventListener('click', showKeyboard);
goalContainer.addEventListener('click', showKeyboard);
keyboardContainer.addEventListener('click', function (e) { e.stopPropagation() })
document.addEventListener('click', hideKeyboard);

// function toggleKeyboard(e) {
//     e.stopPropagation();
//     currInput = !currInput;
//     cursor.classList.toggle('blink-animation')
//     keyboardContainer.classList.toggle("hidden")
// };
function showKeyboard(e) {
    
    let target = e.target.dataset.container
    const targetContainer = document.querySelector(`#${target}`)

    e.stopPropagation();
    cursor.classList.add('blink-animation')
    keyboardContainer.classList.remove("hidden")

    let wrap, container, selectedCubeIndex, row, column, cRow, frontCursor, clickedRow
    if (currInput === 'solution-container') {
        container = solutionContainer;
        wrap = inputValues.solution.wrap
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        cRow = inputValues.solution
    } else {
        container = goalContainer;
        wrap = inputValues.goal.wrap
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        cRow = inputValues.goal
    };
    // console.log(e.target)
    if (!targetContainer.classList.contains('active') && currInput) {

        const activeContainer = document.querySelector('#solution-container.active, #goal-container.active')
        if (activeContainer) {
            activeContainer.classList.remove('active')
        }
        for (let row of wrap.elements) {
            for (let node of row) {
                node.dataset.cursorOffset = 0
            }
        }
        selectedCubeIndex.row = wrap.row
        cRow.cursorRow = wrap.row
        selectedCubeIndex.column = wrap.elements[wrap.row].length - 1

        alignCursor()
        alignNodes()
    }

    if (targetContainer.classList.contains('active')) {

        let previousSelectedCubeRow
        
        if (getSelectedCube()) {
            previousSelectedCubeRow = getSelectedCube().dataset.row
        } else {
            previousSelectedCubeRow = 0
        }

        if (e.target === container) {

            row = Math.floor((e.offsetY - 2) / 50)
            
            if (row < 0) row = 0;
            if (row > wrap.row) row--

            cRow.cursorRow = row
            clickedRow = row

            let leftBound = (container.offsetWidth - wrap.values[row]) / 2
            let rightBound = leftBound + wrap.values[row]
            if (e.offsetX < leftBound) { // Clicked to the left of all cubes

                frontCursor = true;
                if (row > 0) { // Ensure cube is not very first cube
                    row--
                    column = wrap.elements[row].length - 1
                } else { // If cube is first cube, set index accordingly
                    row = 0
                    column = null
                }

            } else if (e.offsetX > rightBound) { // Clicked to the right of all cubes
                column = wrap.widths[row].length - 1

                if (wrap.row > row) { 
                    clickedRow = row + 1
                    cRow.cursorRow = row + 1
                    frontCursor = true;
                }

            } else {

                let difference = e.offsetX - leftBound
                column = -1;
                if (difference === 0) column = 0;
                for (let i = 0; difference > 0; i++) {
                    difference -= wrap.widths[row][i]
                    column++
                }

                let clickedCube = wrap.elements[row][column]

                // Clicking on left half of cube will keep column same as left cube
                let halfWidth = (clickedCube.classList.contains('cube')) ? 23 : 8
                if (difference + halfWidth < 0) {
                    if (column > 0) { // Default, select cube to the left
                        column--
                    } else {  // If cube is first of its row
                        frontCursor = true;
                        if (row === 0) { // Cube is very first cube
                            column = null
                        } else { // Default, select last cube of previous row
                            row--
                            column = wrap.elements[row].length - 1
                        }
                    }
                } else if (column === wrap.elements[row].length - 1) { // If clicked to the right of last cube in row
                    if (wrap.row > row) { // Move cursor to first position of next row if applicable
                        clickedRow = row + 1
                        cRow.cursorRow = row + 1
                        frontCursor = true;
                    }
                }

            } 
        } else {

            let clickedCube = e.target
            if (clickedCube.id === 'cursor') return;
            if (clickedCube.classList.contains('hover-div')) {
                 // Clicked on hover-div from cube
                clickedCube = e.target.parentElement.parentElement
                if (clickedCube.classList.contains('pointer')) return;
            }
            let halfWidth = (clickedCube.classList.contains('cube')) ? 23 : 8
            clickedRow = parseInt(clickedCube.dataset.row)
            row = clickedRow
            column = wrap.elements[clickedRow].indexOf(clickedCube)
            cRow.cursorRow = clickedRow
            // Clicking on left half of cube select the previous cube
            if (e.offsetX < halfWidth) {
                if (column > 0) { // Default, select cube to the left
                    column--
                } else { // If cube is first of its row
                    frontCursor = true;
                    if (row === 0) { // Cube is very first cube
                        column = null
                    } else { // Default, select last cube of previous row
                        row--
                        column = wrap.elements[row].length - 1
                    }
                }
            }
        }
        selectedCubeIndex.row = row
        selectedCubeIndex.column = column

        for (let i = 0; i < wrap.elements[previousSelectedCubeRow].length; i++) {
            if (cRow.cursorRow == previousSelectedCubeRow) break;
            wrap.elements[previousSelectedCubeRow][i].dataset.cursorOffset = 0
        }
        for (let i = 0; i < wrap.elements[clickedRow].length; i++) {
            if (i > column || frontCursor) {
                wrap.elements[clickedRow][i].dataset.cursorOffset = 6
            } else [
                wrap.elements[clickedRow][i].dataset.cursorOffset = 0
            ]
        }

        alignCursor([70, 70], frontCursor)
        alignNodes()

    } else if (target === 'solution-container') {
        if (currInput === 'goal-container') {
            currInput = 'solution-container'
            keyboardContainer.classList.add('hidden')
            setTimeout(() => {
                changeKeyboardLayout()
                keyboardContainer.classList.remove('hidden')
            }, 200)
        } else {
            currInput = 'solution-container'
            changeKeyboardLayout()
        }
        solutionContainer.classList.add('active')
        solutionContainer.append(cursor)
        cursor.dataset.container = 'solution-container' // Prevent redundant error
        alignCursor([0, 0])
    } else if (target === 'goal-container') {
        if (currInput === 'solution-container') {
            currInput = 'goal-container'
            keyboardContainer.classList.add('hidden')
            setTimeout(() => {
                changeKeyboardLayout()
                keyboardContainer.classList.remove('hidden')
            }, 200)
        } else {
            currInput = 'goal-container'
            changeKeyboardLayout()
        }
        goalContainer.classList.add('active')
        goalContainer.append(cursor)
        cursor.dataset.container = 'goal-container' // Prevent redundant Error
        alignCursor([0, 0])
    };

}
function hideKeyboard() {

    if (!currInput) return;

    const activeContainer = document.querySelector('#solution-container.active, #goal-container.active')
    let selectedCubeIndex, wrap;
    if (currInput === 'solution-container') {
        wrap = inputValues.solution.wrap
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        input = inputValues.solution
    } else {
        wrap = inputValues.goal.wrap
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        input = inputValues.goal
    }

    if (wrap) { // Clicked on container while another container was still active
        for (let row of wrap.elements) {
            for (let node of row) {
                node.dataset.cursorOffset = 0
            }
        }

        selectedCubeIndex.row = wrap.row
        input.cursorRow = wrap.row
        selectedCubeIndex.column = wrap.elements[wrap.row].length - 1
        alignCursor()
        alignNodes()
    }

    cursor.classList.remove('blink-animation')
    if (activeContainer) {
        activeContainer.classList.remove('active')
    }
    keyboardContainer.classList.add("hidden")

    currInput = null;
};
function changeKeyboardLayout() {
    keyboardContainer.innerHTML = ''
    const keyboardRow1 = document.createElement('div')
    const keyboardRow2 = document.createElement('div')
    keyboardRow1.classList.add('keyboard-row')
    keyboardRow2.classList.add('keyboard-row')

    if (currInput === 'solution-container') {
        let rowArr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']
        let rowArr2 = ['add', 'subtract', 'multiply', 'divide', 'exponent', 'square-root']
        for (let symbol of rowArr1.concat(rowArr2)) {
            const button = document.createElement('div')
            button.classList.add('keyboard-button')
            button.classList.add(symbol)
            const svg = createSvg(symbol, {color: '#000000'})
            svg.style.width = '26px'
            button.append(svg)
            button.addEventListener('click', function() {
                inputCube(this.classList[1]) 
            })
            if (rowArr1.includes(symbol)) keyboardRow1.append(button)
            if (rowArr2.includes(symbol)) keyboardRow2.append(button)
        }
    }
    
    for (let symbol of ['left-parenthesis', 'right-parenthesis', 'factorial', 'decimal', 'backspace']) {
        const button = document.createElement('div')
        button.classList.add('keyboard-button')
        button.classList.add(symbol)
        const text = document.createElement('div')
        button.append(text)
        if (symbol === 'backspace') button.classList.add('keyboard-large-button')

        switch (symbol) {
            case 'left-parenthesis':
                text.innerText = '(';
                keyboardRow2.append(button)
                break;
            case 'right-parenthesis':
                text.innerText = ')';
                keyboardRow2.append(button)
                break;
            case 'factorial':
                if (puzzleData.variations.get('factorial')) {
                    if (currInput === 'goal-container' && puzzleData.variations.get('multipleOf')) break;
                    text.innerText = '!';
                    text.style.fontSize = '18px'
                    text.style.position = 'relative'
                    text.style.top = '1px'
                    keyboardRow2.append(button)
                }; break;
            case 'decimal':
                if (puzzleData.variations.get('decimal') && currInput === 'goal-container') {
                    text.innerText = '.';
                    keyboardRow2.append(button)
                }; break;
            case 'backspace':
                text.innerText = 'Delete';
                text.style.position = 'relative'
                text.style.top = '1px'
                keyboardRow2.append(button)
                break;
        }
        button.addEventListener('click', function() {
            inputCube(this.classList[1]) 
        })
    }
    keyboardContainer.append(keyboardRow1)
    keyboardContainer.append(keyboardRow2)
}

document.addEventListener('keydown', function (keypress) {
    // Input cube on keypress when keyboard is active

    // console.log(keypress.key);
    if (!currInput) return;
    if (keypress.key === 'ArrowLeft' || keypress.key === 'ArrowRight') {
        if (document.querySelector('.selector-container')) return;
        moveCursor(keypress.key)
    }
    inputCube(translateName(keypress.key));
});
for (let button of keyboardButtons) button.addEventListener('click', function() {
    inputCube(this.classList[1]) 
});

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

function inputCube(cube) {

    if (document.querySelector('.selector-container')) return;
    if (cube === undefined) return;
    if (cube === 'factorial' && !puzzleData.variations.get('factorial')) return;
    if (cube === 'log' && !puzzleData.variations.get('log')) return;
    if (cube === 'imaginary' && !puzzleData.variations.get('imaginary')) return;
    if (cube === 'decimal' && (currInput === 'solution-container' || !puzzleData.variations.get('decimal'))) return
    let wrap, selectedCubeIndex;
    if (currInput === 'solution-container') {
        wrap = inputValues.solution.wrap;
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        cubeCount = inputValues.solution.cubeCount
    } else {
        wrap = inputValues.goal.wrap;
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        cubeCount = inputValues.goal.cubeCount
    }
    let reqCol = inputValues.required
    let resCol = inputValues.resources

    // Determine current input

    let symbol;
    if (cube === "backspace") {

        const selectedCubeElement = getSelectedCube()

        // If no cubes available, return
        if (!selectedCubeElement) return;
        if (selectedCubeElement.classList.contains('goal-cube')) return

        // Set cube data
        let cubeRestraint = selectedCubeElement.dataset.restraint
        let cubeWidth = width500 ? 44 : 46;
        let symbol = selectedCubeElement.dataset.symbol
        if (/[()!.]/.test(symbol)) {
            cubeWidth = 16;
            if (symbol === '.') cubeWidth = 8
            if (symbol === '!') cubeCount.factorial[0]--
            cubeCount.nonCubes[0]--
        } else {
            cubeCount.cubes[0]--
        }

        // Modify row sizes and check lengths
        wrap.values[selectedCubeIndex.row] -= cubeWidth
        checkInputWidth(cubeWidth);

        // Determine cube color, then remove it
        let currColor = selectedCubeElement.dataset.color, colorIndex
        selectedCubeElement.remove()

        // Remove cube from inputValues color indexes if it has restraint
        if (!cubeRestraint) return;

        // Set color index
        switch (currColor) {
            case "red": colorIndex = 0; break;
            case "blue": colorIndex = 1; break;
            case "green": colorIndex = 2; break;
            case "black": colorIndex = 3; break;
            default: return;
        }

        if (reqCol.used[colorIndex].includes(symbol) && cubeRestraint === 'required') {
            // If cube was required, move it from used array to available array

            reqCol.used[colorIndex] = deleteFirstArrItem(reqCol.used[colorIndex], symbol)
            reqCol.available[colorIndex].push(symbol)
        } else if (resCol.used[colorIndex].includes(symbol) && cubeRestraint === 'resource') {
            // If cube was resources, move it from used array to available array

            resCol.used[colorIndex] = deleteFirstArrItem(resCol.used[colorIndex], symbol)
            resCol.available[colorIndex].push(symbol)
        }
        recalibrateCubeRestraints()

        return;
    } else {
        // Set symbol
        symbol = translateName(cube)
    };
    
    // Don't add cubes not within base
    if (parseFloat(symbol) >= puzzleData.variations.get('base')) return;
    
    let cubeWidth = 16;
    if (cube === 'decimal') cubeWidth = 8
    // Create cube and add content
    const solutionCube = document.createElement('div');
    if (cube === 'log' && puzzleData.variations.get('log')) {
        symbol = '÷'
        cube = 'divide'
        solutionCube.classList.add('sideways')
    }
    if (cube === 'imaginary' && puzzleData.variations.get('imaginary')) {
        symbol = '−'
        cube = 'subtract'
        solutionCube.classList.add('sideways')
    }
    solutionCube.classList.add(cube);
    solutionCube.innerHTML = symbol
    solutionCube.dataset.type = cube
    solutionCube.dataset.container = currInput
    solutionCube.dataset.symbol = symbol
    

    const cubeContent = createDiv('cube-content')
    const hoverDiv = cubeContent.querySelector('.hover-div')
    hoverDiv.dataset.container = currInput
    const svg = createSvg(cube)
    if (svg) {
        solutionCube.innerHTML = ''
        svg.classList.add('svg')
        cubeContent.append(svg)
    }
    
    if (!/[().!]/.test(symbol)) {
        if (currInput === 'goal-container') return
        if (cubeCount.cubes >= 24) {
            notify(
                `Too many cubes in solution!`,
                {duration: 1000, height: '40px', width: '230px'}
            )
            return;
        }
        // Add classes and colors if cube is not parenthesis
        
        solutionCube.append(cubeContent)
        cubeWidth = width500 ? 44 : 46
        solutionCube.classList.add('cube', 'solution-cube');

        let colorIndex, finalColor;

        for (let i = 0; i < 4; i++) {
            if (reqCol.available[i].includes(symbol)) {
                // If required colors contains cubes, move it from available array to used array
                // Then, set its color
                colorIndex = i
                reqCol.available[i] = deleteFirstArrItem(reqCol.available[i], symbol)
                reqCol.used[i].push(symbol)
                solutionCube.dataset.restraint = 'required'
                break;
            }
        }

        if (colorIndex === undefined) {
            // If cube is not in required
            for (let i = 0; i < 4; i++) {
                if (resCol.available[i].includes(symbol)) {
                    // If resources colors contains cubes, move it from available array to used array
                    // Then, set its color
                    colorIndex = i
                    resCol.available[i] = deleteFirstArrItem(resCol.available[i], symbol)
                    resCol.used[i].push(symbol)
                    solutionCube.dataset.restraint = 'resource'
                    break;
                }
            }
        }

        switch (colorIndex) {
            case 0: finalColor = "red"; break;
            case 1: finalColor = "blue"; break;
            case 2: finalColor = "green"; break;
            case 3: finalColor = "black"; break;
            default:
                // Cube was not in required nor resources, set random color value

                solutionCube.dataset.restraint = 'unavailable'
                let colorsArr = getPotentialColors(symbol)
                finalColor = randomArrayValue(colorsArr)
        }

        solutionCube.classList.add(finalColor)
        solutionCube.dataset.color = finalColor

        cubeCount.cubes[0]++
    } else {
        if (cubeCount.nonCubes >= 20) {
            let activeContainer = 'solution'
            let notificationWidth = '270px'
            if (currInput === 'goal-container') {
                notificationWidth = '240px'
                activeContainer = 'goal'
            }
            notify(
                `Too many characters in ${activeContainer}!`,
                {duration: 1000, height: '40px', width: notificationWidth}
            )
            return;
        }
        cubeCount.nonCubes[0]++
        if (symbol === '!') cubeCount.factorial[0]++
    }

    let addToggle = false
    if (/[1-9]/.test(symbol)) addToggle = true
    else if (puzzleData.variations.get('imaginary') && symbol === "−") addToggle = true
    else if (puzzleData.variations.get('log') && symbol === "÷") addToggle = true
    else if (puzzleData.variations.get('base') > 10 && symbol === "^") addToggle = true
    else if (puzzleData.variations.get('base') > 11 && symbol === "√") addToggle = true
    else if (['blue', 'red'].includes(puzzleData.variations.get('exponent')) && symbol === '0') addToggle = true

    if (cube === staticWild) {
        console.log("D")
        solutionCube.classList.add('wild')
        svg.remove()
        addToggle = true

        let currWild = inputValues.wildCube ?? staticWild
        solutionCube.dataset.type = currWild

        const newSvg = createSvg(currWild)
        newSvg.classList.add('svg')

        const wildStar = document.createElement('div')
        wildStar.classList.add('wild-star')
        wildStar.innerText = '*'
        switch (currWild) {  // Override default position if it doesn't fit
            case 'one': 
                wildStar.style.left = '24px'; break;
            case 'five':
            case 'seven':
            case 'subtract':
            case 'multiply':
                wildStar.style.left = '27px'; break;
            case 'square-root':
                wildStar.style.left = '30px'; break;
        }
        
        solutionCube.append(newSvg)
        if (currWild === staticWild) {
            solutionCube.classList.add('no-wild-translate')
        } else {
            solutionCube.append(wildStar)
        }
        solutionCube.classList.add(`wild-${currWild}`)
    }

    if (addToggle) {
        solutionCube.addEventListener('click', toggleCubeOptions);
        solutionCube.classList.add('pointer')
    }

    // Give and remove hidden classlist for fade in effect
    solutionCube.classList.add('hidden')

    if (checkInputWidth(cubeWidth, solutionCube)) {
        solutionCube.classList.remove('hidden')
    }
};

function checkInputWidth(cubeWidth, element) {

    let input, selectedCubeIndex, wrap, cRow
    if (currInput === 'solution-container') {
        input = solutionContainer
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        wrap = inputValues.solution.wrap
        cRow = inputValues.solution
    } else {
        input = goalContainer
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        wrap = inputValues.goal.wrap
        cRow = inputValues.goal
    }
    let case1 = false;
    let containerWidth = input.offsetWidth
    let nodeAnimationDuration = 70;
    let cursorAnimationDuration = [0, 30];
    let frontCursor;

    // console.log("INPUTDEBUG")
    // console.log(wrap.values)
    // console.log(wrap.row)
    // console.log(wrap.values[wrap.row])
    // console.log(cubeWidth)

    if (element) {
        // Append element if one is passed

        // Create index for new cube
        let newRow, newColumn

        if (wrap.values[selectedCubeIndex.row] + cubeWidth >= containerWidth - 10) {
            // If current row is too wide, move to next row
            // Also, make sure cursor is not front cursor

            // Maximum Solution/Goal size
            // let activeContainer = 'Solution'
            // let maxRows = 3
            // let notificationWidth = '170px'
            // if (currInput === 'goal-container') {
            //     activeContainer = 'Goal'
            //     maxRows = 1
            //     notificationWidth = '140px'
            // }
            // if (wrap.values[maxRows]) {
            //     if (wrap.values[maxRows] + cubeWidth >= containerWidth - 10) {
            //         notify(
            //             `${activeContainer} is too big!`,
            //             {duration: 1000, height: '40px', width: notificationWidth}
            //         )
            //         return false;
            //     }
            // }

            if (selectedCubeIndex.column === wrap.widths[selectedCubeIndex.row].length - 1) {
                // Selected cube is last fitting cube in row
                newRow = selectedCubeIndex.row + 1
                newColumn = 0
                wrap.values[newRow] += cubeWidth

                if (cRow.cursorRow === selectedCubeIndex.row) {
                    // Case where cursor will end up onto next row
                    cRow.cursorRow++
                    cursorAnimationDuration = [0, 0]

                    wrap.row++
                    changeRows()
                } else {
                    // Case where cursor is at leftmost position on non-first row

                    let overflowData = stopOverflow(selectedCubeIndex.row)
                    cursorAnimationDuration = overflowData[0]
                    nodeAnimationDuration = overflowData[1]
                    frontCursor = overflowData[2]
                }

            } else {
                // Default

                // Edge case where cube must move to next row but other objects are in front (i.e. parenthesis that fit)
                let totalWidth = wrap.widths[selectedCubeIndex.row].slice(0, selectedCubeIndex.column + 1).reduce((a, b) => a + b, 0)
                if (totalWidth + cubeWidth >= containerWidth - 10) {

                    case1 = true

                    newRow = selectedCubeIndex.row
                    newColumn = selectedCubeIndex.column + 1
                    wrap.values[newRow] += cubeWidth

                    // If wrap value does not contain index for spare row, make one
                    if (!wrap.values[wrap.row + 1]) wrap.values[wrap.row + 1] = 0
                    if (!wrap.widths[wrap.row + 1]) wrap.widths[wrap.row + 1] = []
                    if (!wrap.elements[wrap.row + 1]) wrap.elements[wrap.row + 1] = []

                } else {
                    newRow = selectedCubeIndex.row
                    if (selectedCubeIndex.column === null) {
                        // Special case for first cube
                       newColumn = selectedCubeIndex.column + 0
                    } else {
                       newColumn = selectedCubeIndex.column + 1
                    }
                    wrap.values[newRow] += cubeWidth

                    let overflowData = stopOverflow(selectedCubeIndex.row)
                    cursorAnimationDuration = overflowData[0]
                    nodeAnimationDuration = overflowData[1]
                    if (overflowData[2] !== null) frontCursor = overflowData[2]
                }

            }

            // If wrap value does not contain index for spare row, make one
            if (!wrap.values[wrap.row + 1]) wrap.values[wrap.row + 1] = 0
            if (!wrap.widths[wrap.row + 1]) wrap.widths[wrap.row + 1] = []
            if (!wrap.elements[wrap.row + 1]) wrap.elements[wrap.row + 1] = []

        } else if (cRow.cursorRow !== selectedCubeIndex.row) {
            // Case where cursor is at leftmost position and cube fits into previous row
            newRow = selectedCubeIndex.row
            newColumn = selectedCubeIndex.column + 1
            wrap.values[newRow] += cubeWidth

            frontCursor = true;
        } else if (selectedCubeIndex.column === null) {
            // Case where no cubes in input yet
            newRow = selectedCubeIndex.row
            newColumn = 0;
            wrap.values[newRow] += cubeWidth
        } else {
            // Default, new index is 1 column to the right of current selected cube
            newRow = selectedCubeIndex.row
            newColumn = selectedCubeIndex.column + 1
            wrap.values[newRow] += cubeWidth
        }

        // Add new cube into wrap indexes
        wrap.widths[newRow].splice(newColumn, 0, cubeWidth)
        wrap.elements[newRow].splice(newColumn, 0, element)

        // Set position
        let totalWidth = (wrap.values[newRow])
        let leftBound = (containerWidth - totalWidth + cubeWidth) / 2
        // Offset is sum of widths up to column
        let offset = wrap.widths[newRow].slice(0, newColumn).reduce((a, b) => a + b, 0)
        let position = leftBound + offset

        element.dataset.offset = offset
        element.dataset.row = newRow
        element.dataset.cursorOffset = 0
        element.style.top = 2 + (newRow * 50) + "px"
        element.style.left = position + "px";

        // Edge case where cube must move to next row but other objects are in front (i.e. parenthesis that fit)

        if (case1) {
            console.log("Edge case")

            cRow.cursorRow++

            let overflowData = stopOverflow(selectedCubeIndex.row)
            cursorAnimationDuration = overflowData[0]
            nodeAnimationDuration = overflowData[1]
            if (overflowData[2] !== null) frontCursor = overflowData[2]

            newRow = selectedCubeIndex.row + 1
            newColumn = 0

            for (let i = 1; i < wrap.elements[cRow.cursorRow].length; i++) {
                wrap.elements[cRow.cursorRow][i].dataset.cursorOffset = 6
            }

        }

        cursor.style.top = 8 + (newRow * 50) + "px"

        input.append(element)
        selectedCubeIndex.row = newRow;
        selectedCubeIndex.column = newColumn;

        // Adjust offset for succceeding cubes
        for (let i = newColumn + 1; i < wrap.elements[newRow].length; i++) {
            if (case1) break;
            let element = wrap.elements[newRow][i]
            element.dataset.offset = parseInt(element.dataset.offset) + cubeWidth
        }

    } else {
        // Backspace, Remove element

        // if (wrap.row > 0 && wrap.values[wrap.row] === 0 && boardContainer.offsetHeight > 450) {
        if (wrap.row > 0 && wrap.values[wrap.row] === 0) {
            // If current row is empty

            wrap.row--
            cRow.cursorRow--
            changeRows()

            wrap.widths[selectedCubeIndex.row].splice(selectedCubeIndex.column, 1)
            wrap.elements[selectedCubeIndex.row].splice(selectedCubeIndex.column, 1)

            if (selectedCubeIndex.row) {
                selectedCubeIndex.row--
                selectedCubeIndex.column = wrap.elements[wrap.row].length - 1
            }
            else {
                selectedCubeIndex.column = null
            }

            alignCursor(0)
            return;

        }

        cursorAnimationDuration = [0, 70]
        const currCube = getSelectedCube()

        // Remove selected cube from wrap values
        wrap.widths[selectedCubeIndex.row].splice(selectedCubeIndex.column, 1)
        wrap.elements[selectedCubeIndex.row].splice(selectedCubeIndex.column, 1)

        // Adjust offset for succceeding cubes
        for (let i = selectedCubeIndex.column; i < wrap.elements[selectedCubeIndex.row].length; i++) {
            wrap.elements[selectedCubeIndex.row][i].dataset.offset -= cubeWidth
        }

        if (selectedCubeIndex.column) {

            if (selectedCubeIndex.row !== cRow.cursorRow) {
                // If cursor was at leftmost position of next row

                let remainingSpace = (containerWidth - 10) - (wrap.values[selectedCubeIndex.row])
                let nextCubeWidth = wrap.widths[selectedCubeIndex.row + 1][0]
                if (nextCubeWidth && nextCubeWidth < remainingSpace) {
                    // Default, move cursor to rightmost position of current row
                    let cursorOffset = parseInt(currCube.dataset.offset) + 2
                    let leftBound = (containerWidth - (wrap.values[selectedCubeIndex.row] + cubeWidth)) / 2
                    position = leftBound + cursorOffset + cubeWidth

                    cursor.animate(
                        [{ left: position + "px" }], {
                        fill: 'forwards',
                        duration: 0,
                        easing: 'ease',
                    });
                    cursor.style.top = 8 + (cRow.cursorRow * 50) + "px"
                    // Then, let it animate to desired position with align cursor
                    for (let node of wrap.elements[cRow.cursorRow]) { node.dataset.cursorOffset = 0 }
                    cRow.cursorRow--
                } else {
                    // Not enough room to move next row cube into row, activate frontCursor
                    selectedCubeIndex.column = wrap.elements[selectedCubeIndex.row].length
                    frontCursor = true;
                }

            }

            // Default, move selected cube to the left
            selectedCubeIndex.column--

        } else if (selectedCubeIndex.row) {
            // If deleted cube is first of its row, set position accordingly and activate frontCursor
            selectedCubeIndex.row--
            selectedCubeIndex.column = wrap.elements[selectedCubeIndex.row].length - 1
            frontCursor = true;
        } else {
            // Else deleted cube was first cube
            selectedCubeIndex.row = 0
            selectedCubeIndex.column = null
            frontCursor = true;

        }

        let fillData = stopEmptySpace(selectedCubeIndex.row)
        cursorAnimationDuration = fillData[0]
        nodeAnimationDuration = fillData[1]
        if (fillData[2] !== null) frontCursor = fillData[2]

    };
    // console.log(selectedCubeIndex)
    // console.log(wrap.elements)
    // console.log(wrap.widths)
    // console.log(cursorRow)

    alignCursor(cursorAnimationDuration, frontCursor)
    alignNodes(nodeAnimationDuration)

    return true;
}

window.onresize = () => {
    alignNodes()
    alignCursor()
}

function alignNodes(duration = 70, rows = []) {

    let input, wrap
    if (currInput === 'solution-container') {
        input = solutionContainer
        wrap = inputValues.solution.wrap
    } else {
        input = goalContainer
        wrap = inputValues.goal.wrap
    }
    let containerWidth = input.offsetWidth

    for (let node of input.children) {

        if (node.id === 'cursor') continue;
        if (rows.includes(parseInt(node.dataset.row))) return // Future feature for optimization

        let row = parseInt(node.dataset.row)
        let leftBound = (containerWidth - wrap.values[row]) / 2
        let position = leftBound + parseInt(node.dataset.offset) + parseInt(node.dataset.cursorOffset)

        // node.style.top = 2 + (row * 50) + "px"
        node.animate(
            [{ left: position + "px" }], {
            fill: 'forwards',
            duration: duration,
            easing: 'ease',
        });
        node.animate(
            [{ top: (50 * row) + 2 + "px" }], {
            fill: 'forwards',
            duration: duration,
            easing: 'ease',
        });
    };
}

function stopOverflow(startIndex) {

    let input, selectedCubeIndex, wrap, cRow
    if (currInput === 'solution-container') {
        input = solutionContainer
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        wrap = inputValues.solution.wrap
        cRow = inputValues.solution
    } else {
        input = goalContainer
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        wrap = inputValues.goal.wrap
        cRow = inputValues.goal
    }
    let containerWidth = input.offsetWidth
    let cursorAnimationDuration = [0, 30];
    let nodeAnimationDuration = 120;
    let frontCursor = null;

    if (startIndex === undefined) {
        startIndex = 0
        defaultBehavior = true;
    }

    // Have extra cubes move into new row cubes
    for (let i = startIndex; i < wrap.elements.length - 1; i++) {

        let overflowAmount = (wrap.values[i]) - (containerWidth - 10)

        
        if (overflowAmount >= 0 && i === wrap.row) {
            wrap.row++
            changeRows()
        }
        console.log(overflowAmount)
        while (overflowAmount >= 0) {

            let width = wrap.widths[i].pop()
            overflowAmount -= width
            console.log(width)

            let element = wrap.elements[i].pop()
            let newRow = parseInt(element.dataset.row) + 1
            let offset = 0
            wrap.values[i] -= width
            wrap.elements[i + 1].unshift(element)
            wrap.widths[i + 1].unshift(width)

            for (let j = 0; j < wrap.elements[i + 1].length; j++) {
                let element = wrap.elements[i + 1][j]
                element.dataset.offset = parseInt(element.dataset.offset) + width
            }

            element.dataset.row = newRow
            element.dataset.offset = offset
            element.dataset.cursorOffset = 0
            // nodeAnimationDuration = 70;
            wrap.values[i + 1] += width

            // Moves next row if selected cube does not fit onto row
            if (selectedCubeIndex.column === wrap.elements[selectedCubeIndex.row].length - 1) {
                // Ensure this doesn't happen if cursor is on leftmost position of row
                if (selectedCubeIndex.row === cRow.cursorRow) {
                    cRow.cursorRow++
                    cursorAnimationDuration = [100, 100];
                    frontCursor = true
                    for (let node of wrap.elements[cRow.cursorRow]) { node.dataset.cursorOffset = 6 }
                    nodeAnimationDuration = 100
                };
            }

        }
    }

    return [cursorAnimationDuration, nodeAnimationDuration, frontCursor]
}

function stopEmptySpace(startIndex) {

    let input, selectedCubeIndex, wrap, cRow
    if (currInput === 'solution-container') {
        input = solutionContainer
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        wrap = inputValues.solution.wrap
        cRow = inputValues.solution
    } else {
        input = goalContainer
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        wrap = inputValues.goal.wrap
        cRow = inputValues.goal
    }
    let containerWidth = input.offsetWidth
    let cursorAnimationDuration = [0, 70];
    let nodeAnimationDuration = 120;
    let frontCursor = null;

    if (startIndex === undefined) {
        startIndex = 0;
        defaultBehavior = true
    }

    // Have subsequent cubes fill in remaining space
    for (let i = startIndex; i < wrap.elements.length - 1; i++) {

        // Break if no subsequent cubes
        if (!wrap.widths[i + 1][0]) break;

        let remainingSpace = (containerWidth - 10) - (wrap.values[i])
        while (wrap.widths[i + 1][0] < remainingSpace) {

            let width = wrap.widths[i + 1].shift()
            remainingSpace -= width

            let offset = wrap.widths[i].reduce((a, b) => a + b, 0)

            let element = wrap.elements[i + 1].shift()
            wrap.values[i + 1] -= width
            wrap.elements[i].push(element)
            wrap.widths[i].push(width)

            let newRow = parseInt(element.dataset.row) - 1
            element.dataset.row = newRow
            element.dataset.offset = offset
            if (newRow === cRow.cursorRow) {
                element.dataset.cursorOffset = 6
            };
            nodeAnimationDuration = 100;
            wrap.values[i] += width

            for (let j = 0; j < wrap.elements[i + 1].length; j++) {
                wrap.elements[i + 1][j].dataset.offset -= width
            }

            // Moves cursor to previous row when cubes behind cursor get realigned to previous row
            if (selectedCubeIndex.row !== cRow.cursorRow && selectedCubeIndex.column < wrap.elements[i].length) {
                for (let node of wrap.elements[cRow.cursorRow]) { node.dataset.cursorOffset = 0 }
                cRow.cursorRow--
                cursorAnimationDuration = [0, 0];
                frontCursor = false
            }

            // Next row becomes empty
            if (!wrap.elements[i + 1].length) {
                wrap.row--
                changeRows()
            }
        }
    }

    return [cursorAnimationDuration, nodeAnimationDuration, frontCursor]

}

function moveCursor(key) {
    let selectedCubeIndex, wrap, cRow
    if (currInput === 'solution-container') {
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        wrap = inputValues.solution.wrap
        cRow = inputValues.solution
    } else {
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        wrap = inputValues.goal.wrap
        cRow = inputValues.goal
    }
    let frontCursor;
    let cursorAnimationDuration = [0, 100]
    let fixRow = [];

    if (key === 'ArrowLeft') {
        // Left Arrow

        if (selectedCubeIndex.row !== cRow.cursorRow) {
            // Move cursor up a row
            cursorAnimationDuration = [0, 0];
            fixRow.push(cRow.cursorRow)
            cRow.cursorRow--
        }

        if (selectedCubeIndex.column > 0) {
            // Default, move left
            selectedCubeIndex.column--
        } else if (selectedCubeIndex.row) {
            // If not on first row, to leftmost spot of current row
            selectedCubeIndex.row--
            selectedCubeIndex.column = wrap.elements[selectedCubeIndex.row].length - 1
            frontCursor = true
        } else {
            // If on first row, move to leftmost position
            selectedCubeIndex.row = 0
            selectedCubeIndex.column = null
            frontCursor = true
        };

    } else {
        // Right arrow

        if (selectedCubeIndex.column === null) {
            // If cursor is in leftmost position, move to the right of first cube if it exists
            if (wrap.elements[0].length) {
                selectedCubeIndex.column = 0
            }
        } else if (selectedCubeIndex.column + 2 < wrap.elements[selectedCubeIndex.row].length) {
            // Default, move right
            selectedCubeIndex.column++
        } else if (wrap.elements[selectedCubeIndex.row + 1].length) {
            // Move onto next row if available
            if (selectedCubeIndex.column + 2 === wrap.elements[selectedCubeIndex.row].length) {
                // If cursor reaches position before rightmost position, move onto leftmost spot of next row
                // Selected cube will still be rightmost cube of current row
                selectedCubeIndex.column++
                fixRow.push(cRow.cursorRow)
                cRow.cursorRow++
                cursorAnimationDuration = [0, 0];
                frontCursor = true;
            } else {
                // If cursor is already on next row, set selected cube to be first cube on next row
                selectedCubeIndex.row++
                selectedCubeIndex.column = 0
            }
        } else if (selectedCubeIndex.column + 1 < wrap.elements[selectedCubeIndex.row].length) {
            // If on last row, move to rightmost spot of last cube
            selectedCubeIndex.column++
        };

    };

    alignCursor(cursorAnimationDuration, frontCursor)

    for (let row of fixRow) {
        for (let node of wrap.elements[row]) {
            node.dataset.cursorOffset = 0
        }
    }

    if (frontCursor) {
        for (let node of wrap.elements[cRow.cursorRow]) {
            node.dataset.cursorOffset = 6
        }
    } else {
        for (let i = 0; i < wrap.elements[selectedCubeIndex.row].length; i++) {
            if (i <= selectedCubeIndex.column) {
                wrap.elements[selectedCubeIndex.row][i].dataset.cursorOffset = 0;
            } else {
                wrap.elements[selectedCubeIndex.row][i].dataset.cursorOffset = 6;
            }
        }
    }

    alignNodes(120)

    console.log(selectedCubeIndex)

}

function alignCursor(duration = [0, 30], frontCursor) {

    let input, selectedCubeIndex, wrap, cursorRow
    if (currInput === 'solution-container') {
        input = solutionContainer
        selectedCubeIndex = inputValues.solution.selectedCubeIndex
        wrap = inputValues.solution.wrap
        cursorRow = inputValues.solution.cursorRow
    } else {
        input = goalContainer
        selectedCubeIndex = inputValues.goal.selectedCubeIndex
        wrap = inputValues.goal.wrap
        cursorRow = inputValues.goal.cursorRow
    }
    let containerWidth = input.offsetWidth

    if (frontCursor) {
        let cursorLeftBound = (containerWidth - wrap.values[cursorRow]) / 2
        let cursorPosition = cursorLeftBound + 2
        cursor.animate(
            [{ top: 8 + cursorRow * 50 + "px" }], {
            fill: 'forwards',
            duration: duration[0],
            easing: 'ease',
        });
        cursor.animate(
            [{ left: cursorPosition + "px" }], {
            fill: 'forwards',
            duration: duration[1],
            easing: 'ease',
        });

        cursor.classList.remove('blink-animation')
        void cursor.offsetWidth;
        cursor.classList.add('blink-animation')
        return;
    }

    if (getSelectedCube() === null) {
        let cursorPosition = (containerWidth / 2) + 2
        cursor.animate(
            [{ top: 8 + "px" }], {
            fill: 'forwards',
            duration: duration[1],
            easing: 'ease',
        });
        cursor.animate(
            [{ left: cursorPosition + "px" }], {
            fill: 'forwards',
            duration: duration[1],
            easing: 'ease',
        });

        cursor.classList.remove('blink-animation')
        void cursor.offsetWidth;
        cursor.classList.add('blink-animation')
        return;
    }

    let cursorLeftBound = (containerWidth - wrap.values[selectedCubeIndex.row]) / 2
    let cursorOffset = parseInt(getSelectedCube().dataset.offset) + 2
    let cubeWidth = getSelectedCube('width')
    let cursorPosition = cursorLeftBound + cursorOffset + cubeWidth

    cursor.animate(
        [{ top: 8 + (selectedCubeIndex.row * 50) + "px" }], {
        fill: 'forwards',
        duration: duration[0],
        easing: 'ease',
    });
    cursor.animate(
        [{ left: cursorPosition + "px" }], {
        fill: 'forwards',
        duration: duration[1],
        easing: 'ease',
    });

    // Reset cursor animation
    cursor.classList.remove('blink-animation')
    void cursor.offsetWidth;
    cursor.classList.add('blink-animation')
}


document.onkeydown = function (keypress) {
    if (keypress.key !== 'o') return
    console.log(solutionContainer.childElementCount)
    // checkInputWidth2(null)
};

function changeRows() {

    let element, wrap
    if (currInput === 'solution-container') {
        element = solutionContainer
        wrap = inputValues.solution.wrap
    } else {
        element = goalContainer
        wrap = inputValues.goal.wrap
    }
    let maxRows = Math.max(inputValues.goal.wrap.row, inputValues.solution.wrap.row)

    let elementHeight, parentHeight, boardHeight;
    elementHeight = 50 + 50 * wrap.row + "px"
    parentHeight = 100 + 50 * wrap.row + "px"
    boardHeight = 450 + 50 * maxRows + "px"
    element.animate(
        [{ height: elementHeight }], {
        fill: 'forwards',
        duration: 100,
        easing: 'ease',
    });
    element.parentNode.animate(
        [{ height: parentHeight }], {
        fill: 'forwards',
        duration: 100,
        easing: 'ease',
    });
    boardContainer.animate(
        [{ height: boardHeight }], {
        fill: 'forwards',
        duration: 100,
        easing: 'ease',
    });
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

const selectorBackground = document.createElement('div')
selectorBackground.id = 'selector-background'
selectorBackground.addEventListener('click', hideSelector)
document.body.append(selectorBackground)

function toggleCubeOptions(e) {

    e.stopPropagation()
    if (document.querySelector('.selector-container')) {
        hideSelector(e)
        return;
    }

    function toggleCubeToggles(e) { // Setting cube orientation
        if (this.classList.contains('inactive-toggle')) return;

        const cube = this.parentElement.parentElement.parentElement
        this.classList.toggle('active')
        cube.classList.toggle(this.dataset.type)

        if (this.dataset.type === 'exponent-toggle') {
            const svg = cube.querySelector('.svg')
            const cubeContent = cube.querySelector('.cube-content')

            // Exponent Animation
            if (this.classList.contains('active')) {
                // Add exponent animation

                svg.animate(
                    [{ left: '6px' }], {
                    fill: "forwards",
                    duration: 270,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });

                const exponentSvg = createSvg('exponent')
                exponentSvg.classList.add('exponent-toggle-svg')
                cubeContent.append(exponentSvg)
                exponentSvg.animate(
                    [{ opacity: 1 }], {
                    fill: "forwards",
                    duration: 270,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                
            } else {
                // Remove exponent animation

                svg.animate(
                    [{ left: 0 }], {
                    fill: "forwards",
                    duration: 270,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                
                const exponentSvg = cube.querySelector('.exponent-toggle-svg')
                exponentSvg.animate(
                    [{ opacity: 0 }], {
                    fill: "forwards",
                    duration: 270,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                setTimeout(() => {exponentSvg.remove()}, 270)

            }
        }
    }

    function toggleCubeColor() { // Switching color of cube
        
        if (this.classList.contains('active')) return;
        const oldActiveColor = document.querySelector('.color-picker.active')
        const newActiveColor = document.querySelector('.color-picker:not(.active)')
        const cube = this.parentElement.parentElement.parentElement
        let cubeType = cube.dataset.restraint
        let symbol = translateName(cube.classList[0])
        
        let reqCol = inputValues.required
        let resCol = inputValues.resources
        // Free up old color from used arrays
        switch (oldActiveColor.dataset.color) {
            case "red": colorIndex = 0; break;
            case "blue": colorIndex = 1; break;
            case "green": colorIndex = 2; break;
            case "black": colorIndex = 3; break;
            default: return;
        }

        if (reqCol.used[colorIndex].includes(symbol) && cubeType === 'required') {
            // If cube was required, move it from used array to available array

            reqCol.used[colorIndex] = deleteFirstArrItem(reqCol.used[colorIndex], symbol)
            reqCol.available[colorIndex].push(symbol)
        } else if (resCol.used[colorIndex].includes(symbol) && cubeType === 'resource') {
            // If cube was resources, move it from used array to available array

            resCol.used[colorIndex] = deleteFirstArrItem(resCol.used[colorIndex], symbol)
            resCol.available[colorIndex].push(symbol)
        }

        // Set new color
        switch (newActiveColor.dataset.color) {
            case "red": colorIndex = 0; break;
            case "blue": colorIndex = 1; break;
            case "green": colorIndex = 2; break;
            case "black": colorIndex = 3; break;
            default: return;
        }

        if (reqCol.available[colorIndex].includes(symbol)) {
            // If required colors contains cube and color, move it from available array to used array
            // Then, set its color
            reqCol.available[colorIndex] = deleteFirstArrItem(reqCol.available[colorIndex], symbol)
            reqCol.used[colorIndex].push(symbol)
            cube.dataset.restraint = 'required'
        } else if (resCol.available[colorIndex].includes(symbol)) {
            // If resources colors contains cube and color, move it from available array to used array
            // Then, set its color
            resCol.available[colorIndex] = deleteFirstArrItem(resCol.available[colorIndex], symbol)
            resCol.used[colorIndex].push(symbol)
            cube.dataset.restraint = 'resource'
        } else {
            // If cube and color was not in required nor resources
            cube.dataset.restraint = 'unavailable'
        }
        
        // Reset datasets and classlist
        cube.classList.remove(oldActiveColor.dataset.color)
        cube.classList.add(newActiveColor.dataset.color)
        cube.dataset.color = newActiveColor.dataset.color

        oldActiveColor.classList.remove('active')
        newActiveColor.classList.add('active')

        const toggle = document.querySelector('.pick-color .toggle')
        if (newActiveColor.dataset.color === puzzleData.variations.get('exponent')) {
            let numbersArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']
            if (puzzleData.variations.get('base') >= 11) numbersArr.push('exponent')
            if (puzzleData.variations.get('base') >= 12) numbersArr.push('square-root')
            if (!cube.dataset.powersOfBase && numbersArr.includes(cube.dataset.type)) {
                toggle.classList.remove('inactive-toggle')
            }
        } else {
            toggle.classList.add('inactive-toggle')
            toggle.classList.remove('active')

            if (cube.classList.contains('exponent-toggle')) {
                // Remove exponent animation

                cube.classList.remove('exponent-toggle')
                const svg = cube.querySelector('.svg')
                svg.animate(
                    [{ bottom: 0, left: 0 }], {
                    fill: "forwards",
                    duration: 270,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });

                const exponentSvg = cube.querySelector('.exponent-toggle-svg')
                exponentSvg.animate(
                    [{ opacity: 0 }], {
                    fill: "forwards",
                    duration: 270,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                setTimeout(() => {exponentSvg.remove()}, 270)

            }
        }
        recalibrateCubeRestraints()
    }

    const selectorContainer = document.createElement('div')
    selectorContainer.classList.add('selector-container')
    let containerHeight = 0
    let containerWidth = 190

    let type = this.dataset.type
    this.append(selectorContainer)

    // Powers of the Base
    if (puzzleData.variations.get('powersOfBase') && (type === 'one') && this.classList.contains('solution-cube')) {
        const powersOfBaseContainer = document.createElement('div')
        powersOfBaseContainer.id = ('selector-input')

        const powersOfBasePrefix = document.createElement('div')
        powersOfBasePrefix.id = 'powers-of-base-prefix'
        let base = puzzleData.variations.get('base') ?? 10
        powersOfBasePrefix.innerText = `${base}^`
        const powersOfBaseInput = document.createElement('input')
        powersOfBaseInput.id = 'powers-of-base-input'
        if (this.dataset.powersOfBase) {
            powersOfBaseInput.value = this.dataset.powersOfBase
        }

        setInputFilter(powersOfBaseInput, function(value) {return /[^0-9+\-x*\^/()]/.test(value)})

        powersOfBaseContainer.append(powersOfBasePrefix)
        powersOfBaseContainer.append(powersOfBaseInput)

        containerHeight += 40
        selectorContainer.append(powersOfBaseContainer)
    }

    // Wild
    function setWildCube(e) {
        e.stopPropagation()
        let previousWild = inputValues.wildCube ?? staticWild
        let currWild = e.target.dataset.type
        inputValues.wildCube = currWild

        const wildCubes = document.querySelectorAll('.wild')
        for (const cube of wildCubes) {
            cube.dataset.type = currWild

            const svg = cube.querySelector('.svg')
            const newSvg = createSvg(currWild)
            newSvg.classList.add('svg')
            svg.animate(
                [{ opacity: '0' }], {
                    fill: 'forwards',
                    duration: 220,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
            });
        
            const oldWildStar = cube.querySelector('.wild-star')
            if (oldWildStar) {
                oldWildStar.animate(
                    [{ opacity: '0' }], {
                        fill: 'forwards',
                        duration: 220,
                        easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
            }

            const wildStar = document.createElement('div')
            wildStar.classList.add('wild-star')
            wildStar.innerText = '*'
            switch (currWild) {  // Override default position if it doesn't fit
                case 'one': 
                    wildStar.style.left = '24px'; break;
                case 'five':
                case 'seven':
                // case 'add':
                case 'subtract':
                // case 'exponent':
                case 'multiply':
                // case 'divide':
                    wildStar.style.left = '27px'; break;
                case 'square-root':
                    wildStar.style.left = '30px'; break;
            }
            
            setTimeout(() => {
                svg.remove()
                if (oldWildStar) oldWildStar.remove()
                cube.append(newSvg)
                newSvg.style.opacity = '0'
                newSvg.animate(
                    [{ opacity: '1' }], {
                        fill: 'forwards',
                        duration: 220,
                        easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                if (currWild !== staticWild) {
                    cube.append(wildStar)
                    wildStar.style.opacity = '0'
                    wildStar.animate(
                        [{ opacity: '1' }], {
                            fill: 'forwards',
                            duration: 220,
                            easing: 'cubic-bezier(.13,.94,.37,.99)',
                    });
                    cube.classList.remove('no-wild-translate')
                } else {
                    cube.classList.add('no-wild-translate')
                }
                cube.classList.add(`wild-${currWild}`)
                cube.classList.remove(`wild-${previousWild}`)
            }, 220)

            // Remove all active toggles and options (exponent, sideways)

            // Powers of base
            if (cube.classList.contains('powers-of-base')) {
                cube.dataset.powersOfBase = ''
                const powersOfBaseInput = cube.querySelector('#powers-of-base-input')
                if (powersOfBaseInput) powersOfBaseInput.value = ''
                const exponentDisplay = cube.querySelector('.pob-exponent')
                const baseSvg = cube.querySelector('.pob-base-svg')
                baseSvg.animate(
                    [{ opacity: '0' }], {
                        fill: 'forwards',
                        duration: 220,
                        easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                exponentDisplay.animate(
                    [{ opacity: '0' }], {
                        fill: 'forwards',
                        duration: 220,
                        easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                setTimeout(() => {
                    cube.classList.remove('powers-of-base')
                    exponentDisplay.remove()
                    baseSvg.remove()
                }, 220)
            }
            // Exponent
            if (cube.classList.contains('exponent-toggle')) {
                const exponentSvg = cube.querySelector('.exponent-toggle-svg')
                exponentSvg.animate(
                    [{ opacity: 0 }], {
                    fill: "forwards",
                    duration: 220,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                setTimeout(() => {
                    exponentSvg.remove();
                    cube.classList.remove('exponent-toggle')
                }, 220)
            }
            // Upsidedown, Sideways
            if (cube.classList.contains('upsidedown')) {
                cube.classList.remove('upsidedown')
            }
            if (cube.classList.contains('sideways')) {
                cube.classList.remove('sideways')
            }
        }

        selectorBackground.click()
    }
    if (staticWild === type || staticWild === this.classList[0]) {

        const wildContainer = document.createElement('div')
        wildContainer.id = 'wild-container'

        let symbolsArray = 
        [
            'zero', 'one', 'two', 'three', 'four', 'add', 'subtract', 'exponent',
            'five', 'six', 'seven', 'eight', 'nine', 'multiply', 'divide', 'square-root',
        ]
        for (let symbol of symbolsArray) {

            const button = document.createElement('div')
            let base = puzzleData.variations.get('base') ?? 10
            let textColor = '#000000'
            if (translateName(symbol) >= base) {
                button.classList.add('inactive')
                button.addEventListener('click', () => {notify('Invalid Number!', {duration: 1000, width: '140px'})})
                textColor = '#bbbbc8'
            } else {
                button.addEventListener('click', setWildCube)
            }
            
            const svg = createSvg(symbol, {color: textColor, textWidth: '0.22'})
            const hoverDiv = document.createElement('div')
            
            button.classList.add('wild-button')
            hoverDiv.classList.add('hover-div')
            hoverDiv.dataset.type = symbol

            button.append(svg)
            button.append(hoverDiv)
            wildContainer.append(button)
        }

        // containerWidth += 90
        containerWidth += 60
        containerHeight += 78
        selectorContainer.append(wildContainer)

    }
    
    // Toggle Settings (Exponent, Upsidedown, Sideways)
    const toggle = document.createElement('div')
    const toggleSwitch = document.createElement('div')
    toggle.classList.add('toggle')
    toggleSwitch.classList.add('toggle-switch')
    toggle.append(toggleSwitch)

    // Zero is in numbers array for the sake of exponent and is removed later
    let numbersArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']
    if (puzzleData.variations.get('base') >= 11) numbersArr.push('exponent')
    if (puzzleData.variations.get('base') >= 12) numbersArr.push('square-root')

    // Exponent
    let exponent = puzzleData.variations.get('exponent')
    if (exponent && (numbersArr.includes(type) || this.classList[0] === staticWild)) {

        let symbol = translateName(this.classList[0])
        let colorsArr = getPotentialColors(symbol)

        if (colorsArr.includes(exponent)) {
            // Add exponent switch 
            const exponentSetting = document.createElement('div')
            exponentSetting.classList.add('selector-toggle')
            const exponentLabel = document.createElement('p')
            exponentLabel.innerText = 'Exponent'
            exponentLabel.id = 'exponent-label'

            exponentSetting.append(exponentLabel)
    
            const exponentToggle = toggle.cloneNode('deep')
            exponentToggle.dataset.type = 'exponent-toggle'
            exponentToggle.addEventListener('click', toggleCubeToggles)
            if (this.classList.contains('exponent-toggle')) exponentToggle.classList.add('active')

            if (this.dataset.color !== puzzleData.variations.get('exponent')
                || this.dataset.powersOfBase
                || !numbersArr.includes(type)) {
                exponentToggle.classList.add('inactive-toggle')
            }

            exponentSetting.append(exponentToggle)

            if (colorsArr.length > 1 && this.classList.contains('solution-cube')) {
                exponentSetting.classList.add('pick-color')
                containerHeight += 4

                const colorPicker1 = document.createElement('div')
                const colorPicker2 = document.createElement('div')
                colorPicker1.classList.add('color-picker')
                colorPicker2.classList.add('color-picker')
                colorPicker1.addEventListener('click', toggleCubeColor)
                colorPicker2.addEventListener('click', toggleCubeColor)

                colorPicker1.classList.add(colorsArr[0])
                colorPicker1.dataset.color = colorsArr[0]
                colorPicker2.classList.add(colorsArr[1])
                colorPicker2.dataset.color = colorsArr[1]

                if (this.dataset.color === colorsArr[0]) {
                    colorPicker1.classList.add('active')
                } else if (this.dataset.color === colorsArr[1]) {
                    colorPicker2.classList.add('active')
                }

                exponentSetting.append(colorPicker1)
                exponentSetting.append(colorPicker2)
            }
    
            containerHeight += 50
            selectorContainer.append(exponentSetting)
        }
    }

    // Remove zero from numbersArray
    numbersArr.splice(9, 1)

    // Upsidedown
    if (numbersArr.includes(type) && this.classList.contains('solution-cube')) {
        const upsidedownSetting = document.createElement('div')
        upsidedownSetting.classList.add('selector-toggle')
        upsidedownSetting.innerText = "Upsidedown"

        const upsideDownToggle = toggle.cloneNode('deep')
        upsideDownToggle.dataset.type = 'upsidedown'
        upsideDownToggle.addEventListener('click', toggleCubeToggles)
        if (this.classList.contains('upsidedown')) upsideDownToggle.classList.add('active')
        upsidedownSetting.append(upsideDownToggle)

        containerHeight += 42
        selectorContainer.append(upsidedownSetting)
    }
    
    // Sideways
    let sidewaysArray = clone(numbersArr)
    if (puzzleData.variations.get('log')) sidewaysArray.push('divide')
    if (puzzleData.variations.get('imaginary')) sidewaysArray.push('subtract')
    if (sidewaysArray.includes(type) && this.classList.contains('solution-cube')) {
        const sidewaysSetting = document.createElement('div')
        sidewaysSetting.classList.add('selector-toggle')
        sidewaysSetting.innerText = "Sideways"

        const sidewaysToggle = toggle.cloneNode('deep')
        sidewaysToggle.dataset.type = 'sideways'
        sidewaysToggle.addEventListener('click', toggleCubeToggles)
        if (this.classList.contains('sideways')) sidewaysToggle.classList.add('active')
        sidewaysSetting.append(sidewaysToggle)
        selectorContainer.append(sidewaysSetting)

        containerHeight += 42
    }
    
    selectorContainer.addEventListener('click', stopPropogation)

    selectorContainer.style.height = containerHeight + "px"
    selectorContainer.style.width = containerWidth + "px"
    this.classList.toggle('active')
    const activeContainer = this.parentElement
    activeContainer.classList.toggle('selector-active')
    selectorContainer.classList.toggle('shown')
    selectorBackground.classList.toggle('shown')

    header.classList.toggle('dark')
    keyboardContainer.classList.toggle('dark')
    variationsArrowBox.parentElement.classList.toggle('dark') // Remove
}

function hideSelector(e) {

    e.stopPropagation()
    const selectorContainer = document.querySelector('.selector-container')
    if (!selectorContainer) return;
    if (!selectorContainer.classList.contains('shown')) return;

    const activeCube = document.querySelector('.cube.active')
    
    // Poers of base input
    const powersOfBaseInput = activeCube.querySelector('#powers-of-base-input')
    if (powersOfBaseInput) {

        let powersOfBaseValue = powersOfBaseInput.value

        if (powersOfBaseValue) {

            // Remove exponent if it is there
            if (activeCube.classList.contains('exponent-toggle')) {
                const exponentToggle = activeCube.querySelector('.pick-color .toggle')
                exponentToggle.click()
            }
            // Perform powers of base animation

            let exponentString
            if (powersOfBaseValue.length > 2) {
                exponentString = powersOfBaseValue.slice(0, 2) + ".."
            } else {
                exponentString = powersOfBaseValue
            }

            if (!activeCube.classList.contains('powers-of-base')) {
                activeCube.classList.add('powers-of-base')

                const mainSvg = activeCube.querySelector('.svg')
                mainSvg.animate(
                    [
                        { opacity: 0 , offset: 0.7, },
                        { opacity: 0 , bottom: '-5px', left: '-4px' },
                    ], {
                    fill: "forwards",
                    duration: 330,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });

                let base = puzzleData.variations.get('base') ?? 10
                const baseSvg = createSvg('custom', {customText: base})
                baseSvg.classList.add('pob-base-svg')
                let startPosition = base >= 10 ? ['-1px', '5px'] : ['0', '0']
                let endPosition = base >= 10 ? ['-3px', '1px'] : ['2px', '1px']
                if (base >= 10) baseSvg.classList.add('small')
                baseSvg.animate(
                    [
                        { left: startPosition[0] , bottom: startPosition[1]},
                        { opacity: 0 , offset: 0.5, },
                        { left: endPosition[0], bottom: endPosition[1] , opacity: 1 },
                    ], {
                    fill: "forwards",
                    duration: 330,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                
                activeCube.append(baseSvg)
                
                const exponentDisplay = document.createElement('div')
                exponentDisplay.classList.add('pob-exponent')
                
                activeCube.append(exponentDisplay)
                
                exponentDisplay.innerText = exponentString
                exponentDisplay.animate(
                    [
                        { opacity: 0 , offset: 0.5, },
                        { opacity: 1 },
                    ], {
                    fill: "forwards",
                    duration: 330,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
            } else if (powersOfBaseValue !== activeCube.dataset.powersOfBase) {
                const exponentDisplay = activeCube.querySelector('.pob-exponent')
                exponentDisplay.animate(
                    [
                        { opacity: 1 },
                        { opacity: 0 },
                    ], {
                    fill: "forwards",
                    duration: 150,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });

                setTimeout(() => {
                    exponentDisplay.innerText = exponentString
                    exponentDisplay.animate(
                        [
                            { opacity: 0 },
                            { opacity: 1 },
                        ], {
                        fill: "forwards",
                        duration: 150,
                        easing: 'cubic-bezier(.13,.94,.37,.99)',
                    });
                }, 150)
            }
            
        } else {

            // Remove powers of base animation
            if (activeCube.classList.contains('powers-of-base')) {
                activeCube.classList.remove('powers-of-base')

                const mainSvg = activeCube.querySelector('.svg')
                mainSvg.animate(
                    [
                        { opacity: 0 , offset: 0.5, },
                        { opacity: 1 , bottom: 0, left: 0 },
                    ], {
                    fill: "forwards",
                    duration: 330,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });

                const baseSvg = activeCube.querySelector('.pob-base-svg')

                let base = puzzleData.variations.get('base') ?? 10
                let startPosition = base >= 10 ? ['-1px', '5px'] : ['0', '0']
                let endPosition = base >= 10 ? ['-3px', '1px'] : ['2px', '1px']
                baseSvg.animate(
                    [
                        { left: endPosition[0] , bottom: endPosition[1] , opacity: 1 },
                        { opacity: 0 , offset: 0.7, },
                        { left: startPosition[0] , bottom: startPosition[1] , opacity: 0 },
                    ], {
                    fill: "forwards",
                    duration: 330,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                setTimeout(() => {baseSvg.remove()}, 330)

            }

            const exponentDisplay = activeCube.querySelector('.pob-exponent')
            if (exponentDisplay) {
                exponentDisplay.animate(
                    [
                        { opacity: 1 },
                        { opacity: 0 , offset: 0.7, },
                        { opacity: 0 },
                    ], {
                    fill: "forwards",
                    duration: 330,
                    easing: 'cubic-bezier(.13,.94,.37,.99)',
                });
                setTimeout(() => {exponentDisplay.remove()}, 330)
            }

        }

        activeCube.dataset.powersOfBase = powersOfBaseValue

    }

    
    // Hover detection mechanism for solution-container backgorund color
    const activeContainer = activeCube.parentElement
    let element = activeContainer, minX = 0, minY = 0;
    while (true) {
        minX += element.offsetLeft;
        minY += element.offsetTop;
        if (element.offsetParent === null) break;
        element = element.offsetParent;
    }
    maxX = minX + activeContainer.offsetWidth
    maxY = minY + activeContainer.offsetHeight

    if (e.clientX > minX && e.clientY > minY && e.clientX < maxX && e.clientY < maxY) {
        activeContainer.classList.add('hover')
    }

    selectorContainer.addEventListener('transitionend', function () {
        this.remove()
        activeContainer.classList.remove('hover')
        activeCube.classList.remove('active')
    })

    // Recalibrate classlists
    activeContainer.classList.remove('selector-active')
    selectorContainer.classList.remove('shown')
    selectorBackground.classList.remove('shown')
    header.classList.remove('dark')
    keyboardContainer.classList.remove('dark')
    variationsArrowBox.parentElement.classList.remove('dark') // REMOVE
};


// Settings initiation

const settings = {
    headerText: 'Settings',
    genNewPuzzle: false,
    forceVariations: []
}
const settingsContainer = document.createElement('settings-container')
settingsContainer.id = 'settings-container'
header.append(settingsContainer)
settingsContainer.addEventListener('click', (e) => e.stopPropagation())


const settingsHeader = document.createElement('div')
settingsHeader.id = 'settings-header'
settingsContainer.append(settingsHeader)

const settingsNavButton = document.createElement('settings-nav-button')
settingsNavButton.id = 'settings-nav-button'
settingsHeader.append(settingsNavButton)
settingsNavButton.addEventListener('click', () => {
    if (settings.headerText === 'Settings') {
        menuBackground.click()
        return;
    }
    settingsNodesContainer.classList.remove('page-2')
    settingsHeaderText.classList.add('fade')
    settingsNavButton.classList.add('fade')
    settings.headerText = 'Settings'
})
settingsNavButton.addEventListener('transitionend', () => {
    settingsNavButton.classList.remove('fade')
})
const settingsHeaderText = document.createElement('h4')
settingsHeaderText.innerText = 'Settings'
settingsHeader.append(settingsHeaderText)
settingsHeaderText.addEventListener('transitionend', () => {
    settingsHeaderText.innerText = settings.headerText;
    settingsHeaderText.classList.remove('fade')
})

const settingsOverflowContainer = document.createElement('div')
settingsOverflowContainer.id = 'settings-overflow-container'
settingsContainer.append(settingsOverflowContainer)

const settingsNodesContainer = document.createElement('div')
settingsNodesContainer.id = 'settings-nodes-container'
settingsOverflowContainer.append(settingsNodesContainer)

// Create menu background
const menuBackground = document.createElement('div')
menuBackground.id = 'menu-background'
document.body.append(menuBackground)
menuBackground.addEventListener('click', (e) => {
    if (document.querySelector('.selector-container')) {
        hideSelector(e)
        return;
    }
    if (settingsContainer.classList.contains('shown')) {
        let newVariationsLength = variationCount.value
        if (parseFloat(newVariationsLength) !== puzzleParameters.setVariationsLength) {
            settings.genNewPuzzle = true;
            puzzleParameters.setVariationsLength = parseFloat(newVariationsLength)
        }
        if (!compareArr(settings.forceVariations, puzzleParameters.setVariations)) {
            settings.genNewPuzzle = true;
            puzzleParameters.setVariations = clone(settings.forceVariations)
        }
        if (settings.genNewPuzzle) {
            queuedPuzzleData = null;
            newPuzzle()
            settings.genNewPuzzle = false
        }
    }

    settingsContainer.classList.remove('shown')
    menuBackground.classList.remove('shown')
    header.classList.remove('dark')
    if (settingsNodesContainer.classList.contains('page-2')) {
        setTimeout(() => {
            settingsNodesContainer.classList.remove('page-2')
            settingsHeaderText.innerText = 'Settings'
        }, 150)
    }
    variationsArrowBox.parentElement.classList.remove('dark') // REMOVE
})

settingsIcon.addEventListener('click', (e) => {
    if (document.querySelector('.selector-container')) {
        hideSelector(e)
        return;
    }
    e.stopPropagation()
    hideKeyboard()
    if (!settingsContainer.classList.contains('shown')) {
        settingsContainer.classList.add('shown')
        menuBackground.classList.add('shown')
        variationsArrowBox.parentElement.classList.add('dark') // Remove
        header.classList.add('dark')
        if (!settingsContainer.classList.contains('shown') && settingsNodesContainer.classList.contains('page-2')) {
            setTimeout(() => {
                settingsNodesContainer.classList.remove('page-2')
                settingsHeaderText.innerText = 'Settings'
            }, 150)
        }
    } else {
        menuBackground.click()
    }
});
function switchPage(activePage, title) {
    settingsNodesContainer.classList.add('page-2')
    settingsHeaderText.classList.add('fade')
    settingsNavButton.classList.add('fade')
    for (let node of document.querySelectorAll('.settings-page-2.active')) node.classList.remove('active')
    activePage.classList.add('active')
    settings.headerText = title
}
function createCategory(buttonID, pageID, title) {
    const button = document.createElement('li')
    button.id = buttonID
    button.classList.add('settings-category')
    button.innerText = title

    const page = document.querySelector(pageID)
    button.addEventListener('click', () => {switchPage(page, title)})
    return button
}
function createToggle(label, action) {

    const toggleContainer = document.createElement('li')
    toggleContainer.classList.add('settings-toggle')
    const toggleLabel = document.createElement('p')
    toggleLabel.innerText = label
    toggleContainer.append(toggleLabel)

    const toggle = document.createElement('div')
    toggle.classList.add('toggle')
    toggleContainer.append(toggle)
    const toggleSwitch = document.createElement('div')
    toggleSwitch.classList.add('toggle-switch')
    toggle.append(toggleSwitch)

    toggle.addEventListener('click', () => action(toggle))

    return toggleContainer

    // <li class="settings-toggle">
    //     <p>Force Symmetric Difference</p>
    //     <div id="force-symmetric-difference" class="toggle" data-type="force-symmetric-difference">
    //         <div class="toggle-switch"></div>
    //     </div>
    // </li>

}
function createCounter(label, id, action, parameters = {}) {
    const counter = document.createElement('li');
    counter.classList.add('settings-counter');
    const counterLabel = document.createElement('label');
    counterLabel.innerText = label;
    counterLabel.for = id;
    const counterInput = document.createElement('input');
    counterInput.id = id;

    setInputFilter(counterInput, function(value) {return parameters.regex.test(value)});
    counterInput.value = parameters.value;
    counterInput.maxValue = parameters.maxValue;

    const arrowUpDiv = document.createElement('div');
    const arrowDownDiv = document.createElement('div');
    const arrowUp = document.createElement('div');
    const arrowDown = document.createElement('div');
    arrowUpDiv.classList.add('container-arrow-up');
    arrowDownDiv.classList.add('container-arrow-down');
    arrowUp.classList.add('counter-arrow-up');
    arrowDown.classList.add('counter-arrow-down');
    arrowUpDiv.append(arrowUp);
    arrowDownDiv.append(arrowDown);
    arrowUpDiv.addEventListener('click', () => action(1));
    arrowDownDiv.addEventListener('click', () => action(-1));

    counter.append(counterLabel, counterInput, arrowUpDiv, arrowDownDiv);
    return counter;
}
function createCheckbox(text, type) {
    const checkBox = document.createElement('li');
    checkBox.classList.add('settings-checkbox');
    checkBox.innerHTML = text;
    checkBox.addEventListener('click', () => forceVariation(checkBox, type));
    return checkBox;
}

// Settings pages
(function createPages() {
    
    
    // Variations Page
    const settingsVariations = document.createElement('div')
    settingsVariations.id = 'settings-variations'
    settingsVariations.classList.add('settings-page-2')
    const scrollContainer = document.createElement('div')
    scrollContainer.classList.add('scroll-container')
    settingsVariations.append(scrollContainer)
    settingsNodesContainer.append(settingsVariations)

    
    const variationCounterList = document.createElement('ul')
    scrollContainer.append(variationCounterList)
    const variationsCounter = createCounter('Number of Variations:', 'variation-count', function(increment) {
        let newVal = parseFloat(variationCount.value) + increment
        let activeCount = document.querySelectorAll('.settings-checkbox.active').length
        if (newVal > 6 || newVal < activeCount) return;
        variationCount.value = newVal
    },
    {regex: /[^0-6]/, value: 6, maxLength: 1})
    variationCounterList.append(variationsCounter)

    const variationLabel = document.createElement('div')
    variationLabel.classList.add('settings-label')
    variationLabel.innerText = 'Choose variations to always appear'
    scrollContainer.append(variationLabel)

    const forceVariationsList = document.createElement('ul')
    forceVariationsList.classList.add('force-variations')
    scrollContainer.append(forceVariationsList)

    let variationsArr = [['wild', 'Wild'], ['powersOfBase', 'Powers of the Base'], ['base', 'Base&nbsp<i>M</i>'], 
    ['multipleOf', 'Multiple of&nbsp<i>K</i>'], ['multipleOperations', 'Multiple Operations'], ['factorial', 'Factorial'], 
    ['numberOfFactors', 'Number of Factors'], ['exponent', 'Exponent'], ['imaginary', 'Imaginary'], ['decimal', 'Decimal'], ['log', 'Log']]
    for (let variation of variationsArr) {
        const checkboxNode = createCheckbox(variation[1], variation[0])
        forceVariationsList.append(checkboxNode)
    }
    
    // Main Page
    const mainPage = document.createElement('ul')
    mainPage.classList.add('settings-page-1')

    const pages = [
        // ['#card-view-button', '#settings-card-view', 'Card View (Testing)'],
        ['#variations-button', '#settings-variations', 'Variations'],
    ]
    for (let page of pages) {
        const newCatagory = createCategory(...page)
        console.log(newCatagory)
        mainPage.append(newCatagory)
    }
    settingsNodesContainer.append(mainPage)

    const consoleToggle = createToggle('Show Console (Testing)', (element) => {
        element.classList.toggle('active')
        const mobileConsole = document.querySelector('.mobile-console')
        if (mobileConsole) mobileConsole.classList.toggle('shown')
    })
    mainPage.append(consoleToggle)
    
})();

const variationCount = document.querySelector('#variation-count')

function forceVariation(element, variation) {
    if (!element.classList.contains('active') && settings.forceVariations.length >= variationCount.value) return;
    if (!element.classList.contains('active')) {
        settings.forceVariations.push(variation)
    } else {
        settings.forceVariations = deleteFirstArrItem(settings.forceVariations, variation)
    }
    element.classList.toggle('active')
}






function stopPropogation(e) { e.stopPropagation() }
// Answer Submission
submitButton.addEventListener('click', submitInput);
const newResult = document.createElement('div')
const resultBackground = document.createElement('div')
newResult.id = 'new-result'

resultBackground.id = 'result-background'
document.body.append(resultBackground)
document.body.append(newResult)

// When clicking on result background, hide newResult and resultBackground
resultBackground.addEventListener('click', function () {
    newResult.classList.remove('shown')
    resultBackground.classList.remove('shown')
})

function submitInput() {
    try {
        console.log(puzzleData)
        console.log(inputValues)
        let nodes = [], goalNodes = [], parenthesisArr = [], goalString = [], showWarning

        for (let node of inputValues.solution.wrap.elements.flat()) {
            nodes.push(node)
            parenthesisArr.push(translateName(node.dataset.type))
        }
        for (let node of inputValues.goal.wrap.elements.flat()) {
            goalNodes.push(node)
            parenthesisArr.push(translateName(node.dataset.type))
            goalString.push(translateName(node.dataset.type))
        }

        console.log(nodes)
        let arrString = parenthesisArr.join("")
        goalString = goalString.join("")
        if (!nodes.length) {
            notify('Input a Solution!', {duration: 1000, height: '40px', width: '160px'});
            console.log('No solution inputted'); return;
        }
        console.log("GOLSTRING", goalString)

        let leftParenthesis = (arrString.match(/\(/g) || []).length
        let rightParenthesis = (arrString.match(/\)/g) || []).length
        if (leftParenthesis !== rightParenthesis) {
            notify('Invalid Input, Check Parenthesis!', {duration: 1600, height: '40px', width: '270px'})
            console.log('Mismatched Parenthesis'); return;
        };

        // Calculation

        function operation(arr) {
            if (arr.length === 1) {
                return arr[0]
            } else if (arr.length === 3) {
                let output;
                if (typeof arr[0] === 'object' || typeof arr[2] === 'object') {
                    switch (arr[1]) {
                        case "+":
                            output = math.add(arr[0], arr[2]); break;
                        case "−":
                            output = math.subtract(arr[0], arr[2]); break;
                        case "x":
                            output = math.multiply(arr[0], arr[2]); break;
                        case "÷":
                            output = math.divide(arr[0], arr[2]); break;
                        case "*":
                        case "^":
                            output = math.pow(arr[0], arr[2]); break;
                    }
                } else {
                    switch (arr[1]) {
                        case "+":
                            output = (arr[0] + arr[2]); break;
                        case "−":
                            output = (arr[0] - arr[2]); break;
                        case "x":
                            output = (arr[0] * arr[2]); break;
                        case "÷":
                            output = (arr[0] / arr[2]); break;
                        case "^":
                        case "*":
                            output = (arr[0] ** arr[2]); break;
                        case "l":
                            output = (log(arr[0], arr[2])); break;
                    }
                }
                try {
                    if (math.abs(output) > Number.MAX_SAFE_INTEGER) {
                        return operation([math.bignumber(arr[0]), arr[1], math.bignumber(arr[2])])
                    } else return output
                } catch {return output}
            } else if (arr.length > 3) {
                // Evaluate the expression left to right
                return operation([operation(arr.slice(0, 3)), arr[3], ...arr.slice(4, arr.length)])
            }
        };
    
        function evaluate(input) {
    
            console.groupCollapsed("Evaluate")
            if (input[0] === undefined) {
                console.groupEnd()
                return;
            }
            let inputsArr = [input.slice()] // Clone inputsArr
            let returnArr = []
    
            function addPermutation(index, char, replace) {
                if (inputsArr.length > 50) return;
                if (replace) {
                    // Replace character at index of all input arrays
                    for (let arr of inputsArr) arr[index] = char;
                    // The result is all inputs must conform character change
                } else {
                    // Make an array with the new character at the index for all input arrays and push to inputs array
                    for (let arr of inputsArr.slice('')) {
                        newArr = arr.slice('');
                        newArr[index] = char;
                        inputsArr.push(newArr);
                    };
                    // The result is two different variations of each current array, one with the character change and one without
                };
            };
    
            function checkValidity(arr) { // Ensure the solution is valid
                console.log(arr)
                let string = arr.map(val => { // Rename symbols for easier detection
                    if (number(val).includes('natural')) return 'n'
                    if (number(val).includes('fraction')) return 'f'
                    if (number(val).includes('negative')) return '-'
                    if (number(val).includes('complex')) return 'i'
                    if ((val.toString().charAt(0) === 'e')) return 'e'
                    if ((val.toString().charAt(0) === 'p')) return 'p'
                    return val
                }).join("")
                // .replace(/[!]/g, '')
                
                if (!/[f][fnjk]|[fnjk][f]/.test(string)) return true; // Avoid sideways cube and number next to each other
                if (!/[fnjk]{3,}/.test(string)) return true; // Avoid triple digit numbers
                if (!/([+−x÷l^]){2,}/.test(string)) return true; // Avoid two or more operations next to each other
                if (!/√[+−x÷l^]/.test(string)) return true; // Square root cannot be in front of operation
                if (!/#[+−x÷l^]/.test(string)) return true; // Number of factors cannot be in front of operation
                if (!/[fnjk]#/.test(string)) return true; // Numbers cannot be followed by number of factors operand
                if (!/^[x^]/.test(string)) return true; // Cannot end with operation
    
                // if (!/[f][fnjk]|[fnjk][f]|[fnjk]{3,}|([+−x÷l^]){2,}|√[+−x÷l^]|#[+−x÷l^]|[fnjk]#|^[x^]/.test(string)) return true;
            }
    
    
            for (let i = 0; i < input.length; i++) {
                // Loop through input to find ambiguous symbols
    
                let replace = (i === input.length - 1) // Turn on replace when at last character (don't make 2 permutations)
    
                if (input[i] === '^' && puzzleData.variations.get('base') >= 11) {
                    addPermutation(i, 'j', replace);
                } else if (input[i] === '√' && puzzleData.variations.get('base') >= 12) {
                    addPermutation(i, 'k', replace);
                } else if (input[i] === 'x' && puzzleData.variations.get('numberOfFactors')) {
                    addPermutation(i, '#');
                }
                
                // After the new arrays have been created, check each one for validity
                for (let j = 0; j < inputsArr.length; j++) {
                    if (!checkValidity(inputsArr[j].slice(0, i + 1))) {
                        // If new array is not valid, remove it from inputs array and fix the loop index
                        inputsArr = inputsArr.slice(0, j).concat(inputsArr.slice(j + 1));
                        j--
                    };
                    // Else, all the valid inputs will stay in order to keep being modified in a subsequent index
                };
            };
    
            console.log(input)
            console.log(inputsArr)
    
            function numFactors(num) {
                console.log(number(num))

                let zero = 0, one = 1, two = 2
                if (typeof num === 'bigint') {
                    zero = 0n, one = 1n, two = 2n
                } else if (number(num).includes('imaginary') || num == 0) {
                    return 'Invalid number of factors'
                }
                console.log(typeof num)
                let length = 0, arr = [];
    
                function generateDivisors(curIndex, curDivisor, arr) {
                    if (curIndex == arr.length) {
                        length++;
                        return;
                    }
                    for (let i = zero; i <= arr[curIndex][0]; i++) {
                        generateDivisors(curIndex + one, curDivisor, arr);
                        curDivisor *= arr[curIndex][1];
                    }
                }
    
                for (let i = two; i * i <= num; i++) {
                    if (num % i == 0) {
                        let count = 0;
                        while (num % i == 0) {
                            num /= i;
                            count += 1;
                        }
                        arr.push([count, i]);
                    }
                }
                if (num > 1) arr.push([1, num]);
                let curIndex = zero, curDivisor = one;
    
                generateDivisors(curIndex, curDivisor, arr);
                console.log(length)
                return length;
            };
    
            function factorial(num) { // Perform factorial operation
                if (num < 0 || num % 1 !== 0) return 'Invalid Factorial' // Numbers must be positive integers
                let factorial = 1;
                for (let i = num; i > 0; i--, num--) factorial *= num
                return factorial
            };
    
            if (!inputsArr.length) throw "No possible interpretations"
     
            for (let i = 0; i < inputsArr.length; i++) { // Loop through each input array permutation
                let arr = []
                for (let j = 0; j < inputsArr[i].length; j++) { // Loop through each character
    
                    function pushNumber(input, index, parameters = {}) { // Identify the next number in the array
                        
                        if (inputsArr[i][index] === '√') { 
                            j++
                            return math.nthRoots(pushNumber(input, j), 2)[0]
                        } else if (inputsArr[i][index] === 'i') {
                            j++
                            return math.multiply(math.complex(0, 1), pushNumber(input, j))
                        } else if (inputsArr[i][index] === '#') {
                            j++
                            return numFactors(pushNumber(input, j))
                        } else if (inputsArr[i][index].toString().charAt(0) === 'p') {

                            j++
                            let base = puzzleData.variations.get('base') ?? 10
                            let rawExponent = inputsArr[i][index].slice(1)
                            let parsedExponent = []
                            // Change base so that calculations are in base 10, but
                            // copy it into a variable so it can be restored later
                            let copyBase = puzzleData.variations.get('base')
                            if (copyBase) puzzleData.variations.set('base', 10)

                            for (let k = 0; k < rawExponent.length; k++) {
                                function altPushNumber(ind) {
                                    if (ind === rawExponent.length - 1) {
                                        return rawExponent.charAt(ind);
                                    } else if (isNaN(Number(rawExponent.charAt(ind + 1)))) {
                                        return rawExponent.charAt(ind);
                                    }
                                    k++
                                    return parseFloat(`${rawExponent.charAt(ind)}${altPushNumber(ind + 1)}`)
                                }
                                if (!isNaN(rawExponent.charAt(k))) {
                                    parsedExponent.push(altPushNumber(k))
                                } else {
                                    parsedExponent.push(rawExponent.charAt(k))
                                };
                            };
                            console.log(parsedExponent)
                            console.groupCollapsed('Parsing powers of base')
                            let exponent = parseInput(parsedExponent)[0][0]
                            console.groupEnd()
                            console.log(exponent)
                            if (copyBase) puzzleData.variations.set('base', copyBase)
                            if (parameters.BigInt) {
                                return (BigInt(base) ** BigInt(exponent))
                            }
                            return (math.bignumber(base ** exponent))

                        }
                        // Last number in string, return
                        if (index === input.length - 1) {
                            return convertJK(input[index]);
                        }
                        // Next character cannot be appended to this number, return
                        if (!number(input[index + 1]).includes("natural")) {
                            return convertJK(input[index]);
                        }
                        j++
                        let base = puzzleData.variations.get('base') ?? 10
                        if (parameters.decimal) { // Rewrite return statement to include three+ digit numbers and no base conversion
                            console.log()
                            return parseFloat(`${input[index]}${pushNumber(input, j, {decimal: true})}`)
                        } else {
                            return convertJK(input[index]) * base + convertJK(input[index + 1])
                        }
                    }
    
                    if (inputsArr[i][j] === '√') { // Square root
    
                        // If given index for square root, set it, else, index is 2
                        let index = (number(inputsArr[i][j - 1]).includes('number')) ? arr.pop() : 2
                        console.log(index)
                        j++ // Move index to first digit of radical
                        let subsequentVal = pushNumber(inputsArr[i], j)
                        arr.push(math.nthRoots(subsequentVal, index)[0]);
    
                    } else if (inputsArr[i][j] === '#') { // Number of factors
    
                        j++ // Move index to first digit of argument
                        let subsequentVal = pushNumber(inputsArr[i], j, {BigInt: true})
                        console.log(subsequentVal)
                        arr.push(numFactors(subsequentVal));

                    } else if (inputsArr[i][j] === '!') { // Factorial
    
                        let previousVal = arr[arr.length - 1] // Let argument be last number
                        arr[arr.length - 1] = factorial(previousVal)
    
                    } else if (inputsArr[i][j] === 'i') { // Imaginary
    
                        let previousVal = (number(arr[arr.length - 1]).includes('complex')) ? arr.pop() : 1
                        let subsequentVal = 1
                        if (number(inputsArr[i][j + 1]).includes('complex')) {
                            j++
                            subsequentVal = pushNumber(inputsArr[i], j)
                        }
                        // Imaginary number is product of number behind and in front
                        arr.push(math.multiply(previousVal, math.complex(0, 1), subsequentVal))
    
                    } else if (inputsArr[i][j] === '.') { // Decimal

                        let previousVal = (number(arr[arr.length - 1]).includes('number')) ? arr.pop() : 0
                        let decimal = 0
                        if (number(inputsArr[i][j + 1]).includes('number')) {
                            j++
                            subsequentVal = pushNumber(inputsArr[i], j, {decimal: true})
                            let sum = []
                            let base = puzzleData.variations.get('base') ?? 10
                            // .split('') method only works on strings, converts each character in decimal to respective base
                            for (let i = 0, arr = subsequentVal.toString().split(''); i < arr.length; i++) {
                                console.log(arr)
                                sum.push(arr[i] * base ** [-1 - i])
                            }
                            decimal = sum.reduce((a, b) => a + b)
                        }
                        arr.push(math.add(previousVal, decimal))

                    } else if (inputsArr[i][j].toString().charAt(0) === 'e') { // Exponent

                        let previousVal = arr.pop()
                        exponent = inputsArr[i][j].slice(1)
                        arr.push(math.pow(previousVal, exponent))

                    } else if (inputsArr[i][j].toString().charAt(0) === 'p') {

                        let base = puzzleData.variations.get('base') ?? 10
                        let negativeExponent = false;
                        if (inputsArr[i][j].charAt(1) === '1') base *= -1 // Upsidedown
                        if (inputsArr[i][j].charAt(2) === '1') negativeExponent = true // Sideways
                        let rawExponent
                        if (inputsArr[i][j].charAt(3) === '-') { // Inputed exponent was negative
                            negativeExponent = !negativeExponent
                            rawExponent = inputsArr[i][j].slice(4)
                        } else {
                            rawExponent = inputsArr[i][j].slice(3)
                        }
                        let parsedExponent = []
                        // Change base so that calculations are in base 10, but
                        // copy it into a variable so it can be restored later
                        let copyBase = puzzleData.variations.get('base')
                        if (copyBase) puzzleData.variations.set('base', 10)

                        for (let k = 0; k < rawExponent.length; k++) {
                            function altPushNumber(index) {
                                if (index === rawExponent.length - 1) {
                                    return rawExponent.charAt(index);
                                } else if (isNaN(Number(rawExponent.charAt(index + 1)))) {
                                    return rawExponent.charAt(index);
                                }
                                k++
                                console.log(altPushNumber(index + 1))
                                return (`${rawExponent.charAt(index)}${altPushNumber(index + 1)}`)
                            }
                            if (!isNaN(rawExponent.charAt(k))) {
                                parsedExponent.push(altPushNumber(k))
                            } else {
                                parsedExponent.push(rawExponent.charAt(k))
                            };
                        };
                        console.log(parsedExponent)
                        console.groupCollapsed('Parsing powers of base')
                        let exponent = parseInput(parsedExponent)[0][0]
                        if (negativeExponent) exponent *= -1
                        console.groupEnd()
                        console.log(exponent)
                        if (copyBase) puzzleData.variations.set('base', copyBase)
                        let output = math.bignumber(base ** exponent)
                        if (math.largerEq(math.abs(output), math.bignumber(10 ** 64))) showWarning = true
                        console.log(output)
                        arr.push(output)

                    } else if (number(inputsArr[i][j]).includes("natural")) {

                        // Input just a number (pushNumber allows for 2 digits, base, etc)
                        arr.push(pushNumber(inputsArr[i], j))
                        console.log(arr)

                    } else {

                        // Negative numbers, fractions, operations etc can only be input as single digits
                        arr.push(inputsArr[i][j])

                    };
                };
                console.log(arr)
                let evaluation = operation(arr)
                // Return result and the input that gave the result
                if (evaluation !== undefined) {
                    if (math.typeOf(evaluation) !== 'Complex') {
                        if (math.largerEq(math.abs(evaluation), math.bignumber(10 ** 64))) {
                            showWarning = true
                        }
                    }
                    returnArr.push([evaluation, inputsArr[i]])
                }
            };
    
            console.log(returnArr)
            console.groupEnd()
            return returnArr;
    
        };

        function parseInput(arr) {
            console.log(arr)

            let index = [0];
            let permutationArr = [[[], [[]]]];
    
            function navigate(currPosition) {
                for (let i = 0; i < index.length - 1; i++) currPosition = currPosition[index[i]]
                return currPosition
            };
    
            for (let i = 0; i < arr.length; i++) {
                // For every character in array
                for (let permutation of permutationArr.slice()) {
                    // For every possible permutation
                    let currPosition = navigate(permutation[0])
                    if (arr[i] === "(") { // On open parenthesis
    
                        currPosition[index[index.length - 1]] = [];
                        if (!permutation[1][index.length]) {
                            permutation[1].push(clone(permutation[1][index.length - 1]))
                        }
    
                        for (let arr of permutation[1]) {
                            let currPosition = navigate(arr)
                            currPosition.push([])
                        }
    
                    } else if (arr[i] === ")") {

                        // Clone index and place it back when done with
                        // parsing so that index is preserved for future
                        // permutations
                        let cloneIndex = index.pop()
                        
                        currPosition = permutation[0];
                        currPosition = navigate(permutation[0])
                        
                        console.log(currPosition[index[index.length - 1]])
                        let evaluation = evaluate(currPosition[index[index.length - 1]])
                        // Returns array that of each interpretation that can be looped through in the form
                        // [ perm1: [ result , array ] , perm2: [ result , array ] , perm3: [ result , array ] ]
                        // evaluation[index][0] is the result value of the evaluation
                        // evaluation[index][1] is the interpretation of the string that gave the evaluation
                        
                        for (let j = 0; j < evaluation.length; j++) {
    
                            let newPermutation; // 
                            if (j === evaluation.length - 1) {
                                // Last evaluation result position will go to main line permutation
                                
                                currPosition = navigate(permutation[0])
                                currPosition[index[index.length - 1]] = evaluation[j][0]
                            } else {
                                // Other results will become new permutations appended to permutations array
    
                                // Clone current main line permutation
                                newPermutation = clone(permutation);

                                // Set value
                                currPosition = navigate(newPermutation[0])
                                currPosition[index[index.length - 1]] = evaluation[j][0];

                                // Set flag
                                permutationArr.push(newPermutation);
                            };
    
                            // Replace placeholders for the corresponding permutation flag with actual values
                            for (let k = 0; k < permutation[1].length; k++) {
                                // Note that the permutation flag (permutation[1]) is a tree of the entire
                                // simplification process with multiple layers. K will loop through all of
                                // these layers, starting from ?[most simplified]? to ?[least simplified]?
                                let currPosition;
                                if (j === evaluation.length - 1) { // On main line permutation
                                    currPosition = navigate(permutation[1][k])
                                } else { // On variants of main line permutation
                                    currPosition = navigate(newPermutation[1][k])
                                }
                                if (k >= index.length) { // Only replace placeholders where the complexity allows it to do so
                                    let newArr = currPosition[index[index.length - 1]]
                                    
                                    for (let l = 0; l < newArr.length; l++) {
                                        if (newArr[l] === null) newArr[l] = evaluation[j][1][l]
                                    }
                                } else {
                                    currPosition[index[index.length - 1]] = evaluation[j][0].toString()
                                }
                            }
                        };

                        // Place popped index back for future permutations
                        index.push(cloneIndex)

                    } else {
                        
                        currPosition[index[index.length - 1]] = arr[i];
                        for (let arr of permutation[1]) {
                            let currPosition = navigate(arr)
                            // Placeholders are put in place so that indexes and parenthesis line up correctly, but
                            // the the actual symbols are unknown (due to ambiguity)
                            currPosition.push(null)
                        }
                        
                        // index[index.length - 1]++
                    };
                };
                if (arr[i] === "(") {
                    index.push(0)
                } else if (arr[i] === ")") {
                    index.pop()
                    index[index.length - 1]++
                } else {
                    index[index.length - 1]++
                }
            };
            
            let returnArr = []
            console.log(permutationArr)
    
            // Final evaluation: All characters parsed
            for (let arr of permutationArr) {
                console.log(arr)
                let evaluation = evaluate(arr[0])
                console.log("A")
                console.log(evaluation)
                if (evaluation === undefined) continue;
                for (let i = 0; i < evaluation.length; i++) {
                    let cloneFlag = clone(arr[1])
                    for (let flag of cloneFlag) {
                        for (let j = 0; j < flag.length; j++) {
                            if (flag[j] === null) flag[j] = evaluation[i][1][j];
                        }
                    }
                    returnArr.push([evaluation[i][0], cloneFlag])
                }
            }
            console.log(returnArr)
            return returnArr;
        };

        // let puzzleData = {variations: new Map([['base', 12], ['numberOfFactors', true]])}
        // // −÷√
        // let input = '2iii5+5'.split("")
        // let input = '(√25)'.split("")
        // for (let i = 0; i < input.length; i++) {
        //     if (!isNaN(parseFloat(input[i]))) input[i] = parseFloat(input[i])
        // };
        // let testAnswer = parseInput(input)
        // console.log(testAnswer)

        // throw "STOP"

        // // console.log(math.equal(answer[0][0], math.complex(-119, 120)))

        let solutionParseArr = [], goalParseArr = []
        function prepareArrayForParsing(nodes, array) {
            console.log(nodes)
            for (const cube of nodes) {
                let newVal = translateName(cube.dataset.type)
                if (!isNaN(parseFloat(newVal))) newVal = parseFloat(newVal)
                if (cube.classList.contains('sideways') || cube.classList.contains('upsidedown') || cube.classList.contains('exponent-toggle')) {
                    if (cube.classList.contains('exponent')) {
                        newVal = 10
                    } else if (cube.classList.contains('square-root')) {
                        newVal = 11
                    }
                }
                if (typeof newVal === "number") {
                    if (cube.classList.contains('upsidedown')) newVal *= -1
                    if (cube.classList.contains('sideways')) newVal = 1 / newVal
                    if (cube.classList.contains('exponent-toggle')) {
                        newVal = `e${newVal}`
                    }
                    if (cube.classList.contains('powers-of-base')) {
                        let upsidedown = (cube.classList.contains('upsidedown')) ? 1 : 0
                        let sideways = (cube.classList.contains('sideways')) ? 1 : 0
                        let exponent = cube.dataset.powersOfBase
                        newVal = `p${upsidedown}${sideways}${exponent}`
                    }
                } else {
                    if (cube.classList.contains('sideways') && cube.classList.contains('divide')) newVal = 'l'
                    if (cube.classList.contains('sideways') && cube.classList.contains('subtract')) newVal = 'i'
                    if (cube.classList.contains('sideways') && cube.classList.contains('divide')) newVal = 'l'
                    if (cube.classList.contains('upsidedown') && cube.classList.contains('divide')) newVal = 'l'
                }
                array.push(newVal)
            }
        }
        console.log(solutionParseArr)
        prepareArrayForParsing(nodes, solutionParseArr)
        prepareArrayForParsing(goalNodes, goalParseArr)
        console.log('Parse arrays: ')
        console.log(solutionParseArr)
        console.log(goalParseArr)
        let answerArr = parseInput(solutionParseArr)
        let goalArr = parseInput(goalParseArr)
        console.log('Evaluated arrays: ')
        console.log(answerArr)
        console.log(goalArr)
        let title, paragraph = '', answer, goalAnswer;
        (function checkInput() {
            console.log('Comparisons')
            title = 'Incorrect:'

            console.log(answerArr)
            let deltaMap = new Map();
            for (let val of answerArr) {
                if (answer) break;
                try {
                    if (math.largerEq(math.abs(value), 10 ** 64)) showWarning = true
                } catch {}
                let delta;
                let deltaGoal;
                console.log(goalArr)
                for (let goal of goalArr) {
                    console.log(goal)
                    console.log(val)
                    // if (typeof goal[0] === 'BigInt') continue;
                    let goalValue = goal[0]
                    let value = val[0]
                    if (puzzleData.variations.get('multipleOf')) {
                        if (math.typeOf(value) === 'Complex') {
                            value = math.complex(math.mod(math.re(value), puzzleData.variations.get('multipleOf')), math.im(value))
                        } else {
                            value = math.mod(value, puzzleData.variations.get('multipleOf'))
                        }
                        if (math.typeOf(goalValue) === 'Complex') {
                            goalValue = math.complex(math.mod(math.re(goalValue), puzzleData.variations.get('multipleOf')), math.im(goalValue))
                        } else {
                            goalValue = math.mod(goalValue, puzzleData.variations.get('multipleOf'))
                        }
                        if (value < 0) value += puzzleData.variations.get('multipleOf')
                        if (goalValue < 0) goalValue += puzzleData.variations.get('multipleOf')
                    }
                    console.log(goalValue)
                    console.log(value)
                    if (math.equal(goalValue, value)) {
                        answer = val
                        goalAnswer = goal
                        break;
                    } else if (value !== undefined) {
                        let difference = math.abs(math.subtract(goalValue, value))
                        if (difference < delta || !delta) {
                            deltaGoal = goal
                            delta = difference
                        }
                    }
                }
                deltaMap.set(delta, {val:val, goal:deltaGoal})
            }
            console.log(deltaMap)

            if (!answer) {
                paragraph = `Solution does not evaluate to goal.`
                let minDelta = Array.from(deltaMap.keys())
                .sort((a, b) => a - b)
                .filter(val => !isNaN(val))[0]
                console.log(minDelta)
                console.log(deltaMap.keys())
                answer = deltaMap.get(minDelta).val
                goalAnswer = deltaMap.get(minDelta).goal
                return;
            };

            console.log(answer)
            let input = answer[1][answer[1].length - 1].flat(Infinity)
            console.log(input)

            if (inputValues.required.available.flat().length) {
                paragraph = `Required cubes missing from solution.`
                return;
            } else {
                // Detect overused resources
                let totalValues = clone(inputValues.required.values).concat(clone(inputValues.resources.values))
                let resources = totalValues.flat()

                currWild = inputValues.wildCube ?? staticWild
                if (puzzleData.variations.get('wild') !== undefined) {
                    resources = resources.map(val => {return (val == translateName(staticWild)) ? translateName(currWild) : val})
                }

                console.log(resources)
                let modifiedResources = clone(resources)
                let operationRegex = /[+−x÷l^√]/

                for (let i = 0; i < input.length; i++) {
                    let val = input[i];
                    if (!isNaN(val)) {
                        if (val % 1 !== 0) val = 1 / val;
                        val = Math.abs(val).toString();
                    }

                    let multiOps;
                    if (puzzleData.variations.get('multipleOperations') && operationRegex.test(val)) {
                        multiOps = true
                    }
                    if (val === 'j' || val === 10) val = '^'
                    if (val === 'k' || val === 11) val = '√'

                    if (modifiedResources.includes(val)) {
                        if (!multiOps) modifiedResources = deleteFirstArrItem(modifiedResources, val)
                    } else {
                        if (resources.includes(val)) {
                            paragraph = `Resources does not contain a ${val} cube.`
                        } else {
                            paragraph = `Solution has too many ${val} cubes.`
                        }
                        return;
                    }
                }
            }
            title = 'Correct!'
        })();

        // Displaying Answer
        newResult.innerHTML = ''

        // Header
        const resultHeader = document.createElement('div')
        resultHeader.id = 'result-header'
        const backButton = document.createElement('div')
        backButton.addEventListener('click', () => { resultBackground.click() })
        const newPuzzleButton = document.createElement('div')
        newPuzzleButton.addEventListener('click', () => {
            newPuzzle(queuedPuzzleData)
            resultBackground.click()
        })
        backButton.classList.add('result-button')
        newPuzzleButton.classList.add('result-button')
        backButton.innerText = 'Back'
        newPuzzleButton.innerText = 'Next'
        newPuzzleButton.style.marginLeft = 'auto'
        backButton.style.cssText = ''
        resultHeader.append(backButton)
        resultHeader.append(newPuzzleButton)
        newResult.append(resultHeader)

        // Content
        const resultContent = document.createElement('div')
        resultContent.id = 'result-content'
        newResult.append(resultContent)

        // Result Info
        const inputResult = document.createElement('div')
        inputResult.id = 'input-result'
        resultContent.append(inputResult)
        if (title === 'Correct!') inputResult.classList.add('correct')

        const resultTitle = document.createElement('h2')
        resultTitle.innerText = title
        inputResult.append(resultTitle)
        if (paragraph.length) {
            const resultParagraph = document.createElement('p');
            resultParagraph.innerText = paragraph
            inputResult.append(resultParagraph)
        }


        // Display inputted information
        const resultInputContainer = document.createElement('div')
        resultInputContainer.id = 'result-input-container'
        resultContent.append(resultInputContainer)

        // Title
        const inputTitle = document.createElement('h2')
        inputTitle.innerText = 'Your Solution'
        inputTitle.classList.add('input-title')
        resultInputContainer.append(inputTitle)

        if (showWarning) {
            const warningContainer = document.createElement('div')
            const warningParagraph = document.createElement('p')
            const warningIcon = createSvg('warning')
            warningContainer.id = 'warning-container'
            warningParagraph.innerText = 'Numbers larger than 10^64 may lose precision.'
            warningContainer.append(warningIcon)
            warningContainer.append(warningParagraph)
            resultInputContainer.append(warningContainer)
        }

        // Solution
        const inputSolutionContainer = document.createElement('div')
        inputSolutionContainer.classList = 'result-cube-container'
        resultInputContainer.append(inputSolutionContainer)
        const inputAnswer = document.createElement('div')
        inputAnswer.classList = 'answer-solution-sub-container'
        inputSolutionContainer.append(inputAnswer)

        function inputAnswerCube(input, node) {
            const newNode = node.cloneNode('deep')
            newNode.style.left = '0px'
            newNode.style.top = '0px'
            newNode.classList.remove('pointer')

            // Restore animations
            if (newNode.classList.contains('exponent-toggle')) {
                const svg = newNode.querySelector('.svg')
                const exponentSvg = newNode.querySelector('.exponent-toggle-svg')
                svg.animate(
                    [{ left: '6px' }], {
                    fill: "forwards",
                });
                exponentSvg.animate(
                    [{ opacity: 1 }], {
                    fill: "forwards",
                });
            }
            if (newNode.classList.contains('wild')) {
                const svg = newNode.querySelector('.svg')
                const wildStar = newNode.querySelector('.wild-star')
                svg.animate(
                    [{ opacity: 1 }], {
                    fill: "forwards",
                });
                if (wildStar) {
                    wildStar.animate(
                        [{ opacity: 1 }], {
                        fill: "forwards",
                    });
                }
            }
            if (newNode.classList.contains('powers-of-base')) {
                const mainSvg = newNode.querySelector('.svg')
                const baseSvg = newNode.querySelector('.pob-base-svg')
                const exponentDisplay = newNode.querySelector('.pob-exponent')
                mainSvg.animate(
                    [{ opacity: 0 , bottom: '-5px', left: '-4px' }], {
                    fill: "forwards",
                });
                let base = puzzleData.variations.get('base') ?? 10
                let endPosition = base >= 10 ? ['-3px', '1px'] : ['2px', '1px']
                baseSvg.animate(
                    [{ left: endPosition[0] , bottom: endPosition[1] , opacity: 1 }], {
                    fill: "forwards",
                });
                exponentDisplay.animate(
                    [{ opacity: 1 }], {
                    fill: "forwards",
                });
            }
            input.append(newNode)
        };

        for (const node of nodes) {
            inputAnswerCube(inputAnswer, node)
        }

        // Paragraph
        const evaluationParagraph = document.createElement('p')
        evaluationParagraph.innerText = `Your solution evaluates to ${answer[0]}`
        if (puzzleData.variations.get('multipleOf')) {
            switch (math.typeOf(answer[0])) {
                case 'Complex': // Mod down real part of complex number
                    console.log("1")
                    let realComp = math.re(answer[0])
                    if (math.largerEq(realComp, puzzleData.variations.get('multipleOf')) || math.isNegative(realComp)) {
                        let newNumber = math.complex(math.mod(realComp, puzzleData.variations.get('multipleOf')), math.im(answer[0]))
                        if (newNumber < 0) newNumber += puzzleData.variations.get('multipleOf')
                        evaluationParagraph.innerText += ` and reduces down to ${newNumber}`
                    }; break;
                case 'BigNumber':
                    console.log("2")
                    if (math.largerEq(answer[0], puzzleData.variations.get('multipleOf')) || math.isNegative(answer[0])) {
                        let newNumber = math.mod(answer[0], puzzleData.variations.get('multipleOf'))
                        if (newNumber < 0) newNumber += puzzleData.variations.get('multipleOf')
                        evaluationParagraph.innerText += ` and reduces down to ${newNumber}`
                    }; break;   
                case 'number':
                    default:
                    console.log("3")
                    if (answer[0] >= puzzleData.variations.get('multipleOf') || answer[0] < 0) {
                        let newNumber = answer[0] % puzzleData.variations.get('multipleOf')
                        if (newNumber < 0) newNumber += puzzleData.variations.get('multipleOf')
                        evaluationParagraph.innerText += ` and reduces down to ${newNumber}`
                    }
            }
        }
        
        evaluationParagraph.classList.add('evaluation-paragraph')
        resultInputContainer.append(evaluationParagraph)

        // Input Breakdown
        const solutionBreakdownContainer = document.createElement('div')
        const solutionBreakdownContent = document.createElement('div')
        createBreakdown(solutionBreakdownContainer, solutionBreakdownContent, answer, {separator: true, scrollOffset: 278})
        function createBreakdown(container, content, answer, parameters = {}) {
            container.append(content)
            resultInputContainer.append(container)
            console.groupCollapsed('Breakdown')
            container.classList.add('breakdown-container')
            content.classList.add('breakdown-content')
            console.log(answer[1])
            let breakdownHeight1 = 0

            for (let i = answer[1].length - 1; i >= -1; i--) {
                const level = document.createElement('p')
                level.classList.add('breakdown-content')

                let arr = answer[1][i]
                let string = '\\('
                function stringify(arr) {

                    console.log(arr)
                    let openParenthesis = 0;

                    for (let j = 0; j < arr.length; j++) {
                        // console.log(arr[j])

                        function pushNumber(input, index) {
                            if (index === input.length - 1) {
                                return convertJK(input[index]);
                            }
                            if (input[index + 1] === '.') {
                                j ++
                                let base = puzzleData.variations.get('base') ?? 10
                                return convertJK(input[index]) + convertJK(input[index + 2]) * (base ** -1)
                            } else if (!number(input[index + 1]).includes("natural")) {
                                return convertJK(input[index]);
                            }
                            j++
                            let base = puzzleData.variations.get('base') ?? 10
                            return convertJK(input[index]) * base + convertJK(input[index + 1])
                        }

                        if (typeof arr[j] === 'number' || arr[j] === 'k' || arr[j] === 'j') {
                            string += (pushNumber(arr, j))
                            console.log(string)
                        } else if (Array.isArray(arr[j])) { // Next character is open parenthesis
                            if (openParenthesis) {
                                stringify(arr[j])
                                if (openParenthesis) string += ' }'
                                openParenthesis--;
                            } else {
                                string += "("
                                stringify(arr[j])
                                string += ")"
                            }
                        } else {
                            console.log(arr[j])
                            switch (arr[j].toString().charAt(0)) {
                                case "l": string += '\\log'; break;
                                case "#": string += 'x'; break;
                                case "x": string += '\\cdot '; break;
                                case "e": // Exponent
                                    string += `^${arr[j].slice(1)}`;
                                    break;
                                case "√":
                                    string += '\\sqrt { '
                                    if (Array.isArray(arr[j + 1])) { // Next character is open parenthesis
                                        openParenthesis++;
                                    } else {
                                        j++
                                        string += (pushNumber(arr, j))
                                        string += ' }'
                                    }; break;
                                case "^":
                                    string += '^ {';
                                    if (Array.isArray(arr[j + 1])) { // Next character is open parenthesis
                                        openParenthesis++;
                                    } else {
                                        j++
                                        string += (pushNumber(arr, j))
                                        string += ' }'
                                    }; break;
                                case "p":
                                    let base = puzzleData.variations.get('base') ?? 10
                                    if (arr[j].charAt(1) === '1') base *= 1
                                    if (arr[j].charAt(2) === '1') base = 1 / base
                                    string += `{${base}^ {${arr[j].slice(3)}}}`
                                    break;
                                default:
                                    console.log(string)
                                    string += arr[j];
                                    console.log(string)
                                    break;
                            }
                        };
                    }
                    if (openParenthesis) string += ' }'
                }
                if (i > -1) {
                    stringify(arr)
                    console.log(string)
                    string += '\\)'
                    console.log(string.replace(/\s/g, ""))
                    if (i === 0 && string.replace(/\s/g, "") === `\\(${answer[0]}\\)`) { // Don't show string if it is equal to answer
                        string = ''
                    }
                } else {
                    string = `\\( ${answer[0]} \\)`
                }
                
                if (string.length) {
                    console.log(string)
                    level.innerText = string
                    content.append(level)
                    MathJax.typeset()
                    console.log()
                    console.log(level.getBoundingClientRect().height)
                    breakdownHeight1 += level.getBoundingClientRect().height + 8 // Add height and margin
                }
            }
            console.groupEnd()

            const breakdownButton = document.createElement('div')
            if (parameters.separator) { // Separate
                const inputSeparatorDiv = document.createElement('div')
                const horizontalRule = document.createElement('hr')
                inputSeparatorDiv.id = 'separator-div'
                horizontalRule.style.cssText = 'width: 100%;'
                inputSeparatorDiv.append(horizontalRule)
                resultInputContainer.append(inputSeparatorDiv)
                inputSeparatorDiv.append(breakdownButton)
            } else {
                resultInputContainer.append(breakdownButton)
            }

            // Breakdown Button
            const breakdownLabel = document.createElement('p')
            breakdownButton.classList.add('breakdown-button')
            if (parameters.goalButton) {
                breakdownButton.classList.add('goal-breakdown-button')
            }
            breakdownLabel.innerText = 'Show Breakdown'
            breakdownButton.append(breakdownLabel)

            const arrowSvg = createSvg('arrow')
            arrowSvg.style.cssText = 'width: 14px; height: 14px; margin-left: 4px;'
            breakdownButton.append(arrowSvg)

            breakdownButton.addEventListener('click', function () {
                this.classList.toggle('active')
                let breakdownHeight
                if (this.classList.contains('active')) {
                    breakdownLabel.innerText = 'Hide Breakdown'
                    breakdownHeight = breakdownHeight1
                    if (Math.abs(resultContent.scrollHeight - resultContent.scrollTop - resultContent.clientHeight) < 1) {
                        resultContent.scrollTo({ top: resultContent.scrollTop - 1 })
                    }
                    const scrollElement = document.createElement('div')
                    scrollElement.style.cssText = `height: ${breakdownHeight + "px"}; flex-shrink: 0;`
                    resultContent.append(scrollElement)
                    scrollElement.animate(
                        [{ height: "0px" }], {
                        fill: 'forwards',
                        duration: 450,
                        easing: 'cubic-bezier(.13,.94,.37,.99)',
                    });
                    container.animate(
                        [{ height: breakdownHeight + "px" }], {
                        fill: 'forwards',
                        duration: 450,
                        easing: 'cubic-bezier(.13,.94,.37,.99)',
                    });
                    let height = content.offsetTop - parameters.scrollOffset
                    if (resultContent.scrollTop < height) {
                        setTimeout(function() { resultContent.scrollTo({ top: height, behavior: 'smooth' }) }, 8)
                    }
                } else {
                    breakdownLabel.innerText = 'Show Breakdown'
                    breakdownHeight = 0
                    container.animate(
                        [{ height: breakdownHeight + "px" }], {
                        fill: 'forwards',
                        duration: 450,
                        easing: 'cubic-bezier(.13,.94,.37,.99)',
                    });
                }
            })
        }

        // Goal
        const inputGoalContainer = document.createElement('div')
        const inputGoal = document.createElement('div')
        inputGoalContainer.classList = 'result-cube-container'
        inputGoal.classList = 'answer-solution-sub-container'
        inputGoalContainer.append(inputGoal)
        resultInputContainer.append(inputGoalContainer) 

        for (let node of goalNodes) {
            inputAnswerCube(inputGoal, node)
        }

        // Paragraph
        const goalEvaluationParagraph = document.createElement('p')
        console.log(goalAnswer)
        goalEvaluationParagraph.innerText = `Your goal evaluates to ${goalAnswer[0]}`
        if (puzzleData.variations.get('multipleOf')) {
            switch(math.typeOf(goalAnswer[0])) {
                case 'Complex': // Mod down real part of complex number
                    let realComp = math.re(goalAnswer[0])
                    console.log("1")
                    if (math.largerEq(realComp, puzzleData.variations.get('multipleOf')) || math.isNegative(realComp)) {
                        let newNumber = math.complex(math.mod(realComp, puzzleData.variations.get('multipleOf')), math.im(goalAnswer[0]))
                        goalEvaluationParagraph.innerText += ` and reduces down to ${newNumber}`
                    }; break;
                case 'BigNumber':
                    console.log("2")
                    if (math.largerEq(goalAnswer[0], puzzleData.variations.get('multipleOf')) || math.isNegative(goalAnswer[0])) {
                        let newNumber = math.mod(goalAnswer[0], puzzleData.variations.get('multipleOf'))
                        if (newNumber < 0) newNumber += puzzleData.variations.get('multipleOf')
                        goalEvaluationParagraph.innerText += ` and reduces down to ${newNumber}`
                    }; break;
                case 'number':
                default:
                    console.log("3")
                    if (goalAnswer[0] >= puzzleData.variations.get('multipleOf') || goalAnswer[0] < 0) {
                        let newNumber = goalAnswer[0] % puzzleData.variations.get('multipleOf')
                        if (newNumber < 0) newNumber += puzzleData.variations.get('multipleOf')
                        goalEvaluationParagraph.innerText += ` and reduces down to ${newNumber}`
                    }
            }
        }
        goalEvaluationParagraph.classList.add('evaluation-paragraph')
        resultInputContainer.append(goalEvaluationParagraph)

        // Breakdown
        const goalBreakdownContainer = document.createElement('div')
        const goalBreakdownContent = document.createElement('div')
        createBreakdown(goalBreakdownContainer, goalBreakdownContent, goalAnswer, {goalButton: true, scrollOffset: 348})

        


        // Display computer information
        const resultComputerContainer = document.createElement('div')
        resultComputerContainer.id = 'computer-input-container'
        resultContent.append(resultComputerContainer)

        // Computer Title
        const computerTitleNode = document.createElement('h2')
        computerTitleNode.classList.add('input-title')
        computerTitleNode.innerText = 'Solution'
        resultComputerContainer.append(computerTitleNode)

        console.log(puzzleData)

        // Computer Solution
        const computerSolutionContainer = document.createElement('div')
        const computerAnswer = document.createElement('div')
        computerSolutionContainer.classList.add('result-cube-container')
        computerAnswer.classList.add('answer-solution-sub-container')
        resultComputerContainer.append(computerSolutionContainer)
        computerSolutionContainer.append(computerAnswer)

        let currIterable = puzzleData.solution.flag

        function inputComputerCube(input, symbol, orientation = []) {

            const solutionCube = document.createElement("div");
            if (!['(', ')', '!', '.'].includes(symbol)) {
                solutionCube.classList.add("cube", "restraint-cube");
            }
            if (symbol === "u") return ['upsidedown']
            if (symbol === "s") return ['sideways']
            if (symbol === "n") return ['upsidedown', 'sideways']
            if (symbol === "-") symbol = "−"
            if (orientation.includes('upsidedown')) {
                solutionCube.classList.add('upsidedown')
            }
            if (orientation.includes('sideways')) {
                solutionCube.classList.add('sideways')
            }
            let color;
            if (/[0123]/.test(symbol)) color = randomArrayValue(["red", "blue"])
            if (/[456\^]/.test(symbol)) color = "green"
            if (/[789√]/.test(symbol)) color = "black"
            if (symbol === "+") color = randomArrayValue(["red", "black"])
            if (symbol === "−") color = randomArrayValue(["red", "green"])
            if (symbol === "x") color = randomArrayValue(["blue", "green"])
            if (symbol === "÷") color = randomArrayValue(["blue", "black"])

            if (color) {
                solutionCube.classList.add(color)
                solutionCube.append(createDiv('cube-content'))
                const svg = createSvg(translateName(symbol))
                svg.classList.add('svg')
                solutionCube.append(svg)
            } else {
                solutionCube.innerText = symbol
            }
            solutionCube.classList.add(translateName(symbol))

            input.append(solutionCube);
            return []
        }
        
        for (let i = 0, status = []; i < currIterable.length; i++) {
            status = inputComputerCube(computerAnswer, currIterable.charAt(i), status)
        }

        // Computer Paragraph
        const computerParagraph = document.createElement('p')
        computerParagraph.innerText = `Solution evaluates to ${puzzleData.solution.solution}`
        if (puzzleData.variations.get('multipleOf')) {
            computerParagraph.innerText += ` and reduces down to ${puzzleData.solution.solution % puzzleData.variations.get('multipleOf')}`
        }
        computerParagraph.classList.add('evaluation-paragraph')
        resultComputerContainer.append(computerParagraph)

        // Separator
        const computerSeparator = document.createElement('div')
        const horizontalRule = document.createElement('hr')
        computerSeparator.id = 'separator-div'
        computerSeparator.style.margin = '0'
        horizontalRule.style.cssText = 'width: 100%;'
        computerSeparator.append(horizontalRule)
        resultComputerContainer.append(computerSeparator)

        // Computer Goal
        const computerGoalContainer = document.createElement('div')
        const computerGoal = document.createElement('div')
        computerGoalContainer.classList = 'result-cube-container'
        computerGoal.classList = 'answer-solution-sub-container'
        computerGoalContainer.append(computerGoal)
        resultComputerContainer.append(computerGoalContainer)

        const computerGoalParagraph = document.createElement('p')
        computerGoalParagraph.classList.add('evaluation-paragraph')
        resultComputerContainer.append(computerGoalParagraph)

        let goalFlag, goalIndex
        if (puzzleData.variations.get('multipleOf')) {
            solution = puzzleData.solution.solution % puzzleData.variations.get('multipleOf')
            goalIndex = puzzleData.goalModValues.indexOf(solution)
            goalFlag = puzzleData.goalFlags[goalIndex]
            computerGoalParagraph.innerText = `Goal evaluates to ${Number(puzzleData.goalValues[goalIndex])} and reduces down to ${puzzleData.goalModValues[goalIndex]}`
        } else {
            solution = puzzleData.solution.solution
            goalIndex = puzzleData.goalValues.indexOf(solution)
            goalFlag = puzzleData.goalFlags[goalIndex]
            computerGoalParagraph.innerText = `Goal evaluates to ${puzzleData.goalValues[goalIndex]}`
        }
        console.log(goalFlag)
        
        for (let i = 0, status = []; i < goalFlag.length; i++) {
            status = inputComputerCube(computerGoal, goalFlag.charAt(i), status)
        }

        // Toggle classlists for pan in effect
        resultBackground.classList.toggle('shown')
        newResult.classList.toggle('shown')

    } catch (error) {
        console.log(error)
        notify('Invalid input!')
    }
};

document.addEventListener('keydown', function (keypress) {
    if (keypress.key !== 'p') return
    console.log(inputValues)
    console.log(inputValues.solution.cursorRow)
    console.log(puzzleParameters.setVariations)
    
    // answerContent.scrollTo({top: answerContent.scrollTop - 10})
    // console.log(answerContent.scrollTop)
    // console.log(answerContent.scrollHeight)
    // console.log(answerContent.offsetHeight)
});

