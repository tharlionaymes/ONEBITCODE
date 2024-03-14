const Comment = require("./comment")

class Post{
    constructor(title, body,author){
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdate = new Date() // são globais, nativos no js
    }
    addComment(username, content){
        this.comments.push(new Comment(username,content))
    }
}

module.exports = Post