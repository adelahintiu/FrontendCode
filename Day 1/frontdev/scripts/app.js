var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 5500
    },
    {
        firstName: 'Steven',
        lastName: 'King',
        phone: '0241048090',
        salary: 14500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123454321',
        salary: 8500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0122789001',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4000
    }
];

function showList(){
    var myTable = '<table border="1" class="table table-bordered"> <tr><th>First Name</th>' +
        '<th>Last Name</th><th>Phone</th><th>Salary</th><th></th><th></th></tr>';

    for(var i in employeesList){

        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'
        +employeesList[i].phone+'</td><td>'+employeesList[i].salary+' </td><td>'+'<input type="button" value="Vizualizare" onclick="viewDetails(this)"/>'
            +' </td><td>'+'<input type="button" value="Sterge" onclick="deleteEmployee(this)"/>'+'</td></tr>';
        
    }
    myTable += '<tr id="line"><td>'+mostFreq()+'</td><td>'+countUnique()+'</td><td>'+phoneFreq()+'</td><td>'+avgSalary()+'</td></tr>';
    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;

}
function mostFreq() {
    if(employeesList.length == 0){
        return null;
    }
    var map = {};
    var freqElem = employeesList[0].lastName, maxCount = 1;
    for(var i = 0; i < employeesList.length; i++){
        var elem = employeesList[i].lastName;
        if(map[elem] == null)
            map[elem] = 1;
        else
            map[elem]++;
        if(map[elem] > maxCount){
            freqElem = elem;
            maxCount = map[elem];
        }
    }
    return freqElem;
}
function countUnique() {
    if(employeesList.length == 0){
        return null;
    }
    var count = 0;
    var map = {};
    for(i = 0; i < employeesList.length; i++ ){
        var elem = employeesList[i].lastName;
        if(map[elem] == null)
            map[elem] = 1;
        else
            map[elem]++;
        if(map[elem] == 1)
            count++;        
    }
    return count;
}
function phoneFreq() {
    if(employeesList.length == 0){
        return null;
    }
    var map = {};
    var freqElem = employeesList[0].phone, maxCount = 1;
    for(var i = 0; i < employeesList.length; i++){
        var elem = employeesList[i].phone;
        if(map[elem] == null)
            map[elem] = 1;
        else
            map[elem]++;
        if(map[elem] > maxCount){
            freqElem = elem;
            maxCount = map[elem];
        }
    }
    return freqElem;
    
}
function avgSalary() {
    if(employeesList.length == 0){
        return null;
    }
    var avg;
    var count = 0, sum = 0;
    for(i = 0; i < employeesList.length; i++){
        if(employeesList[i].salary != 0){
            count++;
            sum += employeesList[i].salary;
        }
    }
    avg = sum / count;
    return avg;
    
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function viewDetails(btn) {
    var row = btn.parentNode.parentNode;
    var txt = row.textContent;
    window.alert(txt);
}

function deleteEmployee(btn){
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    if(!firstName || !lastName){
        window.alert("Please insert a valid name.");

    }
    else {
        var phone = document.getElementById("phone").value;
        var salary = document.getElementById("salary").value;

        employeesList.push(new Employee(firstName, lastName, phone, salary));
    }


}

function deleteLast() {
    var size = employeesList.length;
    if(size > -1){
        employeesList.splice(size - 1, 1);
    }
    showList();
}

function someFunctions() {
    addEmployee();
    showList();
}

function totalSalary() {
    var sum = 0;
    for(var i in employeesList){
        sum += employeesList[i].salary;
    }
    
    if(sum >= 0) {
        var total = '<p type="text" >' + sum + '</p>';
    }
    var container = document.getElementById('total');
    container.innerHTML = total;

}