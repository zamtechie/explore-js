// Import stylesheets
import './style.css';

import { learningFn } from './learnings/learnings.js';
import { programsFn } from './programs/programs.js';
import { designPatternsFn } from './design-patterns/design-patterns.js';
import { assgnmentsFn } from './assignments/assignments.js';

learningFn();
programsFn();
designPatternsFn();
assgnmentsFn();

// Write Javascript code!
const jsLearningDiv = document.getElementById('js-learning');
jsLearningDiv.innerHTML = `<h3>JS Learning</h3>`;
jsLearningDiv.innerHTML += `<ol>
  <li>HelloWorld</li>
  <li>Call, Apply & Bind</li>
  <li>Map, Reduce & Filter</li>
  <li>Closure Example</li>
  <li>IIFE / Self Invoking Function</li>
  <li>Data Encoding and Decoding</li>
  <li>Different ways you can create an Object</li>
  <li>Example of Web workers</li>
  <li>Example of Service workers</li>
  <li>Example of Web Sockets</li>
</ol>`;

const jsProgramsDiv = document.getElementById('js-programs');
jsProgramsDiv.innerHTML = `<h3>JS Programs</h3>`;
jsProgramsDiv.innerHTML += `<ol>
  <li>Spread and Rest operator</li>
  <li>Different ways to clone object</li>
  <li>Factorial of a number</li>
  <li>Fibonacci number at nth position</li>
  <li>Fibonacci series till nth position</li>
  <li>Summation of Array</li>
  <li>Multiply each element of Array with number</li>
  <li>Subset of array [1,2,3,1,3,4,5,6,7] from 3 to 7 position</li>
  <li>Remove the duplicate values form the array [1,2,3,1,3,4,5,6,7]
  <li>Curring Functions</li>
  <li>Polyfills for reduce function</li>
  <li>Polyfills for foreach</li>
  <li>Polyfills for subject and behaviour subject</li>
</ol>`;

const jsDesignPatternDiv = document.getElementById('js-design-patterns');
jsDesignPatternDiv.innerHTML = `<h3>Design Patterns in JS</h3>`;
jsDesignPatternDiv.innerHTML += `<ol>
  <li>Modular Design</li>
</ol>`;

const jsAssignmentsDiv = document.getElementById('js-assignments');
jsAssignmentsDiv.innerHTML = `<h3>JS Assignments</h3>`;
jsAssignmentsDiv.innerHTML += `<ol>
  <li>Create a Calculator</li>
</ol>`;
