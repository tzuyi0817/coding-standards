import request from '@/utils/request';
import type { LoginPayload } from '@/types/user';

export function loginUser(data: LoginPayload) {
  return request.post('/login', data);
}

export function logoutUser() {
  return request.post('/logout');
}
