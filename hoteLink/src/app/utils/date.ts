import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export const createTime = (hours: number, minutes: number = 0): Date => {
  return new Date(1970, 0, 1, hours, minutes);
}

export const toNgbDate = (date: Date): NgbDate => {
  return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
}