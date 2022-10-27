const setJwtToken = (response, tokenType) => {
  if (response.ok) {
    const token = response.headers.get('Authorization');
    localStorage.setItem(tokenType, token);
  } else {
    throw new Error(response);
  }
};

export default setJwtToken;
