
var encriptar = document.getElementById('encriptar');

function encriptarTexto() {
    var texto = document.getElementById('txtArea').value,
        txt = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto.charAt(i)) {
            case 'a':
                txt = txt + 'avtG'
                break;
            case 'e':
                txt = txt + 'eZon'
                break;
            case 'i':
                txt = txt + 'ijEk'
                break;
            case 'o':
                txt = txt + 'opbR'
                break;
            case 'u':
                txt = txt + 'uYtg'
                break;
            case 'A':
                txt = txt + 'avtG'
                break;
            case 'E':
                txt = txt + 'eZon'
                break;
            case 'I':
                txt = txt + 'ijEk'
                break;
            case 'O':
                txt = txt + 'opbR'
                break;
            case 'U':
                txt = txt + 'uYtg'
                break;
            default:
                txt = txt + texto.charAt(i)
        }
    }
    document.getElementById('txtArea2').value = txt;
}

function desencriptarTexto() {
    var texto = document.getElementById('txtArea').value,
        txt = ''
    texto = texto.split('vtG')
    for (let i = 0; i < texto.length; i++) {
        txt = txt + texto[i]
    }
    texto = txt
    texto = texto.split('Zon')
    txt = ''
    for (let i = 0; i < texto.length; i++) {
        txt = txt + texto[i]
    }
    texto = txt
    texto = texto.split('jEk')
    txt = ''
    for (let i = 0; i < texto.length; i++) {
        txt = txt + texto[i]
    }
    texto = txt
    texto = texto.split('pbR')
    txt = ''
    for (let i = 0; i < texto.length; i++) {
        txt = txt + texto[i]
    }
    texto = txt
    texto = texto.split('Ytg')
    txt = ''
    for (let i = 0; i < texto.length; i++) {
        txt = txt + texto[i]
    }
    document.getElementById('txtArea2').value = txt;

}

function copiar() {
    var texto = document.getElementById('txtArea2')
    texto.select()
    document.execCommand('copy')
}


