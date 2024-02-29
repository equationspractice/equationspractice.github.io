
function wrapTextInSpan(element) {
    if (element.textContent.trim() !== '') {
        replacement = element.innerHTML.replaceAll(/(\\\([^\(]*?\\\))([.,:\)])/g, '<span style="white-space: nowrap;">$1$2</span>');
        element.innerHTML = replacement
    }
}

// let principle = 180, arr = []
// for (let i = 0; i < 32; i++) {
//     arr.push(principle / 16)
//     principle += 180
// }
// let usefulAngles = [45, 135, 225, 315, 30, 60, 120, 150, 210, 240, 300, 330, 0, 90, 180, 270, 360].concat([22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5])
// let finalAngles = arr.filter((angle) => !usefulAngles.includes(angle))
// console.log(finalAngles)

const textElements = document.body.querySelectorAll('p, div, li');
for (let element of textElements) {
    wrapTextInSpan(element)
}

let elements = new Map([
    [0, "\\( 1"],
    [30, "\\( \\frac{\\sqrt{3}}{2} + \\frac{1}{2}i \\)"],
    [45, "\\( \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i \\)"],
    [60, "\\( \\frac{1}{2} + \\frac{\\sqrt{3}}{2}i \\)"],
    [90, "\\( i \\)"],
    [120, "\\( -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i \\)"],
    [135, "\\( -\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i \\)"],
    [150, "\\( -\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i \\)"],
    [180, "\\( -1 \\)"],
    [210, "\\( -\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i \\)"],
    [225, "\\( -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}i \\)"],
    [240, "\\( -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i \\)"],
    [270, "\\( -i \\)"],
    [300, "\\( \\frac{1}{2} - \\frac{\\sqrt{3}}{2}i \\)"],
    [315, "\\( \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}i \\)"],
    [330, "\\( \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i \\)"]
]);
let angleElements = new Map([
    [90, "i"],
    [180, "-1"],
    [270, "-i"],
]);
let main = document.getElementById('main')
function compareArr(arr1, arr2) {
    // if (arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
    return true;
}
function predict(index, angle) {

    let prediction = []

    // 8k + 2 (2, 10, 18, 26...)
    if ((index - 2) % 8 == 0) {
        if (angle == 90) prediction.push(45, 225) // Useful
        if (angle == 180) prediction.push(90, 270)
        if (angle == 270) prediction.push(135, 315) // Useful
    }
    // 8k - 2 (6, 14, 22, 30...)
    if ((index + 2) % 8 == 0) {
        if (angle == 90) prediction.push(135, 315) // Useful
        if (angle == 180) prediction.push(90, 270)
        if (angle == 270) prediction.push(45, 225) // Useful
    }
    // 8k + 4 (4, 12, 20, 28...)
    if ((index + 4) % 8 == 0) {
        if (angle == 180) prediction.push(45, 135, 225, 315) // Useful
    }

    // 4k - 1   (3, 7, 11, 15...)
    if ((index - 3) % 4 == 0) {
        if (angle == 90) prediction.push(270)
        if (angle == 270) prediction.push(90)

        // 12k + 3
        if ((index - 3) % 12 == 0) {
            if (angle == 90) prediction.push(30, 150) // Useful
            if (angle == 270) prediction.push(210, 330) // Useful
        }
    }
    // 4k + 1   (1, 5, 9, 13, 17...)
    if ((index - 1) % 4 == 0) {
        if (angle == 90) prediction.push(90)
        if (angle == 270) prediction.push(270)

        // 12k - 3   (9, 21, 33, )
        if ((index + 3) % 12 == 0) {
            if (angle == 90) prediction.push(210, 330) // Useful
            if (angle == 270) prediction.push(30, 150) // Useful
        }
    }

    // 12k + 6
    if ((index + 6) % 12 == 0) { // Always includes 90, 330
        if (angle == 180) prediction.push(30, 150, 210, 330) // Useful
    }

    // 6k + 3   (9, 15, 21, 27..)
    if ((index - 3) % 6 == 0) {
        if (angle == 180) prediction.push(60, 300)
    }
    // 2k + 1   (5, 7, 9, 11...) Odd
    if ((index - 1) % 2 == 0) {
        if (angle == 180) prediction.push(180)
    }


    // Eight roots

    // 16k + 4
    if ((index - 4) % 16 == 0) {
        if (angle == 90) prediction.push(112.5, 202.5, 22.5, 292.5)
        if (angle == 270) prediction.push(157.5, 247.5, 337.5, 67.5)
    }
    // 16k - 4
    if ((index + 4) % 16 == 0) {
        if (angle == 90) prediction.push(157.5, 247.5, 337.5, 67.5)
        if (angle == 270) prediction.push(112.5, 202.5, 22.5, 292.5)
    }
    // 16k + 8
    if ((index - 8) % 16 == 0) {
        if (angle == 180) prediction.push(157.5, 247.5, 337.5, 67.5, 112.5, 202.5, 22.5, 292.5)
    }

    // 16th roots

    // 32k + 8
    if ((index - 8) % 32 == 0) {
        if (angle == 90) prediction.push(101.25, 11.25, 146.25, 191.25, 236.25, 281.25, 326.25, 56.25)
        if (angle == 270) prediction.push(123.75, 168.75, 213.75, 258.75, 303.75, 33.75, 348.75, 78.75)
    }
    // 32k - 8
    if ((index + 8) % 32 == 0) {
        if (angle == 90) prediction.push(123.75, 168.75, 213.75, 258.75, 303.75, 33.75, 348.75, 78.75)
        if (angle == 270) prediction.push(101.25, 11.25, 146.25, 191.25, 236.25, 281.25, 326.25, 56.25)
    }
    // 32k + 16
    if ((index - 16) % 32 == 0) {
        if (angle == 180) prediction.push(11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75)
    }
    
    return prediction
}

for (let index = 1; index <= 143; index += 1) {
    continue;
    let subheadings = []

    let logHeading = true;

    for (let angle = 90; angle <= 270; angle += 90) {

        let principle = angle
        let angles = []

        while (principle <= 360 * index) {
            angles.push(principle / index)
            principle += 360
        }

        let usefulAngles = [45, 135, 225, 315, 30, 60, 120, 150, 210, 240, 300, 330, 0, 90, 180, 270, 360].concat([11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75])
        let finalAngles = angles.filter((angle) => usefulAngles.includes(angle))
        let usefulAngles2 = [11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75]
        let finalAngles2 = angles.filter((angle) => usefulAngles2.includes(angle))

        // if (finalAngles.length) {
        if (finalAngles2.length) {

            if (logHeading) {
                console.log(` > Index: ${index}`)
                logHeading = false
            }
            let predictedAngles = predict(index, angle)
            let match = compareArr(finalAngles, predictedAngles) ? 'Match' : 'No Match'

            console.log(`Index: ${index} | Angle: ${angle} |`, finalAngles, predictedAngles, match)
            
            // let paragraph = document.createElement('li')
            
            // let radicand = angleElements.get(angle)
            // let answer = elements.get(finalAngles[0])
            // paragraph.innerHTML = `\\( \\sqrt[${index}]{${radicand}} \\) = ${answer}`

            // subheadings.push(paragraph)
        }

    }

    if (subheadings.length) {
        let container = document.createElement('div')
        container.style.margin = '0 10px'
        let header = document.createElement('p')
        if (index == 2) {
            header.innerHTML = `\\( \\sqrt[${index}]{z} \\) - Square Roots:`
        } else if (index == 3) {
            header.innerHTML = `\\( \\sqrt[${index}]{z} \\) - Cube Roots:`
        } else {
            header.innerHTML = `\\( \\sqrt[${index}]{z} \\) - ${index}th Roots:`
        }
        container.appendChild(header);
        for (let subheading of subheadings) {
            container.appendChild(subheading);
        }
        main.append(container)
    }

}

const rootTable1 = document.querySelector('#root_table1');
const rootTable2 = document.querySelector('#root_table2');
const tables = [rootTable1, rootTable2];

function createTableHeader(headers) {
    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.append(document.createElement('th'));

    headers.forEach(header => {
        let th = document.createElement('th');
        let offset = header[1];
        let multiple = header[0];
        let pm_sign = offset > 0 ? '+' : '-'
        th.innerText = `\\( ${multiple}k ${pm_sign} ${Math.abs(offset)} \\)`
        tableHeaderRow.appendChild(th);
    });

    return tableHeaderRow;
}

