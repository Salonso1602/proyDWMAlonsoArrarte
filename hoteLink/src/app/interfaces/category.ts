import { categoryTypes } from '@enums/categoryTypes';

export interface ICategory {
    id: number;
    name: string;
    type: categoryTypes;
    imageId: string;
}
