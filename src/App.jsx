import { useState } from "react";
import { FILTERS } from "./constants/filters";
import { useRooms } from "./hooks/useRooms";
import RoomCard from "./components/RoomCard";
import FilterControls from "./components/FilterControls";
import "./App.css";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [selectedBeds, setSelectedBeds] = useState(2);

  const { rooms, loading } = useRooms(activeFilter, selectedFloor, selectedBeds);

  return (
    <div className="page">
      <div className="container">
        <h1 className="title">Hotellrom</h1>

        {/* Filter-knapper */}
        <div className="filter-row">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <FilterControls
          activeFilter={activeFilter}
          selectedFloor={selectedFloor}
          setSelectedFloor={setSelectedFloor}
          selectedBeds={selectedBeds}
          setSelectedBeds={setSelectedBeds}
        />

        {/* Resultat-teller */}
        <p className="count">
          {loading ? "Laster..." : `${rooms.length} rom funnet`}
        </p>

        {/* Romkort */}
        {!loading && (
          <div className="grid">
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
            {rooms.length === 0 && (
              <p className="empty">Ingen rom funnet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