function createTableRow(index, headers) {
    const tableRow = document.createElement('tr');
    const tableRowLabel = document.createElement('td');
    tableRowLabel.innerText = `\\( ${index.toString()} \\)`;
    tableRow.append(tableRowLabel);

    headers.forEach(header => {
        let tableData = document.createElement('td');
        let offset = header[1];
        let multiple = header[0];
        if ((index - offset) % multiple == 0) {
            tableData.innerText = tableMap.get(header.toString());
            tableRow.classList.add('white')
        }
        tableRow.appendChild(tableData);
    });

    return tableRow;
}

const tableMap = new Map([
    ['8,2', "\\( \\sqrt{i} \\)"],
    ['8,-2', "\\( \\sqrt{-i} \\)"],
    ['4,1', "\\( i \\)"],
    ['4,-1', "\\( -i \\)"],
    ['8,4', "\\( \\sqrt{\\pm i} \\)"],
    ['4,2', "\\( \\pm i \\)"],
    ['2,1', "\\( -1 \\)"],
]);

let tableLength = 100
let tableOrder = 'default'
// Order: Set to 'default' or an integer n (Signifies Multiple of 2^n)

const headers = [];

if (tableOrder === 'default') {
    headers.push(
        [[8, 2], [8, -2], [4, 1], [4, -1]],
        [[8, 4], [4, 2], [2, 1]]
    )
} else {
    let arr_i = []
    let arr_1 = [[2, 1]]
    for (let i = 2; i <= tableOrder; i++) {
        let k = 2 ** i
        arr_i.push([k, k / 4], [k, -k / 4])
        arr_1.push([k, k / 2])
        if (i >= 4) {
            tableMap.set(`${k},${k / 4}`, `\\( \\sqrt[${k / 4}]{i} \\)`)
            tableMap.set(`${k},${-k / 4}`, `\\( \\sqrt[${k / 4}]{-i} \\)`)
            tableMap.set(`${k},${k / 2}`, `\\( \\sqrt[${k / 4}]{\\pm i} \\)`)
        }
    }
    headers.push(arr_i, arr_1)
}

tables.forEach((table, i) => {
    table.append(createTableHeader(headers[i]));
    for (let j = 0; j <= tableLength; j++) {
        table.append(createTableRow(j, headers[i]));
    }
});

const tableToggle = document.querySelector('#table-toggle')
const tableContainer = document.querySelector('#table-container')

tableToggle.addEventListener('click', function() {

    this.classList.toggle('active')
    tableContainer.classList.toggle('show')

    if (this.classList.contains('active')) {
        this.innerText = 'Hide Table'
    } else {
        this.innerText = 'Show Table'
    }
})

function predict2(index, numerator, denominator, angle) {

    let prediction = []

    // 1 decimal precision

    // 2k + 1 / 2
    if ((numerator - 1) % 2 == 0 && denominator == 2) {
        if (angle == 180) prediction.push(360)
    }
    // 12k + 1 / 2
    if ((numerator - 1) % 12 == 0 && denominator == 2) {
        if (angle == 90) prediction.push(180)
    }
    // 12k - 1 / 2
    if ((numerator + 1) % 12 == 0 && denominator == 2) {
        if (angle == 270) prediction.push(180)
    }
    // 12k + 5 / 2
    if ((numerator - 5) % 12 == 0 && denominator == 2) {
        if (angle == 90) prediction.push(180)
    }
    // 12k - 5 / 2
    if ((numerator + 5) % 12 == 0 && denominator == 2) {
        if (angle == 270) prediction.push(180)
    }
    // 12k + 3 / 2
    if ((numerator - 3) % 12 == 0 && denominator == 2) {
        if (angle == 90) prediction.push(60, 300)
        if (angle == 180) prediction.push(120, 360)
        if (angle == 270) prediction.push(180)
    }
    // 12k - 3 / 2
    if ((numerator + 3) % 12 == 0 && denominator == 2) {
        if (angle == 90) prediction.push(180)
        if (angle == 180) prediction.push(120, 360)
        if (angle == 270) prediction.push(60, 300)
    }

    // 8k + 2 / 5
    if ((numerator - 2) % 8 == 0 && denominator == 5) {
        if (angle == 90) prediction.push(225)
    }
    // 8k - 2 / 5
    if ((numerator + 2) % 8 == 0 && denominator == 5) {
        if (angle == 270) prediction.push(225)
    }
    
    // 12k + 3 / 5
    if ((numerator - 3) % 12 == 0 && denominator == 5) {
        if (angle == 90) prediction.push(150)
        if (angle == 180) prediction.push(300)
    }
    // 12k - 3 / 5
    if ((numerator + 3) % 12 == 0 && denominator == 5) {
        if (angle == 270) prediction.push(150)
        if (angle == 180) prediction.push(300)
    }
    // 12k + 6 / 5
    if ((numerator - 6) % 12 == 0 && denominator == 5) {
        if (angle == 180) prediction.push(150)
    }

    // 12k - 3 / 10
    if ((numerator + 3) % 12 == 0 && denominator == 10) {
        if (angle == 270) prediction.push(300)
    }
    // 12k + 3 / 10
    if ((numerator - 3) % 12 == 0 && denominator == 10) {
        if (angle == 90) prediction.push(300)
    }

    // 16k + 12 / 
    if ((numerator - 12) % 16 == 0 && denominator == 5) {
        if (angle == 180) prediction.push(225)
    }
    // 16k + 4 / 
    if ((numerator - 4) % 16 == 0 && denominator == 5) {
        if (angle == 180) prediction.push(225)
    }

    // 2 decimal precision
    
    // 12k - 3 / 4
    if ((numerator + 3) % 12 == 0 && denominator == 4) {
        if (angle == 90) prediction.push(360)
        if (angle == 180) prediction.push(240)
        if (angle == 270) prediction.push(120)
    }
    // 12k + 3 / 4
    if ((numerator - 3) % 12 == 0 && denominator == 4) {
        if (angle == 90) prediction.push(120)
        if (angle == 180) prediction.push(240)
        if (angle == 270) prediction.push(360)
    }
    // 12k - 1 / 4
    if ((numerator + 1) % 12 == 0 && denominator == 4) {
        if (angle == 270) prediction.push(360)
    }
    // 12k + 1 / 4
    if ((numerator - 1) % 12 == 0 && denominator == 4) {
        if (angle == 90) prediction.push(360)
    }
    // 12k - 5 / 4
    if ((numerator + 5) % 12 == 0 && denominator == 4) {
        if (angle == 270) prediction.push(360)
    }
    // 12k + 5 / 4
    if ((numerator - 5) % 12 == 0 && denominator == 4) {
        if (angle == 90) prediction.push(360)
    }

    // 3 decimal precision

    // 12k - 3 / 4
    if ((numerator + 3) % 12 == 0 && denominator == 8) {
        if (angle == 270) prediction.push(240)
    }
    // 12k + 3 / 4
    if ((numerator - 3) % 12 == 0 && denominator == 8) {
        if (angle == 90) prediction.push(240)
    }

    return prediction
}

for (let index = 1; index <= 10; index += 0.1) {
// for (let index = 1.125; index <= 1.125; index += 0.001) {
    // continue;
    let precision = 9
    
    let roundedIndex = parseFloat(index.toFixed(precision))
    // if (roundedIndex % 1 == 0) continue;

    let subheadings = []
    let lengthsArr = []

    let logHeading = true;

    for (let angle = 90; angle <= 270; angle += 90) {

        let principle = angle
        let angles = []

        let i = 0
        while (true) {
            newAngle = (principle / roundedIndex) % 360
            roundedAngle = parseFloat(newAngle.toFixed(precision))
            i++
            if (i > 1000) break;
            if (angles.includes(roundedAngle)) break;
            angles.push(roundedAngle)
            principle += 360
        }
        // console.log(angles)

        let usefulAngles = [45, 135, 225, 315, 30, 60, 120, 150, 210, 240, 300, 330, 0, 90, 180, 270, 360]
        let finalAngles = angles.filter((angle) => usefulAngles.includes(angle))
        lengthsArr.push(angles.length)
        
        if (finalAngles.length) {
        // if (true) {

            if (logHeading) {
                // console.log(` > Index: ${roundedIndex}`)
                logHeading = false
            }
            
            let fractionIndex = math.fraction(roundedIndex)
            let numerator = fractionIndex.n, denominator = fractionIndex.d

            let predictedAngles = predict2(roundedIndex, numerator, denominator, angle)
            
            let match = compareArr(finalAngles, predictedAngles) ? 'Match' : 'No Match'

            // console.log(`Index: ${roundedIndex} | ${numerator}/${denominator} | Angle: ${angle} |`, finalAngles, predictedAngles, match)
            // console.log('Angles:', angles)
        }

    }

    if (subheadings.length) {
        let container = document.createElement('div')
        container.style.margin = '0 10px'
        let header = document.createElement('p')
        if (roundedIndex == 2) {
            header.innerHTML = `\\( \\sqrt[${roundedIndex}]{z} \\) - Square Roots:`
        } else if (roundedIndex == 3) {
            header.innerHTML = `\\( \\sqrt[${roundedIndex}]{z} \\) - Cube Roots:`
        } else {
            header.innerHTML = `\\( \\sqrt[${roundedIndex}]{z} \\) - ${roundedIndex}th Roots:`
        }
        container.appendChild(header);
        for (let subheading of subheadings) {
            container.appendChild(subheading);
        }
        main.append(container)
    }

}

