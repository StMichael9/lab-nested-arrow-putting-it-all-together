const createLoginTracker = (userInfo) => {
  let locked = false;
  let attemptCount = 0;

  const innerFunc = (passwordAttempt) => {
    if (locked) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    attemptCount++; // ← THIS LINE MUST RUN BEFORE returning "Login Failed"

    if (attemptCount > 3) {
      locked = true;
      return "Account locked due to too many failed login attempts";
    }

    return `Attempt ${attemptCount}: Login failed`; //  now this runs AFTER counting the attempt
  };
  return innerFunc;
};

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
