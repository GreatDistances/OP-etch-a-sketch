const container = document.querySelector(".container");


// establish 4x4 grid
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const etchDiv = document.createElement("div");
        container.appendChild(etchDiv);
        etchDiv.classList.add('etchDiv');
        etchDiv.addEventListener('mouseover', () => {
            etchDiv.classList.add('etchDiv-hover');
        });
    }
}
