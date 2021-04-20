import express from 'express';
import multer from 'multer';
import serveStatic  from 'serve-static';
import cors from 'cors';
import path from 'path';
import '../db/conn.js';
import Teacher from '../models/teacherSchema.js';
import Service from '../models/serviceSchema.js';
import Language from '../models/languageSchema.js';
import Experience from '../models/experienceSchema.js';


const __dirname = path.resolve();
const router = express.Router();
router.use(cors());
router.use(serveStatic('../public'));

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/uploads')
   },

    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){
        cb(null,true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage:Storage,
    limits:{
        fileSize: 1024 * 1024 * 8
    },
    fileFilter:fileFilter
})

router.get('/', (req,res)=>{
    res.send('hello world')
});

router.get('/serviceoptions',(req,res)=>{
    Service.find().exec().then(data=>{
        res.send(data);
    })
})

router.get('/languageoptions',(req,res)=>{
    Language.find().exec().then(data=>{
        res.send(data);
    })
})

router.get('/experienceoptions',(req,res)=>{
    Experience.find().exec().then(data=>{
        res.send(data);
    })
})

router.get('/teacherdata',(req,res)=>{
    Teacher.find().exec().then(data=>{
        res.send(data);
    })
})



router.post('/submit', upload.single("pic"), (req,res)=>{
    const pic = req.file.path;
    const { name, services, languages, experience, } = req.body;

    if(!name || !services || !languages || !experience || !pic )
    {
        return res.status(422).json({error: "fill all fields"});
    }

    const teacher =  new Teacher({name, services, languages, experience, pic});

    teacher.save().then(()=>{
        res.status(201).json({message: "successfully saved"})
    }).catch((err)=> res.status(500).send("woow"))
});

export default router;