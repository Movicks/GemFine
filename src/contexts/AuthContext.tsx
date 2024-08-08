// Importing necessary modules and hooks from React and other libraries
import React, { createContext, useEffect, useReducer, ReactNode, useContext } from "react";
import Cookies from "js-cookie";
import { login as loginService, register as registerService } from '../services/AuthServices';

// Defining the shape (structure) of the authentication state
interface AuthState {
  user: any | null;          // `user` holds user data, initially it's null
  accessToken: string | null; // `accessToken` holds the token, initially null
}

// Defining the structure of actions that can be dispatched to modify the state
interface AuthAction {
  type: string;  // The type of action, e.g., 'SET_AUTH', 'LOGOUT'
  payload?: any; // The data that comes with the action, optional
}

// Defining the context's properties, functions for login, logout, etc.
interface AuthContextProps {
  state: AuthState; // The current state of authentication
  dispatch: React.Dispatch<AuthAction>; // Function to dispatch actions
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>; // Function to log in
  register: (email: string, password: string, otherData: any, rememberMe: boolean) => Promise<void>; // Function to register
  logout: () => void; // Function to log out
  isAuthenticated: boolean; // A boolean to check if the user is authenticated
}

// The initial state before any action is taken
const initialState: AuthState = {
  user: null,         // No user is logged in initially
  accessToken: null,  // No access token initially
};

// Defining action types as constants to avoid typos
const SET_AUTH = "SET_AUTH";
const GET_AUTH = "GET_AUTH";
const LOGOUT = "LOGOUT";

// The reducer function that handles state changes based on the dispatched actions
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_AUTH:
      // Clear existing data from local storage and cookies
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      Cookies.remove("refreshToken");

      // If the user wants to be remembered (stay logged in)
      if (action.payload.rememberMe) {
        // Save the access token and user data in local storage
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }

      // Save the refresh token in cookies for secure and long-term storage
      Cookies.set("refreshToken", action.payload.refreshToken, {
        secure: true,     // Ensures the cookie is sent over HTTPS only
        sameSite: "strict", // Prevents the cookie from being sent in cross-site requests
      });

      // Update the state with the new user and access token
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };

    case GET_AUTH:
      // When the app loads, retrieve user and access token from local storage
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user") || "null"), // Get user data from local storage
        accessToken: localStorage.getItem("accessToken"), // Get access token from local storage
      };

    case LOGOUT:
      // Remove user and token data when logging out
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      Cookies.remove("refreshToken");
      return initialState; // Reset to the initial state

    default:
      return state; // Return the current state for any unknown action
  }
};

// Creating a context to provide the authentication state and actions to the app
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// The provider component that will wrap the app or parts of it
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Using the reducer to manage the authentication state
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user and token data from local storage when the app starts
  useEffect(() => {
    dispatch({ type: GET_AUTH });
  }, []);

  // Function to log in the user
  const login = async (email: string, password: string, rememberMe: boolean) => {
    const data = await loginService(email, password); // Call the login service to get user data
    dispatch({
      type: SET_AUTH, // Dispatch an action to set the authentication data
      payload: {
        user: data.user,             // User information
        accessToken: data.accessToken, // Access token
        refreshToken: data.refreshToken, // Refresh token
        rememberMe,                    // Whether to remember the user
      },
    });
  };

  // Function to register a new user
  const register = async (email: string, password: string, otherData: any, rememberMe: boolean) => {
    const data = await registerService(email, password, otherData); // Call the register service
    dispatch({
      type: SET_AUTH, // Dispatch an action to set the authentication data
      payload: {
        user: data.user,             // User information
        accessToken: data.accessToken, // Access token
        refreshToken: data.refreshToken, // Refresh token
        rememberMe,                    // Whether to remember the user
      },
    });
  };

  // Function to log out the user
  const logout = () => {
    dispatch({ type: LOGOUT }); // Dispatch an action to log out and reset the state
  };

  // Check if the user is authenticated by checking if the access token exists
  const isAuthenticated = !!state.accessToken;

  // Provide the state and functions to the rest of the app
  return (
    <AuthContext.Provider value={{ state, dispatch, login, register, logout, isAuthenticated }}>
      {children} {/* Render the child components wrapped by this provider */}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider"); // Error if used outside of AuthProvider
  }
  return context; // Return the context with all the authentication info and actions
};
