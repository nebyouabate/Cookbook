export interface Ingredient {
    name: string,
    quality: Number,
    measurement: string // like count, oz, cups, or tea spoon ..  (this can also be defined as an enum)
}

export interface IRecipe {
    id: number,
    name: string,
    type: string, // I will make them enums i.e vegan, vegi ...
    prepTime: number,
    cookTime: number,
    picture?: string,
    rate: number,
    ingredients: Ingredient[]
}

export interface History  {
    date: Date,
    changes: string,
    recipe: IRecipe
}