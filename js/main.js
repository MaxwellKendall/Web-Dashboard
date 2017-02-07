// A. Variables:

	// 1. Mobile Navigation

	var mobileNav = document.getElementById('menu-icon');

	// 2. Awesomplete

	var input = document.getElementById('userinput');

	// 3. Alert icons

	var alertIcon = document.getElementById('bell');
	var alertElement = document.getElementsByClassName('alert');

	// 4. Form Fields

	var submit = document.getElementsByClassName('form1')[0];
	var send = document.getElementById('sendmessage');
	var user = document.getElementById('userinput');
	var checkBoxes = [
		document.getElementById('notifications'),
		document.getElementById('privacy'),
		document.getElementById('xyz')
	];
	var saveSettingsButton = document.getElementsByClassName('form2')[0];

// B. Event Listeners

	// 1. Clicking the Alert icons
		alertIcon.addEventListener('click', addAlert);
		document.getElementsByTagName('header')[0].addEventListener('mouseover', closeAlert);
		document.getElementsByClassName('alert')[0].addEventListener('mouseover', closeAlert);

	// 2. Clicking the Form Fields
		submit.addEventListener('submit', displaySuccessMessage);

	// 3. Saving Local Storage
		saveSettingsButton.addEventListener('submit', saveSettings);

	// 4. Setting Local Storage
		document.addEventListener('DOMContentLoaded', setSettings);

	// 5. mobileNav
		mobileNav.addEventListener('click', mobileMenu);

// C. Functions

// 1. Autocomplete Function

	new Awesomplete(input, {
		list: ['Willetta Weidler', 'Mark Mcwilliam', 'Tamatha Taft', 'Jules Jardin','Erminia Ebert']
		}
	);

// 2. Alert Functions

function addAlert(){
	console.log(alertElement.length);
	if(alertElement.length < 3){
        var x = document.getElementsByClassName('dashboard')[0];
        var y = document.createElement('div');
		var z = document.createElement('div');
        y.setAttribute('class', 'alert');
		z.setAttribute('class', 'alert');
        y.innerHTML = '<span>Alert</span><span>This is the Notification</span><span><img src=\' icons/close.svg \'</span>';
		z.innerHTML = '<span>Alert</span><span>This is the Second Notification</span><span><img src=\' icons/close.svg \'</span>';
		x.insertAdjacentElement('afterend', z);
		x.insertAdjacentElement('afterend', y);
	} else {
		console.log(alerts.length);
	}
		if (alertElement.length > 0) {
			var alertNotificationIcon = document.getElementsByClassName('alert-icon')[0];
			alertNotificationIcon.style.visibility = 'visible';
		}
}

function closeAlert(){
for(var i = 0; i < alertElement.length; i ++) {
    console.log(i);
    var exitButton = alertElement[i].lastElementChild;
	var alertIcon = document.getElementsByClassName('alert-icon')[0];
    exitButton.addEventListener('click', function(){
        console.log('its working');
        this.parentElement.remove();
		if (alertElement.length === 0) {
		alertIcon.style.visibility = 'hidden';
			}
        });
    }
}

// 3. Sucess Message Function

function displaySuccessMessage(){
    event.preventDefault();
    console.log('function displaySuccessMessage triggered');
//1. Checking field validity

	if (user.validity.valid === false) {
		console.log(user.validity.valid);
		user.setCustomValidity('checkyoself');
	} else if (user.validity.valid === true) {
		user.setCustomValidity('');
	    var success = document.createElement('div');
	    success.setAttribute('id', 'successmessage');
		success.setAttribute('class', 'overlay');
	    success.innerHTML = "<div class='innersuccess'><h1>Your Message will be sent to the user</h1><input id='confirm' type='submit' value='OK'></input><input id='cancel' type='submit' value='Do not Send'></input></div>";
	    var container = document.getElementsByClassName('container')[0];
	    container.insertAdjacentElement('afterbegin', success);
		}

		// removing overlay

		var cancelbutton = document.getElementById('cancel');
	    cancelbutton.addEventListener('click', removeoverlay);
	    var okbutton = document.getElementById('confirm');
	    okbutton.addEventListener('click', removeoverlay);
    function removeoverlay(){
        console.log('removeoverlay function triggered');
        var x = document.getElementById('successmessage');
        x.remove();
		user.value ='';
		document.getElementById('message-to-user').value = '';
    	}
}

// 4. Local Storage Function

