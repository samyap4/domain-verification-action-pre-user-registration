exports.onExecutePreUserRegistration = async (event, api) => {
  const { APPROVED_DOMAINS, ERROR, USER_ERROR_MESSAGE } = event.configuration;

  const approvedDomains = APPROVED_DOMAINS.split(',');
  const userDomain = event?.user?.email?.split('@')[1];

  if (userDomain && !approvedDomains.includes(userDomain)) {
    api.access.deny(ERROR, USER_ERROR_MESSAGE);
  }
};
