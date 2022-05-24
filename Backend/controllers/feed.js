exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        imageUrl: "images/abstract.jpg",
        creator: {
          name: "Maximillian",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.postAPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
  // create post in db
  res.status(201).json({
    message: "Post created succesfully",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Josh" },
      createdAt: new Date(),
    },
  });
};
