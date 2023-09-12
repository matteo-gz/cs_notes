const fs = require('fs');

async function generateReadme() {

  // 读取文件目录
  const files = fs.readdirSync('.');

  let markdown = '';

  // 生成每个文件/文件夹的Markdown链接
  for(let file of files) {
    let link = `- [${file}](./${file})`;
    markdown += `\n${link}`; 
  }

  // 写入README
  fs.writeFileSync('README.md', markdown);

  console.log('README generated');

}

generateReadme();
