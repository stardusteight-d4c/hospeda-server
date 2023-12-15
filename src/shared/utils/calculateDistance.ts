export function calculateDistance(
  pointA: { lat1: number; lon1: number },
  pointB: {
    lat2: number;
    lon2: number;
  }
): number {
  const { lat1, lon1 } = pointA;
  const { lat2, lon2 } = pointB;
  const radiusOfEarthInKm = 6371;

  // Convert degrees to radians
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lon1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lon2 * Math.PI) / 180;

  // Latitude and longitude differences
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  // Haversine's formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in kilometers
  const distance = radiusOfEarthInKm * c;

  return Number(distance.toFixed(4));
}
