import express from 'express';
import Categories from '../../db/models/categories'

let router = express.Router();

router.get('/:category', (req, res, next)=> {
    Categories.find({ name: {$regex : req.params.category, $options:'i' }}).distinct('name').then((doc) =>{
        res.json(doc);
    },(e)=>{
        res.send(e)
    });
});


export default router;