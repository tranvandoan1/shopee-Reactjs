import express from 'express';
import { create, list, update, Id, readPhoto, read, remove } from '../controllers/Classification';
const router = express.Router();

router.post('/classification', create);

router.get('/classification', list);
router.get('/classification/:Id', read);
// router.get('/product/photo/:productId', readPhoto);

router.put('/classification/:Id', update);

router.delete('/classification/:Id', remove);

router.param('Id', Id);


module.exports = router;