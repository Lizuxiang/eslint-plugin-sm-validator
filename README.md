# eslint-plugin-sm-validator

Sequelize migration validator

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sm-validator`:

```
$ npm install eslint-plugin-sm-validator --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-sm-validator` globally.

## Usage

Add `sm-validator` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "sm-validator"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "sm-validator/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





