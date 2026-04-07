const admin = require("firebase-admin");
const serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const rooms = [
  { roomNumber:"101", floor:1, type:"single",  beds:1, available:true,  pricePerNight:900 },
  { roomNumber:"102", floor:1, type:"double",  beds:2, available:true,  pricePerNight:1300 },
  { roomNumber:"103", floor:1, type:"double",  beds:2, available:false, pricePerNight:1300 },
  { roomNumber:"104", floor:1, type:"suite",   beds:4, available:true,  pricePerNight:3200 },
  { roomNumber:"105", floor:1, type:"family",  beds:3, available:false, pricePerNight:1800 },
  { roomNumber:"201", floor:2, type:"single",  beds:1, available:false, pricePerNight:900 },
  { roomNumber:"202", floor:2, type:"double",  beds:2, available:true,  pricePerNight:1400 },
  { roomNumber:"203", floor:2, type:"suite",   beds:3, available:true,  pricePerNight:3500 },
  { roomNumber:"204", floor:2, type:"family",  beds:4, available:false, pricePerNight:1900 },
  { roomNumber:"205", floor:2, type:"double",  beds:2, available:true,  pricePerNight:1400 },
  { roomNumber:"301", floor:3, type:"suite",   beds:5, available:false, pricePerNight:4500 },
  { roomNumber:"302", floor:3, type:"double",  beds:2, available:true,  pricePerNight:1500 },
  { roomNumber:"303", floor:3, type:"single",  beds:1, available:true,  pricePerNight:1000 },
  { roomNumber:"304", floor:3, type:"family",  beds:3, available:true,  pricePerNight:2000 },
  { roomNumber:"305", floor:3, type:"suite",   beds:4, available:true,  pricePerNight:4800 },
];

async function importRooms() {
  for (const room of rooms) {
    await db.collection("rooms").doc(room.roomNumber).set(room);
    console.log(`✅ Importert rom ${room.roomNumber}`);
  }
  console.log("Alle rom er importert!");
  process.exit(0);
}

importRooms();