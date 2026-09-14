export type Member = {
  name: string
  role: string
  image: string
}

export type Band = {
  id: number
  name: string
  foundedYear: number
  genre: string
  image: string
  info: string
  members: Member[]
}