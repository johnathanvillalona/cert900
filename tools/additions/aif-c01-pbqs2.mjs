// add-content.mjs merges one exam per run and reads only the default export,
// so the two-exam authoring module is split into a per-exam entry point here.
export { aif as default } from "./aws-azure-pbqs2.mjs"
