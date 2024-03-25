declare module 'react-native-config' {
  export interface NativeConfig {
    CREDENTIAL_WEB_GOOGLE: string;
    CREDENTIAL_IOS_GOOGLE: string;
    API_KEY: string;
    API_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
