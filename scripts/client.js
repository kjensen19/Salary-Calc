$(document).ready(readyNow)
console.log('JS')

function readyNow() {
    console.log('JQ')
    $("#input-submit").on('click', employeeMaker)
}




let employees = []
let individualEmployee = {
    firstName: 'Kyle',
    lastName: 'Jensen',
    idNumber: 7578,
    jobTitle: 'overcomplicator',
    annualSalary: '1'
}

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
    console.log(`Employees in func: ${employees[0].firstName}`)
    //empty input fields
    $('#lName-input').val('')
    $('#id-input').val('')
    $('#title-input').val('')
    $('#salary-input').val('')
    $('#fName-input').val('')
}