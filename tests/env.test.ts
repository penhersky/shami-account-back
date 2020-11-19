import 'dotenv-flow/config';
import {
  PORT,
  DB_STR_URL,
  FACEBOOK_APP_ID,
  APP_URL,
  GOOGLE_APP_ID,
} from '../src/config';

describe('# Download the basic dependencies', () => {
  it('PORT', () => {
    expect(PORT).not.toBeNaN();
    expect(typeof PORT === 'number');
  });
  it('DB_STR_URL', () => {
    expect(DB_STR_URL).not.toBeNaN();
    expect(typeof DB_STR_URL === 'string');
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
