const Author = require ("./author")

const john = new Author("João M.")

const post = john.writePost("adskasjkdhajskhdajkshdjkahsd")

post.addComment("Carlos", "eaeaeaeaee")
post.addComment("Maria", "nada a ver isso ae")

console.log(john)
console.log(post)