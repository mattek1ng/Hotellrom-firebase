function RoomCard({ room }) {
  const typeLabel = {
    single: "Enkeltrom",
    double: "Dobbeltrom",
    suite:  "Suite",
    family: "Familierom"
  };

  return (
    <div className={`card ${room.available ? 'available' : 'occupied'}`}>
      <div className="card-header">
        <span className="room-num">Rom {room.roomNumber}</span>
        <span className={`badge ${room.available ? 'available' : 'occupied'}`}>
          {room.available ? "Ledig" : "Opptatt"}
        </span>
      </div>

      <p className="room-type">{typeLabel[room.type] ?? room.type}</p>

      <div className="info-row">
        <span className="info"> {room.floor}. etasje</span>
        <span className="info"> {room.beds} senger</span>
        <span className="info"> kr {room.pricePerNight?.toLocaleString()}/natt</span>
      </div>
    </div>
  );
}

export default RoomCard;