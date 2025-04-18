console.log("Weather App Script Loaded");

//  fetch :  async and await
// promise [ fullfilled : then , pending, rejected : catch ]
const userCardContainer = document.getElementById('card_container');
async function fetchGithubUsers(){
    const repsonse =await fetch('https://api.github.com/users');
    const data = await repsonse.json();

    data.forEach( (user) => {
        const userCard = document.createElement('div');
        userCard.classList.add('card', 'w-[300px]', 'h-[400px]', 'shadow-xl', 'bg-gray-100', 'rounded-lg');
        userCard.innerHTML = ` 
                        <img 
                        src="${user.avatar_url}" 
                        alt="Weather Icon" 
                        class="w-full h-1/2 object-cover rounded-t-lg"
                        >
                                        
                        <h1 class="text-2xl text-center mt-2">${user.login}</h1>`

                        
        userCardContainer.appendChild(userCard);
    })

}
fetchGithubUsers()
