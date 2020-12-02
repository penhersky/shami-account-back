const ENV = process.env;

export const isProduction: boolean = ENV.NODE_ENV === 'production';
export const isDevelopment: boolean = !isProduction;
export const PORT: number | undefined = Number(ENV.PORT);

// database
export const { DB_STR_URL } = ENV;

// log lever
export const { LOG_LEVEL } = ENV;

// app utl
export const { APP_URL } = ENV;
export const { CLIENT_URL } = ENV;
export const { SLS_URL } = ENV;

// auth
export const { FACEBOOK_APP_ID } = ENV;
export const { FACEBOOK_APP_SECRET } = ENV;
export const { GOOGLE_APP_ID } = ENV;
export const { GOOGLE_APP_SECRET } = ENV;

// Secret keys
export const { ADMIN_TOKEN_SECURITY_KEY } = ENV;
export const { USER_TOKEN_SECURITY_KEY } = ENV;
