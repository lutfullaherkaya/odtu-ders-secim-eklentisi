/*
Just draw a border round the document.body.
*/

async function htmlIndir(url="DersSec.html") {
    return fetch(chrome.runtime.getURL(url)).then(r => r.text());
}

let app = document.createElement("div");
htmlIndir().then((html) => {
    app.innerHTML = html;
    let ilkForm = document.getElementsByClassName("formContainer")[0];
    ilkForm.parentElement.insertBefore(app, ilkForm);




    document.getElementById("sablon-ekleme-butonu").addEventListener("click", function() {
        let derslerTablosu = document.getElementById("dersler");
        let dersler = [
            {
                ad: "turkce",
                kod: "5710123",
                section: "31",
                kategori: "MUST"
            }
        ]
        for (let i = 0; i < dersler.length; ++i) {
            let satir = derslerTablosu.insertRow(-1);
            Object.values(dersler[i]).forEach(ders => {
                let hucre = satir.insertCell(-1);
                hucre.innerHTML = ders;
            });
            satir.insertCell(-1).innerHTML = '<button type="button">[ Add Course ]</button>'
        }
    });
});



