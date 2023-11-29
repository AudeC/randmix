
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

const array = ["https://i.imgur.com/U6dyGtN.png",
                "https://i.imgur.com/qNwJQ1D.png",
                "https://i.imgur.com/pwijRT6.png",
                "https://i.imgur.com/HfEmjiD.png",
                "https://i.imgur.com/wxxMzR9.png",
                "https://i.imgur.com/uOGlEXN.png",
                "https://i.imgur.com/uCIt1Gw.png"
];

const firebaseConfig = {
    apiKey: "AIzaSyDewvFvddU9MT7EAFaKWygUYUiS7VviYDA",
    authDomain: "randmix-e4c93.firebaseapp.com",
    projectId: "randmix-e4c93",
    storageBucket: "randmix-e4c93.appspot.com",
    messagingSenderId: "22775257232",
    appId: "1:22775257232:web:f7720e54f00d0bd6f62015"
  };

const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default async (req, context) => {
    const { user, dossier } = context.params;

    //const randomElement = array[Math.floor(Math.random() * array.length)];


    const docRef = doc(db, "users", user, "_folders", dossier);


    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }

    const docSnap = await getDoc(docRef);
    console.log(docSnap);
    return new Response("Hey !");

    // Create a URL to redirect to
    //const redirectToUrl = randomElement;

    // Create a Response object for redirection
    /*const headers = {
        Location: redirectToUrl,
        "Cache-Control": "no-store, must-revalidate"
    };

    return new Response(null, {
        status: 302,
        headers: headers
    });*/

  };

  export const config = {
    path: "/mix/:user/:dossier/img.png"
  };