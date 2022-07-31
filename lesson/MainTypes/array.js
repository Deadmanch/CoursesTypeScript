"use strict";
const skills = ['DevOps', 'SEO', 'Java', 'Javascript'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
console.log(skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b));
