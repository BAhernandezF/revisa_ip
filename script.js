const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3341b6276mshfe1cd0aa589568ep1ab457jsna9ab57b990f1',
		'X-RapidAPI-Host': 'ip-geolocalization-api.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocalization-api.p.rapidapi.com/ip?ip=${ip}`,OPTIONS)
  .then(res => res.json())
  .catch(err => console.error(err))
}

const _form = document.querySelector("#form")
const _input = document.querySelector("#input")
const _submit = document.querySelector("#submit")
const _result = document.querySelector("#result")

_form.addEventListener('submit', async (event) =>{

  event.preventDefault()
  const {value} = _input
  if(!value) return

  _submit.setAttribute('disabled', '')
  _submit.setAttribute('aria-busy','true')

  const ipInfo = await fetchIpInfo(value)

  if(ipInfo){
    _result.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  _submit.removeAttribute('disabled')
  _submit.removeAttribute('aria-busy')



  
})