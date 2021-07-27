require("dotenv").config();
const Collectible = require("../model/Collectible");
const S3 = require("aws-sdk/clients/s3");
const jimp = require('jimp');
const mongoose = require('mongoose');
const multer = require('multer');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

const imageUploadOptions = {
    storage: multer.memoryStorage(),
    limits: {
        //do 3 megabajta
        filesize: 1024 * 1024 * 3
    },
    fileFilter: (req, file, next) => {
        if (file.mimetype.startsWith('image/')) {
            next(null, true);
        } else {
            next(null, false);
        }
    }
}
exports.uploadImage = multer(imageUploadOptions).single('image');
exports.resizeImage = async (req, res, next) => {
    //multer automatski stavlja req.file
    if (!req.file) {
        return next();
    }
    let postDate = Date.now();
    //trazim extension od slike
    //image/extension slike naprimer: jpg, png...;
    const extension = req.file.mimetype.split('/')[1];
    postExtension = extension;
    req.body.image = `/static/uploads/${postDate}.${extension}`;
    const image = await jimp.read(req.file.buffer);
    //menjam rezoluciju slike na 500x500px
    await image.resize(500, 500);
    await image.write(`./${req.body.image}`);

    //new part

/*     const uploadParams = {
        Bucket: bucketName,
        Body: image,
        Key = postDate
    } */

    next();
}; 

exports.addCollectible = async(req, res) => {
	const {id, image} = req.body;
    const collectibleWithId = await Collectible.find().where({
        id
    });
    console.log(collectibleWithId);
    if(collectibleWithId[0]) {
        return res.status(400).json({"message": "postoji collectible koji ima isti id!"});
    }
	const newCollectible = new Collectible({
		_id: mongoose.Types.ObjectId(),
		id,
		image
	});
	await newCollectible.save();
	res.json(`http://${req.get('host')}/api/nft?id=${id}`);
}