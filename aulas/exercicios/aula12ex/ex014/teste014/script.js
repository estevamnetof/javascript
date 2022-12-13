function carregar() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Manhã
        img.src = 'fotomanha.png'
        document.body.style.background = '#b3a16b'
    } else if (hora > 12 && hora <= 18){
        // Tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#fdaa4f'
    } else {
        // Noite
        img.src = 'fotonoite.png'
        document.body.style.background ='#6f6564'
    }
    
}