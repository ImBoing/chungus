#!/usr/bin/env node

/* functions */
const { questions } = require('./questions');
const prompts = require('prompts');

(async() => {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        await prompts(questions);
    }
})();

