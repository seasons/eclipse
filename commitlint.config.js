const RuleSeverity = {
  Disabled: 0,
  Warning: 1,
  Error: 2,
}

const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-case": [RuleSeverity.Disabled, "never", "upper-case"],
    "subject-case": [RuleSeverity.Disabled, "never", "sentence-case"],
  },
}

module.exports = Configuration
