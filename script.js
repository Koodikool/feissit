console.log('See käsk kuvab konsooli teate. Otsi mind üles!')
console.log('Vihje Googeldamiseks: Developer Tools Console')

document.querySelector('#regamise-nupp').onclick = function(event) {
    console.log('Nupule klikiti!')
    var tiim = document.querySelector('#tiim').value
    var kuupaev = document.querySelector('#kuupaev').value
    var server = document.querySelector('#server').value
    var email = document.querySelector('#email').value
    console.log('Registreeris meeskond:', tiim, kuupaev, server, email)

    var uusHTML = ""
    uusHTML += "<p>"
    uusHTML += tiim
    uusHTML += kuupaev
    uusHTML += server
    uusHTML += email
    uusHTML += "</p>"
    console.log('uusHTML', uusHTML)

}
