export interface iPokemon {
    count: number
    results: IDataPokemon[]
    next: string
    previous: string
}

export interface IDataPokemon {
    name: string
    url: string
}