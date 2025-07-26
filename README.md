# pull-request-landing
Land your pull requests with a customized message!

---
Usage:

```yaml

name: Welcome PR

on:
  pull_request_target:
    types: [opened]

jobs:
  welcome:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Welcome Comment
        uses: ./  # or use a repo like username/repo@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          comment: |
            👋 Hello, thank you for your contribution!  
            We’ll review your pull request shortly.


```