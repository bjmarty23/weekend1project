/*jshint esversion: 6*/

console.log('top');
let table=[];

class Employee{
  constructor( first, last, id, title, salary) {
  this.first = first;
  this.last = last;
  this.id = id;
  this.title = title;
  this.salary = salary;
}//end constuctor
toHTML() {
let result= '<tr>';
result += '<td>' + this.first + '</td>';
result += '<td>' + this.last + '</td>';
result += '<td>' + this.id + '</td>';
result += '<td>' + this.title + '</td>';
result += '<td>' + this.salary + '</td>';
result += '<td><button class =  "deleteButton">Delete</button></td>';
result += '</tr>';

return result;
}// never learned this before appends right to dom in a row but you have to
//let employee = newEmployee();
}// end employee

$(document).ready(readyNow);
function readyNow(){
  console.log('doc ready');
  onClick();

}// end doc ready

//---calculate salay based on user input--
// function addEmployeeData();
//let salaray=$('#salary').val();
// let tr = $<tr></tr>');

//console,log($'#salary').val();
//totalyearlySalary += parseInt(salary);
//console.log('tota; monthly', (totalyearlySalary/12).toFixed(2));
//}
function clear(){
$(".inputDiv").bind('click', function() {
  $("input[type=text], textarea").val("");
  $("input[type=number], textarea").val("");

});
}


function onClick(){
  $( '#submitButton').on('click',newEmployee);
  $('#tableBody').on('click', '.deleteButton', removeEmployee);
  $('.inputDiv').on('click', clear);

//end button
}//end onClick func

function newEmployee( first, last, id, title, salary) {
  table.push( new Employee ( $('#firstIn').val(), $('#lastIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val() ));
  updateTable();
  money();
}//end newEmployee

//update this function to append
function updateTable(){
  let outputElement = $('#tableBody');
  outputElement.empty();
  for( employee of table){
  outputElement.append ( employee.toHTML());
//$('monthlyCost').text(monthlyCost);-- replaces the text you have between the <div> tags.
//.text replaces with text-- emptys div and replaces
//.html will only append the text--emptys out everything between the <div> tags including other tags
//.append will add to the dom but does not clear original text or tags.



  //console.log($('#lastIn').val());
}// end for loop
}//end updateEmployees func

function money(){
  //totalSalary should have been divided by 12 to get the monthly total...
  // what you thought was a mistake in the code was actually suppose to be there
  // so you forked up here..
  let totalSalary = 0;
  let outputElement = $('#total');
  //outputElement.empty();
for (salary of table) {
  totalSalary += parseInt(employee.salary);
  outputElement.empty();
  outputElement.append('Total Monthly Costs:$' + (totalSalary/12).toFixed(2));
  //outputElement.append( totalSalary);
console.log('totalSalary', totalSalary);
if (totalSalary > 20000) {
  outputElement.css ('background-color', 'red');
  //outputElement.toggleClass('highlight');
  removeEmployee();
}
}
}
//This is the mini challenge borders for the table
function removeEmployee(){
  $(this).parent().parent().remove();
}