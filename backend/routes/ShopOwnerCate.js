import express from 'express';
import { create, list, update, Id, read, remove } from '../controllers/ShopOwnerCate';
const router = express.Router();

router.post('/shopowner-cate', create);
router.get('/shopowner-cate', list);
router.get('/shopowner-cate/:Id', read);

router.put('/shopowner-cate/:Id', update);

router.delete('/shopowner-cate/:Id', remove);

router.param('Id', Id);

module.exports = router;