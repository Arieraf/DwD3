const form = document.getElementById("myForm");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;

    const item = document.createElement("li");

    item.classList.add("list-group-item");

    const li = document.createElement("li");
    li.classList.add("list-group-item");

   
    const strong = document.createElement("strong");  
    strong.innerHTML = `<i class="bi bi-person-fill"></i> ${nama}`;

    const p = document.createElement("p");
    p.innerHTML = `${pesan}`;

    li.appendChild(strong);  
    li.appendChild(document.createElement("br"));
    li.appendChild(p);

    hasil.appendChild(li);  

    form.reset();

});






