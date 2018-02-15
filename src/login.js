import * as firebase from './firebase.js';
var md5 = require('blueimp-md5'); //lib para criptografar campos

export default function login () {
    var login = document.getElementById('login');
    var pass = document.getElementById('password');
    var button = document.getElementById('logar');
    button.addEventListener('click', function(){
      connect(login.value, pass.value);
    });

    var connect = function (l , p){
    if (l.trim() == "" || p.trim() == ""){
        alert('CPF ou Senha esta em branco');
    }else {
      var pcripto = md5(String(p),'123');
    
      var key = md5(String(l));
      firebase.rootRef.ref("Usuario").child(key).on('value',function (snapshot){
          var resultado = (String(snapshot.val().cpf) == String(l) && String(snapshot.val().senha) == String(pcripto))? true : false;
          if (resultado == true){
            window.location.href='./home.html'
          }else { window.alert('CPF ou senha Errada'); }
        });
    };
  }
}
login();
