module.exports = robot => {
  robot.on('issues.opened', async context => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    const params = context.issue({body: 'Thank you for creating this issue!'})

    // Post a comment on the issue
    return context.github.issues.createComment(params)
  })

  robot.on('pull_request.opened', async context => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    // const params = context.issue({body: 'Thankyou for making a pull req', commit_id:context.payload.pull_request.head.sha, path: "/", position: 1})
     const params = context.issue({body: 'Thankyou for making a pull req'})

    // Post a comment on the issue
    // robot.log(context.payload);
    // robot.log(context.github.pullRequests)
    return context.github.issues.createComment(params)
  })

}
