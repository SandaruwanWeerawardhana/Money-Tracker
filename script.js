// =======================chart================

// const income = document.getElementById("").value
// const incometxt = document.getElementById("").value
// const expenses = document.getElementById("").value
// const expensestxt = document.getElementById("").value

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      animation:false,
      label: 'Student of Votes',
      data: [70, 19, 50, 5, 28, 32],
      borderWidth: 8
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

const datas = [2, 8, 5, 3, 8, 2];

setTimeout(() => {
    datas.forEach(data => {
        // chart.data.labels.push('black');
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
            dataset.backgroundColor.push('black');
        });

        chart.update();
    });
}, 1000);

// const ctx = document.getElementById('myChart');
// const chart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [/* 'Red', 'Green', 'Blue', 'Yellow', 'Orange' */],
//         datasets: [{
//             label: 'votes count',
//             data: [/* 10, 5, 7, 8, 9 */],
//             backgroundColor: [/* 'rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(237, 142, 17, 0.5)' */]
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// const datas = [2, 8, 5, 3, 8, 2];

// setTimeout(() => {
//     datas.forEach(data => {
//         // chart.data.labels.push('black');
//         chart.data.datasets.forEach((dataset) => {
//             dataset.data.push(data);
//             dataset.backgroundColor.push('black');
//         });

//         chart.update();
//     });
// }, 1000);





