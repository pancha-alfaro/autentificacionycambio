let password = "abcabc";

function passwordCheck (pass) {

    if (password==pass) {
        alert ("Contraseña correcta!")
        window.location.href = "index.html";
        } else {
            alert ("CONTRASEÑA INCORRECTA")
        }
}

passwordCheck(prompt("Ingrese contraseña"));
