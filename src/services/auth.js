import axios from "axios";
import { navigate } from "gatsby"

const SERVER_URL = 'http://173.255.212.65:8080';

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {}

export const getToken = () =>
isBrowser() && window.localStorage.getItem("gatsbyToken")
    ? JSON.parse(window.localStorage.getItem("gatsbyToken"))
    : {}

export const getRefreshToken = () =>
isBrowser() && window.localStorage.getItem("gatsbyRefreshToken")
    ? JSON.parse(window.localStorage.getItem("gatsbyRefreshToken"))
    : {}

const setUser = user => window.localStorage.setItem("gatsbyUser", JSON.stringify(user));
const setToken = user => window.localStorage.setItem("gatsbyToken", JSON.stringify(user));
const setRefreshToken = user => window.localStorage.setItem("gatsbyRefreshToken", JSON.stringify(user));

export const handleLogin = async ({ email, password }) => {
    const LOGIN_ENDPOINT = SERVER_URL+'/v1/api/app/auth/admin/login';
    let config = {
        headers: {
            "client-key":"julklsjdmmaludnm01#"
        }
    }
    let data = {
        "email": email,
        "password": password
    }
    
    try {
        let response = await axios.post(LOGIN_ENDPOINT, data, config);
        
        if (response.status === 200) {
            setToken(response.data.data.accessToken)
            setRefreshToken(response.data.data.refreshToken)
            return setUser(response.data.data.adminUser)
            
            // return setUser({
            //     username: response.data.data.adminUser.userId,
            //     accessTokenExpiryTimeInMinutes: response.data.data.accessToken.expiryTimeInMinutes,
            //     accessToken: response.data.data.accessToken.token,
            //     accountStatus: response.data.data.adminUser.accountStatus,
            //     email: response.data.data.adminUser.email,
            //     firstName: response.data.data.adminUser.firstName,
            //     lastName: response.data.data.adminUser.lastName,
            //     userId: response.data.data.adminUser.userId,
            //     refreshTokenExpiryTimeInMinutes: response.data.data.refreshToken.expiryTimeInMinutes,
            //     refreshToken: response.data.data.refreshToken.token,
            //     message: response.data.message,
            // });
        } else {
            //display error
            console.log('error');
        }
    } catch (error) {
        console.log("the error")
        console.log(error);
    }
}

export const isLoggedIn = () => {
    const user = getUser();
    return !!user.firstName
}

export const logout = callback => {
    setUser({})
    callback()
}