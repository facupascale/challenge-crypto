import Config from 'react-native-config';

export const EnvConfig = {
  CREDENTIAL_WEB_GOOGLE: Config.CREDENTIAL_WEB_GOOGLE ?? '',
  CREDENTIAL_IOS_GOOGLE: Config.CREDENTIAL_IOS_GOOGLE ?? '',
  API_KEY: Config.API_KEY ?? '',
  API_URL: Config.API_URL ?? '',
};
