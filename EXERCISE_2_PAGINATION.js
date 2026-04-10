// Exercise 2: Add Pagination
// Implement pagination on:
// - Get all posts
// - Get all comments
// - With limit and page parameters

// Note: This assumes a Mongoose/MongoDB model setup as per the chapter examples.

exports.getPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Fetch paginated posts
        const posts = await Post.find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        // Get total count for metadata
        const total = await Post.countDocuments();

        res.json({
            success: true,
            data: posts,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit),
                hasNext: page < Math.ceil(total / limit),
                hasPrev: page > 1
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error fetching posts' });
    }
};

exports.getComments = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const postId = req.params.postId;

        // Fetch paginated comments for a specific post
        const comments = await Comment.find({ post: postId })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        // Get total count for metadata
        const total = await Comment.countDocuments({ post: postId });

        res.json({
            success: true,
            data: comments,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit),
                hasNext: page < Math.ceil(total / limit),
                hasPrev: page > 1
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error fetching comments' });
    }
};
