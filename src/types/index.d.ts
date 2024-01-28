export interface IAuthState {
    expiresAt: number;
}

export interface ILogin {
    authResponse: IAuthState;
    isLogin: () => boolean;
    isValidate : () => boolean;
    setAuthResponse: (authResponse: IAuthState) => void;
}

interface SignInResponse {
    user_id: string;
    username: string;
    email: string;
    phone: string;
    additional_info: string;
    sessions: string[];
    token: string;
}

interface VerifyProps {
    phone: string;
    username: string;
    redirectUri: string;
}

interface VerifyResponse {
    user_id: string;
    username: string;
    email: string;
    jwt_token: string;
    expires_in: number;
  }
