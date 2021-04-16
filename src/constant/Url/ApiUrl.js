const baseUrl = "https://mrc-grc-api.herokuapp.com/api/v1/";

export const authApiUrls = {
  registrationPath: `${baseUrl}user/`,
  verifyEmailPath: `${baseUrl}user/verify-email-otp`,
  loginPath: `${baseUrl}auth/login`,
  forgotPasswordPath: `${baseUrl}user/forgot-password/`,
  changePasswordPath: `${baseUrl}user/change-password/`,
  verifyTokenPath: `${baseUrl}user/verify-token`,
  resendOtpPath: `${baseUrl}user/resend-otp/`,
  resetPasswordPath: `${baseUrl}user/password-reset/`,
  businessRegisterPath: `${baseUrl}client/`,
  inviteRegisterPath: `${baseUrl}user/invited`,
};

export const userApiUrls = {
  invitePath: `${baseUrl}user/invite-user/`,
  multipleInvitePath: `${baseUrl}user/invite-multiple-user/`,
  inviteAndCreateTaskPath: "/api/v1/user/invite-user/",
  bulkUploadPath: `${baseUrl}user/bulk-upload/`,
  getAllPath: `${baseUrl}user/client/`,
  getDetails: `${baseUrl}user/`,
  updateUserDetailsPath: `${baseUrl}user/`,
  getOrgDetailsPath: `${baseUrl}client/`,
};

export const unitApiUrls = {
  getAllPath: `${baseUrl}unit/all/`,
  createPath: `${baseUrl}unit/`,
  createMultiplePaths: `${baseUrl}multiple-units/`,
  updateUnitDetailsPath: `${baseUrl}unit/`,
};

export const licenseApiUrls = {
  getAplicablityPath: `${baseUrl}licence/applicability/`,
  checkApplicabilityPath: `${baseUrl}licence/check-applicability/`,
  uploadLicensePath: `${baseUrl}licence/upload/`,
};

export const repositoryApiUrls = {
  getAll: `${baseUrl}repository/client/`,
  getSingle: `${baseUrl}repository/`,
};

export const GoogleMapsApiKey = "AIzaSyAwMYuESrDDzoj2tG_JVMhGFz1Is_hKrp4";

export const GoogleMapsApiUrl = `https://maps.googleapis.com/maps/api/js?key=${GoogleMapsApiKey}&libraries=places`;