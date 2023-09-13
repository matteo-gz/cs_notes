const fs = require('fs');
let markdown = ''; //
const prefixPattern = /^(\.|_)(\w+)/;
function generateReadme(dir = '.', lv = 2) {
    const files = fs.readdirSync(dir);
    // 递归遍历目录
    files.forEach(file => {
        const filePath = `${dir}/${file}`;
        const stat = fs.statSync(filePath);
        const isDir = stat && stat.isDirectory()
        if (isDir) {
            if ( prefixPattern.test(filePath.slice(2))) { // 忽略.git .github文件夹
                return;
            }
            markdown += `${'#'.repeat(lv)} ${filePath.slice(2)}\n`;
            generateReadme(`${filePath}`, lv + 1);
        } else {
            if (dir === '.') { // 忽略根目录下文件
                return;
            }
            markdown += `- [${file.replace(/_/g, ' ').split(".").shift()}](${filePath})\n`;
        }
    });
}

generateReadme();
fs.writeFileSync('README.md', markdown);

console.log('README generated');
