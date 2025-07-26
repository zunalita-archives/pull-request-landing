const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  try {
    const comment = core.getInput('comment');
    const token = process.env.GITHUB_TOKEN;
    const octokit = github.getOctokit(token);
    const context = github.context;

    await octokit.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body: comment,
    });

    core.info('Comment posted successfully!');
  } catch (error) {
    core.setFailed(`Failed to post comment: ${error.message}`);
  }
})();
