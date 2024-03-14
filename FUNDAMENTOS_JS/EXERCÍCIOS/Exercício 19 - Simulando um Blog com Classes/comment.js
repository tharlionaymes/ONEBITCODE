class Comment{
    constructor(username, content){
        this.username = username
        this.content = content
        this.createdate = new Date()
    }
}

module.exports = Comment