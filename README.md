## i18n Eslint plugin
Use in conjunction with [Babel i18n plugin](https://github.com/Yesplan/babel-plugin-i18n).

This plugin warns about wrong usages of the `i18n` function or tagged template.
For example, the expression ``i18n(`A template literal to be translated`)`` will receive a warning that it is better
to use the tagged template version of `i18n` when using a template literal as an argument.

Moreover, when the `i18n` function is called with anything else than a String Literal, the tool will give a warning as well.
This to avoid that some strings are lost in translation, e.g. code using `i18n(aVariable)` should explicitly define translations for all possible value of `aVariable`.
