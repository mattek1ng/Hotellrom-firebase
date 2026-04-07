function FilterControls({ activeFilter, selectedFloor, setSelectedFloor, selectedBeds, setSelectedBeds }) {
  return (
    <>
      {/* Kontroller for etasje / sengeplasser */}
      {activeFilter === "byFloor" && (
        <div className="controls">
          <label className="label">Velg etasje:</label>
          <select
            value={selectedFloor}
            onChange={e => setSelectedFloor(Number(e.target.value))}
            className="select"
          >
            {[1, 2, 3].map(f => (
              <option key={f} value={f}>{f}. etasje</option>
            ))}
          </select>
        </div>
      )}

      {activeFilter === "byBeds" && (
        <div className="controls">
          <label className="label">Mer enn:</label>
          <select
            value={selectedBeds}
            onChange={e => setSelectedBeds(Number(e.target.value))}
            className="select"
          >
            {[1, 2, 3, 4].map(b => (
              <option key={b} value={b}>{b} sengeplasser</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}

export default FilterControls;