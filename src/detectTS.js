import fs from 'node:fs';
import path from 'node:path';
const detectTypeScript = () => {
    const foundPackageJSON = false
    const foundTSConfig = false
    let currentDir = process.cwd()
    while (!foundPackageJSON && !foundTSConfig) {
        const tsconfigRoute = path.join(currentDir, "tsconfig.json")
        if (fs.existsSync(tsconfigRoute)) {
            return true
        }
        const packageRoute = path.join(currentDir, "package.json")
        if (fs.existsSync(packageRoute)) {
            return false
        }
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) {
            return false
        }

        currentDir = parentDir
    }
}
export default detectTypeScript