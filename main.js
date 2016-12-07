// autocomplete

var input = document.getElementById('emailinput');

// Awesomplete(input, {
//     list: ["xyz@yahoo.com"]
// });

new Awesomplete(input, {
	list: ["emailaddress@gmail.com", "maxwell.kendall@gmail.com", "john.doe@sparcedge.com", "newmember@sparcedge.com"]
});

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
            label: "Hourly Data",
            backgroundColor: [
                'rgba(187, 222, 251, 0.5)'
            ],
            borderColor: [
                'rgba(25, 118, 210, 0.5)'
            ],
            data: [65, 59, 80, 81],
            borderWidth: 1,
            lineTension: 0.05,
            pointBorderWidth: 3,
            pointRadius: 6,
            pointBorderColor: 'rgba(25, 118, 210, 0.5)',
            pointBackgroundColor: 'white',
            data: [95, 30, 40, 81, 100, 300, 40, 81, 100]
        }
    ]
};

// Daily:

var dailyData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "Daily Data",
            backgroundColor: [
                'rgba(187, 222, 251, 0.5)'
            ],
            borderColor: [
                'rgba(25, 118, 210, 0.5)'
            ],
            data: [65, 59, 80, 81],
            borderWidth: 1,
            lineTension: 0.05,
            pointBorderWidth: 3,
            pointRadius: 6,
            pointBorderColor: 'rgba(25, 118, 210, 0.5)',
            pointBackgroundColor: 'white',
            data: [95, 30, 40, 81, 100, 300, 40]
        }
    ]
};

//Weekly

var weeklyData = {
    labels: ["First Week", "Second Week", "Third Week", "Fourth Week"],
    datasets: [
        {
            label: "Weekly Traffic",
            backgroundColor: 'rgba(187, 222, 251, 0.5)',
            borderColor: 'rgba(25, 118, 210, 0.5)',
            data: [65, 59, 80, 81],
            borderWidth: 1,
            lineTension: 0.05,
            pointBorderWidth: 3,
            pointRadius: 6,
            pointBorderColor: 'rgba(25, 118, 210, 0.5)',
            pointBackgroundColor: 'white'
        }
    ]

};

// Monthly

var monthlyData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: 'Monthly Traffic',
            data: [500, 2200, 1900, 1200, 900, 450, 1333],
            backgroundColor: 'rgba(187, 222, 251, 0.5)',
            borderColor: 'rgba(25, 118, 210, 0.5)',
            borderWidth: 1,
            lineTension: 0.05,
            pointBorderWidth: 3,
            pointRadius: 6,
            pointBorderColor: 'rgba(25, 118, 210, 0.5)',
            pointBackgroundColor: 'white'
            }
        ]
};

// Function for rendering Chart:

function renderChart(element, chartType, data) {
console.log("renderChart is working")
    var lineChart = new Chart(element, {
        type: chartType,
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

// function to remove class

function traverseSelectedClassOn (element) {
    var buttonArray = [hourly, daily, weekly, monthly];
    for (var i = 0; i < buttonArray.length; i ++){
        buttonArray[i].removeAttribute('class', 'selected');
        console.log(buttonArray[i]);
    }
    element.setAttribute("class", "selected");
}

renderChart(traffic, "line", monthlyData);

var weekly = document.getElementById("weekly");
var hourly = document.getElementById("hourly");
var daily = document.getElementById("daily");
var monthly = document.getElementById("monthly");

weekly.addEventListener("click", function(){
    renderChart(traffic, "line", weeklyData);
    traverseSelectedClassOn(weekly);
})
hourly.addEventListener("click", function(){
    renderChart(traffic, "line", hourlyData);
    traverseSelectedClassOn(hourly);
})
daily.addEventListener("click", function(){
    renderChart(traffic, "line", dailyData);
    traverseSelectedClassOn(daily);
})
monthly.addEventListener("click", function(){
    renderChart(traffic, "line", monthlyData);
    traverseSelectedClassOn(monthly);
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
