const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const consulta = document.querySelector("#consulta")
const consultaHelp = document.querySelector("#consultaHelp")
form.addEventListener('submit', (event) => {
	event.preventDefault()
	if (email.value ==="" && consulta.value === "") {
		if (email.value ==="") {
			emailHelp.innerText = "Por favor, complete este campo"	
		}
	if (consulta.value ==="") {
		consultaHelp.innerText = "Este campo no puede estar vacio"
	}	
	} else{
		console.log("Funciona");
		//form.submit();
	}
})

