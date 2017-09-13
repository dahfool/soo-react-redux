import express from 'express';
import Countries from '../../db/models/countries'

let router = express.Router();

router.get('/', (req, res, next)=> {
    Countries.distinct('name').then((doc) => {
        res.json(doc);
    },(e)=>{
        res.send(e)
    });
});


export default router;