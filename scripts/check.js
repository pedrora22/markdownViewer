'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const association = manifest.contributes.configurationDefaults['workbench.editorAssociations'];
assert.equal(association['*.md'], 'vscode.markdown.preview.editor');

for (const style of manifest.contributes['markdown.previewStyles']) {
  assert.ok(fs.statSync(path.join(root, style)).isFile(), `Missing CSS file: ${style}`);
}

assert.equal(manifest.main, undefined, 'The extension must not open a separate preview.');
console.log('Manifest and stylesheet verified.');
