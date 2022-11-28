export interface IBookable {
  id: number;
  name: string;
  description: string;
  place: string;
  reservationLimit: number;
  remainingPlaces: number;
}