let form = document.querySelector("#add");

form.addEventListener("submit",function onsubmit(event){
    event.preventDefault();
    addname(document.getElementById("name").value);
});

function addname(name){
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = name;
    ul.appendChild(li);
}
