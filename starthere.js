function checkpass() {
    var correctuser = "Francisca123";
    var pass = "abcabc";
    var user = prompt("Ingresa tu Usuario");
    var password = prompt("Ingresa tu contraseña");


    if (password==pass && user==correctuser) {
        alert ("Credenciales correcta!")
        window.location.href = "index.html";
        } else {
        alert ("CONTRASEÑA INCORRECTA")
        }
}

