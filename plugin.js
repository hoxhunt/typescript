Plugin.registerCompiler({
  extensions: ['js', 'jsx', 'ts', 'tsx'],
  filenames: ['tsconfig.json']
}, function () {
  return new TypeScriptCompiler({
    jsx: 'react'
  });
});
