
var firebaseConfig = {
      apiKey: "AIzaSyDg0A6jlwIXeo-EzVbrZrYBBJENnalBwx0",
      authDomain: "kwitmain.firebaseapp.com",
      databaseURL: "https://kwitmain-default-rtdb.firebaseio.com",
      projectId: "kwitmain",
      storageBucket: "kwitmain.appspot.com",
      messagingSenderId: "92034316347",
      appId: "1:92034316347:web:3ffb59c1687cb0672fc41e"
    };
    firebase.initializeApp(firebaseConfig);



    var user_name= localStorage.getItem("named");

  document.getElementById("hello").innerHTML= `Welcome ${user_name} `;











function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room name _ "+Room_names);
       row="<div class=room_name id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       
      
      });});}
getData();
function addRoom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref(roomname).update({
            purpose:"chat"
          });
      localStorage.setItem("room_name",roomname);
        window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
}
function logout(){
  window.location="index.html";
}