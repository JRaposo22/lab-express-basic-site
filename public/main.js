async function getJokes () {

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');  //fetch can only be used on a browser, but it will change in a near future
        const joke = await response.json();  //the .json() takes out all the headers,etc (info that we don't need) and gives the body of the request
        const jokeDiv = document.getElementById('chuck-facts');
        jokeDiv.innerHTML = joke.value;
    
    } catch (error) {
        
    }
}

const jokeGenerator = document.getElementById("joke-button");
jokeGenerator.onclick = () => {
    getJokes();
}

window.onload = () => {

  getJokes();

}