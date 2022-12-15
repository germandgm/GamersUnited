import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const colRef = collection(db, 'users');

//registrar un usuario y guardarlo en firebase
const addUser = document.querySelector('.add');
addUser.addEventListener('submit', (event) =>{
    event.preventDefault()

    addDoc(colRef,{
        nombre: addUser.nombre.value,
        correo: addUser.correo.value,
        direccion: addUser.direccion.value,
        contraseña: addUser.contrasena.value,
    })
    .then(()=>{
        console.log(addUser)
        console.log(colRef)
        addUser.reset();
    })    
    
})

