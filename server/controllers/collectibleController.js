const Collectible = require("../model/Collectible");
const jimp = require('jimp');
const mongoose = require('mongoose');
const multer = require('multer');

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
    //multer automatski stavlje req.file
    if (!req.file) {
        return next();
    }
    postDate = Date.now();
    //posto ide image/extension slike naprimer: jpg, png...;
    const extension = req.file.mimetype.split('/')[1];
    postExtension = extension;
    req.body.image = `/static/${postDate}.${extension}`;
    const image = await jimp.read(req.file.buffer);
    //menjam rezoluciju slike na 500x500px
    await image.resize(500, 500);
    await image.write(`./${req.body.image}`);
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