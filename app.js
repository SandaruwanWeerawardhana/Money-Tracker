

// const incomebtn = document.getElementById("incomebtn").value
const expensesbtn = document.getElementById("expensesbtn").value
   
const ctx = document.getElementById('myChart');
const chart = new Chart(ctx, {
type: 'line',
data: {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December' ],
    datasets: [{
        label: 'Income',
        data: [],
        borderColor: 'rgb(59,225,0)', 
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});

const incomeinner = document.getElementById("incomeinner");
const income = [200, 856, 453, 454, 888, 257, 677, 657, 897, 257, 157, 857];
let totalIncome = 0;

setTimeout(() => {
income.forEach(data => {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        console.log(data);
    });
    totalIncome+=data
    chart.update();
});
incomeinner.innerHTML += `${totalIncome}`
}, 1000);

// -----------------------------------------------------------------

const ctx2 = document.getElementById('myChart2');
const chart2 = new Chart(ctx2, {
type: 'line',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Expenses',
        data: [],
        borderColor: 'red', 
        backgroundColor: 'rgba(255,0,0,0.5)',
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});

const incomeinner2 = document.getElementById("incomeinner2");
const expenses = [80, 846, 543, 554, 788, 257, 457, 657, 897, 345, 657, 157];
let tot2 = 0;

setTimeout(() => {
expenses.forEach(data2 => {
    chart2.data.datasets[0].data.push(data2); // Correct usage of data array
    tot2 += data2;
});
incomeinner2.innerHTML = `${tot2}`; // Display total expenses
chart2.update(); // Update the chart after adding data
}, 1000);

const date = ['2024.7.01','2024.8.23','2024.3.3'];
const amount = ['2002.00','5645.00','5463.00'];
const mothod = ['card','cash','card'];

const tableid=document.getElementById("tableid");
for(let i=0;i<date.length;i++){
tableid.innerHTML +=
 `<tr>
    <td>${date[i]}</td>
    <td>${amount[i]}</td>
    <td>${mothod[i]}</td>
    </tr>
 `;
}


  