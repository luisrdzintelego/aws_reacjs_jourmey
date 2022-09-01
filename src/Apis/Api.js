const APIURL = "https://ipinfo.io/json?token=c7189c800a86bc"


function getLocation() {

	fetch(`${APIURL}`)
		.then((resultado) => {
			return resultado.json()
		})
		.then((lugar) => {
			//console.log(lugar)
		})
}

getLocation()

export function getLugar() {
	return fetch(`${APIURL}`)
}