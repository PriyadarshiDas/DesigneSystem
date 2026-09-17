export default {
  rules: {
    'no-restricted-imports': ['error', {
      patterns: ['@radix-ui/*', 'lucide-react'].map((group) => ({
        group: [group],
        message: 'Import the owned abstraction from @agentverse/design-system.'
      }))
    }],
    'no-restricted-syntax': ['warn',
      { selector: "Literal[value=/^(#[0-9a-fA-F]{3,8})$/]", message: 'Use a semantic design token instead of an inline hex color.' },
      { selector: "Literal[value=/\\b(?:text|bg|border|rounded|p|m|gap)-\\[[^\\]]+\\]/]", message: 'Avoid arbitrary utility values; use a design-system token or document the exception.' }
    ]
  }
};
