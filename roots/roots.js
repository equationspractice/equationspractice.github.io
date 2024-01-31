function wrapTextInSpan() {
    const elements = document.body.querySelectorAll('p, div, li');
    console.log(elements)

    for (let element of elements) {
        if (element.textContent.trim() !== '') {
            replacement = element.innerHTML.replaceAll(/(\\\([^\(]*?\\\))([.,:\)])/g, '<span style="white-space: nowrap;">$1$2</span>');
            console.log(replacement)
            element.innerHTML = replacement
        }
    }
}
wrapTextInSpan()

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
    if (arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
    return true;
}
function predict(index, angle) {

    // 2 + 8n (90) --> [45, 225]
    // 2 + 8n (270) --> [135, 315]
    // 6 + 8n (270) --> [45, 225]
    // 6 + 8n (90) --> [135, 315]
    // 4 + 8n (180) --> [45, 135, 225, 315]

    // 3 + 12n (90) --> [30, 150]
    // 3 + 12n (270) --> [330]
    // 9 + 12n (270) --> [30, 150]
    // 9 + 12n (90) --> [330]
    // 6 + 12n (180) --> [30, 150, 330]

    // Overlap:
    // 3 + 6n --> [60, 300]
    // 9 + 18n --> [60, 220, 300] (220 Overlap)

    let prediction = []

    // 8n + 2
    if ((index - 2) % 8 == 0) {
        if (angle == 90) prediction.push(45, 225) // Useful
        if (angle == 180) prediction.push(90, 270)
        if (angle == 270) prediction.push(135, 315) // Useful
    }

    // 8n - 2
    if ((index + 2) % 8 == 0) {
        if (angle == 90) prediction.push(135, 315) // Useful
        if (angle == 180) prediction.push(90, 270)
        if (angle == 270) prediction.push(45, 225) // Useful
    }

    // 8n + 4
    if ((index + 4) % 8 == 0) {
        if (angle == 180) prediction.push(45, 135, 225, 315) // Useful
    }

    // 4n + 3   (3, 7, 11, 15...)
    if ((index - 3) % 4 == 0) {
        if (angle == 90) prediction.push(270)
        if (angle == 270) prediction.push(90)

        // 12n + 3
        if ((index - 3) % 12 == 0) {
            if (angle == 90) prediction.push(30, 150) // Useful
            if (angle == 270) prediction.push(210, 330) // Useful
        }
    }
    // 4n + 1   (1, 5, 9, 13, 17...)
    if ((index - 1) % 4 == 0) {
        if (angle == 90) prediction.push(90)
        if (angle == 270) prediction.push(270)

        // 12n - 3   (9, 21, 33, )
        if ((index + 3) % 12 == 0) {
            if (angle == 90) prediction.push(210, 330) // Useful
            if (angle == 270) prediction.push(30, 150) // Useful
        }
    }

    // 12n + 6
    if ((index + 6) % 12 == 0) { // Always includes 90, 330
        if (angle == 180) prediction.push(30, 150, 210, 330) // Useful
    }

    // 6n + 3   (9, 15, 21, 27..)
    if ((index - 3) % 6 == 0) {
        if (angle == 180) prediction.push(60, 300)
    }
    // 2n + 1   (5, 7, 9, 11...) Odd
    if ((index - 1) % 2 == 0) {
        if (angle == 180) prediction.push(180)
    }


    return prediction
}

for (let index = 2; index <= 143; index++) {

    let subheadings = []

    let logHeading = true;

    for (let angle = 90; angle <= 270; angle += 90) {

        let principle = angle
        let angles = []

        while (principle <= 360 * index) {
            angles.push(principle / index)
            principle += 360
        }

        let usefulAngles = [45, 135, 225, 315, 30, 60, 120, 150, 210, 240, 300, 330, 0, 90, 180, 270, 360]
        let finalAngles = angles.filter((angle) => usefulAngles.includes(angle))

        if (finalAngles.length) {

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


const tableMap = new Map([
    ['8,2', "\\( \\sqrt{i} \\)"],
    ['8,-2', "\\( \\sqrt{-i} \\)"],
    ['4,1', "\\( i \\)"],
    ['4,-1', "\\( -i \\)"],
    ['8,4', "\\( \\sqrt{ \\pm i} \\)"],
    ['4,2', "\\( \\pm i \\)"],
    ['2,1', "\\( -1 \\)"],
]);

const headers = [
    [[8, 2], [8, -2], [4, 1], [4, -1]], // Headers for the first table
    [[8, 4], [4, 2], [2, 1]] // Headers for the second table
];

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
        th.innerText = offset > 0 ? `\\( ${multiple}k + ${offset} \\)` : `\\( ${multiple}k - ${-offset} \\)`;
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

tables.forEach((table, i) => {
    table.append(createTableHeader(headers[i]));
    for (let j = 0; j <= 50; j++) {
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