const form = document.getElementById("myForm");
const listPengeluaran = document.getElementById("listPengeluaran");


let pengeluaran = JSON.parse(
    localStorage.getItem("pengeluaran")
) || [];


renderData();

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const nomin = Number(document.getElementById("nomin").value);


    if(nama === "" || nomin === ""){

        alert("Semua input harus diisi!");

    } else {

        const dataBaru = {
            nama: nama,
            nomin: nomin
        };

     
        pengeluaran.push(dataBaru);

       
        localStorage.setItem(
            "pengeluaran",
            JSON.stringify(pengeluaran)
        );

        renderData();


        form.reset();
    }

});

function renderData() {

    listPengeluaran.innerHTML = "";

    let total = 0;

    for(let i = 0; i < pengeluaran.length; i++) {

        const item = document.createElement("li");

        item.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );

        item.innerHTML = `
            <div>
                <strong>${pengeluaran[i].nama}</strong>
                <br>
                Rp ${Number(
                    pengeluaran[i].nomin
                ).toLocaleString("id-ID")}
            </div>

            <button
                class="btn btn-danger btn-sm"
                onclick="hapusData(${i})">
                Hapus
            </button>
        `;

        listPengeluaran.appendChild(item);

        total += Number(
        pengeluaran[i].nomin || 0
        );
    }

    document.getElementById(
        "totalPengeluaran"
    ).textContent =
        total.toLocaleString("id-ID");


}



function hapusData(index) {

    pengeluaran.splice(index, 1);

    localStorage.setItem(
        "pengeluaran",
        JSON.stringify(pengeluaran)
    );

    renderData();
}
