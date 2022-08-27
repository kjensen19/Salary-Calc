$(document).ready(readyNow)
console.log('JS')


function readyNow() {
    console.log('JQ')
    $("#input-submit").on('click', employeeMaker)
    employeeRender()
    monthlyExpense()
}


let individualEmployee = {
    firstName: 'Kyle',
    lastName: 'Jensen',
    idNumber: 7578,
    jobTitle: 'overcomplicator',
    annualSalary: '1'
}
let employees = [individualEmployee]





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
    //call the render function to apply to the DOM
    employeeRender()
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

        $('#tableBody').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
        </tr>
        `)
    }
}
function monthlyExpense() {
    let totalMonthlyExpense = 0;
    for (let employee of employees) {
        totalMonthlyExpense += Number(employee.annualSalary)
    }
    $('#total-target').text(`${totalMonthlyExpense}`)
}

