# ghurl 

A CLI for fetching data straight from the GitHub API

## Installation

```sh
npm install ghurl --global
```

## Usage

The first time you run the CLI, it will use [ghauth](http://ghub.io/ghauth) to 
create a GitHub API token for you. The token is then stored in a file on your 
machine and used on subsequent requests.

Pagination is handled automatically using [ghutils lister](https://github.com/rvagg/ghutils#listerauth-urlbase-options-callback), so
you'll get all the results for your query:

```sh
# everything a user is watching
ghurl users/zeke/subscriptions

# a repo's open issues
ghurl repos/electron/electron.atom.io/issues

# all of a repo's issues (notice the quotes)
ghurl "repos/electron/electron.atom.io/issues?state=all"
```

See all the endpoints at 
[developer.github.com/v3/](https://developer.github.com/v3/)

The result is JSON to stdout.

You can direct the output to a file for inspection,
or use [tee](https://en.wikipedia.org/wiki/Tee_(command)) to pipe it to a file 
_and_ stdout simultaneously! You can also use [`json`](http://ghub.io/json) to 
perform operations on the file right in your shell:

```
ghurl repos/electron/electron.atom.io/issues | tee issues.json | json -a title
```

## Dependencies

- [ghauth](https://github.com/rvagg/ghauth): Create and load persistent GitHub authentication tokens for command-line apps
- [ghutils](https://github.com/rvagg/ghutils): A collection of utility functions for dealing with the GitHub API
- [minimist](https://github.com/substack/minimist): parse argument options

## Dev Dependencies

None

## License

MIT
