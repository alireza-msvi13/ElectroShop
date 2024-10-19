interface IUserInfo {
  username: string;
  email: string;
  password: string;
  phone: string;
  _id?: string;
  province?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  role?:string
}

interface ILoginUserBody {
  email: string;
  password: string;
}

interface ApiResponse {
  message: string;
  token: string;
  refreshToken: string;
  user?:IUserInfo
  wishlist?:any
  orders?: any
}
export type { IUserInfo, ILoginUserBody , ApiResponse }