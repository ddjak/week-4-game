//function to make random numbers - DONE
//function to give random number values to each crystal image - DONE
//function to make a random score to get - DONE
//function to add the clicks from crystals to current store
//reset function when game is over (win/lose)
//function when score to get == current score, it is a win
//function when score to get <= current score, it is a loss

var randomNumberToGet = Math.floor((Math.random() * 120) + 19);
var randomCrystalValue1 = Math.floor((Math.random() * 12) + 1);
var randomCrystalValue2 = Math.floor((Math.random() * 12) + 1);
var randomCrystalValue3 = Math.floor((Math.random() * 12) + 1);
var randomCrystalValue4 = Math.floor((Math.random() * 12) + 1);

var scoreToGet = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;
var crystalValue1 = 0;
var crystalValue2 = 0;
var crystalValue3 = 0;
var crystalValue4 = 0;

var gameStart = true;

	if (gameStart === true) {
		
		scoreToGet = randomNumberToGet;
		crystalValue1 = randomCrystalValue1;
		crystalValue2 = randomCrystalValue2;
		crystalValue3 = randomCrystalValue3;
		crystalValue4 = randomCrystalValue4;

		$(".scoreToGet").html(scoreToGet);
		$(".currentScore").html(currentScore);
		$(".wins").html(wins);
		$(".losses").html(losses);

		var checkScore = function() {
			if (currentScore === scoreToGet) {
				wins++;
				$(".wins").html(wins);
				gameStart = false;
			}

			else if (currentScore > scoreToGet) {
				losses++;
				$('.losses').html(losses);
				gameStart = false;	
			}
		};
		var reset = function() {
			if (gameStart === false){
				
				currentScore = 0;
				randomNumberToGet = Math.floor((Math.random() * 120) + 19);
				var randomCrystalValue1 = Math.floor((Math.random() * 12) + 1);
				var randomCrystalValue2 = Math.floor((Math.random() * 12) + 1);
				var randomCrystalValue3 = Math.floor((Math.random() * 12) + 1);
				var randomCrystalValue4 = Math.floor((Math.random() * 12) + 1);

				scoreToGet = randomNumberToGet;
				crystalValue1 = randomCrystalValue1;
				crystalValue2 = randomCrystalValue2;
				crystalValue3 = randomCrystalValue3;
				crystalValue4 = randomCrystalValue4;
				
				$(".currentScore").html(currentScore);
				$(".scoreToGet").html(scoreToGet);
				gameStart = true;
			}
		};
		
		$(".crystal-1").on("click", function() {
			currentScore = currentScore + crystalValue1;
			$(".currentScore").html(currentScore);
			checkScore();
			if (gameStart === false){
				reset();
			}
		});

		$(".crystal-2").on("click", function() {
			currentScore = currentScore + crystalValue2;
			$(".currentScore").html(currentScore);
			checkScore();
			reset();
		});

		$(".crystal-3").on("click", function() {
			currentScore = currentScore + crystalValue3;
			$(".currentScore").html(currentScore);
			checkScore();
			reset();
		});

		$(".crystal-4").on("click", function() {
			currentScore = currentScore + crystalValue4;
			$(".currentScore").html(currentScore);
			checkScore();
			reset();
		});


		
	}