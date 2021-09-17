import { useState } from "react";

function useCurrentLocation(itemName, initialValue) {
  const [currentLocation, setCurrentLocation] = useState('')
  return {currentLocation};
}

export { useCurrentLocation };
