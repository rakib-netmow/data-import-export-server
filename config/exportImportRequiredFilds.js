guardianAllFields = [
  "profile_image",
  "first_name",
  "last_name",
  "phone",
  "email",
  "country",
  "city",
  "state",
  "zip",
  "address_line_1",
  "address_line_2",
  "password",
  "consfirm_passsword",
];

guardianRequiredFields = [
  "profile_image",
  "first_name",
  "email",
  "password",
  "consfirm_passsword",
];

playerAllFeilds = [
  "profile_image",
  "first_name",
  "last_name",
  "gender",
  "date_of_birth",
  "height",
  "weight",
  "country",
  "city",
  "state",
  "zip",
  "address_line_1",
  "address_line_2",
  "email",
  "description",
  "password",
  "confirm_password",
  "team",
  "fees",
];

playerRequiredFeilds = [
  "profile_image",
  "first_name",
  "email",
  "password",
  "confirm_password",
  "fees",
];

teamAllFields = [
  "profile_image",
  "name",
  "manager",
  "trainer",
  "fee",
  "description",
];

teamRequiredFields = [
  "profile_image",
  "name",
  "manager",
  "trainer",
  "fee",
  "description",
];

managerAllFields = [
  "first_name",
  "last_name ",
  "gender",
  "date_of_birth",
  "email",
  "phone",
  "image",
  "password",
  "confirm_password",
  "username",
  "status",
];

managerRequiredFields = [
  "first_name",
  "gender",
  "date_of_birth",
  "email",
  "phone",
  "image",
  "password",
  "confirm_password",
  "username",
  "status",
];

trainerAllFields = [
  "first_name",
  "last_name ",
  "gender",
  "date_of_birth",
  "email",
  "phone",
  "image",
  "password",
  "confirm_password",
  "username",
  "status",
];

trainerRequiredFields = [
  "first_name",
  "gender",
  "date_of_birth",
  "email",
  "phone",
  "image",
  "password",
  "confirm_password",
  "username",
  "status",
];

module.exports = {
  guardianAllFields,
  guardianRequiredFields,
  playerAllFeilds,
  playerRequiredFeilds,
  teamAllFields,
  teamRequiredFields,
  managerAllFields,
  managerRequiredFields,
  trainerAllFields,
  trainerRequiredFields,
};
