const mform = document.getElementById('send-message');
const mmessageInput = document.getElementById("messageInp");
const mclassName = document.querySelector(".chatBox");

const mappend = (message, position)=>{
		const newElement = document.createElement('div');
		const newAssignmentName = document.createElement('h2');
		newAssignmentName.innerText = message;
		newElement.classList.add(position);
		mclassName.append(newElement);
		newElement.append(newAssignmentName);		
	}

mform.addEventListener('submit', (e) =>{
		e.preventDefault();
		const message = mmessageInput.value;
		mappend(`You : ${message}`, 'right');
		socket.emit('send', message);
		mmessageInput.value = ''
	});

socket.on('receive', data=>{
		mappend(`${data.message}`,'left');
	})