import { AuthData } from "../contexts/@types";


async function signIn(email: string, password: string): Promise<AuthData> {
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === 'kizua20'){
          resolve({
            token: 'fake-token',
            email,
            name: "Lourenço Cardoso"
          })
        } else {
        reject(new Error('credenciais invalidas'))
        }
      }, 500)
     })
}

export const authService = {signIn}