
function functionNom() {
    var userName = document.getElementById('Nom').value;
    for (let i = 0; i < userName.length; i++) {
        if (userName[i] == " ") {

            console.log('not valid')
            return false
        }


    }
    console.log('userName valid')
    return true
}
function functionEmail() {
    var checkemail = document.getElementById('Mail').value;

    if (checkemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

        console.log("email valid")
        return (true)

    }
    console.log("You have entered an invalid email address!");
    return (false)
}
function functionPrenom() {
    var Prenom = document.getElementById('Prenom').value;
    if (Prenom == "") {

        console.log('not valid')
        return false
    }
    return true

}
function functionPassword() {
    var checkpass = document.getElementById('Password').value;
    var condition = [];
    condition.push("[A-Z]");
    condition.push("[a-z]");
    condition.push("[0-9]");
    condition.push("[$@$!%*#?&]");


    var niv = 0;
    for (let i = 0; i < condition.length; i++) {
        if (checkpass.match(condition[i])) {
            niv++;
            console.log(niv)
        }
        return true;
    }
    if (checkpass.length > 8) {
        switch (niv) {
            case 2:
                console.log('mot de passe faible');

                break;

            case 3:
                console.log('mot de passe moyen');
                break;
            case 4:
                console.log('mot de passe fort');
                break;
        }
    }
}

function functionUser() {
    var userName = document.getElementById('Username').value;
    for (let i = 0; i < userName.length; i++) {
        if (userName[i] == " ") {

            console.log('not valid')
            return false
        }


    }
    console.log('userName valid')
    return true
}

function BtnRegister() {


    var tableur = JSON.parse(localStorage.getItem('users'));
    console.log(tableur);
    if (tableur == null) {
        var tableur = [];

    }


    var users = {
        id: Math.floor(Math.random() * 1000) + 1,
        userName: document.getElementById('Username').value,
        email: document.getElementById('Mail').value,
        password: document.getElementById('Password').value,
        role: "PO",

    }
    tableur.push(users)


    localStorage.setItem('users', JSON.stringify(tableur))


}





function connexion() {
    var tabuser = JSON.parse(localStorage.getItem('users'));
    var Mail = document.getElementById('log').value;
    var log = document.getElementById('psw').value;
    console.log(tabuser);
    var test = false;
    // console.log(test);
    for (var i = 0; i < tabuser.length; i++) {
        console.log( "pass"+log);
        console.log( "tabuser[i].password"+tabuser[i].password );
        console.log("tabuser[i].email == Mail"+tabuser[i].email == Mail);
        console.log(tabuser[i].password == log && tabuser[i].email == Mail);

        if (tabuser[i].password == log && tabuser[i].email == Mail) {
            //    console.log("if button login");
            test = true;
            localStorage.setItem('connected', JSON.stringify(tabuser[i]));
            
            location.href = "./dashboard.html";
        }
            

    }
    //  var tabuser = JSON.parse(localStorage.getItem('users'));
    //  for (let i = 0; i < tabuser.length; i++) {
    //         // console.log(tabuser[i].email == email.value);
    //         if (tabuser[i].Mail == Mail.value && tabuser[i].password == log.value  ){ 

    //             test = true;
    //             location.href = "./dashboard.html";



    //             localStorage.setItem('connected', JSON.stringify(user));
    //         }
    //     }
}

