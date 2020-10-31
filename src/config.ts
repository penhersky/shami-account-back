const ENV = process.env;

export const isProduction: boolean = ENV.NODE_ENV === 'production';
export const isDevelopment: boolean = !isProduction;
export const PORT: number | undefined = Number(ENV.PORT);

// database
export const { DB_NAME } = ENV;
export const { DB_USER_NAME } = ENV;
export const { DB_PASSWORD } = ENV;
export const { DB_HOST } = ENV;
