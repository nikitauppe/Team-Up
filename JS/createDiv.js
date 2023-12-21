const socket = io('http://localhost:8000')

const form = document.getElementById('send-Assignment');
const messageInput = document.getElementById("nameAssignment");
const className = document.querySelector(".file");

const append = (message)=>{
		const newElement = document.createElement('div');
		const newAssignmentName = document.createElement('h2');
		const newButton = document.createElement('button');
		newAssignmentName.innerText = message;
		newButton.innerText = "Add Work";
		newButton.setAttribute('onclick', 'gotoUpload()');
		className.append(newElement);
		newElement.append(newButton);
		newElement.append(newAssignmentName);		
	}

form.addEventListener('submit', (e) =>{
		e.preventDefault();
		const message = messageInput.value;
		append(`${message}`);
		socket.emit('send', message);
		messageInput.value = ''
	});

socket.on('receive', data=>{
		append(`${data.message}`);
	})
function gotoUpload()
{
	window.location.href="file-upload/index.php";
}