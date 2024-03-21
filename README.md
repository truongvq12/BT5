# CloudFlare Worker with Lerna

## Setup

[Reference](https://developers.cloudflare.com/workers/tutorials/manage-projects-with-lerna/)

[install git ignore script](https://docs.gitignore.io/install/command-line)

```shell
mkdir cfw && \
cd cfw && \
npx lerna@latest init && \
gi macos,node,osx,visualstudiocode > .gitignore && \
mkdir packages && \
cd packages && \
npx create-cloudflare@latest main --accept-defaults --deploy=false --ts && \
npx lerna@latest create worker --yes
```

add a publish script to each `package.json` in the packages folder and a publish script to the main `package.json` to run in a coordinated manner.