function createElement(type, classList) {
    const element = document.createElement(type)
    element.classList = classList
    return element
}

// Answer Selection
function createAnswerChoice(container, type, label, place) {
    // Create Elements
    const answerChoice = createElement('li', 'question-answer-choice')
    const questionAnswerLetterOutline = createElement('div', 'question-answer-letter-outline')
    const questionAnswerLetter = createElement('div', 'question-answer-letter')
    const letter = document.createElement('div', '')
    const questionAnswerLabel = createElement('div', 'question-answer-label')
    // Append Elements
    answerChoice.append(questionAnswerLetterOutline)
    questionAnswerLetterOutline.append(questionAnswerLetter)
    questionAnswerLetter.append(letter)
    answerChoice.append(questionAnswerLabel)
    // Set text and behavior
    letter.innerText = String.fromCharCode(place + 65)
    questionAnswerLabel.innerText = label
    if (type === 'single-select') {
        answerChoice.addEventListener('click', selectSingleAnswer)
    } else if (type === 'multi-select') {
        answerChoice.addEventListener('click', selectMultiAnswer)
    }
    container.append(answerChoice)
}
function selectSingleAnswer() {
    if (this.classList.contains('submitted')) return;
    const answerChoiceList = this.parentElement
    const contentContainer = answerChoiceList.parentElement
    contentContainer.classList.remove('incorrect')
    if (!this.classList.contains('selected')) {
        // Unselects the previously selected choice if clicking on a new choice
        const siblingChoices = answerChoiceList.children
        for (const choice of siblingChoices) {
            choice.classList.remove('selected')
        }
    }
    this.classList.toggle('selected')
}
function selectMultiAnswer() {
    if (this.classList.contains('submitted')) return;
    const answerChoiceList = this.parentElement
    const contentContainer = answerChoiceList.parentElement
    contentContainer.classList.remove('incorrect')
    this.classList.toggle('selected')
}

// Submitting Answer
function createSubmitButton(answers, type) {
    // Create Elements
    const questionSubmitButton = createElement('button', 'question-submit-button')
    const text = createElement('div', '')
    questionSubmitButton.append(text)
    // Add Behavior
    text.innerText = 'Check'
    questionSubmitButton.addEventListener('click', () => {
        submitAnswer(questionSubmitButton, answers, type)
    })
    return questionSubmitButton
}
function submitAnswer(submitButton, answers, type) {
    // Already Submitted
    if (submitButton.classList.contains('submitted')) return;

    const answerChoiceList = submitButton.previousSibling
    let answer = validateAnswer(answerChoiceList, answers, type)
    // Remove incorrect border
    const contentContainer = submitButton.parentElement
    contentContainer.classList.remove('incorrect')

    function showNextButton(submitButton) {
        // Prevent answer choices from being selected
        for (let choice of answerChoiceList.children) {
            choice.classList.add('submitted')
        }
        // Determine whether current question is the last question
        const questionContainer = contentContainer.parentElement
        const indicatorContainer = questionContainer.querySelector('.question-indicator-container')
        const selectedIndicator = indicatorContainer.querySelector('.question-indicator-outline.selected')
        // If not last question, add "Next Question" button
        if (selectedIndicator.dataset.place != indicatorContainer.children.length - 1) {
            // Create Elements
            const nextQuestionButton = createElement('button', 'question-next-button')
            const text = document.createElement('text')
            nextQuestionButton.append(text)
            // Add Behavior
            text.innerText = 'Next Question'
            nextQuestionButton.addEventListener('click', function() {
                selectedIndicator.nextSibling.click()
            })
            submitButton.parentElement.insertBefore(nextQuestionButton, submitButton.nextSibling);
        }
    }

    if (answer === true) {
        // Show next button on correct answer submitted
        submitButton.classList.add('submitted')
        contentContainer.classList.add('correct')
        showNextButton(submitButton)
    } else {
        // Show next button if all answers selected
        contentContainer.classList.add('incorrect')
        if (type === 'multi-select') {
            let allChoicesSelected = true
            for (let choice of answerChoiceList.children) {
                if (!choice.classList.contains('selected')) {
                    allChoicesSelected = false;
                }
            }
            if (allChoicesSelected) {
                submitButton.classList.add('submitted')
                showNextButton(submitButton)
            };
        };
    };
};
function validateAnswer(container, answers, type) {
    if (type === 'single-select') {
        let selectedArr = []
        for (let choice of container.children) {
            if (choice.classList.contains('selected')) {
                selectedArr.push(true)
                choice.classList.add('submitted')
                if (selectedArr[answers[0]]) {
                    choice.classList.add('correct')
                    return true
                } else {
                    choice.classList.add('incorrect')
                }
            } else {
                selectedArr.push(false)
            }
        }
    } else if (type === 'multi-select') {
        let selectedArr = []
        for (let choice of container.children) {
            // If choice already selected
            if (choice.classList.contains('correct')) {
                selectedArr.push(true)
            } else if (choice.classList.contains('incorrect')) {
                selectedArr.push(false)
            } else if (choice.classList.contains('selected')) {
                if (answers[selectedArr.length]) {
                    choice.classList.add('correct')
                } else {
                    choice.classList.add('incorrect')
                }
                selectedArr.push(true)
                choice.classList.add('submitted')
            } else {
                selectedArr.push(false)
            }
        }
        let result = true
        for (let i = 0; i < selectedArr.length; i++) {
            if (answers[i] != selectedArr[i]) {
                result = false
            }
        }
        return result
    }
}

// Explanation
function createExplanation(contentContainer, explanation) {
    const questionExplainButton = createElement('button', 'question-explain-button')
    questionExplainButton.innerText = 'Explain'
    questionExplainButton.addEventListener('click', () => {
        toggleExplanation(questionExplainButton, explanation)
    })
    contentContainer.append(questionExplainButton, explanation)
    contentContainer.append(explanation)
}
function toggleExplanation(explanationButton, explanation) {
    if (!explanationButton.classList.contains('shown')) {
        // Show Explanation
        explanationButton.classList.add('shown')
        explanation.classList.add('shown')
        explanationButton.innerText = 'Hide Explanation'
    } else {
        // Hide Explanation
        explanationButton.classList.remove('shown')
        explanation.classList.remove('shown')
        explanationButton.innerText = 'Explain'
    }
}

