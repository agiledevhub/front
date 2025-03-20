import { apiClient, setToken } from '../api/client';

export class UserService {
  static isEmailValid(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  static isPasswordValid(password: string): boolean {
    return password.length >= 6;
  }

  static async login(email: string, password: string): Promise<boolean> {
    console.log('[UserService] login');
    const response = await apiClient.post('/users/sign_in', {
      user: { email, password },
    });

    console.log('[UserService] login response', response);
    console.log(response.headers);
    if (response.status !== 200) {
      return false;
    }

    if (response.headers.authorization) {
      setToken(response.headers.authorization);
    }
    return true;
  }
}
