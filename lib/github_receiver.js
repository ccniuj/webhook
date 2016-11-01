module.exports = {
  inspect: function(payload) {
    var labeled = (payload.action == 'labeled')
    var published = (payload.issue.labels.findIndex(function(label) {
                      return label.name == 'Published'
                    }) != -1)

    return (labeled && published) ? 
            {
              shouldPublish: true,
              payload: {
                title: payload.issue.title,
                body: payload.issue.body
              }
            } : { shouldPublish: false }
  }
}
