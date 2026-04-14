const createLoginTracker = (userInfo) => {
  let attemptCount = 0;
  const locked = false;
  const innerFunc = (passwordAttempt) => {
    attemptCount++;
    if (passwordAttempt == userInfo.password) {
      return "Login successful";
    } else if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (userInfo.password) {
      return "Loggged In!";
    } else {
      return "You are being locked out";
    }
  };
  return innerFunc;
};

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
