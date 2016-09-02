# github-issue-filer
Files github issues for you

# Usage
Deploy `github-issue-filer` to heroku or wherever you'd prefer. For `github-issue-filer` to work, the following env variables must be set:
* `ACCESS_TOKEN`: This is the GitHub access_token of a GitHub user that has permission to file issues to the repo `GITHUB_OWNER/GITHUB_REPO`.
* `GITHUB_OWNER`: This is the owner of the GitHub Repo, for this repo it is `dtschust`.
* `GITHUB_REPO`: This is the GitHub Repo where you would like issues to be filed. For this repo it is `github-issue-filer`.
* `DEFAULT_ASSIGNEE`: This is an optional environment variable. If set, the created issue will automatically be assigned to this user.
