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