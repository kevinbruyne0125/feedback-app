module.exports = {
  extends: ['@marsbased/marstyle-typescript'],
  rulesDirectory: ['codelyzer'],
  rules: {
    // Codelyzer
    'no-output-on-prefix': true,
    'use-input-property-decorator': true,
    'use-output-property-decorator': true,
    'use-host-property-decorator': true,
    'no-input-rename': true,
    'no-output-rename': true,
    'use-life-cycle-interface': true,
    'use-pipe-transform-interface': true,
    'component-class-suffix': true,
    'directive-class-suffix': true
  }
};
