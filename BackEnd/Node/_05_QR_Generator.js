//Project: QR code generator form any URL.
//Required npm package:
    /*
        Inquirer.js --> for get user input
        qr-image.js --> turn user entered url into QR code
    */
// Create txt file to save the user input using the native fs node module

//Inquirer to get user input
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs"; //for interacting with file system, i.e. to save user input in text file

inquirer
    .prompt([
        {
            message: "Type in your URL",
            name: "URL" //user input is stored under name property i.e. URL
        } 
    ])
    .then((answers) => {
        const url = answers.URL;
        
        //generate qr
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('_05_qr_img.png'));

        //save input as txt file
        fs.writeFile("_05_URL.txt", url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
    })
    .catch((error) =>{
        if (error.isTtyError){
            console.log("Typo error, try again!");
        }else{
            console.log("something went wrong!");
        }
    });


