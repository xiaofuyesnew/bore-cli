# bore-cli

A cli tool for bore tech frontend team.

![version](https://img.shields.io/npm/v/bore-cli) ![download](https://img.shields.io/npm/dw/bore-cli) ![license](https://img.shields.io/npm/l/bore-cli) ![node version](https://img.shields.io/node/v/bore-cli) ![build status](https://img.shields.io/github/workflow/status/xiaofuyesnew/bore-cli/publish)

## Install

```bash
npm install bore-cli -g
```

## Usage

## create specified type of project template

```bash
bore create [project_name] -t [h5|mini]
```

Command `create` has an alias name `c`. So you can easily use command `bore c`.

If you want to use interactive settings, use the command `bore c` directly.

Bore-cli will prompt you to input or select relevant information.

## create project template from custom git registry

```bash
bore create [project_name] -g <url>
```

`<url>` can be a repository ssh address or an url to download the repository from.

## Notice

Bore-cli is an internal company version for internal company use only. Therefore, some of its functions will be authorized used with company assets. A public version that does not contain sensitive company information will be released later.

## JiShu lowcode platform

[watch](https://github.com/jishu-lowcode)