document.getElementById('button1').addEventListener('click', () => getJoke('Programming'));
document.getElementById('button2').addEventListener('click', () => getJoke('Misc'));
document.getElementById('button3').addEventListener('click', () => getJoke('Pun'));
document.getElementById('button4').addEventListener('click', () => getJoke('Spooky'));
document.getElementById('button5').addEventListener('click', () => getJoke('Christmas'));

getJoke('Any');

function getJoke(category) {
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); 
        if (data.type === 'single') {
            document.getElementById('joke').innerText = data.joke;
        } else if (data.type === 'twopart') {
            document.getElementById('joke').innerText = `${data.setup}... ${data.delivery}`;
        }

        if (category === 'Pun') {
            document.getElementById('title').innerText = 'A Random Pun'
        } else if (category === 'Any') {
            document.getElementById('title').innerText = 'Joke of the Day!';
        } else {
            document.getElementById('title').innerText = `A Random ${category} Joke`;
        }

    }).catch((err) => {
        console.log('ERROR', err);
        document.getElementById('joke').innerText = 'Unable to load Joke';
    })
}