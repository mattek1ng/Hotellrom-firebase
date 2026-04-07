import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export function useRooms(activeFilter, selectedFloor, selectedBeds) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRooms = async () => {
      await fetchRooms();
    };
    loadRooms();
  }, [activeFilter, selectedFloor, selectedBeds]);

  async function fetchRooms() {
    setLoading(true);
    try {
      const ref = collection(db, "rooms");
      let q;

      if (activeFilter === "all") {
        q = query(ref);
      } else if (activeFilter === "byFloor") {
        q = query(ref, where("floor", "==", selectedFloor));
      } else if (activeFilter === "byBeds") {
        q = query(ref, where("beds", ">", selectedBeds));
      } else if (activeFilter === "available") {
        q = query(ref, where("available", "==", true));
      } else if (activeFilter === "suites") {
        q = query(ref,
          where("type", "==", "suite"),
          where("available", "==", true)
        );
      } else if (activeFilter === "doubleFloor1") {
        q = query(ref,
          where("type", "==", "double"),
          where("floor", "==", 1),
          where("available", "==", true)
        );
      }

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setRooms([]);
    } finally {
      setLoading(false);
    }
  }

  return { rooms, loading };
}