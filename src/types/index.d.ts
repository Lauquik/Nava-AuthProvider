export interface IAuthState {
    expiresAt: number;
}

export interface ILogin {
    authResponse: IAuthState;
    isLogin: () => boolean;
    isValidate : () => boolean;
    setAuthResponse: (authResponse: IAuthState) => void;
}