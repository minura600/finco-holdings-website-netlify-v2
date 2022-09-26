import {generate} from 'critical';

generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: true,
  
    // Your base directory
    base: '_site/',
  
    // HTML source file
    src: 'index.html',
  
    // Viewport width
    width: 1300,
  
    // Viewport height
    height: 900,
  
    // Output results to file
    target: {
      css: 'critical.css',
      html: 'index-critical.html',
      uncritical: 'uncritical.css',
    },
  
    // Extract inlined styles from referenced stylesheets
    extract: true,
  
    // ignore CSS rules
    ignore: {
      atrule: ['@font-face'],
      rule: [/some-regexp/],
      decl: (node, value) => /big-image\.png/.test(value),
    },
  });