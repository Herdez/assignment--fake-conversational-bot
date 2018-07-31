

function setTimeOf(mseconds, query, str) {
	setTimeout(function() {
		document.querySelector('#' + query).innerText = str;
		document.querySelector('.main__button-' + query).classList.add('active');
	}, mseconds);
}

function getValueOfInput() {
	var form = document.querySelector('form').addEventListener('submit', function(e){
	  e.preventDefault();
	  var textOfTarget = e.target.elements.username.value; 
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

}


running();
