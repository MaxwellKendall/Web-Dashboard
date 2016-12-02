//Clicking the Alert icons

var alertIcon = document.getElementsByClassName('alert-icon')[0];
alertIcon.addEventListener('click', addAlert);
var alertElement = document.getElementsByClassName("alert");
document.getElementsByTagName('header')[0].addEventListener("mouseover", closeAlert);
document.getElementsByClassName('alert')[0].addEventListener("mouseover", closeAlert);
//Add Alert function

function addAlert(){
    console.log(x);
        var x = document.getElementsByClassName("dashboard")[0];
        var y = document.createElement("div");
        y.setAttribute("class", "alert");
        y.innerHTML = "<span>Alert</span><span>This is the Notification</span><span><img src=\' icons/close.svg \'</span>";
        x.insertAdjacentElement("afterend", y);
}

//Exiting the Alert

function closeAlert(){
for(var i = 0; i < alertElement.length; i ++) {
    console.log(i);
    var exitButton = alertElement[i].lastElementChild;
    exitButton.addEventListener('click', function(){
        console.log('its working');
        this.parentElement.remove();
        });
    }
}

var traffic = document.getElementById("line");
Chart.defaults.global.layout = {
    padding : {
        top: 50,
        bottom: 10,
        left: 10,
        right: 10
    }
}

// Simulating confirmation message of submitting message

var submit = document.getElementsByClassName('form1')[0];
submit.addEventListener("submit", displaySuccessMessage);

function displaySuccessMessage(){
    event.preventDefault();
    console.log('function displaySuccessMessage triggered');
    // window.alert("form submitted!");
    var success = document.createElement("div");
    success.setAttribute("id", "successmessage");
    success.innerHTML = "<div class='innersuccess'><h1>Your Message will be sent to the user</h1><input id='confirm' type='submit' value='OK'></input><input id='cancel' type='submit' value='Do not Send'></input></div>";
    var container = document.getElementsByClassName('container')[0];
    container.insertAdjacentElement("afterbegin", success);

    // removing overlay

    var cancelbutton = document.getElementById('cancel');
    cancelbutton.addEventListener('click', removeoverlay);
    var okbutton = document.getElementById('confirm');
    okbutton.addEventListener('click', removeoverlay);
    function removeoverlay(){
        console.log('removeoverlay function triggered');
        var x = document.getElementById('successmessage');
        x.remove();
    }

}

    // Validating Form Fields

var email = document.getElementById('emailinput');
email.addEventListener('keyup', function(){
    if(email.validity.typeMismatch){
        email.setCustomValidity("Please input a valid email address")
    } else {
        email.setCustomValidity("")
    }
})



/******************** CHART STUFF ****************************************/

// Line Chart Data Variables: 4 -- hourly, daily, weekly, & monthly

// Hourly

var hourlyData = {
    labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 AM"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [95, 30, 40, 81, 100, 300, 40, 81, 100],
            spanGaps: false,
        }
    ]
};

// Daily:

var dailyData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [95, 30, 40, 81, 100, 300, 40],
            spanGaps: false,
        }
    ]
};

//Weekly

var weeklyData = {
    labels: ["First Week", "Second Week", "Third Week", "Fourth Week"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81],
            spanGaps: false,
        }
    ]
};

// Monthly

var monthlyData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
};

// Function for rendering Chart:

function renderChart(element, data) {
console.log("renderChart is working")
    var lineChart = new Chart(element, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
        }
    });
}
renderChart(traffic, monthlyData);

var weekly = document.getElementById("weekly").parentElement;
var hourly = document.getElementById("hourly").parentElement;
var daily = document.getElementById("daily").parentElement;
var monthly = document.getElementById("monthly").parentElement;

weekly.addEventListener("click", function(){
    renderChart(traffic, weeklyData);
    this.parentElement.setAttribute("class", "selected");
})
hourly.addEventListener("click", function(){
    renderChart(traffic, hourlyData);
    this.parentElement.setAttribute("class", "selected");
})
daily.addEventListener("click", function(){
    renderChart(traffic, dailyData);

    this.parentElement.setAttribute("class", "selected");
})
monthly.addEventListener("click", function(){
    renderChart(traffic, monthlyData);
    this.parentElement.setAttribute("class", "selected");
})

var dailyTraffic = document.getElementById("bar");

var barChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: 'Daily Traffic',
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: [
                'rgba(187, 222, 251, 0.5)',
                'rgba(187, 222, 251, 0.5)',
                'rgba(187, 222, 251, 0.5)',
                'rgba(187, 222, 251, 0.5)',
                'rgba(187, 222, 251, 0.5)',
                'rgba(187, 222, 251, 0.5)',
                'rgba(187, 222, 251, 0.5)'
            ],
            borderColor: [
                'rgba(25, 118, 210, 0.5)',
                'rgba(25, 118, 210, 0.5)',
                'rgba(25, 118, 210, 0.5)',
                'rgba(25, 118, 210, 0.5)',
                'rgba(25, 118, 210, 0.5)',
                'rgba(25, 118, 210, 0.5)',
                'rgba(25, 118, 210, 0.5)'
                ],
            borderWidth: 1
        }]
    },
    options: {
        tooltip: {
            enabled: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false
        },
        layout: {
            padding: 10
        }
    }
});


var mobileUsers = document.getElementById("pie");

var pieChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            data: ['99', '55', '12'],
            backgroundColor: [
                'rgba(187, 222, 251, 0.5)',
                'rgba(252, 179, 229, 0.5)',
                'rgba(252, 202, 179, 0.5)'
                // 'rgba(193, 252, 179, 0.5)',
                // 'rgba(0, 188, 212, 0.5)',
                // 'rgba(32, 163, 151, 0.5)'

            ],
            borderColor: [
                'rgba(178, 235, 242, 0.5)',
                'rgba(178, 235, 242, 0.5)',
                'rgba(178, 235, 242, 0.5)',
                // 'rgba(25, 118, 210, 0.5)',
                // 'rgba(25, 118, 210, 0.5)',
                // 'rgba(25, 118, 210, 0.5)',
                // 'rgba(25, 118, 210, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            display: false
        },
        legend: {
            display: true,
            position: "right",
            fullWidth: true
        },
        layout: {
            padding: 10
        }
    }
});
