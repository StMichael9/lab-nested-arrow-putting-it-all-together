const createLoginTracker = (userInfo) => {
  let attemptCount = 0;
  let locked = false;
  const innerFunc = (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return "Login Failed";
    }
  };
  return innerFunc;
};

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
