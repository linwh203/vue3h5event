### font change in vscode

1. install Victor Mono font [https://rubjo.github.io/victor-mono/]

2. switch font in vscode

3. add these in settings.json

   config guide : [https://macromates.com/manual/en/language_grammars]

```javascript
    "editor.fontFamily": "Victor Mono, Fira Code, Consolas, 'Courier New', monospace",
    "terminal.integrated.fontFamily": "monospace",
    "editor.fontLigatures": true,
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": [
                    //following will be in italic (=FlottFlott)
                    "comment",
                    "entity.name.type.class", //class names
                    "entity.other.attribute-name", //class names
                    "keyword", //import, export, return…
                    "constant", //String, Number, Boolean…, this, super
                    "storage.modifier", //static keyword
                    "storage.type.class.js", //class keyword
                    "variable.parameter"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    //following will be excluded from italics (VSCode has some defaults for italics)
                    "invalid",
                    "keyword.operator",
                    "constant.numeric.css",
                    "keyword.other.unit.px.css",
                    "constant.numeric.decimal.js",
                    "constant.numeric.json"
                ],
                "settings": {
                    "fontStyle": "bold"
                }
            }
        ]
    },
    "editor.fontSize": 15
```

4.  btw, md guide [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet]

### deploy site: netlify

[https://app.netlify.com/teams/linwh203/builds/60864789cd53b3248fa40d6b]
