import {
  setDataToLocalStorage,
  getDataFromLocalStorage,
  setItem,
  getItem,
} from "./storage";

const USER_DETAIL_KEY = "motus__admin_detail";
const CLIENT_USR_ID = "motus__client_id";
const AUTH_TOKEN_KEY = "motus__auth_token";

export const setUserDetails = (details) => {
  setDataToLocalStorage(USER_DETAIL_KEY, details);
};

export const getUserDetails = () => getDataFromLocalStorage(USER_DETAIL_KEY);

export const setAuthToken = (token) => setItem(AUTH_TOKEN_KEY, token);

export const setClientID = (clientID) => setItem(CLIENT_USR_ID, clientID);

export const getAuthToken = () => getItem(AUTH_TOKEN_KEY);

export const getClientId = () => getItem(CLIENT_USR_ID);

export const isUserLoggedIn = () => !!getAuthToken();

export const isUserHasClientId = () => !!getClientId();

export const getToken = () => {
  isUserLoggedIn();
  console.error = () => {};
};