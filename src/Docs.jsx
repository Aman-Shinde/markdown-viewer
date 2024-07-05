import React from 'react';

const markdownExamples = [
  {
    title: "Headers",
    markdown: `
# This is an H1
## This is an H2
### This is an H3
    `,
  },
  {
    title: "Emphasis",
    markdown: `
*This text will be italic*
**This text will be bold**
    `,
  },
  {
    title: "Lists",
    markdown: `
* Item 1
* Item 2
  * Subitem 1
  * Subitem 2

1. First item
2. Second item
  `,
  },
  {
    title: "Links",
    markdown: `
[This is a link](https://www.example.com)
  `,
  },
  {
    title: "Images",
    markdown: `
![Alt text](https://via.placeholder.com/150)
  `,
  },
  {
    title: "Code",
    markdown: `
\`inline code\`

\`\`\`
block of code
\`\`\`
  `,
  },
];

const Docs = () => {
  const styles = {
    container: {
      padding: '16px',
      fontFamily: 'Arial, sans-serif',
    },
    exampleContainer: {
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      overflowX: 'auto',
      whiteSpace: 'pre-wrap',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '8px',
    },
    exampleText: {
      fontFamily: 'monospace',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Markdown Examples</h2>
      {markdownExamples.map((example, index) => (
        <div key={index} style={styles.exampleContainer}>
          <h3 style={styles.title}>{example.title}</h3>
          <pre style={styles.exampleText}>{example.markdown.trim()}</pre>
        </div>
      ))}
    </div>
  );
};

export default Docs;
