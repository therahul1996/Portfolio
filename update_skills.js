const fs = require('fs');
const path = '/Users/apple/Projects/react/portfolio/src/components/skill/skill.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const addSkills = (headingName, skills, newId = null) => {
    let heading = data.skillHeading.find(h => h.heading === headingName);
    if (!heading) {
        if (!newId) {
            newId = Math.max(...data.skillHeading.map(h => h.id)) + 1;
        }
        heading = { id: newId, heading: headingName, list: [] };
        data.skillHeading.push(heading);
    }
    
    let maxId = heading.list.length > 0 ? Math.max(...heading.list.map(i => i.id)) : 0;
    
    skills.forEach(skill => {
        if (!heading.list.find(i => i.name.toLowerCase() === skill.toLowerCase())) {
            maxId++;
            heading.list.push({ id: maxId, name: skill });
        }
    });
};

// Languages
addSkills('Language', ['Python', 'SCSS']);

// Frameworks
addSkills('Framework', ['React Native']);

// State & Validation
addSkills('State & Validation', ['Redux Toolkit', 'Zustand', 'NgRx', 'Zod', 'Yup']);

// CSS Framework
addSkills('CSS Framework', ['Framer Motion', 'CSS Modules']);

// API Integration
addSkills('API Integration', ['SMTP integration', 'RabbitMQ']);

// Database
addSkills('Database', ['Redis', 'Firebase']);

// Cloud & DevOps
addSkills('Cloud & DevOps', ['AWS', 'AWS Cognito', 'Vercel', 'GitHub Actions']);

// Testing
addSkills('Testing', ['Jest', 'React Testing Library (RTL)']);

// Concepts
addSkills('Concepts', ['Multi-tenant systems', 'user roles & permissions', 'admin dashboards', 'scalable APIs', 'Web3']);

// Project Management
addSkills('Project Management', ['Jira']);

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Skills updated successfully!');
