import nextConfig from "eslint-config-next";

export default [
  ...nextConfig,
  {
    rules: {
      // Pre-existing findings in code that was never linted before (this
      // repo has never had a working ESLint config file, and `next lint`
      // was broken at baseline). Downgraded to warn rather than fixed here
      // to avoid unrelated app-code rewrites; still fully visible in `lint`
      // output for follow-up.
      "react/no-unescaped-entities": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];
