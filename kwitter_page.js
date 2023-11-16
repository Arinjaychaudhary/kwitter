//YOUR FIREBASE LINKS
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
var room_name=localStorage.getItem("room_name")


function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
        
            message:msg,
            name:user_name
          });
  
}






function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

          console.log(firebase_message_id);
          console.log(message_data);
          usrname=message_data["name"];
          
          message=message_data["message"];
          
          nam="<h4>"+usrname+"<img class='user-tick' id='tick' src='tick.png'></h4>";
          messag="<h4 class='message_h4'>"+message+"</h4><hr>";
          row=nam+messag;
          document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function logout(){
      window.location="index.html";
}