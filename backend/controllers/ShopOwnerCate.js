import ShopOwner from '../modoles/ShopOwnerCate';
import _ from 'lodash';
export const create = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            error: "Bạn cần nhập đầy đủ thông tin"
        })
    }

    let shopowner = new ShopOwner(req.body);


    shopowner.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: "Không thêm duoc danh muc"
            })
        }
        res.json(data)
    })

}

export const Id = (req, res, next, id) => {
    ShopOwner.findById(id).exec((err, shopowner) => {
        if (err || !shopowner) {
            res.status(400).json({
                error: "Không tìm thấy Danh muc"
            })
        }
        req.shopowner = shopowner;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.shopowner);
}

export const remove = (req, res) => {
    let shopowner = req.shopowner;
    shopowner.remove((err, shopowner) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được Danh muc"
            })
        }
        res.json({
            shopowner,
            message: "Danh muc đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {
    ShopOwner.find((error, data) => {
        if (error) {
            error: "Không tìm thấy Danh muc"
        }
        res.json(data)
    })
}

export const update = (req, res) => {


    let shopowner = req.shopowner;
    const { name, photo, id_cateShope } = req.body
    shopowner = _.assignIn(shopowner, req.body);

    shopowner.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Không sửa được danh mục"
            })
        }
        res.json(data)
    })

}