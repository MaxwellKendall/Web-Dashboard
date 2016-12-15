// autocomplete

var input = document.getElementById('userinput');

// Awesomplete(input, {
//     list: ["xyz@yahoo.com"]
// });

new Awesomplete(input, {
	list: ["Willetta Weidler", "Mark Mcwilliam", "Tamatha Taft", "Jules Jardin","Erminia Ebert"]
	}
);

//Clicking the Alert icons

var alertIcon = document.getElementById('bell');
alertIcon.addEventListener('click', addAlert);
var alertElement = document.getElementsByClassName("alert");
document.getElementsByTagName('header')[0].addEventListener("mouseover", closeAlert);
document.getElementsByClassName('alert')[0].addEventListener("mouseover", closeAlert);
//Add Alert function

function addAlert(){
	var alerts = document.getElementsByClassName('alert');
	console.log(alerts.length);
	if(alerts.length < 3){
        var x = document.getElementsByClassName("dashboard")[0];
        var y = document.createElement("div");
		var z = document.createElement("div");
        y.setAttribute("class", "alert");
		z.setAttribute("class", "alert");
        y.innerHTML = "<span>Alert</span><span>This is the Notification</span><span><img src=\' icons/close.svg \'</span>";
		z.innerHTML = "<span>Alert</span><span>This is the Second Notification</span><span><img src=\' icons/close.svg \'</span>";
		x.insertAdjacentElement("afterend", z);
		x.insertAdjacentElement("afterend", y);
	} else {
		console.log(alerts.length);
	}
		if (alertElement.length > 0) {
			var alertIcon = document.getElementsByClassName("alert-icon")[0];
			alertIcon.style.visibility = "visible";
		}
}

//Exiting the Alert

function closeAlert(){
for(var i = 0; i < alertElement.length; i ++) {
    console.log(i);
    var exitButton = alertElement[i].lastElementChild;
	var alertIcon = document.getElementsByClassName("alert-icon")[0];
    exitButton.addEventListener('click', function(){
        console.log('its working');
        this.parentElement.remove();
		if (alertElement.length === 0) {
		alertIcon.style.visibility = "hidden";
	}
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
		user.value ="";
		document.getElementById("message-to-user").value = "";
    }

}

    // Validating Form Fields

var send = document.getElementById('sendmessage');
var user = document.getElementById('userinput');
send.addEventListener('click', function(){
	// event.preventDefault();
	if(user.validity.valid === false){
		user.setCustomValidity('checkyoself');
		} else {
		user.setCustomValidity("");
	}
});

// Setting Local Storage

var checkBoxes = [
	document.getElementById('notifications'),
	document.getElementById('privacy'),
	document.getElementById('xyz')
];
// for (var i = 0; i < checkBoxes.length; i ++){
// 	checkBoxes[i].addEventListener("mouseover", saveSettings);
// }

var saveSettingsButton = document.getElementsByClassName('form2')[0];
saveSettingsButton.addEventListener('submit', saveSettings);

function saveSettings(){
	event.preventDefault();

	// 1. Saving the Settings Selections

		localStorage.email = checkBoxes[0].checked;
		localStorage.privacy = checkBoxes[1].checked;
		localStorage.timezone = checkBoxes[2].selectedIndex;
		console.log("localStorage.email = " + localStorage.email + " actual state = " + checkBoxes[0].checked);
		console.log("privacy = " + localStorage.privacy + " actual state = " + checkBoxes[1].checked);
		console.log("localStorage.timezone = " + localStorage.timezone + " actual state = " + checkBoxes[2].selectedIndex);

	// 2. Adding the overlay

	    var success = document.createElement("div");
	    success.setAttribute("id", "successmessage");
	    success.innerHTML = "<div class='innersuccess'><h1>Your settings have been successfully saved</h1><input id='confirm' type='submit' value='OK'></input></div>";
	    var container = document.getElementsByClassName('container')[0];
	    container.insertAdjacentElement("afterbegin", success);

	// 2 b. removing overlay

		var x = [
			document.getElementById('confirm'),
			document.getElementById("successmessage")
		];
			for (var i = 0; i < x.length; i ++){
				x[i].addEventListener("click", removeOverlay);
			}
		function removeOverlay(){
			console.log('removeoverlay function triggered');
			x[1].remove();
		}

}

// Actually define the Settings Values via local Storage

function setSettings(){
	console.log("setSettings function triggered");

if (localStorage.length > 0) {
		if (localStorage.email === "true") {
			checkBoxes[0].checked = true;
		} else if (localStorage.email === "false"){
			checkBoxes[0].checked = false;
		};

		if (localStorage.privacy === "true"){
			console.log(localStorage.privacy + " is true");
			checkBoxes[1].checked = true;
		} else if (localStorage.privacy === "false"){
			console.log(localStorage.privacy + " is false");
			checkBoxes[1].checked = false;
		}
	checkBoxes[2].selectedIndex = localStorage.timezone;
	}
}

document.addEventListener("DOMContentLoaded", setSettings);


/******************** CHART STUFF ****************************************/

// Line Chart Data Variables: 4 -- hourly, daily, weekly, & monthly

// Hourly

var hourlyData = {
    labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 AM"],
    datasets: [
        {
            label: "Hourly Data",
            backgroundColor:'rgba(187, 222, 251, 0.5)',
            borderColor:'rgba(25, 118, 210, 0.5)',
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
            backgroundColor: 'rgba(187, 222, 251, 0.5)',
            borderColor: 'rgba(25, 118, 210, 0.5)',
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
            backgroundColor: 'rgba(3, 169, 244, 0.5)',
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
        },
		{
			label: 'Daily Average',
			data: [15, 12, 7, 10, 9, 6, 10],
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
        labels: ["Phones", "Tablets", "Desktop", "Other"],
        datasets: [{
            data: ['99', '55', '12', '25'],
            backgroundColor: [
                'rgba(187, 222, 251, 0.5)',
                'rgba(252, 179, 229, 0.5)',
                'rgba(252, 202, 179, 0.5)',
                'rgba(193, 252, 179, 0.5)'
                // 'rgba(0, 188, 212, 0.5)',
                // 'rgba(32, 163, 151, 0.5)'

            ],
            borderColor: [
                'rgba(178, 235, 242, 0.5)',
                'rgba(178, 235, 242, 0.5)',
                'rgba(178, 235, 242, 0.5)',
				'rgba(178, 235, 242, 0.5)'
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
