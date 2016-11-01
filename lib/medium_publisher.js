var medium = require('medium-sdk')

module.exports = {
  publish: function(payload) {
    var client = new medium.MediumClient({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })
    client.setAccessToken(process.env.ACCESS_TOKEN)
    client.getUser(function (err, user) {
      client.createPost({
        userId: user.id,
        title: payload.title,
        contentFormat: medium.PostContentFormat.MARKDOWN,
        content: payload.body,
        publishStatus: medium.PostPublishStatus.DRAFT
      }, function (err, post) {
        return !err
      })
    })
  }
}
