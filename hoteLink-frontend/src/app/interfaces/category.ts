import { categoryTypes } from '@enums/categoryTypes';

export interface ICategory {
    name: string,
    type: categoryTypes,
    imageId: string
}
