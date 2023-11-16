const container = document.querySelector(".container");

for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        const etchDiv = document.createElement("div");
        container.appendChild(etchDiv);
        etchDiv.classList.add('etchDiv');
    }
}