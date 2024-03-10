const button = document.querySelector(".btn")

const randomUser = async () => {

    const URL = `https://randomuser.me/api/`;

    try { 
        const resolve = await fetch(URL)
        if(!resolve.ok){
            throw new Error(`${resolve.status}`)
        }
        const data = await resolve.json()
        displayUser(data.resolveults) 
    } catch (error) {
        console.log(error);
    }
}

const displayUser = (user) => {
    const userCard = document.getElementById("card")
    user.forEach(({ picture, name, dob, phone, location}) => {
        userCard.innerHTML += `
        <div class="card bg-success text-white" style="width: 20rem;">
            <img src="${picture.large}" class="card-img-top p-2">
            <div class="card-body">
                <h5 class="card-title text-center">${name.title}. ${name.first} ${name.last}</h5>
                <p class="card-text">Age: ${dob.age}</p>
                <p class="card-text">Phone: ${phone}</p>
                <p class="card-text">Adresolves: ${location.city}-${location.country}</p>
            </div>
        </div>
        `
    });


}

randomUser()

button.addEventListener("click", () => {
    randomUser()
})