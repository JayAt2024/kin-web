import { get } from '@/utils/request'

export interface UserInfo {
  id: number
  name: string
  email: string
}

/** 获取当前用户信息（示例） */
export function fetchUserInfo() {
  return get<UserInfo>('/user/info')
}
