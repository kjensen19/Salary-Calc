Employee salary calculator.
Takes as inputs employee information to create an array of data:
    First Name
    Last Name
    Employee ID
    Job Title
    Annual Salary

Information is then rendered to the DOM via jquery. Input fields can be filled in with information to add new entries to the array, then the table and the monthly information is rerendered.

The monthly figure is a reduction of annual salaries which is then compared against a monthly limit (default is 20,000).  If the monthly outlay exceeds that number, the information turns red.

There is also a gauge that uses a jQuery animate() to show a visual of the percent of the limit being utilized.