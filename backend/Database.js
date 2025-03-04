import { doc, setDoc, getDoc, getDocs, collection, query, where, addDoc } from "firebase/firestore"
import { database } from "./Firebase"

// Send/write to db
export const addNewLocation = async (locationData) => {
    try {
      const locationsRef = collection(database, "locations");
  
      const newLocation = {
        coordinates: locationData.coordinates,
        title: locationData.title,
        seller: locationData.seller,
        dateStart: new Date(locationData.dateStart),
        dateEnd: new Date(locationData.dateEnd),
        price: locationData.price,
        userEmail: locationData.userEmail
      };
  
      const docRef = await addDoc(locationsRef, newLocation);
      console.log("New location added with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding new location: ", error);
      throw error;
    }
  };

  // Retrieve/read from db
  export const getLocations = async (minPrice = null, maxPrice = null) => {
    try {
      const locationsRef = collection(database, "locations");
      let q = locationsRef;
  
      if (minPrice !== null && maxPrice !== null) {
        q = query(locationsRef, where("price", ">=", minPrice), where("price", "<=", maxPrice));
      }
  
      const querySnapshot = await getDocs(q);
      const locations = [];
  
      querySnapshot.forEach((doc) => {
        locations.push({ id: doc.id, ...doc.data() });
      });
  
      return locations;
    } catch (error) {
      console.error("Error retrieving locations:", error);
      throw error;
    }
  };