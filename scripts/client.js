$(document).ready(readyNow)
console.log('JS')


function readyNow() {
    console.log('JQ')
    $("#input-submit").on('click', employeeMaker)
    $("#tableBody").on('click', '.delBut', removeEmployee)
    employeeRender()
    monthlyExpense()
}


let individualEmployee = {
    firstName: 'Kyle',
    lastName: 'Jensen',
    idNumber: '7578',
    jobTitle: 'overcomplicator',
    annualSalary: '12000'
}

let otherEmployee = {
    firstName: 'Rachel',
    lastName: 'Jensen',
    idNumber: '113',
    jobTitle: 'Teacher',
    annualSalary: "108000"
}
let employees = [individualEmployee, otherEmployee]





function employeeMaker() {
    //grab inputs to create new employee object
    let newEmployee = {
        firstName: $('#fName-input').val(),
        lastName: $('#lName-input').val(),
        idNumber: $('#id-input').val(),
        jobTitle: $('#title-input').val(),
        annualSalary: $('#salary-input').val()
    }//end object
    employees.push(newEmployee)
    //console.log(`Employees in func: ${employees[0].firstName}`)
    //call the render function to apply to the DOM
    employeeRender()
    //call the expense function to calculate and render
    monthlyExpense()
    //empty input fields
    $('#lName-input').val('')
    $('#id-input').val('')
    $('#title-input').val('')
    $('#salary-input').val('')
    $('#fName-input').val('')
    return employees
}
function employeeRender(){
    $('#tableBody').empty()
    for (let employee of employees) {
        if (employee.firstName && employee.lastName && employee.idNumber && employee.jobTitle && employee.annualSalary){
            $('#tableBody').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td class="cell-highlight">${employee.annualSalary}</td>
                <td class="del-row"><button id="${employee.idNumber}" class="delBut">Delete ${employee.firstName}</button></td>
            </tr>
            `)
        }
        else {
            alert('Some information is missing or invalid, please re-enter')
        }
    }
}
function monthlyExpense() {
    let totalMonthlyExpense = 0;
    for (let employee of employees) {
        totalMonthlyExpense += Number(employee.annualSalary)
    }
    totalMonthlyExpense = (totalMonthlyExpense / 12).toFixed()
    if (totalMonthlyExpense >= 20000) {
        $('#monthly-total').css("color", "red")
    }
    else {
        $('#monthly-total').css("color", "darkorchid")
    }
    let gaugeVal = ((totalMonthlyExpense / 20000));
    if (gaugeVal >= 1) {
        gaugeVal = 1
    }
    console.log(`gaugeVal ${gaugeVal}`)
    $('#total-target').text(`${totalMonthlyExpense}`)
    //document.querySelector('#meter').style.setProperty('--m',`${gaugeVal}`)
    document.getElementById("meter").animate([
        // keyframes
        {transform: `rotateZ(${gaugeVal * 180}deg)`}
      ], { 
        // timing options
        duration: 2000,
        fill: "forwards"
    }
      )
    }
   
      
function removeEmployee() {
    //console.log([$(this).attr('id').toLowerCase()])
    let purgedArray = []
    for (let employee of employees) {
        //console.log(`employee name = ${employee.firstName}`)
        //console.log(`this = ${$(this).attr('id')}`)
        if (employee.idNumber === $(this).attr('id')) {
            console.log('if', employee.idNumber)
        }
        else {
            console.log('else', employee.idNumber)
            purgedArray.push(employee)
        }
    }
    employees = purgedArray
    $(this).closest('tr').remove()
    monthlyExpense()
    return employees
}
