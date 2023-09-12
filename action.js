const fs = require('fs');
const path = require('path');

//过滤不需要的文件和目录
function filterFiles(files) {
  return files.filter(file => {
    return file !== '.git' && file !== '.github'; 
  });
}

//递归扫描目录
function scanDirectory(dir, level = 1) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filepath = path.join(dir, file);

    if(fs.statSync(filepath).isDirectory()) {
      scanDirectory(filepath, level+1);
    } else {
      generateMarkdown(dir, file, level);
    }
  });
}

//生成Markdown
function generateMarkdown(dir, file, level) {

  //添加headers
  markdown += `${'#'.repeat(level)} ${path.basename(dir)}\n`;

  //生成链接
  let link = `- [${file}](${path.join(dir, file)})`;  
  if(level > 1) {
    link = `${link} - ${new Date(fs.statSync(path.join(dir, file)).mtime).toLocaleString()}`;
  }

  markdown += `${link}\n`;
}

let markdown = '';

function generateReadme() {

  //过滤文件
  const files = filterFiles(fs.readdirSync('.'));

  //递归扫描
  scanDirectory('.');

  //写入README
  fs.writeFileSync('README.md', markdown);

  console.log('README generated');
}

generateReadme();
