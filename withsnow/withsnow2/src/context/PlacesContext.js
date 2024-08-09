import {createContext, useContext, useState} from 'react';
import placesData from '../screen/map/places';

export const PlacesContext = createContext();

export const PlacesProvider = ({children}) => {
  const [places, setPlaces] = useState(placesData);

  const toggleFavorite = id => {
    setPlaces(prevPlaces =>
      prevPlaces.map(place =>
        place.id === id ? {...place, isFavorite: !place.isFavorite} : place,
      ),
    );
  };

  return (
    <PlacesContext.Provider value={{places, toggleFavorite}}>
      {children}
    </PlacesContext.Provider>
  );
};

// Custom hook to use the PlacesContext
export const usePlacesContext = () => {
  const context = useContext(PlacesContext);
  if (context === undefined) {
    throw new Error('usePlacesContext must be used within a PlacesProvider');
  }
  return context;
};
