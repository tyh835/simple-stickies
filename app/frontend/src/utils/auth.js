export const getAuthConfig = getState => {
  const { token } = getState().auth;
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    }
  };
};
