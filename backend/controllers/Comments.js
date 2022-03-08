import Comments from '../modoles/Comments';
import formidable from 'formidable';
import _ from 'lodash';

export const create = (req, res) => {
    let comment = new Comments(req.body);
    comment.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: "Không bình luận được"
            })
        }
        res.json(data)
    })
}

export const Id = (req, res, next, id) => {
    Comments.findById(id).exec((err, comment) => {
        if (err || !comment) {
            res.status(400).json({
                error: "Không tìm thấy comments"
            })
        }
        req.comment = comment;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.comment);
}

export const remove = (req, res) => {
    let comment = req.comment;
    comment.remove((err, comment) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được comment"
            })
        }
        res.json({
            comment,
            message: "comment đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {
    Comments.find((err, data) => {
        if (err) {
            error: "Không tìm thấy comment"
        }
        res.json(data)
    })

}

export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        let comment = req.comment;

        comment = _.assignIn(comment, fields);

        comment.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không sửa được comments"
                })
            }
            res.json(data)
        })
    });
}