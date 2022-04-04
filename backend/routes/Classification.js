import express from 'express';
import { create, list, update, Id, readPhoto, read, remove } from '../controllers/classification';
const router = express.Router();

router.post('/classify', create);

router.get('/classify', list);
router.get('/classify/:Id', read);
// router.get('/product/photo/:productId', readPhoto);

router.put('/classify/:Id', update);

router.delete('/classify/:Id', remove);

router.param('Id', Id);


module.exports = router;