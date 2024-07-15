import inquirer from 'inquirer';
import qr from 'qr-image';
import * as fs from 'node:fs'

inquirer
  .prompt([
    {
        name: 'url',
        message: "Enter your URL Here > "
    }
  ])
  .then((answers) => {
    //สร้าง QR Code
    var qr_svg = qr.image(answers.url, { size: 64,type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qrcode.png'));

    //เก็บ User Input
    fs.appendFile("user_input.txt",answers.url + "\n",err => {
        if(err) {
            console.error(err);
        }
    })
  })
  .catch((error) => {
    console.log(error);
});
