const container = document.querySelector(".display-container");

const createElems = (count = 16) => {
    const cols = [];
    const rows = [];
    let sizer = container.clientWidth / count;
    console.log(sizer);
    for (i = 0; i < count; i++) {
        rows[i] = document.createElement("div");
        rows[i].classList.add("div-point-container");
        for (j = 0; j < count; j++) {
            cols[j] = document.createElement("div");
            cols[j].classList.add("div-point");
            cols[j].innerHTML = "&nbsp;";
            rows[i].appendChild(cols[j]);
        }
        container.appendChild(rows[i]);
    }
    return (cols);
}

let n = 5;
let nodes = createElems(n);

const changeColor = (e) => {
    e.target.classList.add("black")
}

container.addEventListener("mouseover", changeColor);