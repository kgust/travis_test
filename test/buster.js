var config = module.exports;

config.Tests = {
    rootPath: "../",
    tests: ["test/*-test.js"]
};

config["Browser Tests"] = {
    extends: "Tests",

    environment: "node"
    //sources: ["lib/**/*.js"],   // Glob patterns supported
};

config["Node Tests"] = {
    extends: "Tests",
    env: "browser"
};

