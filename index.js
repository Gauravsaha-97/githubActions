const core = require('@actions/core');
const github = require('@actions/github');

try {
  const radius = core.getInput('Enter the radius');
  let area=2*3.14*radius;
  console.log(`Hello,The Area of Circle is ${area}`);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  
} catch (error) {
  core.setFailed(error.message);
}