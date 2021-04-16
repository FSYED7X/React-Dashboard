export const authClientUrls = {
  registrationPath: "/app/register",
  verifyEmailPath: "/app/verify-email-otp",
  changeEmail: "/app/change-email",
  loginPath: "/app/login",
  forgotPasswordPath: "/app/forgot-password/",
  resetPasswordPath: "/app/reset-password/",
  changePasswordPath: "/app/change-password/",
};

export const usersClientUrl = {
  mainPath: "/app/users",
};

export const unitClientUrls = {
  recordCountPath: "/api/v1/client/",
  createPath: "/api/v1/client/",
};

export const grcClientUrls = {
  base: "/app/grc",
  unitsPath: "/app/grc/units",
  licensesPath: "/app/grc/licenses",
  repositoryPath: "/app/grc/repository",
  viewDocumentPath: "/app/grc/repository/:id",
};

export const settingsClientUrls = {
  base: "/app/settings",
  profilePath: "/app/settings/profile",
  organizationPath: "/app/settings/organization",
  repositoryPath: "/app/grc/repository",
};

export const clmClientUrls = {
  contractsPath: "/app/clm/contracts",
  vendorsPath: "/app/clm/vendors",
  repositoryPath: "/app/clm/repository",
  templatePath: "/app/clm/templates",
};

export const taskClientUrls = {
  taskPath: "/app/tasks-distribution/tasks",
  mytaskPath: "/app/tasks-distribution/mytasks",
};
