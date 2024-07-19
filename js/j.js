function myFunction()
        {
            var elements = document.getElementsByClassName('input_field');
            var table = document.getElementById('my-table');
             var row = table.insertRow(1); 

var cell1 = row.insertCell(0);
cell1.innerHTML = `<input type="text" style="border:none; text-align: center;" value=${elements[0].value}>`

var cell2 = row.insertCell(1);
cell2.innerHTML = `<input type="number" style="border:none; text-align: center;" value=${elements[1].value}>`

var cell3 = row.insertCell(2);
cell3.innerHTML = `<input type="text" style="border:none; text-align: center;" value=${elements[2].value}>`

var cell4 = row.insertCell(3);
cell4.innerHTML = `<input type="number" style="border:none; text-align: center;" value=${elements[3].value}>`

document.getElementById('submit-area').innerHTML = `<button type='submit'>Submit</button>`;

for(var e = 0 ; e < elements.length ; e++)
{
    elements[e].value = '';
}
            }