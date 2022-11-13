export interface IBookable {
  id: number;
  name: string;
  description: string;
  place: string;
  booking: {
    total: number,
    remaining: number
  }
}