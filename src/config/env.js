const env = {
    USE_OFFLINE: process.env.REACT_APP_USE_OFFLINE?.toLowerCase()==="true" ?? false,
    REACT_APP_VERSION: process.env.REACT_APP_VERSION ?? "0.0.0",
    DEPLOY_ENV: process.env.REACT_APP_VERCEL_ENV ?? "local",
    BRANCH: process.env.REACT_APP_VERCEL_GIT_COMMIT_REF ?? "branch",
    COMMIT: process.env.REACT_APP_VERCEL_GIT_COMMIT_SHA?.slice(0,6) ?? "commitsha"
};

export default env;