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

        $('#tableBody').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td><button id="${employee.idNumber}" class="delBut">Delete ${employee.firstName}</button></td>
        </tr>
        `)
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
        $('#monthly-total').css("color", "black")
    }
    $('#total-target').text(`${totalMonthlyExpense}`)
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