function createQuestion(questionContainer, questionNumber) {

    const question = problemSetMap.get(questionContainer.id)[questionNumber]
    const contentContainer = questionContainer.querySelector('.question-content-container')

    // Remove all content
    while (contentContainer.children.length) {
        contentContainer.children[0].remove()
    }

    // Question Text
    const questionContent = createElement('div', 'question-content')
    question.content(questionContent)
    wrapTextInSpan(questionContent)
    contentContainer.append(questionContent)

    // Question Input
    if (question.type === 'single-select' || question.type === 'multi-select') {
        // Create instructions
        const questionInstructions = createElement('div', 'question-instructions')
        if (question.type === 'single-select') {
            questionInstructions.innerText = 'Choose 1 answer:'
        } else if (question.type === 'multi-select') {
            questionInstructions.innerText = 'Choose all answers that apply:'
        }
        contentContainer.append(questionInstructions)
        // Create answer choices
        const questionAnswerChoiceList = createElement('ul', 'question-answer-choice-list')
        questionAnswerChoiceList.classList.add(question.type)
        for (let i = 0; i < question.choices.length; i++) {
            createAnswerChoice(questionAnswerChoiceList, question.type, question.choices[i], i)
        }

        contentContainer.append(questionAnswerChoiceList)
    } else if (question.type === 'cube-input') {
        // Create cube input element (Revisit later)
        return;
        const questionCubeInput = createElement('div', 'question-cube-input')
        let showCubeInput = window.innerWidth <= 764
        const solutionViewContainer = contentContainer.querySelector('.solution-view-container')
        const solutionContainer = solutionViewContainer.children[0]
        solutionContainer.classList.remove('disabled')
        if (showCubeInput) {
            questionCubeInput.append(solutionViewContainer)
        } else {
            questionCubeInput.classList.add('hidden')
        }
        // Resize event
        const inputContainer = contentContainer.querySelector('.input-container')
        window.onresize = () => {
            let showCubeInput = window.innerWidth <= 764
            if (showCubeInput) {
                questionCubeInput.append(solutionViewContainer)
                questionCubeInput.classList.remove('hidden')
            } else {
                inputContainer.prepend(solutionViewContainer)
                questionCubeInput.classList.add('hidden')
            }
        }
        contentContainer.append(questionCubeInput)

    }

    // Question Submit and Explanation
    contentContainer.append(createSubmitButton(question.answers, question.type))
    const explanation = createElement('div', 'question-explanation-text')
    question.explanation(explanation)
    wrapTextInSpan(explanation)
    createExplanation(contentContainer, explanation)
    
    MathJax.typeset([contentContainer])
    
}

// Question Navigation Indicators
function createIndicator(container, place) {
    // Create Elements
    const questionIndicatorContainer = container.querySelector('.question-indicator-container')
    const questionIndicatorOutline = createElement('li', 'question-indicator-outline')
    const questionIndicator = createElement('div', 'question-indicator')
    // Append Elements
    questionIndicatorOutline.append(questionIndicator)
    questionIndicatorContainer.append(questionIndicatorOutline)
    // Add Behvaior
    questionIndicatorOutline.dataset.place = place
    questionIndicatorOutline.addEventListener('click', () => {
        selectQuestion(container, questionIndicatorOutline)
    })
}
function selectQuestion(questionContainer, indicator) {
    const indicatorContainer = indicator.parentElement
    const contentContainer = questionContainer.querySelector('.question-content-container')
    contentContainer.classList.remove('correct')
    contentContainer.classList.remove('incorrect')
    for (let element of indicatorContainer.children) {
        element.classList.remove('selected')
    }
    indicator.classList.toggle('selected')
    createQuestion(contentContainer.parentElement, indicator.dataset.place)
}

