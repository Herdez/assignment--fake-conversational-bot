
var counter = 0;
var text = document.querySelector('.main');
var textOfTarget = "";


function setTimeOf(mseconds, query, str) {
	setTimeout(function() {
		document.querySelector('#' + query).innerText = str;
		document.querySelector('.main__button-' + query).classList.add('active');
	}, mseconds);
}

function getValueOfInput() {
	var form = document.querySelector('form').addEventListener('submit', function(e){
	  e.preventDefault();
	  textOfTarget = e.target.elements.username.value; 
	  if (textOfTarget !== "") { 
		  if (textOfTarget.length > 6) {
			    setTimeOf(1000, 'text4', "That’s a long name.");
		  } else {
			    setTimeOf(1000, 'text4', "That’s a short name.");
		  }
	      setTimeOf(2000, 'text5', "Nice to meet you, " + textOfTarget + ".");
      }
	});
}

function running() {
	setTimeOf(1000, 'text1',  'Hello, my name is Herdez');
	setTimeOf(2000, 'text2', 'I was an RoR Developer, but right now I’m studying Web Development.');
	setTimeOf(3000, 'text3', 'I like to watch movies and read books.');
    setTimeout(function() {
	    var textInput = document.querySelector('.main__bot').style.display = 'block';
		getValueOfInput();
	}, 4000);
	// if (counter === 1) {
	// 	document.querySelector('#text1').innerText =  'Hello, my name is Herdez';
	// } else if (counter === 2) {
	// 	document.querySelector('#text2').innerText = 'I was an RoR Developer, but right now I’m studying Web Development.';
	// } else if (counter === 3) {
	// 	document.querySelector('#text3').innerText = 'I like to watch movies and read books.';
	// } else if (counter === 4) {
	// 	var textInput = document.querySelector('.input-bot').style.display = 'block';
	// 	getValueOfInput();
	// 	clearInterval(time);		
	// }
	// counter++;
}


//var time = setInterval(running, 1000);
running();
