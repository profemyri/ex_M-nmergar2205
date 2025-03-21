function cambiarNumeroCaracteres() {
    Document.getElementById("numero_caracteres").innerHTML = Document.getElementById("instrucciones_adicionales").length;
};
Document.getElementById("instrucciones_adicionales").addEventListener("input", cambiarNumeroCaracteres());
