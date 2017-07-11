// 1 to 0 Transpiler
//
// Transforms a 1.0 compatible theme to work with 0.x installations.

const replace = require("replace");

const rules = {
    "profile_image": "image",
    "cover_image": "cover",
    "feature_image": "image",
    "(filter=\".+?)\\+.+?\"": "$1\""
};

for (const rule in rules) {
    const replacement = rules[rule];

    console.log(`[OTZ] ${rule} to ${replacement}`);

    replace({
        regex: rule,
        replacement,
        paths: ["out/"],
        include: "*.hbs",
        recursive: true,
        silent: true
    });
}
