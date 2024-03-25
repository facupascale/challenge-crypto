import { useMutation } from "react-query";
import { useAuthStore } from "@store";
import { AuthServices } from "@services";
import { statusCodes, User, NativeModuleError } from "@react-native-google-signin/google-signin";

const useLogin = () => {
    const { setUserData, setLoggedIn, setLoginError } = useAuthStore();
    const { mutate, isLoading } = useMutation(AuthServices.signInWithGoogle, {
        onSuccess: (data: User) => {
            let user = data.user
            setUserData(user);
            setLoggedIn();
        },
        onError: (error: NativeModuleError) => {
            let errorMessage = '';
            switch (error.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    errorMessage = 'User cancelled the login flow';
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    errorMessage = 'Play Services not available or outdated';
                    break;
                default:
                    errorMessage = 'Something went wrong';
                    break;
            }
            setLoginError(errorMessage);
        },
    });

    return { login: mutate, isLoading }
}

export { useLogin }
