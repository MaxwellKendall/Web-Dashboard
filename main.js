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



// variables for line chart

var weekly = {
        labels: ["S", "M", "T", "W", "TH", "F", "S"],
        datasets: [{
            label: 'Traffic',
            data: [500, 2200, 1900, 1200, 900, 450, 1333],
            backgroundColor: [
                'rgba(187, 222, 251, 0.5)'
            ],
            borderColor: [
                'rgba(25, 118, 210, 0.5)'
            ],
            borderWidth: 1,
            lineTension: 0.05,
            pointBorderWidth: 3,
            pointRadius: 6,
            pointBorderColor: 'rgba(25, 118, 210, 0.5)',
            pointBackgroundColor: 'white'
            }]
}

var lineChart = new Chart(traffic, {
    type: 'line',
    data: weekly,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false,
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

var dailyTraffic = document.getElementById("bar");

var barChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "TH", "F", "S"],
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
