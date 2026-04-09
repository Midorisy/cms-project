export interface TypeUserAccount {
  username: string
  password: string
}

export interface TypeLoginResponse {
  id: number
  name: string
  token: string
}

export interface RUserData {
  username: string
  password?: string
  userId: number
  token: string
}
