
let devChart = $('#myChartDev');
let myChartDev = new Chart(devChart, {
    type: 'doughnut',
    data: {

        datasets: [{
            data: [8, 6, 7, 5, 6, 3, 1,8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 255, 0,0.2)',
                'rgba(46, 120, 117,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(46, 120, 117,1)'
            ],
            borderWidth: 1
        }],
        labels: ['PHP (Symfony)', 'Javascript', 'C# (Entity Framework)'
        , 'Dart (Flutter)', 'Scala (Play)', 'C', 'JAVA','HTML5/CSS3'],
    },
});


let opsChart = $('#myChartOps');
let myChartOps = new Chart(opsChart, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [6, 7, 5, 5, 5, 4, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 255, 0,0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 255, 0, 1)'
      ],
      borderWidth: 1
    }],
    labels: ['Commandes Linux', 'Firewall (Iptables)', 'Docker'
    , 'Jenkins', 'Shell', 'DHCP','DNS']
  },
});


let bddChart = $('#myChartBdd');
let myChartBdd = new Chart(bddChart, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [8, 8, 5, 6,7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(0, 255, 0,0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(0, 255, 0, 1)'
      ],
      borderWidth: 1,
    }],
    labels: ['SQL', 'MySQL', 'SQLServer'
    , 'Modélisation (Merise)','phpMyAdmin']
  },
});

let otherChart = $("#myChartOther");
let myChartOther = new Chart(otherChart,{
  type: 'doughnut',
  data: {
    datasets: [{
      data: [8, 7, 7, 6, 5, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(0, 255, 0,0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(0, 255, 0, 1)'
      ],
      borderWidth: 1,
    }],
    labels: ['POO', 'Git', 'Anglais (Operationnel)'
    , 'Algorithmique','UML', 'planification de projet (gantt)']
  },
});
