
//because separate folder due to not fix the choose of cloud storage provider

const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    publicKey: "public_iU/jRAJMgu9S8MuX4MK2YdVTc5I=",
    privateKey: process.env.IMAGEKIT_PRIVATEKEY, // stores in .env
    urlEndpoint: "https://ik.imagekit.io/aniket9608" 
});

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });
    return result;
}

module.exports = uploadFile;
