var firebaseConfig = {
    apiKey: "AIzaSyC0tRCgA5qHCcg6VAQsvPTX8DhxbiwbyB0",
    authDomain: "misitiocont.firebaseapp.com",
    projectId: "misitiocont",
    storageBucket: "misitiocont.appspot.com",
    messagingSenderId: "668074455894",
    appId: "1:668074455894:web:cb736666180c9f823adcf7",
    measurementId: "G-G1Z9ZPD3CM"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);


var firestore = firebase.firestore()

//Variable to access database collection
const db2 = firestore.collection("DataBarrio2")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let correo = document.getElementById('email').value
   

  //Save Form Data To Firebase
  db2.doc().set({
    email: correo 
   
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Gracias por suscribirse. Te responderemos en la brevedad")
})
/********************---------------- */


//Variable to access database collection
const db3 = firestore.collection("sabermas")

//Get Submit Form
let submitButton2 = document.getElementById('submit2')

//Create Event Listener To Allow Form Submission
submitButton2.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let correo2 = document.getElementById('email2').value
   

  //Save Form Data To Firebase
  db3.doc().set({
    email: correo2 
   
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Enviado exitosamente. Pronto recibiras mas información")
})