var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
	 //changing class name
	document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	 //since the id of the cool class is the word cool, it is telling the console to change the information of that document by applying the transition function on click me
	}
}


		var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
				'seat 1',
				'seat 2',
				'seat 3',
				'seat 4'
				],

			turnOn: function () {
				this.isTurnedOn = true; //refers to this = car, it will change the value of the property "isTurnedOn" to true once the user activates the turnOn function.
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car' + isOn)
					;
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}

			}


		};


		console.log('hello there my friends!');