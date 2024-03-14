//--------- JavaScript Web Api's ---------//

// 1.Web Speech API ("Hello World" Spoken Out)

const textToSpeak = "Hello World";
const utterance = new SpeechSynthesisUtterance(textToSpeak);
window.speechSynthesis.speak(utterance);

// 2.Web Storage API (localStorage - Persistent storage in browser memory)

localStorage.setItem("key", "value"); // store data
const storedValue = localStorage.getItem("key"); // Retreive data
localStorage.removeItem("key"); // remove data

// 3.Web Storage API (sessionStorage - Session-specific storage)

sessionStorage.setItem("key", "value"); // store data
const storedvalue = sessionStorage.getItem("key"); // Retreive data
sessionStorage.removeItem("key"); // remove data

// 4.Web Fetch API (Fetch API to make a GET call)

fetch("your url")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("error:", error));

// 5.Web Geolocation API (Get user's location)

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(`Latitude: ${position.coords.latitude},
                    Longitude: ${position.coords.longitude}`);
  },
  (error) => {
    console.error("Error getting location:", error.message);
  }
);

// 6.web Canvas API (to draw a filled rectangle in blue)

const canvas=document.createElement('canvas')
canvas.width=200;
canvas.height=100;
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')
ctx.fillStyle="blue"
ctx.fillRect(10,10,180,80)

// 7.web Audio API  (An oscillator and play a tone)

const audioContext = new (window.AudioContext || window.webkitAudioContext)()
const oscillator = audioContext.createOscillator()
oscillator.frequency.setValueAtTime(440,audioContext.currentTime)
oscillator.connect(audioContext.destination)
oscillator.start()
oscillator.stop(audioContext.currentTime + 1)

// 8.web Sockets API (Real-time,bidirectional communication protocol)

const socket= new WebSocket("url")
socket.addEventListener('open',()=>socket.send('Hello Server!'))
socket.addEventListener('message',event =>console.log('Received:',event.data))
socket.addEventListener('close',()=>console.log('connection closed'))


//9.web IndexedDB API (Structured client-side data storage)

//open or create the database
const dbName ="TwitterPostsDB"
const dbVersion=1                

const request=indexedDB.open(dbName,dbVersion)
//handles errors that may occur during the database opening process
request.onerror(()=>{})
//specifies the actions to be taken when the database structure us being Upgraded
request.onupgradeneeded(()=>{})
//defines the actions to be taken upon successful opening of the database
request.onsuccess(()=>{})


//10.web File API (Manipulate files,access metadata)

{/* <input type="file" id="imageInput" accept="image/*">
<button onclick="uploadPost()">upload Post</button>
<script> */}
    function uploadPost(){
        const file = document.getElementById('imageInput').files[0]
        console.log('Selected file:',file);
    }

// </script>


//11.web notification API (Display System Notifications)

Notification.requestPermission()
.then(permission =>{
    new Notification('Hello World')
})


//12.web Workers API (Execute background scripts)

const worker = new Worker('worker.js')
worker.postMessage('Hello from Main Script!')


//13.web Intersection Observer API (Efficiently observers element visibility changes)

const observer =new IntersectionObserver(entries =>
    entries.forEach(
        entry => entry.isIntersecting && console.log('Element is in the viewport')
    )
    );
    observer.observe(document.getElementById('yourElementId'))


//14.web Mutation Observer API (Observes DOM changes asynchronously)

const observerr = new MutationObserver(mutations =>
    mutations.forEach(mutation =>console.log("DOM change Detected:",mutation)
    )
)
const targetNode = document.getElementById('yourElementId')
const config={attributes:true,childList:true,subtree:true}
observer.observe(targetNode,config) //start observing DOM Changes


//15.web Pointer Lock API (Captures mouse movements precisely in-browser)

const element =document.getElementById('yourElementId')
element.requestPointerLock()


//16.web Battery status API  (Monitors device battery information asynchronously)

navigator.getBattery().then(battery =>{
    console.log('Battery Level:',battery.level * 100 +'%');
    console.log('Charging:',battery.charging ? 'Yes' : 'No');
})


//17.web Gamepad API (Interacts with game controller devices)

window.addEventListener("gamepadconnected",(event)=>
console.log("Gamepad Connected:",event.gamepad.id)
);
window.addEventListener("gamepaddisconnected", (event) =>
  console.log("Gamepad disConnected:", event.gamepad.id)
);


//18.web DeviceOrientation and Motion API (Tracks device orientation and motion data)

window.addEventListener("deviceorientation",(event) =>{
    console.log("Device Orientation:",event.alpha,event.beta,event.gamma);
})

window.addEventListener("devicemotion", (event) => {
  console.log("Device Motion:", event.acceleration.x, event.acceleration.y, event.acceleration.z);
});


//19.web Push API (Enable push Notifications in Browsers)

//check for Push API Support
if("PushManager" in window){
    //request notification permission
    Notification.requestPermission().then(permission =>{
        if(permission === "granted"){
            //Subscription Logic Goes Here
        }
    })
}


//20.web Payment Request API (Facilitates streamLined online payment processing in browsers)


const supportedInstruments =[{supportedMethods: 'basic-card'}]
const paymentDetails ={total:
    {label:'Total',amount:{currency:"USD",Value:"10.00"}}}
const paymentPromise = new PaymentRequest(supportedInstruments,paymentDetails)
paymentPromise.show().then(PaymentResponse =>
    PaymentResponse.complete('success')
    )




