import * as firebase from './firebase';

export function home() {
  var a = [];
  var lis = [];
  var chave = ['Cpf', 'Senha']
  var ch = 0;
  var divMain = document.createElement('div')
  var  uls = element (document.createElement('ul'));
  var fragment = new DocumentFragment();
  var button = document.createElement('button');
  button.addEventListener('click' , (event)=> {
      window.location.href='estatistica.html';
  });
  button.innerHTML = 'Estatistica'; 
  uls.id='listagem';
  divMain.id='main';


  fragment.appendChild(divMain);
  fragment.appendChild(button);
  document.body.appendChild(fragment);

  //obtem a primeira listagem
  firebase.rootRef.ref().child('Usuario').on('value', (snapshot) => {
    var  exibe = remover(a)
    snapshot.forEach((datasnapshots) => {
      a.push(datasnapshots.val().cpf, datasnapshots.val().senha)
    });
    listagem(a,chave,ch);
   });

   var remover = function (array) {
     if (array.length >  0){
       for (var index = 0; index < array.length;index++ ){
         array.splice(0);
       }
     }else {
       return 'vazio';
     }
   }
   var listagem = function (a, chave , ch ){
      var ulUpdate = document.getElementById('listagem')
      if(lis.length>0){
        if (ulUpdate.parentNode) {
          ulUpdate.parentNode.removeChild(ulUpdate);
        }
      }
      if(!document.getElementById('listagem')){
         uls = element(document.createElement('ul'));
         uls.id='listagem';
      }
      for(var index = 0; index < a.length; index++ ){
      lis.push(document.createElement('li'))
      if(ch==0){
        lis[index].innerHTML = chave[0]+": " + a[index];
      }else if(ch==1){
        lis[index].innerHTML = chave[1]+": " + a[index];
      }
      if(ch==1){ ch=0; }else { ch++; }
      uls.appendChild(lis[index]);
     }
    divMain.appendChild(uls)
   };
   function element(elem){
      return elem;
   };

}
home();
