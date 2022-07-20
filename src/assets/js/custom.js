
function mychart(){
var xmlhttp = new XMLHttpRequest();
// var url = "http://dummy.restapiexample.com/api/v1/employees";
var url = "http://localhost:9000/api/reports/charts/gsl";
xmlhttp.open("POST", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var datas = JSON.parse(this.responseText);
    // console.log(datas)
    // employee_name = datas.data.map(function (elem) {
    //   return elem.employee_name
    // });
    date = datas.range.map(function (elem) {
      return elem.date
    });
    // employee_salary = datas.data.map(function (elem) {
    //   return elem.employee_salary
    // });
    amount = datas.range.map(function (elem) {
      return elem.amount
    });
    //  console.log(employee_salary)
    const ctx = document.getElementById('canvas').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: employee_name,
        datasets: [{
          label: 'Grouped',
          data: employee_salary,
          backgroundColor: " #ff335e",
          borderColor: [
            'rgba(255, 99, 132, 0.2)'
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1,

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

  }

}
}

