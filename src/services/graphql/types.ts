export type Character = {
  name: string
  status: string
  species: string
  gender: string
  image: string
}

export type CharactersData = {
  info: {
    count: number
  }
  results: Character[]
}
