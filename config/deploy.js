/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    git: {
      repo: 'git@github.com:lepolt/radio-button-test.git',
      branch: 'gh-pages',
      worktreePath: '/tmp/lepolt-radio-test-deploy',
      commitMessage: 'Deployed %@'
    }
  };
  return ENV;
};
