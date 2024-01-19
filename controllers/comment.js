import { db } from "../db.js";

export const getComments = (req, res) => {
    const postId = req.params.id;
    const q = "SELECT * FROM comments WHERE post_id = ?";

    db.query(q, [postId], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

export const addComment = (req, res) => {
    const { content } = req.body;
    const postId = req.params.id;

    if (!content) {
        return res.status(400).json("Content is required for a comment");
    }

    const q = "INSERT INTO comments(`content`, `post_id`, `user_id`) VALUES (?)";
    const values = [content, postId, userInfo.id];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.json("Comment has been added.");
    });
};

export const updateComment = (req, res) => {
    const commentId = req.params.commentId;
    const { content } = req.body;

    if (!content) {
        return res.status(400).json("Content is required for updating a comment");
    }

    const q = "UPDATE comments SET `content`=? WHERE `id` = ? AND `user_id` = ?";
    const values = [content, commentId, userInfo.id];

    db.query(q, [...values], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.json("Comment has been updated.");
    });
};

export const deleteComment = (req, res) => {
    const commentId = req.params.commentId;
    const q = "DELETE FROM comments WHERE `id` = ? AND `user_id` = ?";

    db.query(q, [commentId, userInfo.id], (err, data) => {
        if (err) return res.status(403).json("You can delete only your comment!");

        return res.json("Comment has been deleted!");
    });
};
