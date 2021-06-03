module.exports.rules = {
  'i18n-arguments': (context) => ({
    CallExpression: (node) => {
      if (node.callee.name === 'i18n') {
        const args = node.arguments;
        if (args.length >= 1) {
          const firstArg = args[0];
          if (firstArg.type === 'TemplateLiteral')
            context.report({
              node,
              message:
                'i18n called with a template literal as argument, use the i18n tagged template instead'
            });
          else if (firstArg.type !== 'Literal') {
            context.report(
              node,
              'i18n called with non-string literal, use defineMessages from react-intl to ensure these translations are picked up'
            );
          }
        }
      }
    }
  })
};
