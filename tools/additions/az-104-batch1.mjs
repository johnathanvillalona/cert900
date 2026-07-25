// az-104 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "az-104",
  questions: [
  {
    "t": "entra-users-groups-create",
    "x": "An administrator must create a group that also provisions a shared mailbox and a SharePoint site for a project team. Which group type meets this need?",
    "o": [
      "Microsoft 365 group",
      "Security group",
      "Distribution list",
      "Mail-enabled security group"
    ],
    "a": 0,
    "e": "Microsoft 365 groups provide a shared mailbox, calendar, and SharePoint site for collaboration. A security group only manages access to resources and does not create a mailbox."
  },
  {
    "t": "entra-users-groups-create",
    "x": "Users in the Sales department should be added to a group automatically whenever their department attribute is set to Sales. Which membership type supports this?",
    "o": [
      "Dynamic User",
      "Assigned",
      "Dynamic Device",
      "Owner-managed"
    ],
    "a": 0,
    "e": "Dynamic User membership evaluates a rule against user attributes such as department and updates membership automatically. Assigned membership requires manually adding each user."
  },
  {
    "t": "entra-users-groups-create",
    "x": "A team owner is setting up a new Microsoft 365 group. Which two membership options are available to choose? Choose TWO.",
    "o": [
      "Assigned",
      "Dynamic User",
      "Dynamic Device",
      "Nested inheritance",
      "Rule-based device"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Microsoft 365 groups support Assigned and Dynamic User membership. Dynamic Device membership is available only for security groups, not for Microsoft 365 groups."
  },
  {
    "t": "entra-users-groups-create",
    "x": "A help desk technician needs to add 200 new employees to Microsoft Entra ID at once from a spreadsheet. Which method should they use?",
    "o": [
      "Bulk create users from a CSV template",
      "Invite each new hire as a guest user",
      "Run a New-MgGroup batch command",
      "Enable a self-service sign-up flow"
    ],
    "a": 0,
    "e": "Bulk create uses a downloadable CSV template to add many users in a single operation. Guest invitations are for external collaborators, not internal employee accounts."
  },
  {
    "t": "entra-users-groups-create",
    "x": "Which Microsoft Graph PowerShell cmdlet creates a new cloud user account in Microsoft Entra ID?",
    "o": [
      "New-MgUser",
      "New-MgGroup",
      "Set-MgUser",
      "New-AzUserAssignedIdentity"
    ],
    "a": 0,
    "e": "New-MgUser creates a user object in Microsoft Entra ID. Set-MgUser only updates an existing user, and New-MgGroup creates a group rather than a user."
  },
  {
    "t": "entra-users-groups-create",
    "x": "An administrator uses assigned membership for a security group. Which two object types can be added directly as members? Choose TWO.",
    "o": [
      "Users",
      "Devices",
      "Management groups",
      "Subscriptions",
      "Resource groups"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Assigned security groups can contain users, devices, groups, and service principals. Management groups, subscriptions, and resource groups are governance scopes, not directory members."
  },
  {
    "t": "entra-user-group-properties",
    "x": "An employee is on extended leave and must not sign in, but the account and its data should be retained. What should the administrator configure?",
    "o": [
      "Set Block sign-in to Yes",
      "Delete the user account",
      "Remove the usage location",
      "Reset the user password"
    ],
    "a": 0,
    "e": "Blocking sign-in disables the account while preserving the object and its data. Deleting the account would remove it and its assignments after the recycle bin window."
  },
  {
    "t": "entra-user-group-properties",
    "x": "Which user property serves as the primary sign-in identifier in Microsoft Entra ID?",
    "o": [
      "User principal name",
      "Alternate email address",
      "Directory object ID",
      "Employee ID number"
    ],
    "a": 0,
    "e": "The user principal name is the sign-in name, formatted like an email address. The object ID is a system identifier and an alternate email is not used to sign in."
  },
  {
    "t": "entra-user-group-properties",
    "x": "A department lead is set as the owner of a security group. What can the owner do that a plain member cannot?",
    "o": [
      "Add and remove group members",
      "Change the tenant name",
      "Assign Azure subscriptions",
      "Create management groups"
    ],
    "a": 0,
    "e": "A group owner can manage the group's membership and some settings. Managing subscriptions or the tenant requires directory or resource roles, not group ownership."
  },
  {
    "t": "entra-user-group-properties",
    "x": "Which two attributes can an administrator edit directly on a Microsoft Entra user profile? Choose TWO.",
    "o": [
      "Usage location",
      "Job title",
      "Object ID",
      "On-premises sync status",
      "Account creation date"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Usage location and job title are editable profile attributes. Object ID, sync status, and creation date are system-managed values that cannot be changed manually."
  },
  {
    "t": "entra-user-group-properties",
    "x": "An administrator changes a group's membership type from Assigned to Dynamic. What happens to the members that were added manually?",
    "o": [
      "Members are removed and rebuilt from the rule",
      "Members are converted into group owners",
      "Members keep their access permanently",
      "Members are copied into a new group"
    ],
    "a": 0,
    "e": "Switching to dynamic membership discards manually assigned members and rebuilds the group from the rule. Only objects matching the rule remain in the group."
  },
  {
    "t": "entra-licenses",
    "x": "Which capability requires at least a Microsoft Entra ID P1 license for the users it protects?",
    "o": [
      "Conditional Access policies",
      "Security defaults",
      "Global administrator role assignment",
      "Password hash synchronization"
    ],
    "a": 0,
    "e": "Conditional Access requires Entra ID P1. Security defaults, role assignments, and password hash synchronization are available without a premium license."
  },
  {
    "t": "entra-licenses",
    "x": "Group-based licensing, which assigns product licenses through group membership, requires which minimum license edition?",
    "o": [
      "Microsoft Entra ID P1",
      "Microsoft Entra ID Free",
      "Microsoft Entra ID P2",
      "Microsoft 365 E5 only"
    ],
    "a": 0,
    "e": "Group-based licensing requires Entra ID P1 for the tenant. The free edition allows only per-user license assignment, not automatic assignment through groups."
  },
  {
    "t": "entra-licenses",
    "x": "A security team plans to use just-in-time role activation and identity risk detection. Which two premium features are gated behind the P2 tier? Choose TWO.",
    "o": [
      "Privileged Identity Management",
      "Identity Protection",
      "Conditional Access policies",
      "Group-based licensing",
      "Dynamic membership groups"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Privileged Identity Management and Identity Protection require Entra ID P2. Conditional Access, group-based licensing, and dynamic groups are included with P1."
  },
  {
    "t": "entra-licenses",
    "x": "An administrator cannot assign a license to a new user and receives a location error. Which property must be set first?",
    "o": [
      "Usage location",
      "Job title",
      "Manager",
      "Employee hire date"
    ],
    "a": 0,
    "e": "A license cannot be assigned until the user's usage location is set, because service availability varies by country. The other fields do not block licensing."
  },
  {
    "t": "entra-licenses",
    "x": "A company wants new hires added to a group to automatically receive Microsoft 365 licenses without manual steps. Which approach fits best?",
    "o": [
      "Group-based licensing",
      "Per-user license assignment",
      "A scheduled PowerShell script",
      "A bulk CSV license import"
    ],
    "a": 0,
    "e": "Group-based licensing assigns and removes licenses automatically as membership changes. Per-user assignment and scripts require ongoing manual work to stay current."
  },
  {
    "t": "entra-external-users",
    "x": "A partner from another organization needs access to a shared application in your tenant. What is the standard way to grant this access?",
    "o": [
      "Invite them as a B2B guest user",
      "Create a B2C consumer tenant",
      "Add them as a member account",
      "Enroll their device in Intune"
    ],
    "a": 0,
    "e": "Microsoft Entra B2B collaboration invites external partners as guest users while they keep their own credentials. B2C is for customer-facing consumer identities, not partner collaboration."
  },
  {
    "t": "entra-external-users",
    "x": "After an external partner accepts an invitation, what value is stored in the UserType property of their directory object?",
    "o": [
      "Guest",
      "Member",
      "External",
      "Federated"
    ],
    "a": 0,
    "e": "Invited collaborators are created with a UserType of Guest by default. Member is used for internal users, and External is not a valid UserType value."
  },
  {
    "t": "entra-external-users",
    "x": "Which two methods can bring an external user into a Microsoft Entra tenant? Choose TWO.",
    "o": [
      "Sending a B2B email invitation",
      "Enabling self-service sign-up",
      "Applying an Azure Policy",
      "Creating a management group",
      "Assigning a resource lock"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A B2B email invitation and self-service sign-up user flows both onboard external users. Azure Policy, management groups, and locks are governance controls that do not create users."
  },
  {
    "t": "entra-external-users",
    "x": "An administrator wants to limit what invited guests can see about other users and groups in the directory. Where is this configured?",
    "o": [
      "External collaboration settings",
      "Conditional Access named locations",
      "Azure Policy definitions",
      "Resource group access control"
    ],
    "a": 0,
    "e": "Guest permission restrictions are set in External collaboration settings under External Identities. Conditional Access controls sign-in conditions, not directory visibility for guests."
  },
  {
    "t": "entra-external-users",
    "x": "The security team must periodically re-certify that external guests still need their access and remove those who do not. Which feature automates this?",
    "o": [
      "Access reviews",
      "Identity Protection",
      "Self-service password reset",
      "Company branding"
    ],
    "a": 0,
    "e": "Access reviews let reviewers recertify guest access on a recurring schedule and remove stale accounts. Identity Protection detects risk but does not run recertification campaigns."
  },
  {
    "t": "entra-sspr",
    "x": "Self-service password reset should update passwords for accounts synchronized from an on-premises Active Directory. Which capability makes this possible?",
    "o": [
      "Password writeback through Microsoft Entra Connect",
      "The Network Policy Server extension",
      "Active Directory Federation Services",
      "Pass-through authentication agents"
    ],
    "a": 0,
    "e": "Password writeback in Microsoft Entra Connect sends cloud password resets back to on-premises Active Directory. The NPS extension is for RADIUS MFA, not SSPR writeback."
  },
  {
    "t": "entra-sspr",
    "x": "Which two authentication methods can an administrator enable for users to verify identity during self-service password reset? Choose TWO.",
    "o": [
      "Email address",
      "Security questions",
      "FIDO2 security key",
      "Windows Hello for Business",
      "Smart card certificate"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Email and security questions are valid SSPR verification methods. FIDO2 keys, Windows Hello, and smart cards are sign-in methods that are not supported for password reset."
  },
  {
    "t": "entra-sspr",
    "x": "An identity admin is configuring the SSPR policy in the Microsoft Entra admin center. Which two options appear on that policy blade? Choose TWO.",
    "o": [
      "Number of methods required to reset",
      "Require registration at next sign-in",
      "Windows account lockout threshold",
      "Virtual machine disk encryption",
      "Storage account replication"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The SSPR policy blade lets you set the number of methods required to reset and whether registration is enforced at sign-in. Lockout, disk encryption, and replication are unrelated."
  },
  {
    "t": "entra-sspr",
    "x": "How does self-service password reset behave for accounts holding administrator roles compared with standard users?",
    "o": [
      "They must use two methods and never security questions",
      "They are fully exempt from all reset requirements",
      "They may reset using a single email method only",
      "They must always call the internal help desk"
    ],
    "a": 0,
    "e": "Microsoft enforces a stricter policy on admin accounts, always requiring two methods and disallowing security questions. Standard users can be set to use fewer methods."
  },
  {
    "t": "entra-sspr",
    "x": "An administrator enables SSPR for the Selected option instead of All. Which users can then reset their own passwords?",
    "o": [
      "Members of a specified group",
      "Every user in the tenant",
      "Only global administrators",
      "Guest users exclusively"
    ],
    "a": 0,
    "e": "The Selected scope enables SSPR only for members of a chosen group, allowing a phased rollout. Choosing All would enable it for the entire tenant at once."
  },
  {
    "t": "subscriptions",
    "x": "An administrator needs to move an Azure subscription so that it inherits policies from a different management group. Which action accomplishes this?",
    "o": [
      "Move the subscription into the target management group",
      "Recreate the subscription under a new tenant",
      "Change the subscription offer type",
      "Convert the subscription to a resource group"
    ],
    "a": 0,
    "e": "Subscriptions can be moved between management groups to inherit their policy and role assignments. A subscription cannot become a resource group, which is a lower scope inside it."
  },
  {
    "t": "subscriptions",
    "x": "Each Azure subscription establishes a trust relationship with exactly one of which object for authentication?",
    "o": [
      "A Microsoft Entra tenant",
      "A resource group",
      "A management group",
      "A storage account"
    ],
    "a": 0,
    "e": "A subscription trusts a single Microsoft Entra tenant to authenticate users and services. Management groups organize subscriptions but are not the identity trust boundary."
  },
  {
    "t": "subscriptions",
    "x": "Which two statements accurately describe the role of an Azure subscription? Choose TWO.",
    "o": [
      "It acts as a billing boundary for usage",
      "It is a scope for role assignments",
      "It stores user passwords directly",
      "It replaces the need for resource groups",
      "It defines network firewall rules"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A subscription is both a billing container and a scope where RBAC roles and policies apply. It does not store credentials or replace resource groups, which live inside it."
  },
  {
    "t": "subscriptions",
    "x": "A team wants to be alerted and take action when spending on a subscription approaches a monthly threshold. Which tool should they configure?",
    "o": [
      "A Cost Management budget",
      "A resource lock",
      "An Azure Policy deny rule",
      "A network security group"
    ],
    "a": 0,
    "e": "Cost Management budgets trigger alerts and automation when spending nears a set amount. Resource locks prevent changes and deletion but do not track spending."
  },
  {
    "t": "subscriptions",
    "x": "In the Azure resource hierarchy, which scope sits directly above a resource group?",
    "o": [
      "Subscription",
      "Management group",
      "Tenant root group",
      "Individual resource"
    ],
    "a": 0,
    "e": "A resource group belongs directly to a subscription. Management groups and the tenant root sit above subscriptions, not immediately above a resource group."
  },
  {
    "t": "management-groups",
    "x": "At the top of every management group hierarchy, which built-in group contains all other management groups and subscriptions?",
    "o": [
      "The tenant root group",
      "The default subscription",
      "The primary resource group",
      "The global administrator group"
    ],
    "a": 0,
    "e": "The tenant root group is the top-level management group that all others descend from. Subscriptions and resource groups are lower scopes within that hierarchy."
  },
  {
    "t": "management-groups",
    "x": "Excluding the root level and the subscription level, how many levels deep can a management group hierarchy be nested?",
    "o": [
      "Six levels",
      "Two levels",
      "Ten levels",
      "Unlimited levels"
    ],
    "a": 0,
    "e": "Management groups support up to six levels of depth below the root, not counting the root or subscriptions. This limit keeps the governance hierarchy manageable."
  },
  {
    "t": "management-groups",
    "x": "Which two governance items can be assigned at the management group scope to affect all child subscriptions? Choose TWO.",
    "o": [
      "Azure Policy assignments",
      "RBAC role assignments",
      "Resource locks",
      "Network security groups",
      "Storage lifecycle rules"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Azure Policy and RBAC role assignments can target management groups and cascade to child subscriptions. Resource locks and NSGs apply only at subscription scope or lower."
  },
  {
    "t": "management-groups",
    "x": "Before an administrator can create child management groups, which permission or role must they hold at the appropriate scope?",
    "o": [
      "Management Group Contributor",
      "Reader",
      "Storage Blob Data Owner",
      "Network Contributor"
    ],
    "a": 0,
    "e": "Creating and managing management groups requires the Management Group Contributor role. Reader and resource-specific roles do not grant permission to build the hierarchy."
  },
  {
    "t": "management-groups",
    "x": "What is the primary purpose of introducing management groups above your subscriptions?",
    "o": [
      "To apply governance across many subscriptions at once",
      "To organize resources inside one subscription",
      "To manage per-user billing invoices",
      "To replace resource groups entirely"
    ],
    "a": 0,
    "e": "Management groups let you apply policy and access governance to multiple subscriptions together. Organizing resources within a single subscription is the job of resource groups."
  },
  {
    "t": "rbac-builtin-roles",
    "x": "An administrator must let a user create and manage every resource type in a resource group but must not allow them to grant other users access to those resources. Which built-in role fits?",
    "o": [
      "Contributor",
      "Owner",
      "User Access Administrator",
      "Reader"
    ],
    "a": 0,
    "e": "Contributor can manage all resources but cannot create role assignments, while Owner also grants the ability to manage access."
  },
  {
    "t": "rbac-builtin-roles",
    "x": "Which built-in role lets an administrator manage other users' access to Azure resources without granting the ability to manage the resources themselves?",
    "o": [
      "User Access Administrator",
      "Contributor",
      "Owner",
      "Storage Account Contributor"
    ],
    "a": 0,
    "e": "User Access Administrator manages access assignments only; Contributor manages resources but cannot assign roles to others."
  },
  {
    "t": "rbac-builtin-roles",
    "x": "A user with the Contributor role on a storage account gets an authorization error when opening blob contents in the portal. Which role grants the missing data-plane read access?",
    "o": [
      "Storage Blob Data Reader",
      "Reader",
      "Storage Account Contributor",
      "Contributor"
    ],
    "a": 0,
    "e": "Blob data access is a separate data-plane permission that Storage Blob Data Reader grants, while management roles like Contributor do not."
  },
  {
    "t": "rbac-builtin-roles",
    "x": "An administrator needs roles that are able to create role assignments for other security principals. Which two built-in roles can do this? Choose TWO.",
    "o": [
      "Owner",
      "User Access Administrator",
      "Contributor",
      "Reader",
      "Virtual Machine Contributor"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Owner and User Access Administrator hold the authorization write permission needed to assign roles; Contributor and the others cannot manage access."
  },
  {
    "t": "rbac-builtin-roles",
    "x": "A help-desk engineer must manage virtual machines but must be denied access to the virtual networks and storage accounts those machines connect to. Which built-in role is appropriate?",
    "o": [
      "Virtual Machine Contributor",
      "Contributor",
      "Network Contributor",
      "Storage Account Contributor"
    ],
    "a": 0,
    "e": "Virtual Machine Contributor manages VMs but not the connected network or storage; Contributor would grant far broader access."
  },
  {
    "t": "rbac-role-assignment-scopes",
    "x": "At which scope should a role be assigned so it applies to every existing and future resource group within one subscription?",
    "o": [
      "The subscription",
      "Each resource group separately",
      "A management group",
      "An individual resource"
    ],
    "a": 0,
    "e": "A subscription-scoped assignment is inherited by all resource groups and resources under it, including ones created later."
  },
  {
    "t": "rbac-role-assignment-scopes",
    "x": "A role is assigned at the management group scope. How does this assignment affect the subscriptions contained in that management group?",
    "o": [
      "It is inherited by all subscriptions beneath it",
      "It applies only to the management group object",
      "It must be recreated on each subscription",
      "It is ignored below the management group level"
    ],
    "a": 0,
    "e": "Assignments flow downward through the hierarchy, so a management group assignment is inherited by every child subscription and resource."
  },
  {
    "t": "rbac-role-assignment-scopes",
    "x": "An administrator is reviewing where RBAC role assignments may be applied. Which two of the following are valid assignment scopes? Choose TWO.",
    "o": [
      "Management group",
      "Resource group",
      "Azure region",
      "Resource tag",
      "Network security group"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The four RBAC scopes are management group, subscription, resource group, and resource; a region, tag, or NSG is not a scope."
  },
  {
    "t": "rbac-role-assignment-scopes",
    "x": "What is the lowest level in the Azure hierarchy at which an RBAC role assignment can be created?",
    "o": [
      "An individual resource",
      "A resource group",
      "A subscription",
      "A management group"
    ],
    "a": 0,
    "e": "Role assignments can be scoped as narrowly as a single resource, which is the most granular scope available."
  },
  {
    "t": "rbac-role-assignment-scopes",
    "x": "A role is assigned at one resource group. Which resources does that single assignment govern?",
    "o": [
      "Only that resource group and the resources in it",
      "Every resource group in the subscription",
      "All resources in the management group",
      "Only resources created before the assignment"
    ],
    "a": 0,
    "e": "A resource-group-scoped assignment applies to that group and its resources; sibling resource groups are unaffected."
  },
  {
    "t": "rbac-interpret-access",
    "x": "A user has Contributor at the subscription scope, but a deny assignment blocks delete operations on one resource group. Can the user delete resources in that group?",
    "o": [
      "No, the deny assignment overrides the allow",
      "Yes, because Contributor always permits deletion",
      "Yes, since the role sits at a higher scope",
      "Only if the user is also granted the Reader role"
    ],
    "a": 0,
    "e": "Deny assignments are evaluated before allow assignments, so the block wins even though Contributor normally permits deletion."
  },
  {
    "t": "rbac-interpret-access",
    "x": "An administrator wants to see the effective permissions a specific user holds on a resource. Which feature provides this on the resource's Access control blade?",
    "o": [
      "The Check access feature",
      "The Activity log",
      "The Diagnostic settings pane",
      "The user's profile in Microsoft Entra ID"
    ],
    "a": 0,
    "e": "Check access on the Access control blade reports the effective role assignments a chosen user, group, or principal has on that resource."
  },
  {
    "t": "rbac-interpret-access",
    "x": "A user belongs to two Microsoft Entra groups. One group holds Reader on a subscription; the other group has no role assignments. What access does the user have?",
    "o": [
      "Reader, inherited through the assigned group",
      "No access, because one group lacks a role",
      "Owner, granted to all group members by default",
      "None, unless the role is assigned directly to the user"
    ],
    "a": 0,
    "e": "RBAC assignments to a group apply to its members, so membership in the Reader group grants the user Reader access."
  },
  {
    "t": "rbac-interpret-access",
    "x": "An administrator is explaining how Azure RBAC evaluates access. Which two statements are correct? Choose TWO.",
    "o": [
      "Allow permissions across assignments are additive",
      "A deny assignment overrides a matching allow",
      "The most restrictive allow assignment wins",
      "Assignments never inherit to child scopes",
      "A principal needs an assignment at every scope"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "RBAC allow permissions are cumulative across assignments, and deny assignments override matching allows; there is no most-restrictive-wins rule among allows."
  },
  {
    "t": "rbac-interpret-access",
    "x": "A user is granted Reader at a subscription and Owner at a resource group inside it. What is their effective access on resources in that resource group?",
    "o": [
      "Owner, because allow permissions are cumulative",
      "Reader, because the higher scope wins",
      "No access, because the assignments conflict",
      "Only the permissions common to both roles"
    ],
    "a": 0,
    "e": "Allow permissions from different scopes combine, so the Owner assignment on the group grants full access to its resources."
  },
  {
    "t": "azure-policy",
    "x": "Which Azure Policy effect blocks a non-compliant resource from being created in the first place?",
    "o": [
      "Deny",
      "Audit",
      "Append",
      "DeployIfNotExists"
    ],
    "a": 0,
    "e": "The Deny effect stops a non-compliant create or update request; Audit only records non-compliance without blocking it."
  },
  {
    "t": "azure-policy",
    "x": "An organization wants existing non-compliant resources flagged in compliance reports but does not want deployments blocked. Which policy effect suits this?",
    "o": [
      "Audit",
      "Deny",
      "Modify",
      "Disabled"
    ],
    "a": 0,
    "e": "Audit marks resources as non-compliant for reporting without preventing their creation; Deny would block them outright."
  },
  {
    "t": "azure-policy",
    "x": "Which policy effect can automatically provision a related resource, such as a missing diagnostic setting, after evaluation?",
    "o": [
      "DeployIfNotExists",
      "AuditIfNotExists",
      "Audit",
      "Deny"
    ],
    "a": 0,
    "e": "DeployIfNotExists deploys a remediation template when the condition is met; AuditIfNotExists only reports on the missing related resource."
  },
  {
    "t": "azure-policy",
    "x": "An administrator is planning remediation tasks. Which two policy effects require a managed identity to make changes? Choose TWO.",
    "o": [
      "DeployIfNotExists",
      "Modify",
      "AuditIfNotExists",
      "Deny",
      "Append"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "DeployIfNotExists and Modify change resources during remediation and need a managed identity with proper permissions; AuditIfNotExists and Deny make no changes."
  },
  {
    "t": "azure-policy",
    "x": "Several related policy definitions must be assigned together and their compliance tracked as one group. What should the administrator create?",
    "o": [
      "A policy initiative",
      "A management group",
      "A resource lock",
      "A budget alert"
    ],
    "a": 0,
    "e": "An initiative, also called a policy set, bundles multiple definitions so they can be assigned and reported on together."
  },
  {
    "t": "azure-policy",
    "x": "An administrator reviews which effects can alter a resource request rather than only report on it. Which two effects modify or add to a resource? Choose TWO.",
    "o": [
      "Append",
      "Modify",
      "Audit",
      "Deny",
      "Disabled"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Append adds fields such as an IP range, and Modify adds, updates, or removes properties and tags; Audit and Deny do not change the resource."
  },
  {
    "t": "resource-locks",
    "x": "Which resource lock type permits reading a resource but prevents any modification or deletion of it?",
    "o": [
      "ReadOnly",
      "CanNotDelete",
      "Delete",
      "ReadWrite"
    ],
    "a": 0,
    "e": "A ReadOnly lock allows viewing but blocks changes and deletion; CanNotDelete still allows modifications."
  },
  {
    "t": "resource-locks",
    "x": "A CanNotDelete lock is applied to a resource group. What can users with proper roles still do to resources in that group?",
    "o": [
      "Read and modify but not delete them",
      "Neither read, modify, nor delete them",
      "Delete them but not modify them",
      "Read them only, with no modifications"
    ],
    "a": 0,
    "e": "CanNotDelete blocks deletion only; reading and modifying resources remain allowed for users with the right permissions."
  },
  {
    "t": "resource-locks",
    "x": "An Owner is unable to delete a virtual machine that carries a delete lock. What must happen before the deletion can succeed?",
    "o": [
      "The lock must be removed first",
      "The user must become Global Administrator",
      "The Owner role must be reassigned",
      "The VM must be moved to another subscription"
    ],
    "a": 0,
    "e": "Locks apply regardless of RBAC, so even an Owner must remove the lock before deleting the protected resource."
  },
  {
    "t": "resource-locks",
    "x": "An administrator plans where to place resource locks. At which two scopes can a lock be applied? Choose TWO.",
    "o": [
      "A subscription",
      "An individual resource",
      "A management group",
      "An availability zone",
      "A resource tag"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Locks can be set at the subscription, resource group, and resource scopes; management groups, zones, and tags are not lock scopes."
  },
  {
    "t": "resource-locks",
    "x": "Which built-in role includes the authorization permissions needed to create and delete resource locks?",
    "o": [
      "Owner",
      "Reader",
      "Virtual Machine Contributor",
      "Backup Operator"
    ],
    "a": 0,
    "e": "Managing locks needs the Microsoft.Authorization/locks actions, which Owner and User Access Administrator hold but Reader and lesser roles do not."
  },
  {
    "t": "resource-tags",
    "x": "By default, do Azure resources inherit tags from the resource group that contains them?",
    "o": [
      "No, tags must be applied to each resource directly",
      "Yes, all child resources inherit them automatically",
      "Yes, but only tags related to cost",
      "Only resources created after the tag is added"
    ],
    "a": 0,
    "e": "Tags are not inherited by default; Azure Policy with a Modify or inherit-tag effect is used to propagate them to resources."
  },
  {
    "t": "resource-tags",
    "x": "Which Azure Policy effect is commonly used to add or update a required tag on resources that are missing it?",
    "o": [
      "Modify",
      "Deny",
      "Audit",
      "Disabled"
    ],
    "a": 0,
    "e": "The Modify effect adds or updates tags during remediation; Audit would only report the missing tag without fixing it."
  },
  {
    "t": "resource-tags",
    "x": "An administrator wants Cost analysis to group spending by the department that owns each resource. Which feature should label the resources?",
    "o": [
      "Resource tags",
      "Resource locks",
      "Management groups",
      "Availability zones"
    ],
    "a": 0,
    "e": "Tags carry metadata such as a department name and can be used to filter and group costs in Cost analysis."
  },
  {
    "t": "resource-tags",
    "x": "Before a tagging rollout, which two facts about Azure resource tags are accurate? Choose TWO.",
    "o": [
      "A resource can hold up to 50 tag pairs",
      "Tags can organize costs in billing reports",
      "Child resources inherit tags automatically",
      "Every resource type supports tags",
      "A resource is limited to five tags"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A resource supports up to 50 name-value tag pairs and tags can organize billing; not all resource types support tags and inheritance is not automatic."
  },
  {
    "t": "resource-tags",
    "x": "Which Azure service can enforce that all resources within a scope carry a specific required tag?",
    "o": [
      "Azure Policy",
      "Resource locks",
      "Cost analysis",
      "Management groups"
    ],
    "a": 0,
    "e": "Azure Policy can audit or enforce required tags across a scope; locks and cost tools do not enforce tag presence."
  },
  {
    "t": "resource-groups",
    "x": "How many resource groups can a single Azure resource belong to at the same time?",
    "o": [
      "Exactly one",
      "Up to two for redundancy",
      "One for each region it uses",
      "There is no fixed limit"
    ],
    "a": 0,
    "e": "Every resource lives in exactly one resource group at a time, though it can later be moved to another group."
  },
  {
    "t": "resource-groups",
    "x": "What happens to the resources contained in a resource group when that resource group is deleted?",
    "o": [
      "All resources in the group are deleted",
      "They move to a default group",
      "They are kept but stopped",
      "Only tagged resources are removed"
    ],
    "a": 0,
    "e": "Deleting a resource group permanently deletes every resource inside it, so the action must be done carefully."
  },
  {
    "t": "resource-groups",
    "x": "A resource group is assigned a location during creation. What is the main purpose of that location?",
    "o": [
      "To store the group's metadata in that region",
      "To force all its resources into that region",
      "To set the billing currency",
      "To define a default virtual network"
    ],
    "a": 0,
    "e": "The location stores the group's metadata; the resources inside can still reside in other regions."
  },
  {
    "t": "resource-groups",
    "x": "Which two of the following correctly describe how Azure resource groups work? Choose TWO.",
    "o": [
      "A group can contain resources from multiple regions",
      "A resource can be moved to a different group",
      "Resource groups can be nested within each other",
      "A resource can belong to two groups at once",
      "A group must be empty before it can be deleted"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A resource group can hold resources from many regions and resources can be moved between groups; groups cannot be nested and need not be emptied first."
  },
  {
    "t": "cost-management",
    "x": "Does creating a budget in Cost Management automatically stop resource usage once the limit is reached?",
    "o": [
      "No, a budget only triggers alerts",
      "Yes, it deallocates all running resources",
      "Yes, it blocks any new deployment",
      "Only if a resource lock is also added"
    ],
    "a": 0,
    "e": "Budgets are for monitoring and trigger alerts or automation, but they do not by themselves halt spending."
  },
  {
    "t": "cost-management",
    "x": "Which tool gives an estimated monthly cost for Azure services before they are deployed?",
    "o": [
      "The Pricing calculator",
      "Cost analysis",
      "Azure Advisor",
      "The Total Cost of Ownership calculator"
    ],
    "a": 0,
    "e": "The Pricing calculator estimates costs pre-deployment; the TCO calculator compares on-premises expenses to Azure instead."
  },
  {
    "t": "cost-management",
    "x": "Which Azure service recommends ways to lower spending, such as resizing or shutting down underused virtual machines?",
    "o": [
      "Azure Advisor",
      "Azure Monitor",
      "Azure Policy",
      "Azure Blueprints"
    ],
    "a": 0,
    "e": "Azure Advisor produces cost recommendations, including right-sizing idle VMs; Monitor and Policy serve other functions."
  },
  {
    "t": "cost-management",
    "x": "An administrator wants to lower ongoing Azure compute charges. Which two options help reduce those costs? Choose TWO.",
    "o": [
      "Purchasing reserved instances",
      "Applying Azure Hybrid Benefit",
      "Enabling a ReadOnly lock",
      "Adding resource tags",
      "Creating a management group"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Reservations and Azure Hybrid Benefit lower compute costs; locks, tags, and management groups organize resources but do not cut the bill."
  },
  {
    "t": "cost-management",
    "x": "An administrator needs to define a spending budget in Cost Management. At which two scopes can a budget be created? Choose TWO.",
    "o": [
      "A subscription",
      "A resource group",
      "An individual resource",
      "An availability zone",
      "A network security group"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Budgets can be scoped to management groups, subscriptions, and resource groups; a single resource, zone, or NSG is not a budget scope."
  },
  {
    "t": "storage-firewalls-vnets",
    "x": "An administrator sets the storage firewall default action to Deny. Which rule still allows traffic from a specific subnet?",
    "o": [
      "A virtual network rule tied to the subnet's service endpoint",
      "A stored access policy that grants the subnet blob read access",
      "A Storage Blob Data Reader assignment on the subnet identity",
      "A public access level of Container set on the subnet"
    ],
    "a": 0,
    "e": "A VNet rule paired with the Microsoft.Storage service endpoint on the subnet passes the firewall. Stored access policies and RBAC roles do not affect network-level firewall decisions."
  },
  {
    "t": "storage-firewalls-vnets",
    "x": "Which configuration exposes a storage account over a private IP inside a VNet while blocking public internet access?",
    "o": [
      "A private endpoint with public network access disabled",
      "A service endpoint with the default action set to Allow",
      "A virtual network rule scoped to the gateway subnet",
      "A firewall IP rule covering the entire VNet range"
    ],
    "a": 0,
    "e": "A private endpoint gives the account a private VNet IP and, with public access disabled, cuts off internet paths. A service endpoint still targets the public storage endpoint over the Azure backbone."
  },
  {
    "t": "storage-firewalls-vnets",
    "x": "A firewalled storage account must be reachable by Azure Backup. Which firewall exception should the administrator enable?",
    "o": [
      "Allow trusted Microsoft services to access the account",
      "Add 0.0.0.0/0 to the IP firewall allow list",
      "Set the default network action to Allow",
      "Grant the Contributor role to the Backup resource"
    ],
    "a": 0,
    "e": "The trusted Microsoft services exception lets first-party services like Backup bypass the firewall. Opening 0.0.0.0/0 or defaulting to Allow would expose the account to every network."
  },
  {
    "t": "storage-firewalls-vnets",
    "x": "An administrator builds storage firewall network rules. Which two entries are valid to permit access? Choose TWO.",
    "o": [
      "A subnet enabled for the storage service endpoint",
      "A public IP address range in CIDR notation",
      "A Microsoft Entra ID security group object ID",
      "A stored access policy identifier string",
      "A blob container display name"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Storage firewall rules accept VNet subnet rules and public IP ranges. Entra groups, access policy names, and container names are not firewall rule types."
  },
  {
    "t": "storage-sas-tokens",
    "x": "Which shared access signature is signed with Microsoft Entra ID credentials instead of a storage account key?",
    "o": [
      "A user delegation SAS",
      "An account SAS",
      "A service SAS",
      "An ad hoc SAS"
    ],
    "a": 0,
    "e": "A user delegation SAS is signed with a key obtained through Entra ID, making it more secure than key-signed tokens. Account, service, and ad hoc SAS are all signed with the account key."
  },
  {
    "t": "storage-sas-tokens",
    "x": "An administrator must grant a partner read access to one blob for 24 hours without sharing keys or Entra identities. What fits best?",
    "o": [
      "A service SAS scoped to that single blob",
      "One of the two account access keys",
      "The full account connection string",
      "An Owner role assignment at blob scope"
    ],
    "a": 0,
    "e": "A service SAS can grant read on a single blob with an expiry, avoiding key or credential exposure. Sharing keys or the connection string would grant full account access."
  },
  {
    "t": "storage-sas-tokens",
    "x": "An ad hoc SAS that is not tied to any policy leaks before it expires. What is the fastest way to invalidate that token?",
    "o": [
      "Regenerate the account key that signed it",
      "Delete the stored access policy it references",
      "Lower the signed expiry value in the token",
      "Remove the user delegation key from Entra ID"
    ],
    "a": 0,
    "e": "An ad hoc SAS is signed by an account key, so rotating that key invalidates every SAS it produced. There is no policy to delete, and an issued token's fields cannot be edited."
  },
  {
    "t": "storage-sas-tokens",
    "x": "Which two constraints are encoded directly inside a SAS token string? Choose TWO.",
    "o": [
      "The signed expiry time",
      "The allowed permissions such as read or write",
      "The account replication configuration",
      "The target blob's access tier",
      "The firewall default action"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A SAS token carries its permissions and start and expiry times in the query string. Replication, tiering, and firewall settings are account or blob properties, not token fields."
  },
  {
    "t": "storage-stored-access-policies",
    "x": "What does binding a service SAS to a stored access policy give an administrator over an ad hoc SAS?",
    "o": [
      "The ability to revoke or change it after issuance",
      "The option to sign it with Entra ID credentials",
      "Automatic upgrade of the account to zone redundancy",
      "Complete removal of the storage account key"
    ],
    "a": 0,
    "e": "Because the constraints live server-side in the policy, a policy-based SAS can be revoked or modified without rotating keys. It is still key-signed, so keys remain in use."
  },
  {
    "t": "storage-stored-access-policies",
    "x": "What is the maximum number of stored access policies that can exist on one blob container at a time?",
    "o": [
      "Five",
      "Two",
      "Ten",
      "Unlimited"
    ],
    "a": 0,
    "e": "A container supports at most five stored access policies simultaneously. This cap is why policies group SAS tokens rather than serving one token per user."
  },
  {
    "t": "storage-stored-access-policies",
    "x": "An administrator needs to instantly revoke every SAS issued under a container policy without rotating account keys. Which action works?",
    "o": [
      "Delete or rename the stored access policy",
      "Regenerate both of the account access keys",
      "Disable public network access on the account",
      "Change the container's public access level"
    ],
    "a": 0,
    "e": "Deleting or renaming the referenced policy immediately invalidates all SAS bound to it. Key rotation also revokes tokens but affects every key-signed SAS, which is broader than needed."
  },
  {
    "t": "storage-stored-access-policies",
    "x": "Which two constraints can a container's stored access policy define for the SAS that reference it? Choose TWO.",
    "o": [
      "The permitted permissions such as read or delete",
      "The start and expiry time window",
      "The storage account redundancy setting",
      "The container's public access level",
      "The minimum TLS version for the account"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A stored access policy sets permissions and a validity window that referencing SAS inherit. Redundancy, public access level, and TLS settings are unrelated account or container properties."
  },
  {
    "t": "storage-access-keys",
    "x": "An administrator suspects account key1 is compromised. What is the recommended way to rotate it with no downtime?",
    "o": [
      "Move clients to key2, then regenerate key1",
      "Regenerate both keys at the same time",
      "Delete and recreate the storage account",
      "Disable key1 without regenerating it"
    ],
    "a": 0,
    "e": "Two keys exist so clients can switch to the second key while the exposed key is regenerated, avoiding an outage. Keys cannot be individually disabled, only regenerated."
  },
  {
    "t": "storage-access-keys",
    "x": "Which approach removes hard-coded account keys from application code by authenticating with Microsoft Entra ID?",
    "o": [
      "Assign data-plane RBAC roles to a managed identity",
      "Create stored access policies on each container",
      "Issue shared access signatures signed with key1",
      "Add the application's public IP to the firewall"
    ],
    "a": 0,
    "e": "Entra data-plane role assignments let apps use managed identities and RBAC instead of embedded keys. SAS and stored access policies still depend on the account key."
  },
  {
    "t": "storage-access-keys",
    "x": "Which two credentials, if leaked, grant full control over all data in a storage account? Choose TWO.",
    "o": [
      "An account access key",
      "The account connection string",
      "A read-only service SAS for one blob",
      "A Storage Blob Data Reader role assignment",
      "A user delegation SAS scoped to list"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Both account keys and the connection string embed full account authority. A scoped SAS or a reader role grants only limited access."
  },
  {
    "t": "storage-accounts-create",
    "x": "An administrator picks Standard general-purpose v2 for a mixed workload. Which two capabilities does that account provide? Choose TWO.",
    "o": [
      "Support for blobs, files, queues, and tables",
      "Hot, cool, cold, and archive access tiers",
      "Guaranteed single-digit millisecond latency",
      "SSD-backed premium throughput by default",
      "A fixed five-gigabyte capacity ceiling"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "GPv2 supports all four storage services and every access tier. Premium SSD latency and throughput belong to premium account kinds, and there is no small fixed capacity cap."
  },
  {
    "t": "storage-accounts-create",
    "x": "A transaction-heavy application needs the lowest-latency block blob storage. Which account choice is appropriate?",
    "o": [
      "Premium performance with the block blob kind",
      "Standard performance with a cool default tier",
      "Standard performance with an archive default tier",
      "Premium performance with the page blob kind"
    ],
    "a": 0,
    "e": "Premium block blob accounts use SSD-backed storage for high-transaction, low-latency blob traffic. Premium page blob accounts target managed disks instead."
  },
  {
    "t": "storage-accounts-create",
    "x": "When creating a storage account, which property is permanent and cannot be changed later?",
    "o": [
      "The account name",
      "The default blob access tier",
      "The redundancy configuration",
      "The minimum TLS version"
    ],
    "a": 0,
    "e": "The globally unique account name is fixed at creation; changing it means a new account and data migration. Tier, redundancy, and TLS settings can all be adjusted afterward."
  },
  {
    "t": "storage-accounts-create",
    "x": "Which minimum TLS setting should an administrator enforce so a new storage account rejects legacy protocols?",
    "o": [
      "TLS 1.2",
      "TLS 1.0",
      "TLS 1.1",
      "SSL 3.0"
    ],
    "a": 0,
    "e": "Setting the minimum to TLS 1.2 blocks older, weaker protocols on inbound connections. TLS 1.0, TLS 1.1, and SSL 3.0 are deprecated and insecure."
  },
  {
    "t": "storage-redundancy",
    "x": "Which redundancy option stores three copies in a single datacenter at the lowest cost?",
    "o": [
      "Locally redundant storage",
      "Zone-redundant storage",
      "Geo-redundant storage",
      "Read-access geo-redundant storage"
    ],
    "a": 0,
    "e": "LRS keeps three synchronous copies in one facility, the cheapest but least resilient choice. ZRS, GRS, and RA-GRS spread copies across zones or regions."
  },
  {
    "t": "storage-redundancy",
    "x": "An administrator needs data to survive an entire datacenter failure while staying inside the primary region. Which redundancy fits?",
    "o": [
      "Zone-redundant storage",
      "Locally redundant storage",
      "Geo-redundant storage",
      "Geo-zone-redundant storage"
    ],
    "a": 0,
    "e": "ZRS synchronously replicates across three availability zones in one region, surviving a single datacenter loss. LRS cannot, and GRS and GZRS also copy to a second region."
  },
  {
    "t": "storage-redundancy",
    "x": "Which redundancy option lets applications read from the secondary region before any failover occurs?",
    "o": [
      "Read-access geo-redundant storage",
      "Geo-redundant storage",
      "Zone-redundant storage",
      "Locally redundant storage"
    ],
    "a": 0,
    "e": "RA-GRS exposes the secondary region endpoint for reads at any time. Plain GRS keeps the secondary unreachable until Microsoft triggers a failover."
  },
  {
    "t": "storage-redundancy",
    "x": "Which two redundancy options copy data to a paired secondary region? Choose TWO.",
    "o": [
      "Geo-redundant storage",
      "Geo-zone-redundant storage",
      "Locally redundant storage",
      "Zone-redundant storage",
      "Premium file storage"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "GRS and GZRS both replicate to a secondary region far from the primary. LRS and ZRS stay within one region, and premium file storage is a performance tier, not a redundancy type."
  },
  {
    "t": "storage-encryption",
    "x": "By default, how is data at rest protected in an Azure storage account?",
    "o": [
      "Encrypted with Microsoft-managed 256-bit AES keys",
      "Left unencrypted until an admin enables it",
      "Encrypted only with customer-managed Key Vault keys",
      "Encrypted only when a private endpoint exists"
    ],
    "a": 0,
    "e": "Storage service encryption is always on using Microsoft-managed 256-bit AES keys. Customers may switch to customer-managed keys, but encryption itself cannot be turned off."
  },
  {
    "t": "storage-encryption",
    "x": "An administrator must own and rotate the encryption keys for a storage account using their own key material. What should be configured?",
    "o": [
      "Customer-managed keys in Azure Key Vault",
      "Microsoft-managed keys with auto-rotation",
      "Infrastructure encryption turned off",
      "A shared access signature per container"
    ],
    "a": 0,
    "e": "Customer-managed keys let the organization store and rotate keys in Key Vault while Azure performs the encryption. Microsoft-managed keys are controlled by Azure, not the customer."
  },
  {
    "t": "storage-encryption",
    "x": "Which feature adds a second, separate layer of encryption beneath the standard storage service encryption?",
    "o": [
      "Infrastructure encryption",
      "A second firewall rule set",
      "Client-side field masking",
      "Transport layer security 1.2"
    ],
    "a": 0,
    "e": "Infrastructure encryption applies an extra 256-bit AES layer for defense in depth and must be enabled at account creation. It cannot be added to an existing account."
  },
  {
    "t": "storage-encryption",
    "x": "Which two statements about Azure Storage encryption are correct? Choose TWO.",
    "o": [
      "Every account encrypts data at rest automatically",
      "Customer-managed keys are held in Azure Key Vault",
      "Encryption can be disabled for cool-tier blobs",
      "Encryption requires the premium performance tier",
      "Keys must be placed in the connection string"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "All accounts encrypt at rest by default, and customer-managed keys live in Key Vault. Encryption cannot be disabled, is tier-independent, and never requires keys in connection strings."
  },
  {
    "t": "storage-explorer-azcopy",
    "x": "Which utility is a command-line tool optimized for fast, resumable bulk transfers of blobs and files?",
    "o": [
      "AzCopy",
      "Storage Explorer",
      "The Cloud Shell editor",
      "The portal upload blade"
    ],
    "a": 0,
    "e": "AzCopy is a CLI built for parallel, resumable transfers of large datasets. Storage Explorer is a GUI and portal uploads are not meant for bulk migration."
  },
  {
    "t": "storage-explorer-azcopy",
    "x": "An administrator wants a graphical desktop app to browse containers, queues, and file shares across subscriptions. Which tool fits?",
    "o": [
      "Azure Storage Explorer",
      "The AzCopy command line",
      "Azure Resource Graph",
      "Azure Monitor Workbooks"
    ],
    "a": 0,
    "e": "Storage Explorer is a cross-platform GUI for managing blobs, queues, tables, and files across accounts. AzCopy is command-line only with no browse tree."
  },
  {
    "t": "storage-explorer-azcopy",
    "x": "Which two authentication methods can AzCopy use to reach a storage account? Choose TWO.",
    "o": [
      "A shared access signature token",
      "A Microsoft Entra ID sign-in",
      "A stored access policy name alone",
      "The account redundancy setting",
      "A network security group rule"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "AzCopy authenticates with a SAS appended to the URL or an Entra ID login backed by RBAC roles. Policy names, redundancy, and NSG rules are not authentication methods."
  },
  {
    "t": "files-identity-access",
    "x": "An administrator wants hybrid users synced from on-premises to reach an Azure file share over SMB with single sign-on and no domain controllers to manage. Which authentication method should be enabled?",
    "o": [
      "Microsoft Entra Kerberos authentication for hybrid identities",
      "Microsoft Entra Domain Services with a managed domain",
      "On-premises Active Directory Domain Services",
      "Storage account key authentication"
    ],
    "a": 0,
    "e": "Microsoft Entra Kerberos lets hybrid identities use single sign-on to Azure Files over SMB with no domain controllers to run or manage. Entra Domain Services and on-premises AD DS both rely on managed or self-run domain controllers, and account keys are not identity-based."
  },
  {
    "t": "files-identity-access",
    "x": "Which built-in RBAC role grants share-level read and write access to mount an Azure file share but does not allow modifying NTFS-level ACLs?",
    "o": [
      "Storage File Data SMB Share Contributor",
      "Storage File Data SMB Share Elevated Contributor",
      "Storage File Data SMB Share Reader",
      "Storage Blob Data Contributor"
    ],
    "a": 0,
    "e": "Storage File Data SMB Share Contributor grants read, write, and delete at the share level. Elevated Contributor additionally allows modifying NTFS ACLs, Reader is read-only, and the Blob role targets a different service."
  },
  {
    "t": "files-identity-access",
    "x": "Azure Files identity-based authentication over SMB enforces permissions at two levels. Which description is correct?",
    "o": [
      "Share access is set with Azure RBAC roles, and file access is set with Windows ACLs",
      "Share access is set with Windows ACLs, and file access is set with Azure RBAC roles",
      "Both share and file access are configured only with Azure RBAC roles",
      "Both share and file access are configured only with Windows NTFS ACLs"
    ],
    "a": 0,
    "e": "Azure Files enforces share-level access through Azure RBAC roles and directory or file access through Windows NTFS ACLs. The other choices reverse or collapse these two independent permission layers."
  },
  {
    "t": "files-identity-access",
    "x": "An administrator is enabling identity-based authentication for Azure Files. Which identity sources are supported for SMB authentication? Choose TWO.",
    "o": [
      "On-premises Active Directory Domain Services",
      "Microsoft Entra Domain Services",
      "Local users defined on the storage account",
      "Anonymous SMB guest access",
      "Third-party LDAP directory servers"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Azure Files supports on-premises AD DS and Microsoft Entra Domain Services for SMB identity-based authentication, alongside Entra Kerberos. Local storage-account users, anonymous guests, and third-party LDAP are not valid SMB identity sources."
  },
  {
    "t": "files-share",
    "x": "Which protocol option for an Azure file share requires a premium FileStorage account and is unavailable on standard general-purpose v2 accounts?",
    "o": [
      "NFS 4.1",
      "SMB 3.1.1",
      "SMB 2.1",
      "REST through the Files data plane"
    ],
    "a": 0,
    "e": "NFS 4.1 file shares require a premium FileStorage account and are not offered on standard general-purpose v2 accounts. SMB dialects and REST access are available on standard accounts."
  },
  {
    "t": "files-share",
    "x": "An administrator must store 60 TiB in a single standard SMB file share. Which setting must be turned on for the storage account to exceed the default share size limit?",
    "o": [
      "Large file shares",
      "Hierarchical namespace",
      "Premium provisioned throughput",
      "Geo-zone-redundant storage"
    ],
    "a": 0,
    "e": "Enabling large file shares raises a standard SMB share's capacity to as much as 100 TiB. Hierarchical namespace is for Data Lake, and provisioned throughput or geo-redundancy do not change the size limit."
  },
  {
    "t": "files-share",
    "x": "Which access tier for a standard Azure file share gives the lowest storage cost with higher transaction fees, fitting infrequently touched backup data?",
    "o": [
      "Cool",
      "Hot",
      "Transaction optimized",
      "Premium"
    ],
    "a": 0,
    "e": "The Cool tier for standard file shares has the lowest storage cost with higher transaction charges, fitting infrequently accessed backup data. Hot and transaction optimized cost more to store, and premium is a separate account type."
  },
  {
    "t": "files-snapshots-soft-delete",
    "x": "What is the primary characteristic of an Azure Files share snapshot?",
    "o": [
      "A read-only incremental point-in-time copy of the share",
      "A writable full clone stored in a separate account",
      "A continuous replica updated in real time",
      "A compressed export written to an archive tier"
    ],
    "a": 0,
    "e": "A share snapshot is a read-only, incremental point-in-time copy that bills only for changed data. It is not a writable clone, a live replica, or an archive-tier export."
  },
  {
    "t": "files-snapshots-soft-delete",
    "x": "Soft delete is enabled on a file share with a 14-day retention period, and a share is accidentally deleted on day 3. What can the administrator do?",
    "o": [
      "Restore the share from the storage account within the retention window",
      "Recover it only by opening a support ticket with Microsoft",
      "Rebuild it automatically from a geo-redundant secondary",
      "Nothing, because deleted shares are purged immediately"
    ],
    "a": 0,
    "e": "With file share soft delete enabled, a deleted share can be restored from the storage account any time within the configured retention period. It is not purged immediately and needs no support ticket."
  },
  {
    "t": "blob-container",
    "x": "A container's public access level is set to Blob. What does this configuration allow?",
    "o": [
      "Anonymous read of blobs but no listing of the container's contents",
      "Anonymous read and list access to all blobs in the container",
      "Anonymous read and write access to blobs in the container",
      "No anonymous access to any blob in the container"
    ],
    "a": 0,
    "e": "The Blob public access level permits anonymous read of blobs but not listing of container contents. Container level adds anonymous listing, while Private blocks all anonymous access."
  },
  {
    "t": "blob-container",
    "x": "An administrator wants to guarantee that no container in a storage account can ever be configured for anonymous public access. Which account-level setting does this?",
    "o": [
      "Set Allow Blob anonymous access to Disabled on the account",
      "Set each container's access level to Private individually",
      "Apply a read-only lock to the storage account",
      "Rotate the storage account access keys"
    ],
    "a": 0,
    "e": "Setting Allow Blob anonymous access to Disabled at the account level prevents any container from being configured for anonymous public access. Per-container settings, locks, and key rotation do not enforce this account-wide."
  },
  {
    "t": "blob-container",
    "x": "Which blob type is optimized for append operations such as logging, where data is only added to the end of the blob?",
    "o": [
      "Append blob",
      "Block blob",
      "Page blob",
      "Snapshot blob"
    ],
    "a": 0,
    "e": "Append blobs are optimized for append operations such as logging, where data is only added to the end. Block blobs suit general object storage, page blobs back disks, and snapshots are point-in-time copies."
  },
  {
    "t": "blob-storage-tiers",
    "x": "A blob is stored in the Archive tier. What must happen before its data can be read?",
    "o": [
      "It must be rehydrated to the Hot, Cool, or Cold tier",
      "It must be copied to a premium block blob account",
      "It must have its access level set to Container",
      "It must be moved to a different storage account"
    ],
    "a": 0,
    "e": "Archive is an offline tier, so a blob must be rehydrated to Hot, Cool, or Cold before its data can be read. Copying, access levels, and moving accounts do not make archived data readable."
  },
  {
    "t": "blob-storage-tiers",
    "x": "Which access tier offers the cheapest storage but charges the most to read data back and enforces a 180-day early-deletion penalty?",
    "o": [
      "Archive",
      "Cold",
      "Cool",
      "Hot"
    ],
    "a": 0,
    "e": "Archive offers the cheapest storage but the highest data retrieval cost and a 180-day early-deletion minimum. Cold, Cool, and Hot progressively raise storage cost while lowering retrieval cost."
  },
  {
    "t": "blob-storage-tiers",
    "x": "At which scope can the Archive tier be assigned for a blob?",
    "o": [
      "Only at the individual blob level, not as an account default",
      "As the default access tier on the storage account",
      "Only at the container level for all blobs",
      "Only through a lifecycle policy, never manually"
    ],
    "a": 0,
    "e": "The Archive tier can be set only at the individual blob level and cannot be an account default access tier. Only Hot or Cool can serve as the account default."
  },
  {
    "t": "blob-storage-tiers",
    "x": "Which minimum storage durations apply before early deletion charges are incurred? Choose TWO.",
    "o": [
      "Cool tier has a 30-day minimum",
      "Archive tier has a 180-day minimum",
      "Hot tier has a 30-day minimum",
      "Cold tier has a 30-day minimum",
      "Cool tier has a 90-day minimum"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Cool carries a 30-day minimum and Archive a 180-day minimum before early-deletion charges apply. Cold's minimum is 90 days and Hot has no minimum, so the other choices are incorrect."
  },
  {
    "t": "blob-soft-delete",
    "x": "Blob soft delete is enabled with a 7-day retention period. Which operations does this feature protect against? Choose TWO.",
    "o": [
      "Deleting an individual blob",
      "Overwriting a blob's contents",
      "Deleting the parent container",
      "Deleting the entire storage account",
      "Changing the account's redundancy option"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Blob soft delete protects individual blob deletes and overwrites, including snapshots and versions. It does not protect against deleting the container or the account, or changing redundancy, which need other safeguards."
  },
  {
    "t": "blob-soft-delete",
    "x": "An administrator wants to recover from an accidental deletion of an entire blob container. Which feature must be enabled beforehand?",
    "o": [
      "Container soft delete",
      "Blob soft delete",
      "Blob versioning",
      "Point-in-time restore"
    ],
    "a": 0,
    "e": "Container soft delete is the feature that allows recovery of an accidentally deleted container within its retention window. Blob soft delete, versioning, and point-in-time restore do not recover a deleted container."
  },
  {
    "t": "blob-soft-delete",
    "x": "For blob soft delete, what recovery window can an administrator configure?",
    "o": [
      "Between 1 and 365 days",
      "Between 1 and 30 days",
      "Between 7 and 90 days",
      "Between 1 and 730 days"
    ],
    "a": 0,
    "e": "Blob soft delete retention can be set from 1 to 365 days. The other ranges understate or overstate the allowed maximum."
  },
  {
    "t": "blob-lifecycle-management",
    "x": "A lifecycle rule uses daysAfterModificationGreaterThan of 90 with a tierToArchive action. What happens to matching blobs?",
    "o": [
      "Block blobs not modified for 90 days move to the Archive tier",
      "Blobs are deleted 90 days after they were created",
      "Blobs are copied to a second storage account after 90 days",
      "Page blobs are compressed after 90 days of inactivity"
    ],
    "a": 0,
    "e": "The tierToArchive action with daysAfterModificationGreaterThan of 90 moves block blobs not modified for 90 days into Archive. Lifecycle tiering does not delete on creation age, copy across accounts, or compress page blobs."
  },
  {
    "t": "blob-lifecycle-management",
    "x": "Which condition lets a lifecycle policy act on blobs based on how recently they were read rather than written?",
    "o": [
      "daysAfterLastAccessTimeGreaterThan",
      "daysAfterModificationGreaterThan",
      "daysAfterCreationGreaterThan",
      "daysAfterExpiryTimeGreaterThan"
    ],
    "a": 0,
    "e": "Acting on read recency uses daysAfterLastAccessTimeGreaterThan, which requires last access time tracking to be enabled. The modification and creation conditions key off write or creation time instead."
  },
  {
    "t": "blob-lifecycle-management",
    "x": "How can an administrator scope a lifecycle rule so it applies only to blobs whose names start with logs/?",
    "o": [
      "Add a prefixMatch filter to the rule",
      "Add a container-level lock to the logs path",
      "Assign the rule an RBAC scope of the logs path",
      "Create a separate storage account for the logs path"
    ],
    "a": 0,
    "e": "A prefixMatch filter scopes a lifecycle rule to blobs whose names begin with a given path such as logs/. Locks, RBAC scopes, and separate accounts are not lifecycle rule filters."
  },
  {
    "t": "blob-lifecycle-management",
    "x": "Which actions can a blob lifecycle management policy perform automatically? Choose TWO.",
    "o": [
      "Move a blob to the Cool tier after inactivity",
      "Delete a blob a set number of days after creation",
      "Replicate a blob to another storage account",
      "Change a container's public access level",
      "Rotate the storage account access keys"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Lifecycle policies can tier blobs to Cool after inactivity and delete blobs a set number of days after creation. Cross-account replication, access-level changes, and key rotation are outside lifecycle management."
  },
  {
    "t": "blob-versioning",
    "x": "With blob versioning enabled, how does an application read an earlier state of a blob?",
    "o": [
      "By specifying the version ID of the desired version",
      "By setting the container access level to Blob",
      "By rehydrating the blob from the Archive tier",
      "By restoring the entire storage account"
    ],
    "a": 0,
    "e": "With versioning enabled, an application reads an earlier state by specifying that version's version ID. Access levels, rehydration, and account restore are unrelated to selecting a prior version."
  },
  {
    "t": "blob-versioning",
    "x": "An administrator is evaluating blob versioning for a storage account. Which two facts about it are accurate? Choose TWO.",
    "o": [
      "It is enabled at the storage account level",
      "A new version is created on every write or delete",
      "It must be enabled separately on each container",
      "Versions are stored in a separate storage account",
      "It requires blobs to be in the Archive tier"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Blob versioning is enabled at the storage account level and creates a new version on every write or delete. It is not per-container, does not use a separate account, and does not require the Archive tier."
  },
  {
    "t": "blob-versioning",
    "x": "An administrator needs automatic protection of prior blob states plus a way to tier older versions to Cool to control cost. Which combination should be used?",
    "o": [
      "Blob versioning with a lifecycle policy targeting previous versions",
      "Container soft delete combined with object replication",
      "Access keys combined with stored access policies",
      "A resource lock combined with a read-only SAS token"
    ],
    "a": 0,
    "e": "Combining blob versioning with a lifecycle policy that targets previous versions preserves prior states and tiers older versions to Cool for cost control. The other pairings do not provide automatic version retention plus tiering."
  },
  {
    "t": "storage-object-replication",
    "x": "Object replication asynchronously copies which kind of data between a source and destination storage account?",
    "o": [
      "Block blobs",
      "File shares",
      "Page blobs",
      "Queue messages"
    ],
    "a": 0,
    "e": "Object replication asynchronously copies block blobs from a source to a destination account. File shares, page blobs, and queue messages are not replicated by this feature."
  },
  {
    "t": "storage-object-replication",
    "x": "Which prerequisites must be met to configure object replication between two storage accounts? Choose TWO.",
    "o": [
      "Blob versioning must be enabled on source and destination",
      "Change feed must be enabled on the source account",
      "Both accounts must use the Archive access tier for blobs",
      "The source and destination must reside in the same region",
      "A private endpoint must connect the two storage accounts"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Object replication requires blob versioning on both source and destination and change feed on the source. It does not require the Archive tier, the same region, or a private endpoint between accounts."
  },
  {
    "t": "storage-object-replication",
    "x": "In an object replication policy, what does the destination account hold after replication completes?",
    "o": [
      "A read-consistent asynchronous copy of the filtered block blobs",
      "A synchronous mirror updated within the same transaction",
      "A writable primary that the source syncs from",
      "A compressed archive of the source account's blobs"
    ],
    "a": 0,
    "e": "After replication the destination holds a read-consistent asynchronous copy of the filtered block blobs from the source. It is not a synchronous mirror, a writable primary, or a compressed archive."
  },
  {
    "t": "arm-bicep-interpret",
    "x": "An administrator reviews a Bicep file containing the line output storageId string = stg.id. What does declaring this output accomplish?",
    "o": [
      "It returns the storage account resource ID for reuse by other deployments",
      "It creates a new storage account named stg during the deployment",
      "It defines a required value the caller must supply before deployment",
      "It prevents the storage account from being deleted after deployment"
    ],
    "a": 0,
    "e": "Outputs surface values such as a resource ID after deployment for reuse by scripts or parent modules. A value the caller supplies is a parameter, and outputs neither create resources nor apply delete locks."
  },
  {
    "t": "arm-bicep-interpret",
    "x": "An administrator sees resourceId('Microsoft.Network/virtualNetworks', parameters('vnetName')) inside an ARM template. What does this function return?",
    "o": [
      "The fully qualified resource ID of the named virtual network",
      "The private IP address assigned to the virtual network gateway",
      "The provisioning state of the virtual network at deployment time",
      "The Azure region string of the resource group hosting the network"
    ],
    "a": 0,
    "e": "resourceId builds the fully qualified ID for a resource, defaulting to the current subscription and resource group. It does not return runtime properties such as an IP address, provisioning state, or location."
  },
  {
    "t": "arm-bicep-interpret",
    "x": "An administrator wants to know which elements make Azure provision one resource before another in a Bicep file. Which two factors create a deployment dependency? Choose TWO.",
    "o": [
      "A resource referencing another's symbolic name in a property",
      "An explicit dependsOn array naming another resource",
      "Two resources sharing the same location parameter value",
      "Two resources sharing an identical tags object",
      "Two resources declared in the same target scope"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Referencing a symbolic name creates an implicit dependency and dependsOn creates an explicit one. Sharing a location, tags, or scope does not by itself affect provisioning order."
  },
  {
    "t": "arm-template-modify",
    "x": "An administrator must deploy five identically configured network security groups from one ARM template without repeating the resource block. Which template feature should be added?",
    "o": [
      "A copy element with a count to iterate the resource",
      "A nested outputs section listing each security group",
      "A condition property set permanently to true",
      "A variables object holding the five group names"
    ],
    "a": 0,
    "e": "The copy element repeats a resource block a set number of times to create multiple instances. Outputs only return values, a condition toggles a single deployment, and a variables list alone creates nothing."
  },
  {
    "t": "arm-template-modify",
    "x": "While editing an ARM template, an administrator needs a parameter to accept only Standard_LRS, Standard_GRS, or Premium_LRS. Which parameter constraint enforces this?",
    "o": [
      "An allowedValues array on the parameter definition",
      "A defaultValue of Standard_LRS on the parameter",
      "A minLength property on the parameter definition",
      "A metadata description listing the accepted values"
    ],
    "a": 0,
    "e": "allowedValues restricts a parameter to a fixed list and rejects anything else during validation. A default only supplies a fallback, minLength constrains string length, and metadata is descriptive only."
  },
  {
    "t": "arm-template-modify",
    "x": "An administrator edits an ARM template so one resource deploys only when a boolean parameter is true. Which resource property should be added?",
    "o": [
      "A condition property that evaluates the boolean parameter",
      "A copy property that counts the boolean parameter",
      "A dependsOn property that lists the boolean parameter",
      "An outputs property that returns the boolean parameter"
    ],
    "a": 0,
    "e": "The condition property controls whether a resource deploys based on an expression. copy repeats a resource, dependsOn orders resources, and outputs only return values."
  },
  {
    "t": "bicep-modify",
    "x": "An administrator wants a Bicep parameter limited to three approved environment names. Which decorator restricts the parameter to a specific set of values?",
    "o": [
      "The @allowed decorator listing the permitted values",
      "The @secure decorator hiding the value from logs",
      "The @minLength decorator setting a character floor",
      "The @description decorator documenting the parameter"
    ],
    "a": 0,
    "e": "@allowed constrains a Bicep parameter to an explicit list of values. @secure hides sensitive input, @minLength governs string length, and @description only adds documentation."
  },
  {
    "t": "bicep-modify",
    "x": "An administrator needs a Bicep file to reference a storage account that already exists in the resource group instead of creating it. Which keyword should the declaration use?",
    "o": [
      "The existing keyword on the resource declaration",
      "The module keyword pointing at a separate file",
      "The import keyword bringing in a namespace",
      "The output keyword returning the account name"
    ],
    "a": 0,
    "e": "Declaring a resource with the existing keyword references an already-deployed resource without redeploying it. module composes other files, import brings in extensions, and output only returns values."
  },
  {
    "t": "bicep-modify",
    "x": "An administrator refactors a large Bicep file into reusable modules. Which two statements about Bicep modules are accurate? Choose TWO.",
    "o": [
      "A module can expose outputs the parent file consumes",
      "A module is invoked with the module keyword and a path",
      "A module must be authored in ARM JSON rather than in Bicep",
      "A module cannot accept parameters from the parent file",
      "A module always deploys to a different subscription"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Modules are called with the module keyword, accept parameters, and return outputs to the parent. They can be Bicep files and deploy to the same scope unless another scope is set."
  },
  {
    "t": "arm-bicep-deploy",
    "x": "An administrator runs a template deployment and wants a preview of exactly which resources will change before committing. Which option should be used?",
    "o": [
      "The what-if operation on the deployment command",
      "The complete deployment mode flag on the command",
      "The rollback-on-error switch on the command",
      "The no-wait parameter on the command"
    ],
    "a": 0,
    "e": "what-if previews the changes a deployment would make without applying them. Complete mode governs deletion of unlisted resources, rollback reverts to a prior deployment, and no-wait only returns control early."
  },
  {
    "t": "arm-bicep-deploy",
    "x": "An administrator deploys a template in incremental mode to a resource group that already contains a public IP not defined in the template. What happens to that public IP?",
    "o": [
      "It is left in place because incremental mode keeps it",
      "It is deleted because it is absent from the template body",
      "It is moved to a different resource group automatically",
      "It blocks the deployment from completing successfully"
    ],
    "a": 0,
    "e": "Incremental mode only adds or updates resources named in the template and leaves others untouched. Complete mode is what deletes resources not present in the template."
  },
  {
    "t": "arm-bicep-deploy",
    "x": "An administrator plans to submit a Bicep file as a resource-group deployment. Which two commands can start this deployment? Choose TWO.",
    "o": [
      "az deployment group create with the Bicep file path",
      "New-AzResourceGroupDeployment with the template file",
      "az group create with the Bicep file path",
      "Set-AzResourceGroup with the template file",
      "az bicep build with a deployment flag"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "az deployment group create and New-AzResourceGroupDeployment both submit resource-group deployments and accept Bicep. az group create only makes a group, Set-AzResourceGroup edits group metadata, and az bicep build only compiles to JSON."
  },
  {
    "t": "arm-export-convert-bicep",
    "x": "An administrator has an ARM JSON template and wants an equivalent Bicep file. Which command converts the JSON into Bicep?",
    "o": [
      "az bicep decompile referencing the JSON file",
      "az bicep build referencing the JSON file",
      "az deployment group export referencing the JSON file",
      "az bicep publish referencing the JSON file"
    ],
    "a": 0,
    "e": "az bicep decompile converts an ARM JSON template into Bicep. az bicep build does the reverse, export retrieves a deployed template, and publish uploads a module to a registry."
  },
  {
    "t": "arm-export-convert-bicep",
    "x": "An administrator wants to capture the current configuration of an existing resource group as a template for reuse. Which portal action generates it?",
    "o": [
      "The Export template option on the resource group",
      "The Redeploy option on the last deployment",
      "The Move option on the resource group",
      "The Delete lock option on the resource group"
    ],
    "a": 0,
    "e": "Export template produces an ARM template representing the resource group's current resources. Redeploy reuses a prior deployment, Move relocates resources, and a delete lock only prevents removal."
  },
  {
    "t": "arm-export-convert-bicep",
    "x": "An administrator reviews a Bicep file produced by decompiling an ARM template. Which two cleanup actions are commonly needed on decompiled output? Choose TWO.",
    "o": [
      "Rename auto-generated symbolic names to meaningful identifiers",
      "Replace verbose resourceId calls with symbolic references",
      "Delete every parameter because Bicep forbids parameters",
      "Convert all strings to integers to satisfy Bicep typing",
      "Remove the target scope so the file has no scope"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Decompiled Bicep often needs readable symbolic names and simplified references. Bicep fully supports parameters, keeps native string types, and requires a valid target scope."
  },
  {
    "t": "vm-create",
    "x": "An administrator uses Azure CLI to create a Linux VM and wants Azure to generate an SSH key pair automatically. Which az vm create option requests this?",
    "o": [
      "The --generate-ssh-keys option",
      "The --authentication-type password option",
      "The --admin-password option",
      "The --disable-key-generation option"
    ],
    "a": 0,
    "e": "--generate-ssh-keys creates and stores an SSH key pair when one is not found. Password authentication and --admin-password rely on passwords, and there is no such disable-key-generation flag."
  },
  {
    "t": "vm-create",
    "x": "An administrator provisions a Windows VM and must supply the resource that gives it network connectivity. Which resource must exist or be created for the VM?",
    "o": [
      "A network interface attached to a subnet",
      "A route table assigned to the resource group",
      "A storage account dedicated to boot diagnostics",
      "An application security group used as the connection"
    ],
    "a": 0,
    "e": "A VM needs a network interface bound to a subnet to communicate. A route table is optional, a storage account only supports diagnostics, and an application security group groups NICs rather than connecting the VM."
  },
  {
    "t": "vm-create",
    "x": "An administrator enables a system-assigned managed identity when creating several VMs. What effect does enabling this identity have?",
    "o": [
      "Azure creates a Microsoft Entra service principal for the VM",
      "Azure assigns the VM a static public IP address at creation",
      "Azure enrolls the VM into a scale set automatically",
      "Azure encrypts the OS disk with a customer-managed key"
    ],
    "a": 0,
    "e": "A system-assigned managed identity creates a Microsoft Entra service principal whose lifecycle matches the VM. It does not assign IP addresses, join a scale set, or configure disk encryption."
  },
  {
    "t": "vm-create",
    "x": "An administrator prepares an az vm create command for a new virtual machine. Which two inputs are required for the command to provision the VM? Choose TWO.",
    "o": [
      "The target resource group name",
      "The virtual machine name",
      "A pre-created external load balancer",
      "An existing Recovery Services vault",
      "A configured Azure Policy assignment"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A resource group and a VM name are required to create a VM. A load balancer, backup vault, and policy assignment are optional and unrelated to basic provisioning."
  },
  {
    "t": "vm-encryption-at-host",
    "x": "An administrator wants VM temp disks and disk caches encrypted on the Azure host without any in-guest encryption software. Which feature meets this requirement?",
    "o": [
      "Encryption at host on the virtual machine",
      "Azure Disk Encryption using in-guest BitLocker",
      "Transparent data encryption on the OS disk",
      "Storage service encryption on a blob container"
    ],
    "a": 0,
    "e": "Encryption at host encrypts temp disks and caches on the host with no in-guest agent. Azure Disk Encryption uses in-guest BitLocker or DM-Crypt, TDE protects databases, and storage service encryption applies to blob and file data."
  },
  {
    "t": "vm-encryption-at-host",
    "x": "An administrator finds the encryption at host option unavailable in the subscription. What is the most likely required first step?",
    "o": [
      "Register the EncryptionAtHost feature for the subscription",
      "Assign the virtual machine a public IP address",
      "Move the virtual machine into an availability set",
      "Enable soft delete on the associated key vault"
    ],
    "a": 0,
    "e": "Encryption at host requires registering the EncryptionAtHost feature on the subscription before it becomes available. A public IP, availability set, or key vault soft delete are unrelated prerequisites."
  },
  {
    "t": "vm-encryption-at-host",
    "x": "An administrator weighs two protection methods for virtual machine data. Which two statements about encryption at host are accurate? Choose TWO.",
    "o": [
      "It encrypts temp disks and caches that in-guest encryption may miss",
      "It requires the subscription feature to be registered before use",
      "It runs a BitLocker agent inside the guest operating system",
      "It applies only to unmanaged disks in a storage account",
      "It disables platform-managed keys for the disks entirely"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Encryption at host covers temp disks and caches and needs its feature registered first. It runs on the host without an in-guest agent, works with managed disks, and does not remove platform key options."
  },
  {
    "t": "vm-move",
    "x": "An administrator must relocate several VMs from the East US region to West US while preserving their configuration. Which Azure service is designed for this cross-region move?",
    "o": [
      "Azure Resource Mover",
      "Azure Site Recovery failover",
      "Azure Migrate assessment",
      "Azure Backup restore"
    ],
    "a": 0,
    "e": "Azure Resource Mover orchestrates moving resources such as VMs across regions while tracking dependencies. Site Recovery targets DR failover, Migrate assesses workloads, and Backup restores data rather than relocating live resources."
  },
  {
    "t": "vm-move",
    "x": "An administrator relocates a VM into another resource group in the same subscription. What is true about the VM afterward?",
    "o": [
      "Its resource IDs change and its dependencies may move too",
      "Its Azure region changes to match the destination group",
      "Its managed disks are deleted and then recreated as empty",
      "Its operating system is reimaged from a fresh gallery image"
    ],
    "a": 0,
    "e": "Moving to another resource group updates the resource IDs and often requires dependent resources to move together. The move does not change region, wipe disks, or reimage the operating system."
  },
  {
    "t": "vm-move",
    "x": "An administrator prepares to move a VM between two subscriptions. Which two considerations apply to that move operation? Choose TWO.",
    "o": [
      "Dependent resources such as disks and NICs usually must move together",
      "The source and destination are locked during validation and the move",
      "The VM's private IP is converted to a public IP automatically",
      "The move upgrades the VM to the newest size series available",
      "The operating system must be reinstalled once the move finishes"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Moves require dependent resources to travel together and lock the resources during the operation. The move does not swap IP types, resize the VM, or reinstall the operating system."
  },
  {
    "t": "vm-sizes",
    "x": "An administrator runs a development workload that sits idle most of the time and wants low-cost VMs able to burst CPU when needed. Which VM series fits best?",
    "o": [
      "The B-series burstable virtual machines",
      "The M-series memory-optimized virtual machines",
      "The H-series high-performance compute machines",
      "The N-series GPU-accelerated virtual machines"
    ],
    "a": 0,
    "e": "B-series burstable VMs accumulate credits while idle and burst CPU on demand at low cost. M-series targets large memory, H-series targets HPC, and N-series targets GPU workloads."
  },
  {
    "t": "vm-sizes",
    "x": "An administrator must resize a running VM to a size hosted on different underlying hardware than the current one. What is required to complete the resize?",
    "o": [
      "The VM must be stopped and deallocated before resizing",
      "The VM must first join an availability zone",
      "The VM must have encryption at host disabled",
      "The VM must be converted to unmanaged disks"
    ],
    "a": 0,
    "e": "Resizing to a size on different underlying hardware requires deallocating the VM first. Availability zones, encryption at host, and disk type do not gate this resize."
  },
  {
    "t": "vm-sizes",
    "x": "An administrator needs VMs with a high memory-to-vCPU ratio to host an in-memory database. Which VM series should be selected?",
    "o": [
      "The E-series memory-optimized virtual machines",
      "The F-series compute-optimized virtual machines",
      "The A-series entry-level virtual machines",
      "The B-series burstable virtual machines"
    ],
    "a": 0,
    "e": "E-series memory-optimized VMs provide a high memory-to-vCPU ratio suited to in-memory databases. F-series favors CPU, A-series is entry-level, and B-series is burstable for light workloads."
  },
  {
    "t": "vm-disks",
    "x": "An administrator needs the managed disk type with the lowest latency and IOPS configurable independently of disk size for a demanding database. Which disk type should be chosen?",
    "o": [
      "Ultra Disk",
      "Premium SSD",
      "Standard SSD",
      "Standard HDD"
    ],
    "a": 0,
    "e": "Ultra Disks deliver the lowest latency and let you configure IOPS and throughput independently of size. Premium SSD, Standard SSD, and Standard HDD are lower tiers without that tunability."
  },
  {
    "t": "vm-disks",
    "x": "An administrator wants a point-in-time copy of a VM's managed data disk to use as a baseline for creating new disks. Which resource should be created?",
    "o": [
      "A managed disk snapshot",
      "A blob storage container",
      "A backup recovery point",
      "A shared image in a gallery"
    ],
    "a": 0,
    "e": "A snapshot is a read-only point-in-time copy of a managed disk that can seed new disks. A container stores blobs, a recovery point restores VMs, and a shared image captures a generalized VM rather than one data disk."
  },
  {
    "t": "vm-disks",
    "x": "An administrator sees a VM's OS disk host caching set to None and wants better read performance for the operating system. Which caching setting is recommended for an OS disk?",
    "o": [
      "Read/write host caching",
      "No host caching at all",
      "Write-only host caching",
      "Read-only caching with writes blocked"
    ],
    "a": 0,
    "e": "Read/write is the recommended host caching mode for a typical OS disk. None disables caching, and write-only or write-blocked modes are not appropriate defaults for an operating system disk."
  },
  {
    "t": "vm-disks",
    "x": "An administrator plans disk configuration for a new VM. Which two statements about Azure managed disks are correct? Choose TWO.",
    "o": [
      "The OS disk and data disks can use different performance tiers",
      "A snapshot provides a point-in-time copy of a managed disk",
      "Managed disks require you to create a storage account first",
      "Ultra Disk is the default tier for every new virtual machine",
      "Standard HDD offers the lowest latency of every disk tier"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "OS and data disks can use different tiers, and snapshots are point-in-time copies. Managed disks need no storage account, Ultra is not the default, and Standard HDD has the highest latency."
  },
  {
    "t": "vm-availability",
    "x": "An administrator must protect a multi-VM application against a single datacenter failure within one region. Which deployment choice gives the strongest protection?",
    "o": [
      "Spread the VMs across multiple availability zones in the region",
      "Place all of the VMs in a single availability set",
      "Place all of the VMs into one fault domain",
      "Deploy all of the VMs to one proximity placement group"
    ],
    "a": 0,
    "e": "Availability zones are physically separate datacenters within a region, so spreading VMs across zones survives a datacenter failure. An availability set protects within one datacenter, a single fault domain shares hardware, and a proximity placement group co-locates VMs."
  },
  {
    "t": "vm-availability",
    "x": "An administrator configures an availability set and wants to understand the purpose of update domains. What do update domains isolate?",
    "o": [
      "Groups of VMs that can be rebooted together during planned maintenance",
      "Groups of VMs that share a single power source and network switch",
      "Groups of VMs that must be placed in different Azure regions",
      "Groups of VMs that are attached to one shared managed disk"
    ],
    "a": 0,
    "e": "Update domains group VMs so planned maintenance reboots only one group at a time. Fault domains, not update domains, isolate shared power and network hardware, and neither spans regions nor shares a disk."
  },
  {
    "t": "vm-availability",
    "x": "An administrator evaluates high-availability constructs for Azure VMs. Which two statements about availability sets are correct? Choose TWO.",
    "o": [
      "They distribute VMs across multiple fault domains",
      "They distribute VMs across multiple update domains",
      "They span multiple Azure regions by design",
      "They guarantee zero downtime for a single VM",
      "They remove the need for managed disks"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Availability sets spread VMs across fault and update domains within one region. They do not span regions, cannot protect a single VM, and do not remove the need for disks."
  },
  {
    "t": "vmss",
    "x": "An administrator wants a VM scale set to add instances automatically when average CPU rises above a threshold. Which feature should be configured?",
    "o": [
      "An autoscale rule based on a CPU metric",
      "A manual instance count set one time",
      "A single instance given a larger size",
      "A load balancer health probe by itself"
    ],
    "a": 0,
    "e": "Autoscale rules add or remove instances based on metrics such as CPU. A manual count is static, resizing one VM is not scaling out, and a health probe checks health without scaling the set."
  },
  {
    "t": "vmss",
    "x": "An administrator creates a scale set and needs an orchestration mode that allows mixed VM sizes and adding standalone VMs to the set. Which mode should be selected?",
    "o": [
      "Flexible orchestration",
      "Uniform orchestration",
      "Manual orchestration",
      "Proximity orchestration"
    ],
    "a": 0,
    "e": "Flexible orchestration allows mixed VM sizes and adding standalone VMs to the set. Uniform uses identical instances from one model, and manual and proximity are not orchestration modes."
  },
  {
    "t": "vmss",
    "x": "An administrator reviews upgrade policy options for a Uniform scale set. Which two modes control how instances receive an updated model? Choose TWO.",
    "o": [
      "Rolling upgrades applied in batches",
      "Automatic upgrades applied by the platform",
      "Regional upgrades spread across two regions",
      "Snapshot upgrades taken from a disk copy",
      "Proximity upgrades applied within one rack"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Uniform scale sets support manual, automatic, and rolling upgrade modes; rolling applies in batches while automatic lets the platform apply changes. Regional, snapshot, and proximity are not upgrade policy modes."
  },
  {
    "t": "container-registry",
    "x": "Which two capabilities are available only in the Premium tier of Azure Container Registry? Choose TWO.",
    "o": [
      "Geo-replication across multiple regions",
      "Private endpoint connectivity",
      "Storing images in repositories",
      "Authenticating with the admin user account",
      "Pushing images with the Docker CLI"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Geo-replication and private endpoints are Premium-only features of Azure Container Registry. Repository storage, admin-user authentication, and Docker push work in every tier."
  },
  {
    "t": "container-registry",
    "x": "An administrator wants to build a container image directly in Azure Container Registry without a local Docker daemon. Which command should they run?",
    "o": [
      "az acr build",
      "az acr import",
      "az acr login",
      "az acr repository show"
    ],
    "a": 0,
    "e": "az acr build uses ACR Tasks to build the image in the cloud, so no local Docker engine is needed. az acr import copies an existing image and az acr login only authenticates."
  },
  {
    "t": "container-registry",
    "x": "A registry was created with the admin account disabled. Which identity approach lets an Azure Container Instances deployment pull images securely?",
    "o": [
      "A managed identity granted the AcrPull role",
      "The registry admin username and password",
      "A shared access signature token",
      "A storage account access key from the registry"
    ],
    "a": 0,
    "e": "Assigning a managed identity the AcrPull role lets the workload authenticate without stored credentials. The admin account is discouraged, and ACR does not use SAS tokens or storage-style access keys."
  },
  {
    "t": "container-instances",
    "x": "An administrator needs a container to restart only when its process exits with an error, but not after a successful exit. Which restart policy meets this requirement?",
    "o": [
      "OnFailure",
      "Always",
      "Never",
      "Manual"
    ],
    "a": 0,
    "e": "OnFailure restarts a container only when it exits with a nonzero code. Always restarts regardless of exit code, Never leaves it stopped, and Manual is not a valid ACI restart policy."
  },
  {
    "t": "container-instances",
    "x": "Which storage option lets an Azure Container Instances deployment persist data beyond the container lifecycle?",
    "o": [
      "An Azure Files share mounted as a volume",
      "A managed disk attached to the group",
      "The container's writable layer",
      "A blob container mounted at runtime"
    ],
    "a": 0,
    "e": "ACI supports mounting an Azure Files share as a volume for persistent data. The writable layer is ephemeral, managed disks cannot attach to a container group, and blob containers are not natively mountable."
  },
  {
    "t": "container-apps",
    "x": "An administrator deploying microservices to Azure Container Apps wants built-in service discovery and pub/sub messaging. Which integrated component provides this?",
    "o": [
      "Dapr",
      "KEDA",
      "Envoy",
      "Helm"
    ],
    "a": 0,
    "e": "Dapr provides service invocation, state, and pub/sub for Container Apps. KEDA handles event-driven scaling, Envoy powers ingress, and Helm is not an integrated Container Apps component."
  },
  {
    "t": "container-apps",
    "x": "Several container apps must share the same virtual network boundary and Log Analytics workspace. Into what should they be deployed?",
    "o": [
      "The same Container Apps environment",
      "The same revision",
      "The same container group",
      "The same App Service plan"
    ],
    "a": 0,
    "e": "A Container Apps environment is the secure boundary that groups apps sharing a virtual network and Log Analytics workspace. Revisions are versions of one app, and container groups or App Service plans belong to other services."
  },
  {
    "t": "container-apps",
    "x": "Which two mechanisms does Azure Container Apps use to manage application versions and route traffic between them? Choose TWO.",
    "o": [
      "Revisions that represent immutable app versions",
      "Traffic splitting across revisions by percentage",
      "Deployment slots swapped between staging and production",
      "Availability sets spread across fault domains",
      "Scale sets with rolling upgrade policies"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Container Apps uses immutable revisions and can split traffic across them by percentage. Deployment slots, availability sets, and scale sets belong to App Service and VM services, not Container Apps."
  },
  {
    "t": "container-scaling",
    "x": "An administrator wants an Azure Container App to run no instances when idle and add replicas as HTTP requests arrive. Which setting enables scaling to zero?",
    "o": [
      "A minimum replica count of 0 with an HTTP scale rule",
      "A minimum replica count of 1 with a CPU scale rule",
      "A fixed replica count set to auto",
      "An always-on flag on the environment"
    ],
    "a": 0,
    "e": "Setting minimum replicas to 0 lets Container Apps scale to zero, and an HTTP scale rule adds replicas as requests arrive. A minimum of 1 keeps at least one instance always running."
  },
  {
    "t": "container-scaling",
    "x": "Which scaling engine underpins the event-driven scale rules in Azure Container Apps?",
    "o": [
      "KEDA",
      "Dapr",
      "The Horizontal Pod Autoscaler alone",
      "Azure Monitor autoscale"
    ],
    "a": 0,
    "e": "Container Apps uses KEDA to evaluate event-driven scale rules such as queue length. Dapr handles microservice concerns, and Azure Monitor autoscale drives VM and App Service scaling instead."
  },
  {
    "t": "container-scaling",
    "x": "A container app must add replicas based on the number of messages waiting in an Azure Service Bus queue. Which scale rule type should the administrator configure?",
    "o": [
      "A custom KEDA scaler for the queue",
      "An HTTP concurrency rule",
      "A CPU utilization rule",
      "A schedule-based rule"
    ],
    "a": 0,
    "e": "A custom KEDA scaler can watch Service Bus queue length and scale on it. HTTP and CPU rules react to request load or processor use, not queue depth."
  },
  {
    "t": "appservice-plan",
    "x": "An administrator must run an App Service in a fully isolated, single-tenant environment with dedicated compute. Which pricing tier is required?",
    "o": [
      "Isolated v2",
      "Premium v3",
      "Standard",
      "Basic"
    ],
    "a": 0,
    "e": "The Isolated v2 tier runs apps in an App Service Environment on dedicated, single-tenant compute. Premium v3 and lower tiers run on shared multi-tenant infrastructure."
  },
  {
    "t": "appservice-plan",
    "x": "Two web apps in the same App Service plan are competing for CPU. Without changing the tier, how can an administrator give one app more resources?",
    "o": [
      "Move the app to a separate App Service plan",
      "Enable Always On for the busier app",
      "Add a deployment slot to the app",
      "Switch the app to a consumption plan"
    ],
    "a": 0,
    "e": "Apps in one plan share its compute, so moving an app to a separate plan isolates its resources. Always On and slots do not change how the shared plan's CPU is divided."
  },
  {
    "t": "appservice-plan",
    "x": "Which two features require at least the Standard App Service plan tier? Choose TWO.",
    "o": [
      "Automatic horizontal scaling by metrics",
      "Scheduled site backups",
      "Serving the app over HTTPS",
      "Mapping a custom domain name",
      "Deploying the app from a Git repository"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Autoscale and scheduled backups both begin at the Standard tier. HTTPS is available on every tier, custom domains start at Basic, and Git deployment works on all tiers."
  },
  {
    "t": "appservice-plan",
    "x": "A Free tier App Service plan is hosting a test site. Which limitation applies to that tier?",
    "o": [
      "The app cannot use a custom domain name",
      "The app is limited to three deployment slots",
      "The app supports autoscale up to two instances",
      "The app can schedule daily backups"
    ],
    "a": 0,
    "e": "The Free tier runs on shared infrastructure and supports no custom domains, no slots, no autoscale, and no backups. Those capabilities require Basic or Standard tiers and above."
  },
  {
    "t": "appservice-scaling",
    "x": "An administrator wants an App Service to add instances automatically when average CPU exceeds 70 percent. What should they configure?",
    "o": [
      "An autoscale rule with a CPU metric threshold",
      "A larger pricing tier for the plan",
      "The Always On setting on the app",
      "A deployment slot for overflow traffic"
    ],
    "a": 0,
    "e": "An autoscale rule triggered by a CPU metric threshold scales the plan out by adding instances. Changing the tier is scaling up, and Always On and slots do not react to load."
  },
  {
    "t": "appservice-scaling",
    "x": "What distinguishes scaling up from scaling out an App Service plan?",
    "o": [
      "Scaling up changes the tier while scaling out adds instances",
      "Scaling up adds instances while scaling out changes the tier",
      "Both actions increase the number of running instances",
      "Both actions move the plan to a larger region"
    ],
    "a": 0,
    "e": "Scaling up moves to a larger pricing tier with more CPU and memory, while scaling out adds more instances of the current tier. The two operations address different bottlenecks."
  },
  {
    "t": "appservice-scaling",
    "x": "An administrator needs extra App Service instances to run only during weekday business hours. Which autoscale configuration achieves this?",
    "o": [
      "A recurrence profile with a fixed instance count",
      "A single default rule with no schedule",
      "A manual scale set to the maximum instances",
      "A larger plan tier applied each morning"
    ],
    "a": 0,
    "e": "A scheduled recurrence profile sets a specific instance count during defined hours and reverts afterward. A default rule ignores time, and manual scaling does not follow a schedule."
  },
  {
    "t": "appservice-create",
    "x": "An administrator is creating a Linux App Service to host a prebuilt container image. Which publish option should they select?",
    "o": [
      "Docker Container",
      "Code",
      "Static content",
      "Function app"
    ],
    "a": 0,
    "e": "Choosing the Docker Container publish option lets App Service pull and run a container image. The Code option deploys application source directly, and a function app is a separate resource type."
  },
  {
    "t": "appservice-create",
    "x": "Which Azure CLI command creates a new web app inside an existing App Service plan?",
    "o": [
      "az webapp create",
      "az appservice plan create",
      "az webapp config set",
      "az webapp restart"
    ],
    "a": 0,
    "e": "az webapp create provisions a web app inside a named plan and resource group. az appservice plan create makes the hosting plan, config set changes settings, and restart cycles an existing app."
  },
  {
    "t": "appservice-create",
    "x": "When you create an App Service, which two properties are fixed and cannot be changed afterward? Choose TWO.",
    "o": [
      "The operating system, Windows or Linux",
      "The name that forms the default hostname",
      "The pricing tier of the plan",
      "The runtime stack version",
      "The number of scaled-out instances"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "An app's operating system and its name, which forms the azurewebsites.net hostname, are set at creation and cannot change later. Tier, runtime version, and instance count can all be adjusted afterward."
  },
  {
    "t": "appservice-tls-certs",
    "x": "An administrator needs a free, auto-renewing TLS certificate for a custom domain on an App Service. Which option should they choose?",
    "o": [
      "An App Service managed certificate",
      "An uploaded PFX certificate",
      "An App Service certificate purchased in Azure",
      "A self-signed certificate"
    ],
    "a": 0,
    "e": "The App Service managed certificate is free and renews automatically for a validated custom domain. Uploaded PFX and purchased certificates involve cost or manual steps, and self-signed certs are untrusted."
  },
  {
    "t": "appservice-tls-certs",
    "x": "Which TLS binding type lets multiple App Service custom domains share one IP address using the requested hostname?",
    "o": [
      "SNI SSL",
      "IP-based SSL",
      "Mutual TLS",
      "End-to-end SSL"
    ],
    "a": 0,
    "e": "SNI SSL uses Server Name Indication so many hostnames share a single IP. IP-based SSL reserves a dedicated IP per certificate, and mutual TLS concerns client authentication."
  },
  {
    "t": "appservice-tls-certs",
    "x": "An administrator stored a certificate in Azure Key Vault. How can App Service use it for a TLS binding?",
    "o": [
      "Import the certificate from Key Vault into the app",
      "Copy the private key into the app settings",
      "Mount the vault as a file share",
      "Enable an admin account on the vault"
    ],
    "a": 0,
    "e": "App Service can import a certificate directly from Key Vault and then create a binding. Pasting private keys into app settings or mounting the vault as a share are not supported approaches."
  },
  {
    "t": "appservice-tls-certs",
    "x": "Which two actions help enforce encrypted traffic to an App Service? Choose TWO.",
    "o": [
      "Enable the HTTPS Only setting on the app",
      "Set the minimum TLS version to 1.2",
      "Disable the default azurewebsites.net hostname",
      "Remove the SNI SSL binding from the domain",
      "Turn off the Always On feature"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "HTTPS Only redirects plain HTTP to HTTPS, and raising the minimum TLS version blocks weak protocols. Removing bindings or the default hostname would break access rather than secure it."
  },
  {
    "t": "appservice-custom-dns",
    "x": "An administrator maps www.contoso.com to an App Service. Which DNS record aliases the subdomain to the app's default hostname?",
    "o": [
      "A CNAME record aliasing to the app's default hostname",
      "An MX record routing mail for the custom domain",
      "An SRV record advertising the web app service port",
      "An NS record delegating the subdomain to a zone"
    ],
    "a": 0,
    "e": "A CNAME record aliases the subdomain to the app's azurewebsites.net hostname. MX records route mail, SRV records advertise services, and NS records delegate zones."
  },
  {
    "t": "appservice-custom-dns",
    "x": "App Service requires proof of domain control before binding a custom name. Which record provides that ownership verification?",
    "o": [
      "A TXT record containing the custom domain verification ID",
      "A PTR record for the app's IP address",
      "An A record pointing at the app",
      "A CAA record listing the certificate authority"
    ],
    "a": 0,
    "e": "A TXT record holding the asuid verification ID proves domain ownership to App Service. PTR handles reverse DNS, A records map to IPs, and CAA restricts which authorities may issue certificates."
  },
  {
    "t": "appservice-custom-dns",
    "x": "An administrator must map the apex domain contoso.com, which cannot use a CNAME, to an App Service. Which record type points it to the app?",
    "o": [
      "An A record referencing the app's inbound IP address",
      "A CNAME record referencing the app hostname",
      "An MX record referencing the app hostname",
      "An NS record referencing the app hostname"
    ],
    "a": 0,
    "e": "Because apex domains cannot use CNAME records, an A record pointing to the App Service inbound IP is used together with a TXT verification record. CNAME, MX, and NS records do not map an apex to the app."
  },
  {
    "t": "appservice-backup",
    "x": "Scheduled backup for an App Service is missing from the portal. Which is the most likely cause?",
    "o": [
      "The app runs on a tier below Standard",
      "The app has no deployment slots configured",
      "The app is missing a managed identity",
      "The app has HTTPS Only disabled"
    ],
    "a": 0,
    "e": "The Backup feature requires Standard, Premium, or Isolated tiers, so a lower tier hides it. Slots, managed identity, and HTTPS Only are unrelated to backup availability."
  },
  {
    "t": "appservice-backup",
    "x": "Where does the App Service Backup feature write its backup files?",
    "o": [
      "In an Azure Storage account container",
      "In an Azure Recovery Services vault",
      "In an Azure Files premium share only",
      "In the app's local scratch storage"
    ],
    "a": 0,
    "e": "App Service backups are written to a container in an Azure Storage account you specify. Recovery Services vaults protect VMs and other workloads, not App Service sites in this way."
  },
  {
    "t": "appservice-backup",
    "x": "Which two items can be included in a custom App Service backup? Choose TWO.",
    "o": [
      "The app content and configuration",
      "A linked Azure SQL or MySQL database",
      "The underlying virtual machine image",
      "The App Service plan definition",
      "The regional network security groups"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A custom backup can capture the app content and configuration plus a connected Azure SQL or MySQL database. The host VM, plan definition, and network security groups are not part of an app backup."
  },
  {
    "t": "appservice-networking",
    "x": "An administrator needs an App Service to reach resources inside a virtual network over their private IPs for outbound calls. Which feature should they enable?",
    "o": [
      "Regional VNet integration",
      "A private endpoint on the app",
      "A service endpoint on the subnet",
      "A public IP on the app"
    ],
    "a": 0,
    "e": "Regional VNet integration routes an app's outbound traffic into a delegated subnet to reach private resources. A private endpoint provides inbound private access, which solves the opposite direction."
  },
  {
    "t": "appservice-networking",
    "x": "A security policy forbids any public inbound access to a web app; clients must connect through an internal address only. Which feature accomplishes this?",
    "o": [
      "A private endpoint for the app",
      "Regional VNet integration",
      "A hybrid connection",
      "An access restriction allow rule"
    ],
    "a": 0,
    "e": "A private endpoint gives the app a private IP in the VNet and removes public inbound access. VNet integration handles outbound calls, and hybrid connections tunnel to specific hosts."
  },
  {
    "t": "appservice-networking",
    "x": "Which two methods can restrict which clients are able to reach an App Service? Choose TWO.",
    "o": [
      "Access restriction rules based on IP ranges",
      "A private endpoint that removes public access",
      "Enabling Always On for the app",
      "Adding a second deployment slot",
      "Increasing the minimum TLS version"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "IP-based access restriction rules and private endpoints both control which clients can reach the app. Always On, slots, and TLS version affect availability and encryption, not source filtering."
  },
  {
    "t": "appservice-deployment-slots",
    "x": "An administrator wants to deploy to a staging slot, validate it, then move it to production with no downtime. Which operation should they use?",
    "o": [
      "A slot swap between staging and production",
      "A scale-out of the production slot",
      "A restart of the production slot",
      "A redeploy directly to production"
    ],
    "a": 0,
    "e": "A slot swap exchanges staging and production after warm-up, giving a zero-downtime release. Scaling, restarting, or deploying straight to production do not provide the same safe cutover."
  },
  {
    "t": "appservice-deployment-slots",
    "x": "Deployment slots are unavailable on an App Service. Which change makes them available?",
    "o": [
      "Move the plan to at least the Standard tier",
      "Enable Always On for the app",
      "Assign a managed identity to the app",
      "Add a custom domain to the app"
    ],
    "a": 0,
    "e": "Deployment slots require Standard or higher, with Standard allowing five slots and Premium up to twenty. Always On, managed identity, and custom domains do not unlock slots."
  },
  {
    "t": "appservice-deployment-slots",
    "x": "Which two behaviors describe how deployment slot configuration is handled during a swap? Choose TWO.",
    "o": [
      "Slot settings marked as sticky remain with their slot on swap",
      "Unmarked application settings swap along with the app content",
      "Every configuration value is always sticky to its own slot",
      "Slots are forced to share one identical configuration set",
      "A completed swap automatically deletes the source slot"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Configuration marked as a slot setting is sticky and stays with its slot, while unmarked settings swap along with the content. Slots keep independent configuration and are not deleted by a swap."
  },
  {
    "t": "vnet-subnets",
    "x": "When an administrator creates a subnet in an Azure virtual network, how many IP addresses does Azure reserve and make unavailable for resources?",
    "o": [
      "Five",
      "Three",
      "Two",
      "One"
    ],
    "a": 0,
    "e": "Azure reserves five addresses in every subnet: the network address, the default gateway, two for Azure DNS mapping, and the broadcast address, so a /24 yields 251 usable addresses."
  },
  {
    "t": "vnet-subnets",
    "x": "An administrator wants to define the smallest possible IPv4 subnet in an Azure virtual network. Which CIDR prefix length should be used?",
    "o": [
      "/29",
      "/24",
      "/30",
      "/32"
    ],
    "a": 0,
    "e": "The smallest supported IPv4 subnet is /29, which provides three usable addresses after Azure reserves five. Prefixes such as /30 and /32 cannot be created as Azure subnets."
  },
  {
    "t": "vnet-subnets",
    "x": "An administrator is preparing a virtual network for a VPN gateway. What must the dedicated subnet holding the gateway be named?",
    "o": [
      "GatewaySubnet",
      "VpnGatewaySubnet",
      "GatewaySubnet01",
      "AzureGatewaySubnet"
    ],
    "a": 0,
    "e": "A VPN or ExpressRoute gateway requires a subnet named exactly GatewaySubnet. Azure uses this reserved name to place the gateway, and a /27 or larger range is recommended."
  },
  {
    "t": "vnet-subnets",
    "x": "An administrator tries to add a subnet whose range overlaps an existing subnet in the same virtual network. What happens?",
    "o": [
      "The operation is rejected; subnet ranges cannot overlap",
      "Both subnets simply share the overlapping addresses",
      "The newer subnet silently replaces the older subnet",
      "Azure automatically shrinks the older subnet to fit"
    ],
    "a": 0,
    "e": "Subnet address ranges within a virtual network must be unique and cannot overlap. Azure rejects any subnet whose CIDR range conflicts with an existing subnet."
  },
  {
    "t": "vnet-subnets",
    "x": "Which two configurations can an administrator apply directly to a subnet in an Azure virtual network? Choose TWO.",
    "o": [
      "A network security group association",
      "A delegation to an Azure service",
      "A load balancer SKU assignment",
      "A storage account access tier",
      "A DNS zone record set"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Subnets support NSG associations and delegation to services such as Azure SQL Managed Instance. Load balancer SKUs, storage access tiers, and DNS record sets are not subnet-level settings."
  },
  {
    "t": "vnet-peering",
    "x": "VNet A is peered with hub VNet B, and VNet B is peered with VNet C. Why can resources in VNet A not reach VNet C by default?",
    "o": [
      "Virtual network peering is not transitive",
      "Global peering blocks all multi-hop traffic",
      "Peering allows only one connection per VNet",
      "The address spaces are automatically merged"
    ],
    "a": 0,
    "e": "Peering is non-transitive, so A and C cannot communicate through B unless a gateway or an NVA with user-defined routes forwards the traffic in the hub."
  },
  {
    "t": "vnet-peering",
    "x": "An administrator needs to connect two virtual networks that reside in different Azure regions using peering. Which capability makes this possible?",
    "o": [
      "Global virtual network peering",
      "Local virtual network peering",
      "A VNet-to-VNet VPN only",
      "Cross-region service endpoints"
    ],
    "a": 0,
    "e": "Global VNet peering connects virtual networks across different regions over the Microsoft backbone. Regional peering only joins VNets in the same region."
  },
  {
    "t": "vnet-peering",
    "x": "Peering between two virtual networks fails to create. Which condition most likely prevents it from succeeding?",
    "o": [
      "The virtual networks have overlapping address spaces",
      "Both virtual networks use Standard SKU public IPs",
      "The virtual networks are in the same subscription",
      "Each virtual network has a network security group"
    ],
    "a": 0,
    "e": "Peered virtual networks must have non-overlapping IP address spaces. NSGs, a shared subscription, and Standard public IPs do not block peering."
  },
  {
    "t": "vnet-peering",
    "x": "In a hub-and-spoke topology, which two peering settings let spoke virtual networks use a VPN gateway located in the hub? Choose TWO.",
    "o": [
      "Allow gateway transit on the hub peering",
      "Use remote gateways on the spoke peering",
      "Allow forwarded traffic on the spoke only",
      "Enable BGP on every spoke subnet",
      "Disable the gateway in the hub network"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The hub peering enables Allow gateway transit and each spoke peering enables Use remote gateways, so spokes reach on-premises through the hub gateway without deploying their own."
  },
  {
    "t": "public-ip",
    "x": "An administrator assigns a Standard SKU public IP address to a VM network interface. What is the default inbound access behavior?",
    "o": [
      "Inbound traffic is blocked until an NSG rule allows it",
      "Inbound traffic is permitted from any internet source",
      "Inbound RDP and SSH are automatically opened for you",
      "Inbound traffic is allowed only for the first 24 hours"
    ],
    "a": 0,
    "e": "Standard SKU public IPs are secure by default and require an NSG rule to permit inbound traffic. The retired Basic SKU was open by default."
  },
  {
    "t": "public-ip",
    "x": "Which allocation method is used for a Standard SKU public IP address in Azure?",
    "o": [
      "Static allocation only",
      "Dynamic allocation only",
      "Either static or dynamic, chosen at creation",
      "Dynamic that converts to static after assignment"
    ],
    "a": 0,
    "e": "Standard SKU public IP addresses always use static allocation, so the address does not change. Only the legacy Basic SKU offered a dynamic option."
  },
  {
    "t": "public-ip",
    "x": "An administrator adds a public IP to a Standard load balancer frontend. Which requirement must the public IP meet?",
    "o": [
      "It must also be a Standard SKU public IP",
      "It must be a Basic SKU public IP",
      "It must use dynamic allocation",
      "It must be in a different region than the load balancer"
    ],
    "a": 0,
    "e": "The public IP SKU must match the load balancer SKU, so a Standard load balancer requires a Standard public IP. Mismatched SKUs are not permitted."
  },
  {
    "t": "user-defined-routes",
    "x": "An administrator wants subnet traffic to flow through a network virtual appliance firewall. Which next hop type should the user-defined route specify?",
    "o": [
      "Virtual appliance",
      "Internet",
      "Virtual network gateway",
      "None"
    ],
    "a": 0,
    "e": "A route with next hop type Virtual appliance forwards traffic to the appliance's private IP. The NVA must also have IP forwarding enabled to pass the packets."
  },
  {
    "t": "user-defined-routes",
    "x": "When Azure selects a route for outbound traffic on a matching prefix, which type takes precedence over system routes and BGP routes?",
    "o": [
      "User-defined routes",
      "System routes",
      "BGP-learned routes",
      "Service endpoint routes"
    ],
    "a": 0,
    "e": "For matching prefixes Azure prefers user-defined routes, then BGP routes, then system routes. Longest prefix match is evaluated first across all sources."
  },
  {
    "t": "user-defined-routes",
    "x": "An administrator creates a user-defined route for a destination prefix and sets the next hop to None. What is the effect on matching traffic?",
    "o": [
      "The traffic is dropped",
      "The traffic is sent to the internet",
      "The traffic is load balanced",
      "The traffic is mirrored to Network Watcher"
    ],
    "a": 0,
    "e": "A next hop of None causes Azure to drop traffic matching that route's prefix, which is useful for blackholing specific destinations."
  },
  {
    "t": "user-defined-routes",
    "x": "An administrator forces all internet-bound traffic from a subnet through an NVA. Which two elements are required for this to work? Choose TWO.",
    "o": [
      "A 0.0.0.0/0 user-defined route with next hop Virtual appliance",
      "IP forwarding enabled on the NVA network interface",
      "A public IP prefix assigned to the whole subnet",
      "Gateway transit enabled on the subnet peering",
      "A service endpoint for Microsoft.Network on the subnet"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Forcing egress through an NVA needs a 0.0.0.0/0 route pointing at the appliance and IP forwarding enabled on the appliance's NIC so it can relay traffic it does not own."
  },
  {
    "t": "nsg-asg",
    "x": "Two NSG security rules could match the same packet. Which rule does Azure apply based on the priority values?",
    "o": [
      "The rule with the lower priority number",
      "The rule with the higher priority number",
      "The rule that was created most recently",
      "The rule listed last alphabetically"
    ],
    "a": 0,
    "e": "NSG rules are processed in priority order from the lowest number to the highest, and the first match wins. Valid custom priorities range from 100 to 4096."
  },
  {
    "t": "nsg-asg",
    "x": "How does an application security group simplify NSG rule management for an administrator?",
    "o": [
      "Rules can reference a named group of NICs instead of IP lists",
      "It automatically opens every port on the grouped machines",
      "It removes the need for a network security group entirely",
      "It assigns static public IP addresses to grouped machines"
    ],
    "a": 0,
    "e": "An ASG groups network interfaces so NSG rules can use the ASG as source or destination, removing the need to maintain IP address lists as VMs scale."
  },
  {
    "t": "nsg-asg",
    "x": "A single network security group can be associated to which of the following scopes?",
    "o": [
      "A subnet or a network interface",
      "A resource group or a subscription",
      "A virtual network or a region",
      "A storage account or a NIC"
    ],
    "a": 0,
    "e": "NSGs attach to subnets and to individual network interfaces. When both are present, a packet must be allowed by both to reach the VM."
  },
  {
    "t": "nsg-asg",
    "x": "Which default NSG rule blocks inbound traffic that no higher-priority rule has explicitly allowed?",
    "o": [
      "DenyAllInBound",
      "AllowVNetInBound",
      "AllowAzureLoadBalancerInBound",
      "DenyVNetOutBound"
    ],
    "a": 0,
    "e": "The lowest-priority default inbound rule, DenyAllInBound at priority 65500, blocks any inbound traffic not permitted by an earlier custom or default rule."
  },
  {
    "t": "nsg-asg",
    "x": "Which two statements about NSG rules and application security groups are correct? Choose TWO.",
    "o": [
      "Service tags such as VirtualNetwork work as a rule endpoint",
      "All NICs in one ASG must be in the same virtual network",
      "An ASG can span network interfaces across two regions",
      "NSG user rule priorities may be any value up to 65000",
      "A single NSG rule can specify at most one port number"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Service tags can be used as rule endpoints, and all NICs in an ASG must share one virtual network. User rule priorities top out at 4096, rules can list many ports, and ASGs cannot span regions."
  },
  {
    "t": "nsg-effective-rules",
    "x": "A VM subnet NSG allows port 443, but the NIC NSG has no allow rule for 443. Can inbound HTTPS reach the VM?",
    "o": [
      "No, both the subnet and NIC NSGs must permit the traffic",
      "Yes, the subnet NSG rule overrides the NIC NSG here",
      "Yes, NIC NSGs only ever affect outbound traffic flows",
      "No, subnet NSGs deny all inbound traffic by default"
    ],
    "a": 0,
    "e": "When NSGs exist on both the subnet and the NIC, inbound traffic must be permitted by both. The NIC NSG's implicit deny blocks the connection here."
  },
  {
    "t": "nsg-effective-rules",
    "x": "Which feature shows the combined, evaluated NSG rules that actually apply to a running VM network interface?",
    "o": [
      "Effective security rules",
      "Connection troubleshoot",
      "Service tag discovery",
      "Route table export"
    ],
    "a": 0,
    "e": "The effective security rules view aggregates subnet and NIC NSG rules into the list Azure actually enforces. The VM must be running to compute them."
  },
  {
    "t": "nsg-effective-rules",
    "x": "An administrator opens the effective security rules view but sees no results. What is the most likely cause?",
    "o": [
      "The virtual machine is stopped or deallocated",
      "The network security group has under five rules",
      "The subnet has no route table associated with it",
      "The attached public IP is a legacy Basic SKU"
    ],
    "a": 0,
    "e": "Effective rules are calculated from the running VM's network interface, so a stopped or deallocated VM returns no effective rule data."
  },
  {
    "t": "nsg-effective-rules",
    "x": "Which two facts about evaluating effective NSG rules are correct? Choose TWO.",
    "o": [
      "Inbound traffic hits the subnet NSG before the NIC NSG",
      "IP flow verify can test whether a specific flow is allowed",
      "Effective rules ignore any NSG attached to the subnet",
      "The NIC NSG only affects traffic within the same subnet",
      "Effective rules are shown even when the VM is deallocated"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Inbound packets pass the subnet NSG then the NIC NSG, and IP flow verify tests a specific 5-tuple. Effective rules include the subnet NSG and require the VM to be running."
  },
  {
    "t": "azure-bastion",
    "x": "How does Azure Bastion let an administrator connect to a virtual machine over RDP or SSH?",
    "o": [
      "Over TLS from the Azure portal with no public IP on the VM",
      "By assigning a short-lived public IP to the target VM",
      "By opening RDP port 3389 to the internet on the VM",
      "Through an always-on site-to-site VPN tunnel connection"
    ],
    "a": 0,
    "e": "Bastion brokers RDP and SSH over TLS from the portal, so the target VM needs no public IP and its NSG need not expose 3389 or 22 to the internet."
  },
  {
    "t": "azure-bastion",
    "x": "Azure Bastion requires a dedicated subnet in the virtual network. What must that subnet be named and sized?",
    "o": [
      "AzureBastionSubnet, /26 or larger",
      "BastionSubnet, /29 or larger",
      "GatewaySubnet, /27 or larger",
      "AzureBastionSubnet, /30 or larger"
    ],
    "a": 0,
    "e": "Bastion deploys into a subnet named exactly AzureBastionSubnet that must be /26 or larger. A different name or a smaller range is rejected."
  },
  {
    "t": "azure-bastion",
    "x": "An administrator wants to connect to VMs through Bastion using the native Windows RDP client instead of the browser. Which Bastion SKU is required?",
    "o": [
      "Standard",
      "Basic",
      "Developer",
      "Consumption"
    ],
    "a": 0,
    "e": "The native client and IP-based connections require the Standard SKU. The Basic and Developer SKUs support only browser-based sessions."
  },
  {
    "t": "service-endpoints",
    "x": "An administrator enables a service endpoint for Microsoft.Storage on a subnet. What happens to the source address of virtual machine traffic reaching the storage account?",
    "o": [
      "It changes from the public IP to the subnet's private IP address",
      "It changes from the private IP to a Microsoft-owned public IP",
      "It is replaced by the storage account's private endpoint IP",
      "It is masked behind a NAT gateway attached to the subnet"
    ],
    "a": 0,
    "e": "A service endpoint moves traffic onto the Azure backbone and presents the VM's private IP as the source, so the storage firewall can allow that specific subnet. No private endpoint or NAT translation is involved."
  },
  {
    "t": "service-endpoints",
    "x": "At which scope does an administrator configure an Azure service endpoint when securing traffic to Azure SQL Database?",
    "o": [
      "On the subnet within the virtual network",
      "On the virtual network gateway resource",
      "On the Azure SQL Database firewall only",
      "On the individual network interface of each VM"
    ],
    "a": 0,
    "e": "Service endpoints are enabled per service on a subnet. They are not set on a NIC or gateway, although the target service firewall must still allow that subnet."
  },
  {
    "t": "service-endpoints",
    "x": "A team must ensure a subnet with a storage service endpoint can reach only two approved storage accounts and no others. Which feature enforces this restriction?",
    "o": [
      "Service endpoint policies",
      "A network security group rule",
      "An Azure Private DNS zone",
      "A user-defined route to the storage service"
    ],
    "a": 0,
    "e": "Service endpoint policies filter service endpoint traffic down to specific Azure Storage accounts. NSGs filter by IP or service tag but cannot pin to individual accounts, and DNS does not restrict access."
  },
  {
    "t": "service-endpoints",
    "x": "Why can on-premises hosts not benefit from a virtual network service endpoint that secures an Azure storage account?",
    "o": [
      "Service endpoints apply only to traffic originating inside the virtual network",
      "Service endpoints require the storage account to be in the client's region",
      "Service endpoints encrypt traffic that on-premises firewalls cannot decrypt",
      "Service endpoints are limited to a single subnet per region"
    ],
    "a": 0,
    "e": "A service endpoint only changes routing for VMs inside the VNet subnet, so on-premises clients over VPN or ExpressRoute still arrive through the public endpoint. A private endpoint is the option for on-premises reach."
  },
  {
    "t": "service-endpoints",
    "x": "Which statements accurately describe Azure virtual network service endpoints? Choose TWO.",
    "o": [
      "Traffic to the service travels over the Azure backbone rather than the public internet",
      "The service keeps a public endpoint but can be restricted to selected subnets",
      "They inject a private IP for the service into the chosen subnet",
      "They require a dedicated gateway subnet in order to function",
      "They are billed per gigabyte of data that is processed"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Service endpoints keep traffic on the Microsoft backbone and let the service firewall allow specific subnets while the service still exposes a public endpoint. They add no private IP, need no gateway subnet, and carry no extra charge."
  },
  {
    "t": "private-endpoints",
    "x": "An administrator creates a private endpoint for an Azure Key Vault. What does the private endpoint provision inside the selected subnet?",
    "o": [
      "A network interface with a private IP from the subnet range",
      "A new service endpoint entry on that subnet",
      "A public IP mapped to the Key Vault firewall",
      "A dedicated route table for the Key Vault"
    ],
    "a": 0,
    "e": "A private endpoint deploys a NIC that receives a private IP from the subnet, mapping the service into the VNet through Azure Private Link. No public IP is created for it."
  },
  {
    "t": "private-endpoints",
    "x": "After deploying a private endpoint for a storage account, clients still resolve the account name to its public IP. What must be configured for correct name resolution?",
    "o": [
      "A Private DNS zone such as privatelink.blob.core.windows.net linked to the VNet",
      "A public DNS A record pointing to the private endpoint IP",
      "A service endpoint policy referencing the storage account",
      "A conditional access policy scoped to the storage account"
    ],
    "a": 0,
    "e": "Private endpoints rely on a privatelink Private DNS zone linked to the VNet so the FQDN resolves to the private IP. Without it, the public CNAME chain returns the public address."
  },
  {
    "t": "private-endpoints",
    "x": "A private endpoint created against a service in another subscription shows a connection state of Pending. What is required before traffic can flow?",
    "o": [
      "The resource owner must approve the private endpoint connection",
      "The subnet must have a service endpoint enabled for the service",
      "A global VNet peering must be established first",
      "The private endpoint must move to the service's region"
    ],
    "a": 0,
    "e": "Cross-subscription private endpoints start in Pending and need manual approval by the target resource owner. Peering and service endpoints are unrelated to the approval workflow."
  },
  {
    "t": "private-endpoints",
    "x": "By default, network security group rules do not filter traffic to a subnet's private endpoints. Which setting must an administrator change to enforce NSG rules on them?",
    "o": [
      "Enable private endpoint network policies on the subnet",
      "Disable the subnet's service endpoint for Private Link",
      "Attach an application security group to the endpoint NIC",
      "Set the private endpoint to a static allocation method"
    ],
    "a": 0,
    "e": "Private endpoint network policies are off by default, which bypasses NSGs. Turning the policy on lets NSG and route rules apply to private endpoint traffic."
  },
  {
    "t": "private-endpoints",
    "x": "Which characteristics distinguish an Azure private endpoint from a service endpoint? Choose TWO.",
    "o": [
      "It gives the service a private IP reachable from on-premises over VPN or ExpressRoute",
      "It maps a single instance of a PaaS resource rather than a whole namespace",
      "It changes the source address of outbound VM traffic to a private IP",
      "It is enabled directly on the subnet with no additional resource",
      "It removes the need for any DNS configuration at all"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A private endpoint gives a specific resource a private IP reachable from connected on-premises networks and targets one resource instance. Service endpoints instead are subnet settings that rewrite the source IP for the whole service."
  },
  {
    "t": "azure-dns",
    "x": "An administrator hosts a company's public domain in an Azure public DNS zone. What must be updated at the domain registrar to make Azure authoritative?",
    "o": [
      "The domain's name server records must point to the Azure name servers",
      "An A record must be added for the zone apex",
      "A TXT record must be created to verify zone ownership",
      "The registrar must enable DNSSEC for the zone"
    ],
    "a": 0,
    "e": "Delegation requires changing the registrar's NS records to the Azure-assigned name servers so queries reach the Azure zone. A or TXT records inside the zone do not delegate authority."
  },
  {
    "t": "azure-dns",
    "x": "In an Azure Private DNS zone, which setting causes VM hostnames to be registered automatically as A records?",
    "o": [
      "Enabling auto-registration on the virtual network link",
      "Adding a conditional forwarder to the zone",
      "Creating an alias record set for each VM",
      "Linking the zone to a route table"
    ],
    "a": 0,
    "e": "A virtual network link with auto-registration writes and updates A records for VMs in that VNet. Without it, the link only provides resolution and not registration."
  },
  {
    "t": "azure-dns",
    "x": "Which Azure DNS feature lets a zone apex record reference an Azure public IP resource and update itself if that IP changes?",
    "o": [
      "An alias record set",
      "A CNAME record",
      "An SRV record",
      "A secondary zone"
    ],
    "a": 0,
    "e": "Alias records point at Azure resources such as a public IP or Traffic Manager profile and track changes automatically. A CNAME cannot be used at the apex and does not reference Azure resources directly."
  },
  {
    "t": "azure-dns",
    "x": "A Private DNS zone must resolve names for workloads spread across three separate virtual networks. What is the supported approach?",
    "o": [
      "Create a virtual network link from the zone to each of the three networks",
      "Peer the three networks and link the zone to only one of them",
      "Deploy a separate Private DNS zone inside every network",
      "Add the zone as a custom DNS server on each subnet"
    ],
    "a": 0,
    "e": "Each VNet that needs resolution must have its own virtual network link to the Private DNS zone. Peering alone does not share private zone resolution, and duplicating the zone is unnecessary."
  },
  {
    "t": "azure-dns",
    "x": "Which statements about record management in an Azure public DNS zone are correct? Choose TWO.",
    "o": [
      "Records that share a name and type are grouped into one record set",
      "The zone apex can use an alias record in place of an unsupported CNAME",
      "Every record set requires an explicit reverse lookup entry",
      "TTL values can only be set at the zone level, never per record set",
      "A single CNAME record set may hold several target host names"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Records sharing a name and type form a record set, and alias records solve the apex CNAME restriction. TTL is set per record set, a CNAME set holds exactly one target, and reverse lookups are optional."
  },
  {
    "t": "load-balancer",
    "x": "An administrator needs an Azure Load Balancer that supports availability zones and a published SLA. Which SKU meets both requirements?",
    "o": [
      "Standard",
      "Basic",
      "Gateway",
      "Classic"
    ],
    "a": 0,
    "e": "Only the Standard Load Balancer SKU offers zone redundancy and a 99.99% SLA. Basic has no SLA and no zone support, and Gateway LB serves a different appliance-insertion purpose."
  },
  {
    "t": "load-balancer",
    "x": "What is the role of a health probe attached to an Azure Load Balancer rule?",
    "o": [
      "It determines which backend instances may receive new connections",
      "It encrypts traffic between the frontend and the backend pool",
      "It assigns public IP addresses to healthy backend instances",
      "It rewrites the destination port of every incoming packet"
    ],
    "a": 0,
    "e": "Health probes test backend endpoints and remove unhealthy instances from rotation so only healthy members get new flows. They do not encrypt, assign IPs, or rewrite ports."
  },
  {
    "t": "load-balancer",
    "x": "A three-tier application must balance traffic between its web tier and a private application tier with no internet exposure. Which configuration fits?",
    "o": [
      "An internal load balancer with a private frontend IP",
      "A public load balancer with an inbound NAT rule",
      "A public load balancer paired with a service endpoint",
      "An internal load balancer with a public frontend IP"
    ],
    "a": 0,
    "e": "An internal load balancer uses a private frontend IP to distribute traffic within the VNet, ideal for tier-to-tier flows. A public LB or public frontend would expose the tier to the internet."
  },
  {
    "t": "load-balancer",
    "x": "An administrator wants to reach one specific backend VM over RDP through the load balancer's public IP on port 50001. Which feature provides this?",
    "o": [
      "An inbound NAT rule",
      "A load balancing rule",
      "An outbound rule",
      "A health probe"
    ],
    "a": 0,
    "e": "Inbound NAT rules forward a specific frontend port to one backend instance, which is how per-VM RDP or SSH access is published. Load balancing rules spread traffic across the whole pool instead."
  },
  {
    "t": "load-balancer",
    "x": "Which capabilities are available with the Standard SKU Azure Load Balancer but not the Basic SKU? Choose TWO.",
    "o": [
      "Traffic is blocked by default unless a network security group allows it",
      "Backend pools can span multiple availability zones",
      "The frontend is limited to a single availability set",
      "Public IP addresses are auto-assigned to every backend VM",
      "TLS offload is performed for HTTPS listeners"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Standard Load Balancer is closed to inbound traffic until an NSG permits it and supports zone-spanning backend pools. TLS offload belongs to Application Gateway, and neither SKU auto-assigns public IPs to backends."
  },
  {
    "t": "load-balancer",
    "x": "Which options can an administrator configure on an Azure Load Balancer to influence how individual flows are handled? Choose TWO.",
    "o": [
      "Session persistence based on source IP affinity",
      "Floating IP for direct server return scenarios",
      "Path-based URL routing to different backend pools",
      "Cookie-based session affinity for HTTP requests",
      "Web application firewall rules on the frontend"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A Layer 4 load balancer supports source IP session persistence and Floating IP for direct server return. Path-based routing, cookie affinity, and WAF are Application Gateway features instead."
  },
  {
    "t": "load-balancing-troubleshoot",
    "x": "Backend VMs behind a load balancer are all marked unhealthy even though the application works when tested locally on each VM. Which cause should be checked first?",
    "o": [
      "The service is not listening on the port the health probe checks",
      "The load balancing rule uses the wrong distribution mode",
      "The frontend uses a private address instead of a public one",
      "The backend pool references the wrong availability zone"
    ],
    "a": 0,
    "e": "If nothing answers on the probe port, every instance is judged unhealthy and pulled from rotation. Distribution mode and frontend type do not affect probe health results."
  },
  {
    "t": "load-balancing-troubleshoot",
    "x": "Health probes keep failing for a Standard Load Balancer backend pool. Which network security group rule is required for the probes to succeed?",
    "o": [
      "An inbound allow rule for the AzureLoadBalancer service tag on the probe port",
      "An outbound allow rule for the Internet service tag",
      "An inbound deny rule for the VirtualNetwork service tag",
      "An outbound allow rule for the AzureLoadBalancer service tag"
    ],
    "a": 0,
    "e": "Probes originate from the AzureLoadBalancer source and must be allowed inbound to the backend on the probe port. Standard LB blocks by default, so the explicit allow rule is required."
  },
  {
    "t": "load-balancing-troubleshoot",
    "x": "A newly deployed VM receives no traffic from the load balancer while its peers do. What is the most likely configuration gap?",
    "o": [
      "The VM's network interface was never added to the backend pool",
      "The VM is missing a user-defined route to the frontend IP",
      "The load balancer SKU was recently changed to Standard",
      "The VM has accelerated networking left disabled"
    ],
    "a": 0,
    "e": "A backend instance receives traffic only if its NIC or IP configuration is a member of the backend pool. Routes and accelerated networking do not gate pool membership."
  },
  {
    "t": "load-balancing-troubleshoot",
    "x": "Outbound connections from load-balanced VMs to an external API intermittently time out under heavy load. Which condition is the likely cause?",
    "o": [
      "SNAT port exhaustion on the load balancer's outbound path",
      "The health probe interval is set far too high",
      "The backend pool has session persistence enabled",
      "The frontend IP was assigned a dynamic address"
    ],
    "a": 0,
    "e": "Too many concurrent outbound flows can exhaust the allocated SNAT ports, so new connections fail until ports free up. Probe interval and persistence do not produce SNAT timeouts."
  },
  {
    "t": "load-balancing-troubleshoot",
    "x": "An administrator is diagnosing why load balancer backend instances report as unhealthy. Which two factors can independently cause this result? Choose TWO.",
    "o": [
      "A network security group is blocking the probe port on the backend subnet",
      "The application on the backend has stopped responding on the probe port",
      "The load balancer is using a public frontend IP address",
      "The backend VMs are spread across two availability zones",
      "Session persistence is set to source IP affinity"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Probes fail when an NSG blocks the probe port or when the backend service is not answering there, both of which mark instances unhealthy. Public frontends, multi-zone pools, and persistence do not affect probe outcomes."
  },
  {
    "t": "network-connectivity-troubleshoot",
    "x": "An administrator suspects a security rule is dropping traffic to a VM. Which Network Watcher tool confirms whether a specific packet would be allowed or denied?",
    "o": [
      "IP flow verify",
      "Connection monitor",
      "Topology",
      "NSG flow logs"
    ],
    "a": 0,
    "e": "IP flow verify evaluates NSG rules for a given source, destination, port, and protocol and reports allow or deny plus the matching rule. Flow logs record traffic after the fact rather than testing a hypothetical packet."
  },
  {
    "t": "network-connectivity-troubleshoot",
    "x": "Traffic from a VM keeps reaching the wrong next hop, and an administrator wants to see every system and custom route applied to the interface. What should be examined?",
    "o": [
      "The effective routes on the VM's network interface",
      "The effective security rules on the subnet",
      "The service tags listed in the route table",
      "The DNS settings of the virtual network"
    ],
    "a": 0,
    "e": "Effective routes show the merged result of system routes, user-defined routes, and BGP for a NIC, revealing the actual next hop. Effective security rules cover NSGs, not routing."
  },
  {
    "t": "network-connectivity-troubleshoot",
    "x": "Two virtual networks are peered, yet resources in a third peered network cannot reach each other through the hub. Which statements explain this behavior? Choose TWO.",
    "o": [
      "VNet peering is not transitive by default",
      "Spoke-to-spoke traffic requires a routed appliance or gateway transit in the hub",
      "Peering automatically forwards traffic between all connected networks",
      "A Private DNS zone is required before any peered traffic can flow",
      "Global peering blocks all spoke-to-spoke IP connectivity"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Peering connects only the two directly peered VNets, so spoke-to-spoke traffic through a hub needs an NVA or gateway with routing. It is not transitive, but it does not inherently block traffic or require DNS."
  },
  {
    "t": "network-connectivity-troubleshoot",
    "x": "An administrator must verify end-to-end reachability and latency between a VM and an external endpoint over time. Which Network Watcher capabilities apply? Choose TWO.",
    "o": [
      "Connection monitor for ongoing reachability and latency metrics",
      "Connection troubleshoot for an on-demand path test",
      "IP flow verify for measuring round-trip latency",
      "Topology for blocking unwanted traffic flows",
      "NSG flow logs for changing the VM's next hop"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Connection monitor tracks reachability and latency continuously, while connection troubleshoot runs a one-time path check. IP flow verify only evaluates allow or deny, and topology and flow logs neither measure latency nor alter routing."
  },
  {
    "t": "monitor-metrics",
    "x": "An administrator wants to view near real-time CPU utilization for a virtual machine over the last hour at one-minute granularity. Which Azure Monitor tool should they open?",
    "o": [
      "Metrics Explorer",
      "Log Analytics workspace",
      "Activity log",
      "Service Health"
    ],
    "a": 0,
    "e": "Metrics Explorer plots platform metrics such as Percentage CPU in near real-time at one-minute granularity. Log Analytics is for query-based log data, not the default numeric metric stream."
  },
  {
    "t": "monitor-metrics",
    "x": "How long does Azure Monitor retain platform metrics by default before they must be exported to persist longer?",
    "o": [
      "93 days",
      "30 days",
      "365 days",
      "7 days"
    ],
    "a": 0,
    "e": "Platform metrics are kept for 93 days by default. To retain them longer you route them to a Log Analytics workspace or storage account through a diagnostic setting."
  },
  {
    "t": "monitor-metrics",
    "x": "Which metric aggregation adds together all sampled values within the selected time granularity?",
    "o": [
      "Sum",
      "Average",
      "Count",
      "Maximum"
    ],
    "a": 0,
    "e": "The Sum aggregation totals every value in the granularity interval. Count returns the number of samples collected rather than the total of their values."
  },
  {
    "t": "monitor-metrics",
    "x": "An administrator must keep virtual machine platform metrics beyond the default retention period. Which two diagnostic setting destinations support long-term storage? Choose TWO.",
    "o": [
      "A Log Analytics workspace",
      "An Azure Storage account",
      "A metric alert rule",
      "An action group",
      "The Activity log"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Diagnostic settings can route platform metrics to a Log Analytics workspace or a storage account for retention past 93 days. Alert rules and action groups react to metrics but do not store them."
  },
  {
    "t": "monitor-log-settings",
    "x": "Resource logs from an Azure resource are not appearing in Log Analytics. What must an administrator create to begin collecting them?",
    "o": [
      "A diagnostic setting",
      "A metric alert",
      "An action group",
      "A saved log query"
    ],
    "a": 0,
    "e": "Resource logs are not collected by default. A diagnostic setting defines which log categories are emitted and to which destination, such as a Log Analytics workspace."
  },
  {
    "t": "monitor-log-settings",
    "x": "Which two destinations can a diagnostic setting stream Azure resource logs to? Choose TWO.",
    "o": [
      "An Event Hubs namespace",
      "A Log Analytics workspace",
      "A network security group",
      "A Recovery Services vault",
      "An availability set"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Diagnostic settings support Log Analytics workspaces, storage accounts, Event Hubs, and partner solutions. NSGs, vaults, and availability sets are not log destinations."
  },
  {
    "t": "monitor-log-settings",
    "x": "What is the maximum number of diagnostic settings that can be attached to a single Azure resource?",
    "o": [
      "5",
      "1",
      "10",
      "3"
    ],
    "a": 0,
    "e": "A resource supports up to five diagnostic settings, letting you fan logs out to different destinations. Going beyond five requires consolidating destinations within a setting."
  },
  {
    "t": "monitor-log-queries",
    "x": "Which KQL operator filters rows in a Log Analytics query based on a condition?",
    "o": [
      "where",
      "project",
      "summarize",
      "render"
    ],
    "a": 0,
    "e": "The where operator filters rows by a predicate. project selects columns, summarize aggregates rows, and render controls the visualization."
  },
  {
    "t": "monitor-log-queries",
    "x": "An administrator needs a grouped count of events per computer in a KQL query. Which operator produces the aggregated totals?",
    "o": [
      "summarize",
      "extend",
      "distinct",
      "sort"
    ],
    "a": 0,
    "e": "summarize with a by clause aggregates rows into groups such as count() by Computer. extend only adds calculated columns without aggregating."
  },
  {
    "t": "monitor-log-queries",
    "x": "Which KQL function returns records from a relative time window such as the trailing 24 hours?",
    "o": [
      "The ago function",
      "The startofday function",
      "The datetime_add function",
      "The format_datetime function"
    ],
    "a": 0,
    "e": "Filtering with TimeGenerated > ago(24h) selects the trailing 24-hour window. The startofday and datetime_add functions manipulate specific timestamps rather than relative ranges."
  },
  {
    "t": "monitor-log-queries",
    "x": "An administrator wants a query to output only two chosen columns and cap the result set at 100 rows. Which two operators accomplish this? Choose TWO.",
    "o": [
      "project",
      "take",
      "render",
      "join",
      "parse"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "project selects the desired columns and take limits the number of rows returned. render only affects chart output and join combines separate tables."
  },
  {
    "t": "monitor-alerts",
    "x": "Which Azure Monitor component defines the notifications and actions triggered when an alert rule fires?",
    "o": [
      "Action group",
      "Alert rule condition",
      "Diagnostic setting",
      "Metric namespace"
    ],
    "a": 0,
    "e": "An action group is a reusable set of notifications and actions such as email or a webhook. The alert rule references the action group to invoke it when its condition is met."
  },
  {
    "t": "monitor-alerts",
    "x": "An administrator wants alert thresholds to adjust automatically to a metric's normal fluctuating pattern. Which threshold type should they select?",
    "o": [
      "Dynamic thresholds",
      "Static threshold",
      "Fixed percentage threshold",
      "Manual baseline threshold"
    ],
    "a": 0,
    "e": "Dynamic thresholds use machine learning to derive boundaries from the metric's historical pattern. A static threshold requires you to hard-code a single value that never adapts."
  },
  {
    "t": "monitor-alerts",
    "x": "Which Azure Monitor alert severity level represents the most critical condition?",
    "o": [
      "Sev 0",
      "Sev 4",
      "Sev 2",
      "Sev 5"
    ],
    "a": 0,
    "e": "Alert severities range from Sev 0 for critical down to Sev 4 for verbose. Sev 0 is the highest priority and there is no Sev 5."
  },
  {
    "t": "monitor-alerts",
    "x": "Which two signal types can an Azure Monitor alert rule evaluate? Choose TWO.",
    "o": [
      "A platform metric",
      "A Log Analytics query result",
      "A resource lock",
      "An RBAC role assignment",
      "A virtual network peering"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Alert rules can evaluate metric signals or log query results, as well as activity log events. Locks, role assignments, and peerings are configuration objects, not alert signals."
  },
  {
    "t": "monitor-insights",
    "x": "Which Azure Monitor insight provides a dependency map and performance charts for virtual machines?",
    "o": [
      "VM insights",
      "Application Insights",
      "Storage insights",
      "Network insights"
    ],
    "a": 0,
    "e": "VM insights collects performance and process dependency data through the Azure Monitor Agent. Application Insights targets application-level telemetry, not VM guest performance."
  },
  {
    "t": "monitor-insights",
    "x": "An administrator needs to track request rates, response times, and exceptions for a web application. Which insight should they enable?",
    "o": [
      "Application Insights",
      "VM insights",
      "Container insights",
      "Network Watcher"
    ],
    "a": 0,
    "e": "Application Insights is an application performance monitoring service capturing requests, dependencies, and exceptions. VM insights measures the host machine, not the application code."
  },
  {
    "t": "monitor-insights",
    "x": "Which two Azure Monitor insights store their collected data in a Log Analytics workspace? Choose TWO.",
    "o": [
      "VM insights",
      "Container insights",
      "Azure Advisor",
      "Azure Service Health",
      "Azure Resource Graph"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "VM insights and Container insights both write performance and inventory data to a Log Analytics workspace queried with KQL. Advisor and Service Health are separate services that do not use insights workspaces."
  },
  {
    "t": "network-watcher",
    "x": "An administrator must determine whether an NSG rule is allowing or blocking traffic to a VM on a given port. Which Network Watcher tool applies?",
    "o": [
      "IP flow verify",
      "Next hop",
      "Packet capture",
      "Topology"
    ],
    "a": 0,
    "e": "IP flow verify checks whether a packet is allowed or denied to a VM and names the responsible NSG rule. Next hop shows routing decisions rather than NSG allow or deny outcomes."
  },
  {
    "t": "network-watcher",
    "x": "Which Network Watcher feature reveals the routing path and gateway a packet uses when leaving a VM?",
    "o": [
      "Next hop",
      "IP flow verify",
      "Connection monitor",
      "Flow logs"
    ],
    "a": 0,
    "e": "Next hop returns the next hop type and IP for a destination, useful for diagnosing user-defined routes. IP flow verify instead evaluates NSG allow or deny for a specific packet."
  },
  {
    "t": "network-watcher",
    "x": "An administrator wants to record IP traffic through an NSG to a storage account for later analysis. Which Network Watcher capability provides this?",
    "o": [
      "NSG flow logs",
      "Effective security rules",
      "IP flow verify",
      "Connection troubleshoot"
    ],
    "a": 0,
    "e": "NSG flow logs capture ingress and egress IP traffic metadata to a storage account for traffic analytics. Effective security rules only display the aggregated rule set, not live traffic."
  },
  {
    "t": "network-watcher",
    "x": "A connection fails and the administrator suspects the network security configuration. Which two Network Watcher features reveal the effective allow or deny outcome? Choose TWO.",
    "o": [
      "IP flow verify",
      "Effective security rules",
      "Topology",
      "Packet capture",
      "Usage and quotas"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "IP flow verify tests a specific packet against NSG rules and effective security rules shows the combined rules applied to a NIC. Topology and packet capture do not evaluate allow or deny decisions."
  },
  {
    "t": "recovery-services-vault",
    "x": "Which resource must exist before you can protect an Azure virtual machine with classic Azure VM backup?",
    "o": [
      "A Recovery Services vault",
      "A storage account",
      "A Log Analytics workspace",
      "An Azure Backup vault"
    ],
    "a": 0,
    "e": "Azure VM backup jobs store recovery points in a Recovery Services vault. The newer Backup vault covers workloads like Azure Disks, blobs, and PostgreSQL rather than classic VM backup."
  },
  {
    "t": "recovery-services-vault",
    "x": "Which Recovery Services vault storage redundancy option is required to enable Cross Region Restore?",
    "o": [
      "Geo-redundant storage",
      "Locally redundant storage",
      "Zone-redundant storage",
      "Read-access geo-zone-redundant storage"
    ],
    "a": 0,
    "e": "Cross Region Restore relies on geo-redundant storage, which replicates backup data to the paired secondary region. Locally and zone-redundant options keep data within the primary region only."
  },
  {
    "t": "recovery-services-vault",
    "x": "By default, how many days does Recovery Services vault soft delete retain deleted backup data at no additional cost?",
    "o": [
      "14 days",
      "7 days",
      "30 days",
      "90 days"
    ],
    "a": 0,
    "e": "Soft delete keeps deleted backup items for 14 days at no charge, allowing recovery from accidental or malicious deletion. The window can be extended but 14 days is the default."
  },
  {
    "t": "recovery-services-vault",
    "x": "Which two workloads can be protected using a Recovery Services vault? Choose TWO.",
    "o": [
      "Azure virtual machines",
      "On-premises files and folders",
      "Azure Cosmos DB accounts",
      "Azure Key Vault secrets",
      "Azure DNS zones"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A Recovery Services vault protects Azure VMs and on-premises files and folders through the MARS agent, among others. Cosmos DB, Key Vault, and DNS zones are not Azure Backup workloads."
  },
  {
    "t": "backup-vault",
    "x": "An administrator must back up Azure managed disks and Azure Blobs. Which vault type supports these newer datasources?",
    "o": [
      "Backup vault",
      "Recovery Services vault",
      "Key vault",
      "Storage account"
    ],
    "a": 0,
    "e": "The Backup vault supports newer datasources such as Azure Disks, Blobs, PostgreSQL, and AKS. The Recovery Services vault handles VMs and MARS agent backups instead."
  },
  {
    "t": "backup-vault",
    "x": "Which database service can be protected directly by an Azure Backup vault?",
    "o": [
      "Azure Database for PostgreSQL",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Cache for Redis"
    ],
    "a": 0,
    "e": "The Backup vault supports Azure Database for PostgreSQL. Azure SQL Database and Cosmos DB rely on their own built-in backup and restore features rather than a Backup vault."
  },
  {
    "t": "backup-vault",
    "x": "An organization adopts the Backup vault for its modern workloads. Which two resource types can it protect? Choose TWO.",
    "o": [
      "Azure managed disks",
      "Azure Kubernetes Service clusters",
      "Classic cloud services",
      "Azure Traffic Manager profiles",
      "Azure Bastion hosts"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Backup vault datasources include Azure Disks and AKS, along with Blobs and PostgreSQL. Traffic Manager, Bastion, and classic cloud services are not Backup vault workloads."
  },
  {
    "t": "backup-policy",
    "x": "Which Azure VM backup policy type is required to protect a Trusted Launch VM and allows multiple backups per day?",
    "o": [
      "Enhanced policy",
      "Standard policy",
      "Basic policy",
      "Legacy policy"
    ],
    "a": 0,
    "e": "The Enhanced backup policy supports hourly backups and Trusted Launch VMs. The Standard policy allows only one scheduled backup per day and does not cover Trusted Launch machines."
  },
  {
    "t": "backup-policy",
    "x": "A virtual machine backup policy defines which two aspects of the backup lifecycle? Choose TWO.",
    "o": [
      "The backup schedule frequency",
      "The recovery point retention range",
      "The vault storage redundancy",
      "The NSG rules for the VM",
      "The VM availability zone"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A backup policy specifies when backups run and how long recovery points are retained. Storage redundancy is a vault property, while NSG rules and zones are unrelated to the policy."
  },
  {
    "t": "backup-policy",
    "x": "An administrator wants VM snapshots kept for fast local restore for five days. Which backup policy setting should they change?",
    "o": [
      "Instant restore snapshot retention",
      "Yearly retention point count",
      "Weekly backup frequency",
      "Soft delete duration"
    ],
    "a": 0,
    "e": "Instant restore keeps local snapshots for one to five days for quick restores before data transfers to the vault. Yearly retention governs long-term vault recovery points instead."
  },
  {
    "t": "azure-backup-restore",
    "x": "An administrator must recover a few individual files from an Azure VM backup without restoring the entire machine. Which restore option fits?",
    "o": [
      "File recovery",
      "Create a new VM",
      "Replace existing disks",
      "Restore the entire VM"
    ],
    "a": 0,
    "e": "File recovery mounts the recovery point as a local drive so specific files can be copied off. Creating a new VM or replacing disks restores the whole machine instead."
  },
  {
    "t": "azure-backup-restore",
    "x": "During an Azure VM restore, which option provisions a brand-new virtual machine from the recovery point?",
    "o": [
      "Create new VM",
      "Replace existing",
      "Restore disks only",
      "File-level recovery"
    ],
    "a": 0,
    "e": "The Create new VM option builds a fresh VM from the selected recovery point. Replace existing overwrites the source VM disks and file-level recovery copies individual files."
  },
  {
    "t": "azure-backup-restore",
    "x": "Which Recovery Services vault feature restores a VM into the paired secondary region during a primary outage without performing a failover?",
    "o": [
      "Cross Region Restore",
      "Zone-redundant restore",
      "Instant restore",
      "Soft delete recovery"
    ],
    "a": 0,
    "e": "Cross Region Restore uses the geo-redundant secondary copy to restore into the paired region on demand. Instant restore relies on local snapshots in the primary region only."
  },
  {
    "t": "azure-backup-restore",
    "x": "An administrator is restoring an Azure VM from a recovery point. Which two restore options does Azure Backup provide? Choose TWO.",
    "o": [
      "Replace existing VM disks",
      "Create a new VM",
      "Convert the VM to a scale set",
      "Redeploy the VM to another subscription",
      "Merge two recovery points into one"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Azure Backup can replace an existing VM's disks or create a new VM from a recovery point. It cannot convert a VM to a scale set or merge recovery points as a restore action."
  },
  {
    "t": "site-recovery-configure",
    "x": "Which Azure service orchestrates replication and failover of VMs to a secondary region for disaster recovery?",
    "o": [
      "Azure Site Recovery",
      "Azure Backup",
      "Azure Migrate",
      "Azure Traffic Manager"
    ],
    "a": 0,
    "e": "Azure Site Recovery replicates VMs and orchestrates failover to a secondary region. Azure Backup creates point-in-time recovery points but does not run a coordinated DR failover."
  },
  {
    "t": "site-recovery-configure",
    "x": "Which Azure Site Recovery construct sequences the failover order of multiple VMs and can run scripts?",
    "o": [
      "Recovery plan",
      "Replication policy",
      "Backup policy",
      "Action group"
    ],
    "a": 0,
    "e": "A recovery plan groups VMs and defines their order, scripts, and manual actions during failover. A replication policy only controls recovery point and snapshot frequency settings."
  },
  {
    "t": "site-recovery-configure",
    "x": "Which two settings are defined in an Azure Site Recovery replication policy? Choose TWO.",
    "o": [
      "Recovery point retention period",
      "App-consistent snapshot frequency",
      "Target VM size",
      "Cache storage account name",
      "Recovery plan script order"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A replication policy sets how long recovery points are retained and how often app-consistent snapshots are taken. VM size, cache account, and plan ordering are configured elsewhere."
  },
  {
    "t": "site-recovery-failover",
    "x": "Which Azure Site Recovery failover type validates DR readiness without disrupting ongoing production replication?",
    "o": [
      "Test failover",
      "Planned failover",
      "Unplanned failover",
      "Failback"
    ],
    "a": 0,
    "e": "Test failover spins up VMs in an isolated network without affecting ongoing replication or production. Planned and unplanned failovers actually move the workload to the target region."
  },
  {
    "t": "site-recovery-failover",
    "x": "After failing VMs over to the secondary region, which action must an administrator perform before failing back to the primary?",
    "o": [
      "Reprotect the VMs",
      "Delete the recovery plan",
      "Disable soft delete",
      "Recreate the Recovery Services vault"
    ],
    "a": 0,
    "e": "Reprotect reverses the replication direction so changes flow from the secondary back to the primary, which is required before failback. Deleting the plan or vault would remove the DR configuration."
  },
  {
    "t": "site-recovery-failover",
    "x": "During failover, which recovery point option minimizes data loss but may only be crash-consistent?",
    "o": [
      "Latest",
      "Latest app-consistent",
      "Latest processed",
      "Custom"
    ],
    "a": 0,
    "e": "The Latest recovery point processes all data in the log for the lowest RPO but may be crash-consistent rather than application-consistent. Latest app-consistent trades some data loss for guaranteed app consistency."
  },
  {
    "t": "backup-reports-alerts",
    "x": "To build Azure Backup reports spanning multiple vaults, backup data must first flow to which destination?",
    "o": [
      "A Log Analytics workspace",
      "A storage account",
      "An Event Hubs namespace",
      "A second backup vault"
    ],
    "a": 0,
    "e": "Backup reports are powered by data routed to a Log Analytics workspace through the vault's diagnostic settings. A workbook then aggregates jobs and storage across vaults."
  },
  {
    "t": "backup-reports-alerts",
    "x": "Which centralized Azure interface lets an administrator manage and monitor backups across all vaults and subscriptions?",
    "o": [
      "Backup center",
      "Recovery Services vault overview",
      "Azure Monitor metrics",
      "Network Watcher"
    ],
    "a": 0,
    "e": "Backup center provides a single pane to manage jobs, policies, and alerts across vaults and subscriptions. A single vault overview blade shows only that one vault."
  }
],
}