// Types:
// single-select: Multiple Choice (1 answer)
// multi-select: Multiple Choice (select all)
const problemSet1 = [
    {
        content: (questionContent) => {
            questionContent.innerHTML = 
            `<p>\\(\\sqrt[18]{i}\\) shares solutions with which of the following?</p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = 
            `<p>Our index, \\(18\\), falls into the \\(8k + 2\\) pattern (it's \\(2\\) more than \\(16\\)). Our rule for \\(n = 8k + 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = \\sqrt{i}\\)</li>
                <li>\\(\\sqrt[n]{-i} = \\sqrt{-i}\\)</li>
            </ul>
            <p>The radicand under our root is \\(i\\), so our problem falls under the first equation: \\(\\sqrt[n]{i} = \\sqrt{i}\\)</p>
            <p>Therefore, \\(\\sqrt[18]{i}\\) shares solutions with \\(\\sqrt{i}\\).</p>`
        },
        type: 'single-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
        ],
        answers: [2],
    },
    {
        content: (questionContent) => {
            questionContent.innerHTML = 
            `<p>\\(\\sqrt[63]{i}\\) shares solutions with which of the following?</p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = 
            `<p>Our index, \\(63\\), falls into the \\(4k - 1\\) pattern (it's \\(1\\) less than \\(64\\)). Our rule for \\(n = 4k - 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = -i\\)</li>
                <li>\\(\\sqrt[n]{-i} = i\\)</li>
            </ul>
            <p>The radicand under our root is \\(i\\), so our problem falls under the first equation: \\(\\sqrt[n]{i} = -i\\)</p>
            <p>Therefore, \\(\\sqrt[63]{i}\\) has a solution at \\(-i\\).</p>`
        },
        type: 'single-select',
        choices: [
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            '\\(i\\)',
            '\\(-i\\)',
        ],
        answers: [3],
    },
    {
        content: (questionContent) => {
            questionContent.innerHTML = 
            `<p>\\(\\sqrt[54]{-i}\\) shares solutions with which of the following?</p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = 
            `<p>Our index, \\(54\\), falls into the \\(8k - 2\\) pattern (it's \\(2\\) less than \\(56\\)). Our rule for \\(n = 8k - 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = \\sqrt{-i}\\)</li>
                <li>\\(\\sqrt[n]{-i} = \\sqrt{i}\\)</li>
            </ul>
            <p>The radicand under our root is \\(-i\\), so our problem falls under the second equation: \\(\\sqrt[n]{-i} = \\sqrt{i}\\)</p>
            <p>Therefore, \\(\\sqrt[54]{i}\\) has a solution at \\(\\sqrt{i}\\).</p>`
        },
        type: 'single-select',
        choices: [
            '\\(i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(-i\\)',
            '\\(\\sqrt{-i}\\)',
        ],
        answers: [1],
    },
    {
        content: (questionContent) => {
            questionContent.innerHTML = 
            `<p>\\(\\sqrt[34]{i}\\) shares solutions with which of the following?</p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = 
            `<p>Our index, \\(34\\), falls into the \\(8k + 2\\) pattern (it's \\(2\\) more than \\(32\\)). Our rule for \\(n = 8k + 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = \\sqrt{i}\\)</li>
                <li>\\(\\sqrt[n]{-i} = \\sqrt{-i}\\)</li>
            </ul>
            <p>The radicand under our root is \\(i\\), so our problem falls under the first equation and shares solutions with \\(\\sqrt{i}\\). Therefore, \\(\\sqrt{i}\\) is one of our correct answer choices.</p>
            <p>Let's check our other answer choices by seeing if they share solutions with \\(\\sqrt{i}\\):</p>
            <ul>
                <li>
                    <div>\\(i\\), \\(-i\\), and \\(\\sqrt{-i}\\) do not share solutions with \\(\\sqrt{i}\\)</div>
                </li>
                <li>
                    <p>\\(\\sqrt{-1}\\) falls into the \\(4k + 2\\) pattern. Our rule for \\(n = 4k + 2\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{-1} = \\pm i\\)</li>
                    </ul>
                    <p>This means that \\(\\sqrt{-1}\\) has solutions at \\(i\\) and \\(-i\\). However, neither \\(i\\) nor \\(-i\\) share a solution with \\(\\sqrt{i}\\).
                </li>
                <li>
                    <p>\\(\\sqrt[4]{-1}\\) falls into the \\(8k + 4\\) pattern. Our rule for \\(n = 8k + 4\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{-1} = \\sqrt{\\pm i}\\)</li>
                    </ul>
                    <p>This means that \\(\\sqrt{-1}\\) has solutions at \\(\\sqrt{i}\\) and \\(\\sqrt{-i}\\). Therefore, \\(\\sqrt[4]{-1}\\) does share solutions with \\(\\sqrt{i}\\), and it is one of our correct answer choices.</p>
                </li>
            </ul>
            <p>In conclusion, our correct answer choices are \\(\\sqrt{i}\\) and \\(\\sqrt[4]{-1}\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(\\sqrt{i}\\)',
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{-1}\\)',
            '\\(\\sqrt{-i}\\)',
            '\\(\\sqrt[4]{-1}\\)',
        ],
        answers: [true, false, false, false, false, true],
    },
    {
        content: (questionContent) => {
            questionContent.innerHTML = 
            `<p>\\(\\sqrt[78]{-1}\\) shares solutions with which of the following?</p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = 
            `<p>Our index, \\(78\\), falls into the \\(4k + 2\\) pattern (it's \\(2\\) more than \\(78\\)). Our rule for \\(n = 4k + 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{-1} = \\pm i\\)</li>
            </ul>
            <p>This means that \\(\\sqrt[78]{-1}\\) has solutions at \\(i\\) and \\(-i\\). Therefore, both \\(i\\) and \\(-i\\) are correct answer choices.</p>
            <p>Let's check our other answer choices by seeing if they have a solution at either \\(i\\) or \\(-i\\):</p>
            <ul>
                <li>
                    <p>\\(\\sqrt[59]{i}\\) falls into the \\(4k - 1\\) pattern (it's \\(1\\) less than \\(60\\)). Our rule for \\(n = 4k - 1\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{i} = -i\\)</li>
                        <li>\\(\\sqrt[n]{-i} = i\\)</li>
                    </ul>
                    <p>With a radicand of \\(i\\), \\(\\sqrt[59]{i}\\) has a solution at \\(-i\\), and it is one of our correct answer choices.</p>
                </li>
                <li>
                    <p>\\(\\sqrt[66]{-1}\\) falls into the \\(4k + 2\\) pattern (it's \\(2\\) more than \\(64\\)). Our rule for \\(n = 4k + 2\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{-1} = \\pm i\\)</li>
                    </ul>
                    <p>This means that \\(\\sqrt[66]{-1}\\) has solutions at both \\(i\\) and \\(-i\\), and it is one of our correct answer choices.</p>
                </li>
                <li>
                    <p>\\(\\sqrt[66]{i}\\) falls into the \\(8k + 2\\) pattern (it's \\(2\\) more than \\(64\\)). Our rule for \\(n = 8k + 2\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{i} = \\sqrt{i}\\)</li>
                        <li>\\(\\sqrt[n]{-i} = \\sqrt{-i}\\)</li>
                    </ul>
                    <p>With a radicand of \\(i\\), this means that \\(\\sqrt[66]{i}\\) shares solutions with \\(\\sqrt{i}\\). However, \\(\\sqrt{i}\\) doesn't have solutions at \\(i\\) or \\(-i\\).</p>
                </li>
                <li>
                    <p>\\(\\sqrt[60]{-1}\\) falls into the \\(8k + 4\\) pattern (it's \\(4\\) more than \\(56\\)). Our rule for \\(n = 8k + 4\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{-1} = \\sqrt{\\pm i}\\)</li>
                    </ul>
                    <p>This means that \\(\\sqrt[60]{-1}\\) shares solutions with  both \\(\\sqrt{i}\\) and \\(\\sqrt{-i}\\). However, neither \\(\\sqrt{i}\\) nor \\(\\sqrt{-i}\\) have solutions at \\(i\\) or \\(-i\\).
                </li>
            </ul>
            <p>In conclusion, our correct answer choices are \\(i\\), \\(\\sqrt[59]{i}\\), \\(\\sqrt[66]{-1}\\), and \\(-i\\).</p>
            <div class="note">Note: The reason \\(\\sqrt[66]{-1}\\) falls into the \\(4k + 2\\) pattern but \\(\\sqrt[66]{i}\\) falls into the \\(8k + 2\\) pattern is because our \\(4k + 2\\) pattern is only defined when our radicand is \\(-1\\), whereas our \\(8k + 2\\) pattern is defined when our radicand is \\(i\\) or \\(-i\\).</div>`
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(\\sqrt[59]{i}\\)',
            '\\(\\sqrt[66]{-1}\\)',
            '\\(\\sqrt[66]{i}\\)',
            '\\(-i\\)',
            '\\(\\sqrt[60]{-1}\\)',
        ],
        answers: [true, true, true, false, true, false],
    },
    {
        content: (questionContent) => {
            questionContent.innerHTML = 
            `<p>\\(\\sqrt[-67]{i}\\) shares solutions with which of the following?</p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = 
            `<p>Because our index, \\(-67\\), is negative, we need to move the negative sign from our index to our radicand. After doing so, our new problem becomes \\(\\sqrt[67]{-i}\\).</p>
            <p>Our new index, \\(67\\), falls into the \\(4k - 1\\) pattern (it's \\(1\\) less than \\(68\\)). Our rule for \\(n = 4k - 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = -i\\)</li>
                <li>\\(\\sqrt[n]{-i} = i\\)</li>
            </ul>
            <p>The radicand under our root is \\(-i\\), so our problem falls under the second equation: \\(\\sqrt[n]{-i} = i\\)</p>
            <p>Therefore, \\(\\sqrt[-67]{i}\\) has a solution at \\(i\\).</p>`
        },
        type: 'single-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
        ],
        answers: [0],
    },
    {
        content: (questionContent) => {
            questionContent.innerHTML = 
            `<p>\\(\\sqrt[-34]{-i}\\) shares solutions with which of the following?</p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = 
            `<p>Because our index, \\(-34\\), is negative, we need to move the negative sign from our index to our radicand. After doing so, our new problem becomes \\(\\sqrt[34]{i}\\).</p>
            <p>Our new index, \\(34\\), falls into the \\(8k + 2\\) pattern (it's \\(2\\) more than \\(32\\)). Our rule for \\(n = 8k + 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = \\sqrt{i}\\)</li>
                <li>\\(\\sqrt[n]{-i} = \\sqrt{-i}\\)</li>
            </ul>
            <p>The radicand under our root is \\(i\\), so our problem falls under the first equation and shares solutions with \\(\\sqrt{i}\\).</p>
            <p>Let's check our other answer choices by seeing if they share solutions with \\(\\sqrt{i}\\):</p>
            <ul>
                <li>
                    <p>\\(\\sqrt[-38]{i}\\) can be rewritten as \\(\\sqrt[38]{-i}\\), which falls into the \\(8k - 2\\) pattern (it's \\(2\\) less than \\(40\\)). Our rule for \\(n = 8k - 2\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{i} = \\sqrt{-i}\\)</li>
                        <li>\\(\\sqrt[n]{-i} = \\sqrt{i}\\)</li>
                    </ul>
                    <p>With a radicand of \\(-i\\), this means that \\(\\sqrt[38]{-i}\\) shares solutions with \\(\\sqrt{i}\\) and is one of our correct answer choices.
                </li>
                <li>
                    <p>\\(\\sqrt[58]{-1}\\) falls into the \\(4k + 2\\) pattern (it's \\(2\\) more than \\(56\\)). Our rule for \\(n = 4k + 2\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{-1} = \\pm i\\)</li>
                    </ul>
                    <p>This means that \\(\\sqrt[58]{-1}\\) has solutions at both \\(i\\) and \\(-i\\). However, neither \\(i\\) nor \\(-i\\) are solutions to \\(\\sqrt{i}\\).
                <li>
                    <p>\\(\\sqrt[92]{i}\\) doesn't fall into any of our patterns because it's an exact multiple of \\(4\\) with a radicand of \\(i\\). Therefore, \\(\\sqrt[92]{i}\\) cannot be a correct answer choice.
                </li>
                <li>
                    <p>\\(\\sqrt[-38]{-i}\\) can be rewritten as \\(\\sqrt[38]{i}\\), which falls into the \\(8k - 2\\) pattern (it's \\(2\\) less than \\(40\\)). Our rule for \\(n = 8k - 2\\) is as follows:</p>
                    <ul style="margin-top: -16px">
                        <li>\\(\\sqrt[n]{i} = \\sqrt{-i}\\)</li>
                        <li>\\(\\sqrt[n]{-i} = \\sqrt{i}\\)</li>
                    </ul>
                    <p>With a radicand of \\(i\\), this means that \\(\\sqrt[38]{i}\\) shares solutions with \\(\\sqrt{-i}\\). However, \\(\\sqrt{-i}\\) does not share solutions with \\(\\sqrt{i}\\).
                </li>
                <li>
                    \\(\\sqrt{-i}\\) does not share solutions with \\(\\sqrt{i}\\) and is not a correct answer choice.
                </li>
            </ul>
            <p>In conclusion, our correct answer choices are \\(\\sqrt{i}\\) and \\(\\sqrt[-38]{i}\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt[-38]{i}\\)',
            '\\(\\sqrt[58]{-1}\\)',
            '\\(\\sqrt[92]{i}\\)',
            '\\(\\sqrt[-38]{-i}\\)',
            '\\(\\sqrt{-i}\\)',
        ],
        answers: [true, true, false, false, false, false],
    },
]
function createSmallBoard(cubes = {goal: []}) {
    // Create Main Container
    const smallBoardContainer = createElement('div', 'small-board-container')

    // Create Input Container
    const goalViewContainer = createElement('div', 'goal-view-container')
    const goalContainer = createElement('div', 'goal-container')
    const bar = createElement('div', 'goal-bar')
    const text = createElement('div', 'goal-text')
    text.innerText = 'Goal'
    goalViewContainer.append(goalContainer, bar)
    bar.append(text)

    smallBoardContainer.append(goalViewContainer)

    inputCubes(goalContainer, cubes.goal, 'goal-cube')
    return smallBoardContainer
}
// Next problem set
const problemSet2 = [
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below:`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '6', color: 'green'},
                {symbol: '2', color: 'red'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'green', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
            questionContent.innerHTML += `<div class="note" style="margin: -20px 0 28px">Note: The last cube is a sideways subtraction sign, which is used to denote \\(i\\).</div>
            `
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\(\\sqrt[62]{i}\\).</p>
            <p>Our index, \\(62\\), falls into the \\(8k - 2\\) pattern (it's \\(2\\) less than \\(64\\)). Our rule for \\(n = 8k - 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = \\sqrt{-i}\\)</li>
                <li>\\(\\sqrt[n]{-i} = \\sqrt{i}\\)</li>
            </ul>
            <p>However, because \\(i\\), when used in the goal, is ambiguous as to whether it is right side up or upside down, we can interpret our goal as both \\(\\sqrt[62]{i}\\) and \\(\\sqrt[62]{-i}\\).</p>
            <p>Interpreting the goal as \\(\\sqrt[62]{i}\\) gives us a solution of \\(\\sqrt{-i}\\), whereas interpreting the goal as \\(\\sqrt[62]{-i}\\) gives us a solution of \\(\\sqrt{i}\\).</p>
            <p>In conclusion, our correct answer choices are \\(\\sqrt{i}\\) and \\(\\sqrt{-i}\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [false, false, true, true, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below:`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '1', color: 'green'},
                {symbol: '3', color: 'red'},
                {symbol: 'x', color: 'green'},
                {symbol: '3', color: 'red'},
                {symbol: '&nbsp'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'green', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
            questionContent.innerHTML += `<div class="note" style="margin: -20px 0 28px">Note: Be mindful of the space before the square root cube, which is used to indicate parenthesis.</div>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\((13 \\times 3)\\sqrt{i}\\), which computes to \\(\\sqrt[39]{i}\\).</p>
            <p>Our index, \\(39\\), falls into the \\(4k - 1\\) pattern (it's \\(1\\) less than \\(40\\)). Our rule for \\(n = 4k - 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = -i\\)</li>
                <li>\\(\\sqrt[n]{-i} = i\\)</li>
            </ul>
            <p>However, because \\(i\\), when used in the goal, is ambiguous as to whether it is right side up or upside down, we can interpret our goal as both \\(\\sqrt[39]{i}\\) and \\(\\sqrt[39]{-i}\\).</p>
            <p>Interpreting the goal as \\(\\sqrt[39]{i}\\) gives us a solution of \\(-i\\), whereas interpreting the goal as \\(\\sqrt[39]{-i}\\) gives us a solution of \\(i\\).</p>
            <p>In conclusion, our correct answer choices are \\(i\\) and \\(-i\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [true, true, false, false, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below and the following variations: <em>Base \\(9\\)</em>, <em>Imaginary</em>`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '6', color: 'green'},
                {symbol: '7', color: 'black'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'red', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\(\\sqrt[67]{i}\\), which computes to \\(\\sqrt[61]{i}\\) once you account for the <em>Base \\(9\\)</em> variation (\\(6 \\times 9 + 7\\)).</p>
            <p>Our new index, \\(61\\), falls into the \\(4k + 1\\) pattern (it's \\(1\\) more than \\(60\\)). Our rule for \\(n = 4k + 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = i\\)</li>
                <li>\\(\\sqrt[n]{-i} = -i\\)</li>
            </ul>
            <p>Interpreting the goal as \\(\\sqrt[61]{i}\\) gives us a solution of \\(i\\), whereas interpreting the goal as \\(\\sqrt[61]{-i}\\) gives us a solution of \\(-i\\).</p>
            <p>In conclusion, our correct answer choices are \\(i\\) and \\(-i\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [true, true, false, false, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below and the following variations: <em>Base \\(11\\)</em>, <em>Imaginary</em></p>`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '^', color: 'green', orientation: 'upsidedown'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'red', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
            questionContent.innerHTML += `<div class="note" style="margin: -20px 0 28px">Note: The first cube is an upside down exponent cube. In Base \\(11\\), the exponent cube can be used to represent the digit \\(10\\).</div>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\(\\sqrt[-10]{i}\\), which becomes \\(\\sqrt[10]{-i}\\) once we use our property of negative exponents.</p>
            <p>Our new index, \\(10\\), falls into the \\(8k + 2\\) pattern. Our rule for \\(n = 8k + 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = \\sqrt{i}\\)</li>
                <li>\\(\\sqrt[n]{-i} = \\sqrt{-i}\\)</li>
            </ul>
            <p>Interpreting the goal as \\(\\sqrt[-10]{i}\\), which becomes \\(\\sqrt[10]{-i}\\), gives us a solution of \\(\\sqrt{-i}\\). Interpreting the goal as \\(\\sqrt[-10]{-i}\\), which becomes \\(\\sqrt[10]{i}\\), gives us a solution of \\(\\sqrt{i}\\). (Be careful with the signs here).</p>
            <p>In conclusion, our correct answer choices are \\(\\sqrt{i}\\) and \\(\\sqrt{-i}\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [false, false, true, true, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below and the following variations: <em>Powers of the Base</em>, <em>Imaginary</em></p>`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '9', color: 'black'},
                {symbol: '7', color: 'black'},
                {symbol: '−', color: 'green'},
                {symbol: '1', color: 'red'},
                {symbol: '&nbsp'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'red', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
            questionContent.innerHTML += `<div class="note" style="margin: -20px 0 28px">Note: With Powers of the Base, the \\(1\\) cube can be used to represent any integral power of \\(10\\) (e.g. \\(10\\), \\(100\\), \\(1000\\) . . . ).</div>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\((97-1)\\sqrt{i}\\). If we try to directly compute our index \\((97 - 1)\\) to solve for \\(\\sqrt[96]{i}\\), our new index, \\(96\\), becomes an exact multiple of \\(4\\) with a radicand of \\(i\\). This does not fall into any of our patterns.</p>
            <p>Instead, we can use the <em>Powers of the Base</em> variation to intepret the \\(1\\) as a \\(10\\), making our new goal \\((97-10)\\sqrt{i}\\), which computes to \\(\\sqrt[87]{i}\\).</p>
            <p>Our new index, \\(87\\), falls into the \\(4k - 1\\) pattern (it's \\(1\\) less than \\(88\\)). Our rule for \\(n = 4k - 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = -i\\)</li>
                <li>\\(\\sqrt[n]{-i} = i\\)</li>
            </ul>
            <p>Interpreting the goal as \\(\\sqrt[87]{i}\\) gives us a solution of \\(-i\\), whereas interpreting the goal as \\(\\sqrt[87]{-i}\\) gives us a solution of \\(i\\).</p>
            <p>While we can interpret the goal with higher powers of \\(10\\), this won't reveal any new solutions. For demonstrative purposes, we can try to interpret the \\(1\\) in the goal as \\(100\\) to see what happens.
            <p>Our new goal, \\((97-100)\\sqrt{i}\\) computes to \\(\\sqrt[-3]{i}\\), or \\(\\sqrt[3]{-i}\\) if we use our properties of negative exponents. Our new index, \\(3\\), falls into the \\(4k - 1\\) pattern. Our rule for \\(n = 4k - 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = -i\\)</li>
                <li>\\(\\sqrt[n]{-i} = i\\)</li>
            </ul>
            <p>No matter which power of \\(10\\) we use, our possible solutions will still be \\(i\\) and \\(-i\\). (This has to do with the fact that powers of even numbers will stay even, and that powers of odd numbers will stay odd).</p>
            <p>In conclusion, our correct answer choices are \\(i\\) and \\(-i\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [true, true, false, false, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below and the following variations: <em>Factorial</em>, <em>Imaginary</em></p>`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '5', color: 'green'},
                {symbol: '4', color: 'green'},
                {symbol: '+', color: 'black'},
                {symbol: '2', color: 'red'},
                {symbol: '&nbsp'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'green', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\((54 + 2)\\sqrt{i}\\). If we try to directly compute our index \\((54 + 2)\\) to solve for \\(\\sqrt[56]{i}\\), our new index, \\(56\\), becomes an exact multiple of \\(4\\) with a radicand of \\(i\\). This does not fall into any of our patterns.</p>
            <p>Instead, we can use the <em>Factorial</em> variation to intepret our goal as \\((54! + 2)\\sqrt{i}\\).</p>
            <p>Our new index, \\(54! + 2\\), falls into the \\(8k + 2\\) pattern (see <em>Factorial</em> section above). Our rule for \\(n = 8k + 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = \\sqrt{i}\\)</li>
                <li>\\(\\sqrt[n]{-i} = \\sqrt{-i}\\)</li>
            </ul>
            <p>Interpreting the goal as \\((54! + 2)\\sqrt{i}\\) gives us a solution of \\(\\sqrt{i}\\), whereas interpreting the goal as \\((54! + 2)\\sqrt{-i}\\) gives us a solution of \\(\\sqrt{-i}\\).</p>
            <p>In conclusion, our correct answer choices are \\(\\sqrt{i}\\) and \\(\\sqrt{-i}\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [false, false, true, true, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below and the following variations: <em>Factorial</em>, <em>Imaginary</em></p>`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '3', color: 'red'},
                {symbol: '5', color: 'green'},
                {symbol: '−', color: 'green'},
                {symbol: '9', color: 'black'},
                {symbol: '&nbsp'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'red', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\((35 - 9)\\sqrt{i}\\). If we try to directly compute our index \\((35 - 9)\\), our new goal becomes \\(\\sqrt[26]{i}\\).</p>
            <p>Our new index, \\(26\\), falls into the \\(8k + 2\\) pattern (it's \\(2\\) more than \\(24\\)). Our rule for \\(n = 8k + 2\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = \\sqrt{i}\\)</li>
                <li>\\(\\sqrt[n]{-i} = \\sqrt{-i}\\)</li>
            </ul>
            <p>Interpreting the goal as \\(\\sqrt[26]{i}\\) gives us a solution of \\(\\sqrt{i}\\), whereas interpreting the goal as \\(\\sqrt[26]{-i}\\) gives us a solution of \\(\\sqrt{-i}\\).</p>
            <p>If we instead use the <em>Factorial</em> variation to intepret our goal as \\((35! - 9)\\sqrt{i}\\), our new index (\\(35! - 9\\)) falls into the \\(4k - 1\\) pattern (we can subtract \\(8\\) from \\(4k - 1\\) to get \\(4k - 9\\)). Our rule for \\(n = 4k - 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = -i\\)</li>
                <li>\\(\\sqrt[n]{-i} = i\\)</li>
            </ul>
            <p>Interpreting the goal as \\((35! - 9)\\sqrt{i}\\) gives us a solution of \\(-i\\), whereas interpreting the goal as \\((35! - 9)\\sqrt{-i}\\) gives us a solution of \\(i\\).</p>
            <p>In conclusion, our correct answer choices are \\(\\sqrt{i}\\), \\(\\sqrt{-i}\\), \\(i\\), and \\(-i\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [true, true, true, true, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below and the following variations: <em>Green Exponent</em>, <em>Imaginary</em></p>`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '5', color: 'green'},
                {symbol: '6', color: 'green'},
                {symbol: '+', color: 'red'},
                {symbol: '4', color: 'green'},
                {symbol: '&nbsp'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'red', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\((56 + 4)\\sqrt{i}\\). If we try to directly compute our index \\((56 + 4)\\) to solve for \\(\\sqrt[60]{i}\\), our new index, \\(60\\), becomes an exact multiple of \\(4\\) with a radicand of \\(i\\). This does not fall into any of our patterns.</p>
            <p>Instead, we can use the <em>Exponent</em> variation to intepret our goal as \\((5^4 + 2)\\sqrt{i}\\).</p>
            <p>To find out what pattern our new index (\\(5^6 + 4\\)) falls into, we need to cycle our index with multiples of \\(8\\) (see <em>Exponent</em> section above):</p>
            <ul>
                <li>\\(5^1 = 5\\)</li>
                <li>\\(5^2 = 25\\) mod \\(8 ≡ 1\\)</li>
            </ul>
            <p>Our cycle length is \\(2\\), so once we reduce our exponent, we get \\(5^6 ≡ 1\\).</p>
            <p>Substiting \\(5^6\\) as \\(1\\) in our goal, we get a new goal of \\((1 + 4)\\sqrt{i}\\), which computes to \\(\\sqrt[5]{i}\\).</p>
            <p>Our new index, \\(5\\), falls into the \\(4k + 1\\) pattern. Our rule for \\(n = 4k + 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = i\\)</li>
                <li>\\(\\sqrt[n]{-i} = -i\\)</li>
            </ul>
            <p>Interpreting the goal as \\((5^6 + 4)\\sqrt{i}\\) gives us a solution of \\(i\\), whereas interpreting the goal as \\((5^6 + 4)\\sqrt{-i}\\) gives us a solution of \\(-i\\).</p>
            <p>In conclusion, our correct answer choices are \\(i\\) and \\(-i\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [true, true, false, false, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below and the following variations: <em>Black Exponent</em>, <em>Base \\(12\\)</em>, <em>Imaginary</em></p>`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '^', color: 'green'},
                {symbol: '7', color: 'black'},
                {symbol: '-', color: 'red'},
                {symbol: '3', color: 'red'},
                {symbol: '&nbsp'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'red', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\((127 - 3)\\sqrt{i}\\) (after accounting for <em>Base \\(12\\)</em>). If we try to directly compute our index \\((127 - 3)\\) to solve for \\(\\sqrt[124]{i}\\), our new index, \\(124\\), becomes an exact multiple of \\(4\\) with a radicand of \\(i\\). This does not fall into any of our patterns.</p>
            <p>Instead, we can use the <em>Exponent</em> variation to intepret our goal as \\((10^7 - 3)\\sqrt{i}\\).</p>
            <p>To find out what pattern our new index (\\(10^7 - 3\\)) falls into, we need to cycle our index with multiples of \\(8\\) (see <em>Exponent</em> section above):</p>
            <ul>
                <li>\\(10^1 = 10\\) mod \\(8 ≡ 2\\)</li>
                <li>\\(10^2 = 20\\) mod \\(8 ≡ 4\\)</li>
                <li>\\(10^3 = 40\\) mod \\(8 ≡ 0\\)</li>
                <li>\\(10^4 = 0\\)</li>
            </ul>
            <p>Any power of \\(10\\) greater than 2 just reduces down to 0, so once we reduce our exponent, we get \\(10^7 ≡ 0\\).</p>
            <p>Substiting \\(10^7\\) as \\(0\\) in our goal, we get a new goal of \\((0 - 3)\\sqrt{i}\\), which computes to \\(\\sqrt[-3]{i}\\), or \\(\\sqrt[3]{-i}\\) if we use our property of negative exponents.</p>
            <p>Our new index, \\(3\\), falls into the \\(4k - 1\\) pattern. Our rule for \\(n = 4k - 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = -i\\)</li>
                <li>\\(\\sqrt[n]{-i} = i\\)</li>
            </ul>
            <p>Interpreting the goal as \\((10^7 - 1)\\sqrt{i}\\) gives us a solution of \\(-i\\), whereas interpreting the goal as \\((10^7 - 1)\\sqrt{-i}\\) gives us a solution of \\(i\\).</p>
            <p>In conclusion, our correct answer choices are \\(i\\) and \\(-i\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [true, true, false, false, false],
    },
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p>Given the goal below and the following variations: <em>Black Exponent</em>, <em>Imaginary</em></p>`
            questionContent.append(createSmallBoard({goal: [
                {symbol: '7', color: 'green', orientation: 'upsidedown'},
                {symbol: '9', color: 'black'},
                {symbol: '-', color: 'red'},
                {symbol: '6', color: 'green'},
                {symbol: '&nbsp'},
                {symbol: '√', color: 'black'},
                {symbol: '−', color: 'green', orientation: 'sideways'},
            ]}))
            questionContent.innerHTML += `<p><strong>What are the possible solutions to this goal?</strong></p>`
            questionContent.innerHTML += `<div class="note" style="margin: -20px 0 28px">Note: The first cube is an upside down \\(7\\) cube.</div>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `
            <p>The goal above can be read as \\(((-7)^9 - 3)\\sqrt{i}\\). To find out what pattern our index (\\((-7)^9 - 3)\\) falls into, we need to cycle our index with multiples of \\(8\\) (see <em>Exponent</em> section above):</p>
            <ul>
                <li>\\((-7)^1 = -7\\)</li>
                <li>\\((-7)^2 = 49\\) mod \\(8 ≡ 1\\)</li>
            </ul>
            <p>Our cycle length is \\(2\\), so once we reduce our exponent, we get \\((-7)^9 ≡ -7\\).</p>
            <p>Substiting \\((-7)^9\\) as \\(-7\\) in our goal, we get a new goal of \\((-7 - 6)\\sqrt{i}\\), which computes to \\(\\sqrt[-13]{i}\\), or \\(\\sqrt[13]{-i}\\) if we use our property of negative exponents.</p>
            <p>Our new index, \\(13\\), falls into the \\(4k + 1\\) pattern (it's \\(1\\) more than \\(12\\)). Our rule for \\(n = 4k + 1\\) is as follows:</p>
            <ul style="margin-top: -16px">
                <li>\\(\\sqrt[n]{i} = i\\)</li>
                <li>\\(\\sqrt[n]{-i} = -i\\)</li>
            </ul>
            <p>Interpreting the goal as \\(((-7)^9 - 6)\\sqrt{i}\\) gives us a solution of \\(i\\), whereas interpreting the goal as \\(((-7)^9 - 6)\\sqrt{-i}\\) gives us a solution of \\(-i\\).</p>
            <p>In conclusion, our correct answer choices are \\(i\\) and \\(-i\\).</p>
            `
        },
        type: 'multi-select',
        choices: [
            '\\(i\\)',
            '\\(-i\\)',
            '\\(\\sqrt{i}\\)',
            '\\(\\sqrt{-i}\\)',
            'None of the above',
        ],
        answers: [true, true, false, false, false],
    },
]
function createLargePuzzle(cubes = {forbidden: [], permitted: [], required: [], resources: [], solution: [], goal: []}) {
    // Create Large Puzzle
    const largePuzzle = createElement('div', 'puzzle-container')

    // Create Main Container
    const largeBoardContainer = createElement('div', 'large-board-container')

    // Create Restraint Container
    const parentRestraintContainer = createElement('div', 'parent-restraint-container')
    function createRestraintContainer(type) {
        const restraintContainer = createElement('div', 'restraint-container')
        const title = createElement('div', '')
        title.innerText = type
        const cubeContainer = createElement('div', type.toLowerCase() + '-container')
        restraintContainer.append(title, cubeContainer)
        parentRestraintContainer.append(restraintContainer)
        return cubeContainer
    }
    const forbidden = createRestraintContainer('Forbidden')
    const permitted = createRestraintContainer('Permitted')
    const required = createRestraintContainer('Required')
    largeBoardContainer.append(parentRestraintContainer)

    // Create Input Container
    const inputContainer = createElement('div', 'input-container')
    function createViewContainer(type) {
        const viewContainer = createElement('div', type.toLowerCase() + '-view-container')
        const cubeContainer = createElement('div', type.toLowerCase() + '-container')
        const bar = createElement('div', type.toLowerCase() + '-bar')
        const text = createElement('div', type.toLowerCase() + '-text')
        text.innerText = type
        viewContainer.append(cubeContainer, bar)
        bar.append(text)
        inputContainer.append(viewContainer)
        return cubeContainer
    }
    const solution = createViewContainer('Solution')
    const equalsContainer = createElement('div', 'equals-container')
    const equalsBar1 = createElement('div', 'equals-bar1')
    const equalsBar2 = createElement('div', 'equals-bar2')
    equalsContainer.append(equalsBar1, equalsBar2)
    inputContainer.append(equalsContainer)
    const goal = createViewContainer('Goal')

    largeBoardContainer.append(inputContainer)

    // Create Bottom Container
    const bottomPuzzleContainer = createElement('div', 'bottom-puzzle-container')
    const resources = createElement('div', 'resources-container')
    bottomPuzzleContainer.append(resources)

    // Append Cubes into Containers
    let containers = [forbidden, permitted, required, resources, solution, goal]
    let inputs = Object.values(cubes)
    let classTypes = ['restraint', 'restraint', 'restraint', 'resource', 'solution', 'goal']

    for (let i = 0; i < containers.length; i++) {
        inputCubes(containers[i], inputs[i], classTypes[i] + '-cube')
    }

    // Return
    largePuzzle.append(largeBoardContainer)
    largePuzzle.append(bottomPuzzleContainer)
    return largePuzzle
}
const problemSet3 = [
    {   
        content: (questionContent) => {
            questionContent.innerHTML += `<p><em>More development needed</em></p>`
        },
        explanation: (explanation) => {
            explanation.innerHTML = `Explanation`
        },
        // type: 'multi-select',
        // choices: [
        //     '\\(i\\)',
        //     '\\(-i\\)',
        //     '\\(\\sqrt{i}\\)',
        //     '\\(\\sqrt{-i}\\)',
        //     'None of the above',
        // ],
        // answers: [true, true, false, false, false],
    },
    // {
    //     content: (questionContent) => {
    //         questionContent.innerHTML += 
    //         `<p>Given the following goal:</p>`
    //         questionContent.append(createLargePuzzle({
    //             forbidden: [
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //             ],
    //             permitted: 
    //                 [{symbol: '3', color: 'red'}],
    //             required: 
    //                 [{symbol: '3', color: 'red'}],
    //             resources: 
    //                 [{symbol: '3', color: 'red'}],
    //             solution: [],
    //             goal: 
    //                 [{symbol: '3', color: 'red'}],
    //         }))
    //         questionContent.innerHTML += 
    //         `<p><strong>What are the possible solutions to this goal?</strong></p>`
    //     },
    //     explanation: (explanation) => {
    //         explanation.innerHTML = '<p>Explanation 5</p>'
    //     },
    //     type: 'multi-select',
    //     choices: [
    //         'Answer 5',
    //         'Answer 6',
    //         'Answer 7',
    //         'Answer 8',
    //     ],
    //     answers: [0],
    // },
    // {   
    //     content: (questionContent) => {
    //         questionContent.innerHTML += 
    //         `<p>Given the following goal:</p>`
    //         questionContent.append(createLargePuzzle({
    //             forbidden: 
    //                 [{symbol: '3', color: 'red'}],
    //             permitted: 
    //                 [{symbol: '3', color: 'red'}],
    //             required: [],
    //             resources: [
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //                 {symbol: '3', color: 'red'},
    //             ],
    //             solution: [],
    //             goal: 
    //                 [{symbol: '3', color: 'red'}],
    //         }))
    //         questionContent.innerHTML += 
    //         `<p><strong>What are the possible solutions to this goal?</strong></p>`
    //     },
    //     explanation: (explanation) => {
    //         explanation.innerHTML = '<p>Explanation 5</p>'
    //     },
    //     type: 'single-select',
    //     choices: [
    //         'Answer 5',
    //         'Answer 6',
    //         'Answer 7',
    //         'Answer 8',
    //     ],
    //     answers: [0],
    // },
]

// Display goal cubes
function createCubeContent() {
    const cubeContent = document.createElement('div')
    const hoverDiv = document.createElement('div')
    const backgroundDiv = document.createElement('div')
    cubeContent.classList.add('cube-content')
    hoverDiv.classList.add('hover-div')
    backgroundDiv.classList.add('background-div')

    cubeContent.append(hoverDiv)
    cubeContent.append(backgroundDiv)
    return cubeContent
}
function inputCubes(container, cubes, classType) {
    for (let cube of cubes) {

        const newGoalCube = document.createElement("div")

        if (cube.symbol !== '&nbsp') {
            // Normal Cube (Not Space)
            let name = translateName(cube.symbol.toString())
            newGoalCube.classList.add("cube", name, classType, cube.color)
            if (cube.orientation) {
                newGoalCube.classList.add(cube.orientation)
            }
            
            const svg = createSvg(name)
            newGoalCube.append(svg)
            svg.classList.add('svg')

            newGoalCube.append(createCubeContent('cube-content'))
        } else {
            // Spacing Cube
            newGoalCube.classList.add('spacing-cube')
        }
        
        container.append(newGoalCube)
    }
}

// ToDo: Parse HTML elements to wrap LaTeX elements follows by punctiation in a nonwrapping span.

let problemSetMap = new Map([
    ['problem-set-1', problemSet1],
    ['problem-set-2', problemSet2],
    ['problem-set-3', problemSet3],
])
// Loop through each problem set to create indicators
const problemSetIterator = problemSetMap.values()
const problemContainers = document.querySelectorAll('.question-container')
for (const problemContainer of problemContainers) {
    // Loop through each question to create indicators
    const problemSet = problemSetIterator.next().value
    for (let i = 0; i < problemSet.length; i++) {
        createIndicator(problemContainer, i)
    }
}
// Select the first question for all problems sets
for (let questionIndicator of document.querySelectorAll('.question-indicator-container')) {
    questionIndicator.children[0].click()
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