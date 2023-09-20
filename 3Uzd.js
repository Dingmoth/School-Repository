let keywords = [];
while (true) {
    let userInput = prompt("Įveskite mėgstama dalyka. Jeigu norit sustoti ir pamatyti rezultata, paspauskite 'Cancel'");
    if (userInput === null) {
        break;
    } else {
        keywords.push(userInput);
    };
};
keywords.forEach(element => {
    const requestURL = `https://api.unsplash.com/search/photos?query=${element}&client_id=4jMyBoVGdvLT17MZLHwFrnGetjbA8e7de-TGPlqR1nY`;
    let div = document.createElement("div");
    div.style.width = '500px';
    div.style.display = "grid";
    div.style.textAlign = "center";
    document.querySelector('#container').appendChild(div);
    let text = document.createTextNode(element);
    div.appendChild(text);
    let img = document.createElement("img");
    div.appendChild(img);
    img.style.width = '500px';
    async function imageSet(){
        let randomImage = await getNewImage();
        img.src = randomImage;
    }
    async function getNewImage() {
        let randomNumber = Math.floor(Math.random() * 10);
        return fetch(requestURL)
            .then((response) => response.json())
            .then((data) => {
                let allImages = data.results[randomNumber];
                return allImages.urls.regular;
            }); 
    }
    imageSet();
});


