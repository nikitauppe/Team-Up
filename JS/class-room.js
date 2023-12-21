function gotoSubjectRoom()
{
	window.location.href="adbm.php";
}

const className = document.querySelector('.subject');
const inputValue = document.getElementById("subjectName");

function createClassRoom()
{
	const divName = inputValue.value;
	if(divName == "")
	{	alert("Please, Enter Name of Subject in Input Field");	}
	else{
		const newElement = document.createElement('div');
		const newText = document.createElement('h2');
		const newButton = document.createElement('button');
		newText.innerText = divName;
		newButton.innerText = "Go";
		newButton.setAttribute('onclick', 'gotoSubjectRoom()');
		className.append(newElement);
		newElement.append(newButton);
		newElement.append(newText);
		inputValue.value = "";
	}
}

