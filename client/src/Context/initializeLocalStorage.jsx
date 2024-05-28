//account and sign-out in local storage

const initializeLocalStorage = () => {
  // initializeLocalStorage.propTypes = {
  //   children: PropTypes.node.isRequired,
  // }

  const accountInLocalStorage = localStorage.getItem('account');
  const signOutInLocalStorage = localStorage.getItem('sign-out');
  let parsedAccount;
  let parsedSignOut;

  if (!accountInLocalStorage) {
    localStorage.getItem('account', JSON.stringify({}));
    parsedAccount = {};
  } else {
    // eslint-disable-next-line no-unused-vars
    parsedAccount = JSON.parse(accountInLocalStorage);
  }

  if (!signOutInLocalStorage) {
    localStorage.getItem('sign-out', JSON.stringify(false));
    parsedSignOut = false;
  } else {
    // eslint-disable-next-line no-unused-vars
    parsedSignOut = JSON.parse(signOutInLocalStorage);
  }
};

export { initializeLocalStorage };
