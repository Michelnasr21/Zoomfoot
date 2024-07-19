function calculateNetSalary()
{
    var empName= document.getElementById('username').value;
    var salaryNu= document.getElementById('salary').value;

    if(isNaN(salaryNu)){
        salaryNu = 0 ;
    }
    var salaryBonus= document.getElementById('bonus').value;
    var salaryTax= document.getElementById('salarytax').value;
    if(salaryTax == "0.00")
    {
        window.alert('You must select an option');

    }

    var netSalary= (salaryNu - (salaryNu * salaryTax)) + parseInt(salaryBonus);
    var TotalSalary= salaryNu - (salaryNu * salaryTax);
    document.getElementById('netsalary').value= `${netSalary}`;
    document.getElementById('submit').innerHTML= `${TotalSalary}`

}

function chkpassword()
{
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    if(password != confirm)
    {
        document.getElementById('msg').innerHTML="Password and confirm password does not match.";

    }
    else{
        document.getElementById('msg').innerHTML='';

    }
}
function chkTax()
{
    var salaryTax= document.getElementById('salarytax').value;
    if(salaryTax == "0.00")
    {
        window.alert('You must select an option')
    }
}

var CurYear = new Date()
for (s = 1905; s <= CurYear.getFullYear ; c++)
{
    document.write(`<option> ${s}</option>`);

}


$(document).ready(function() {
    function loader() {
      $('.loader-container').addClass('fade-out');
    }
  
    function fadeOut() {
      setInterval(loader, 3000);
    }
  
    fadeOut();
  });