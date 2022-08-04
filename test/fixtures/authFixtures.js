export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authenticatedState = {
    status: 'authenticated',
    uid: '123ABC',
    email: 'prueba@google.com',
    displayName: 'Usuario Prueba',
    photoURL: 'https://prueba.jpg',
    errorMessage: null
}

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const demoUser = {
    uid: '123ABC',
    email: 'prueba@google.com',
    displayName: 'Usuario Prueba',
    photoURL: 'https://prueba.jpg'
}