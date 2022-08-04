import { loginWithEmailPassword, RegisterEmailWithEmailPassword, signInWithGoogle } from "../../../src/firebase/provider";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startCreatingUsersWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword } from "../../../src/store/auth/thunks"
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/provider');

describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();
    beforeEach(()=> jest.clearAllMocks());

    test('debe de invocar el checkingCredentials ', async() => {

        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    })

    test('startGoogleSignIn debe de llamar checkingCredentials y login - exito', async() => {
        const loginData = {ok: true, ...demoUser}
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));


    })

    test('startGoogleSignIn debe de llamar checkingCredentials y logout - error', async() => {

        const loginData = {ok: false, errorMessage: 'Un error en Google'};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));


    })

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - exito', async() => {

        const loginData = {ok: true, ...demoUser};
        const formData = {email: demoUser.email, password: '12345'};

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    })

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y logout - error', async() => {

        const loginData = {ok: false, errorMessage: 'Un error en Google'};
        const formData = {email: demoUser.email, password: '12345'};

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));

    })

    test('startCreatingUsersWithEmailPassword debe de llamar checkingCredentials y logig - true', async() => {

        const loginData = {ok: true, ...demoUser};
        const formData = {email: demoUser.email, password: '12345', displayName: demoUser.displayName};

        await RegisterEmailWithEmailPassword.mockResolvedValue(loginData);
        await startCreatingUsersWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login({uid: demoUser.uid, displayName: demoUser.displayName, email: demoUser.email, photoURL: demoUser.photoURL}));

    })
    
    
    
})
