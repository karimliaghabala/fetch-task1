const button = document.querySelector('.container button')
const names = document.querySelector('.name');
const surname = document.querySelector('.surname');
const email = document.querySelector('.email');
const age = document.querySelector('.age');
const country = document.querySelector('.country');
const image = document.querySelector('.image img');

button.addEventListener('click', ()=>{
    fetch('https://randomuser.me/api/')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        names.innerText = data.results[0].name.first
        surname.innerText = data.results[0].name.last
        email.innerText = data.results[0].email
        age.innerText = data.results[0].dob.age
        country.innerText = data.results[0].location.country
        image.src = data.results[0].picture.large


        console.log(data.results)
    })
})
