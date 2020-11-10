const ENV = process.env;

export const isProduction: boolean = ENV.NODE_ENV === 'production';
export const isDevelopment: boolean = !isProduction;
export const PORT: number | undefined = Number(ENV.PORT);

// database
export const { DB_NAME } = ENV;
export const { DB_USER_NAME } = ENV;
export const { DB_PASSWORD } = ENV;
export const { DB_HOST } = ENV;

// app utl
export const { APP_URL } = ENV;
export const { CLIENT_URL } = ENV;

// auth
export const { FACEBOOK_APP_ID } = ENV;
export const { FACEBOOK_APP_SECRET } = ENV;
export const { GOOGLE_APP_ID } = ENV;
export const { GOOGLE_APP_SECRET } = ENV;
