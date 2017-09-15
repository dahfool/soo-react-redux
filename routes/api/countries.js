import express from 'express';
import Countries from '../../db/models/countries'

let router = express.Router();

router.get('/:country', (req, res, next)=> {
    Countries.find({ name: {$regex : req.params.country,$options:'i' }}).distinct('name').then((doc) => {
        res.json(doc);
    },(e)=>{
        res.send(e)
    });
});


export default router;