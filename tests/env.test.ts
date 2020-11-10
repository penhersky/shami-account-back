import 'dotenv-flow/config';
import {
  PORT,
  DB_NAME,
  DB_PASSWORD,
  DB_HOST,
  DB_USER_NAME,
  FACEBOOK_APP_ID,
  APP_URL,
  GOOGLE_APP_ID,
} from '../src/config';

describe('# Download the basic dependencies', () => {
  it('PORT', () => {
    expect(PORT).not.toBeNaN();
    expect(typeof PORT === 'number');
  });
  it('DB_NAME', () => {
    expect(DB_NAME).not.toBeNaN();
    expect(typeof DB_NAME === 'number');
  });
  it('DB_PASSWORD', () => {
    expect(DB_PASSWORD).not.toBeNaN();
    expect(typeof DB_PASSWORD === 'number');
  });
  it('DB_HOST', () => {
    expect(DB_HOST).not.toBeNaN();
    expect(typeof DB_HOST === 'number');
  });
  it('DB_USER_NAME', () => {
    expect(DB_USER_NAME).not.toBeNaN();
    expect(typeof DB_USER_NAME === 'number');
  });
  it('FACEBOOK_APP_ID', () => {
    expect(FACEBOOK_APP_ID).not.toBeNaN();
    expect(typeof FACEBOOK_APP_ID === 'number');
  });
  it('APP_URL', () => {
    expect(APP_URL).not.toBeNaN();
    expect(typeof APP_URL === 'number');
  });
  it('GOOGLE_APP_ID', () => {
    expect(GOOGLE_APP_ID).not.toBeNaN();
    expect(typeof GOOGLE_APP_ID === 'number');
  });
});