function saveSettings(){
	event.preventDefault();

	// 1. Saving the Settings Selections

		localStorage.email = checkBoxes[0].checked;
		localStorage.privacy = checkBoxes[1].checked;
		localStorage.timezone = checkBoxes[2].selectedIndex;
		console.log('localStorage.email = ' + localStorage.email + ' actual state = ' + checkBoxes[0].checked);
		console.log('privacy = ' + localStorage.privacy + ' actual state = ' + checkBoxes[1].checked);
		console.log('localStorage.timezone = ' + localStorage.timezone + ' actual state = ' + checkBoxes[2].selectedIndex);

	// 2. Adding the overlay

	    var success = document.createElement('div');
	    success.setAttribute('id', 'successmessage');
	    success.innerHTML = "<div class='innersuccess'><h1>Your settings have been successfully saved</h1><input id='confirm' type='submit' value='OK'></input></div>";
	    var container = document.getElementsByClassName('container')[0];
	    container.insertAdjacentElement('afterbegin', success);

	// 2 b. removing overlay

		var x = [
			document.getElementById('confirm'),
			document.getElementById('successmessage')
		];
			for (var i = 0; i < x.length; i ++){
				x[i].addEventListener('click', removeOverlay);
			}
		function removeOverlay(){
			console.log('removeoverlay function triggered');
			x[1].remove();
		}

}

// 5. Setting Local Storage

function setSettings(){
	console.log('setSettings function triggered');

if (localStorage.length > 0) {
		if (localStorage.email === 'true') {
			checkBoxes[0].checked = true;
		} else if (localStorage.email === 'false'){
			checkBoxes[0].checked = false;
		};

		if (localStorage.privacy === 'true'){
			console.log(localStorage.privacy + ' is true');
			checkBoxes[1].checked = true;
		} else if (localStorage.privacy === 'false'){
			console.log(localStorage.privacy + ' is false');
			checkBoxes[1].checked = false;
		}
	checkBoxes[2].selectedIndex = localStorage.timezone;
	}
}

// 6. Mobile Menu Display

function mobileMenu(){
	console.log('function mobileMenu function triggered');
	// window.alert('form submitted!');
	var overlay = document.createElement('div');
	overlay.setAttribute('id', 'menu');
	overlay.setAttribute('class', 'overlay');
	overlay.innerHTML = "<div class='innerMenu'><div class='close'><img id='close' src='icons/close.svg' alt=''></div><ul class='nav-icon'><li class='icon'><a href='#'><img src='icons/icon-dashboard.svg' alt=''/></a></li><li class='icon'><a href='#'><img src='icons/icon-members.svg' alt=''/></a></li><li class='icon'><a href='#'><img src='icons/icon-settings.svg' alt=''/></a></li><li class='icon'><a href='#'><img src='icons/icon-visits.svg' alt=''/></a></li></ul></div>";
	var container = document.getElementsByClassName('container')[0];
	container.insertAdjacentElement('afterbegin', overlay);

	document.getElementById('close').addEventListener("click", function(){
		document.getElementById('menu').remove();
	});
}



/******************** CHART STUFF ****************************************/

// Line Chart Data

var traffic = document.getElementById('line');

	// 4 Dataset Variables:
		// hourly, daily, weekly, & monthly

// Hourly

var hourlyData = {
    labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM', '12 AM'],
    datasets: [
        {
            label: 'Hourly Data',
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
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Daily Data',
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
    labels: ['First Week', 'Second Week', 'Third Week', 'Fourth Week'],
    datasets: [
        {
            label: 'Weekly Traffic',
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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
console.log('renderChart is working')
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
    element.setAttribute('class', 'selected');
}

renderChart(traffic, 'line', monthlyData);

var weekly = document.getElementById('weekly');
var hourly = document.getElementById('hourly');
var daily = document.getElementById('daily');
var monthly = document.getElementById('monthly');

weekly.addEventListener('click', function(){
    renderChart(traffic, 'line', weeklyData);
    traverseSelectedClassOn(weekly);
})
hourly.addEventListener('click', function(){
    renderChart(traffic, 'line', hourlyData);
    traverseSelectedClassOn(hourly);
})
daily.addEventListener('click', function(){
    renderChart(traffic, 'line', dailyData);
    traverseSelectedClassOn(daily);
})
monthly.addEventListener('click', function(){
    renderChart(traffic, 'line', monthlyData);
    traverseSelectedClassOn(monthly);
})

var dailyTraffic = document.getElementById('bar');

var barChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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


var mobileUsers = document.getElementById('pie');

var pieChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop', 'Other'],
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
            position: 'right',
            fullWidth: true
        },
        layout: {
            padding: 10
        }
    }
});
