import * as core from '@actions/core';

async function run() {
  try {
    core.info('PRPilot is starting...');

    const githubToken = core.getInput('github-token', { required: true });
    const apiKey = core.getInput('api-key', { required: true });

    core.info('Inputs loaded successfully. PRPilot is ready to review!');

  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('An unexpected error occurred');
    }
  }
}

run();
