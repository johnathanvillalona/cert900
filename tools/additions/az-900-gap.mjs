// az-900 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "az-900",
  questions: [
  {
    "t": "conditional-access-mfa",
    "x": "Administrators should be able to open the Azure portal only from devices that are marked compliant by the organization's device-management service. Which Conditional Access access control enforces this requirement?",
    "o": [
      "Require the device to be marked as compliant",
      "Require multi-factor authentication at sign-in",
      "Require an approved client application",
      "Require a password reset before access is granted"
    ],
    "a": 0,
    "e": "The require-compliant-device grant control checks that a device meets the policies enforced by the mobile device management service before access is allowed. Requiring multi-factor authentication verifies the user's identity but says nothing about the health or compliance of the device."
  },
  {
    "t": "conditional-access-mfa",
    "x": "Multi-factor authentication requires proof from more than one category of evidence. Which sign-in combination qualifies as genuine multi-factor authentication?",
    "o": [
      "A password plus a one-time code from an authenticator app",
      "A password plus the answer to a security question",
      "A username plus an account password",
      "A password plus a separately memorized PIN"
    ],
    "a": 0,
    "e": "A password is something the user knows while an authenticator code is something the user has, so the two come from different factor categories. A security question, a memorized PIN, and a second password are all knowledge factors, so pairing them adds no second category."
  },
  {
    "t": "entra-id",
    "x": "A supplier's employees need to sign in to a shared Microsoft 365 site using their own company credentials rather than being issued new accounts and passwords. Which Microsoft Entra capability enables this external collaboration?",
    "o": [
      "Business-to-business guest collaboration",
      "Self-service password reset",
      "Conditional Access policies",
      "Single sign-on to on-premises applications"
    ],
    "a": 0,
    "e": "Entra business-to-business collaboration invites external users as guests who authenticate with their own home organization's identity, so no new credentials are issued. Self-service password reset only helps existing internal users recover their own passwords."
  },
  {
    "t": "entra-id",
    "x": "The service desk spends hours each week resetting forgotten passwords. Leadership wants employees to reset their own passwords after verifying identity through registered methods. Which Microsoft Entra ID feature meets this need?",
    "o": [
      "Self-service password reset",
      "Single sign-on",
      "Conditional Access",
      "Multi-factor authentication"
    ],
    "a": 0,
    "e": "Self-service password reset lets users securely change or unlock their own accounts after confirming identity with registered verification methods, which cuts help-desk tickets. Multi-factor authentication strengthens sign-in but does not let a user recover a forgotten password on their own."
  },
  {
    "t": "rbac",
    "x": "An administrator is planning where to apply Azure role assignments so that permissions inherit to everything beneath the chosen level. At which scopes can an RBAC role be assigned?",
    "o": [
      "Management group, subscription, resource group, and single resource",
      "Subscription, resource group, and individual user account",
      "Tenant root, subscription, and billing account only",
      "Resource group and individual resource only"
    ],
    "a": 0,
    "e": "Azure RBAC supports four scope levels, and an assignment made at a higher scope is inherited by all child scopes below it. Billing accounts and individual user accounts are not RBAC scopes, so those options are incorrect."
  },
  {
    "t": "rbac",
    "x": "A project lead already creates and edits resources in a resource group with the Contributor role but cannot assign roles to teammates. Which built-in role should replace it so the lead can both manage resources and grant others access?",
    "o": [
      "Owner",
      "Reader",
      "User Access Administrator",
      "Billing Reader"
    ],
    "a": 0,
    "e": "The Owner role includes full resource management plus the ability to assign RBAC roles to others, which Contributor lacks. User Access Administrator can grant access to resources but cannot create or manage the resources themselves."
  }
],
}
