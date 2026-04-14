const createLoginTracker = (userInfo) => {
  let locked = false;

  let attemptCount = 0;

  const innerFunc = (passwordAttempt) => {
    if (locked) {
      return "Account locked due to too many failed login attempts";
    }
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return "Login Failed";
    }
    attemptCount++;

    if (attemptCount >= 3) {
      locked = true;
      return "Account locked due to too many failed login attempts";
    }
  };
  return innerFunc;
};

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
