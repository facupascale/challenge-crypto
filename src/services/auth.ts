import { EnvConfig } from "@config";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
    webClientId: EnvConfig.CREDENTIAL_WEB_GOOGLE,
    iosClientId: EnvConfig.CREDENTIAL_IOS_GOOGLE,
});

const signInWithGoogle = async () => {
    const response = await GoogleSignin.signIn();
    return response
}

export const AuthServices = { signInWithGoogle }