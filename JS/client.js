const socket = io('http://localhost:8000')

const form = document.getElementById('send-container');
const messageInput = document.getElementById('subjectName');
const className = document.querySelector('.subject');

const append = (message)=>{
		const newElement = document.createElement('div');
		const newText = document.createElement('h2');
		const newButton = document.createElement('button');
		newText.innerText = message;
		newButton.innerText = "Go";
		newButton.setAttribute('onclick', 'gotoSubjectRoom()');
		className.append(newElement);
		newElement.append(newButton);
		newElement.append(newText);
		messageInput.value = "";
	}

form.addEventListener('submit', (e) =>{
		e.preventDefault();
		const message = messageInput.value;
		append(`${message}`);
		socket.emit('send', message);
		messageInput.value = ''
	});

socket.on('receive', data=>{
		append(`${data.message}`)
	})

function gotoSubjectRoom()
{
	window.location.href="adbm.php";
}
