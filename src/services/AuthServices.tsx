export const login = async (email: string, _password: string) => {
    // Simulate an API call
    return {
      user: { email },
      accessToken: 'fake-access-token',
      refreshToken: 'fake-refresh-token'
    };
  };
  
  export const register = async (email: string, _password: string, otherData: any) => {
    // Simulate an API call
    return {
      user: { email, ...otherData },
      accessToken: 'fake-access-token',
      refreshToken: 'fake-refresh-token'
    };
  };
