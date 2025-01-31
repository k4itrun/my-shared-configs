import { readFileSync, writeFileSync } from "fs";
import { markdownTable } from "markdown-table";
import { Options } from "prettier";
import PrettierConfig from "../packages/prettier-config/src/index";

function generateConfigTable(config: Options): string {
    const rows = Object.entries(config).map(([key, value]) => {
        const docLink = key.includes("/")
            ? "-"
            : `[Docs](https://prettier.io/docs/en/options.html#${key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()})`;

        return [`\`${key}\``, `\`${value}\``, docLink];
    });

    return markdownTable([
        ["Rule", "Value", "Reference"],
        ...rows,
    ]);
}

function updateReadmeContent(content: string, markerStart: string, markerEnd: string, table: string): string {
    const beforeSection = content.slice(0, content.indexOf(markerStart) + markerStart.length);
    const afterSection = content.slice(content.indexOf(markerEnd));

    return `${beforeSection}\n${table}\n${afterSection}`;
}

console.log("Updating documentation...");
const startTime = Date.now();

const rootDir = process.cwd();
const mainReadmePath = `${rootDir}/README.md`;
const configReadmePath = `${rootDir}/packages/prettier-config/README.md`;

const prettierSectionStart = "<!--START_SECTION:prettier-->";
const prettierSectionEnd = "<!--END_SECTION:prettier-->";

const mainReadmeContent = readFileSync(mainReadmePath, "utf8");
const configReadmeContent = readFileSync(configReadmePath, "utf8");

const prettierConfigTable = generateConfigTable(PrettierConfig);

const updatedMainReadme = updateReadmeContent(mainReadmeContent, prettierSectionStart, prettierSectionEnd, prettierConfigTable);
const updatedConfigReadme = updateReadmeContent(configReadmeContent, prettierSectionStart, prettierSectionEnd, prettierConfigTable);

writeFileSync(mainReadmePath, updatedMainReadme);
writeFileSync(configReadmePath, updatedConfigReadme);

console.log(`Documentation updated in ${Date.now() - startTime}ms.`);