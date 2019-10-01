import skills from '../data/skills-samples';
var RegexEscape = require("regex-escape");

const sortUtil = (description) => {
    if (typeof description !== "string") {
        return [];
    }

    const parsedDesc = description.replace(/[^0-9a-z]/gi, '');
    const scores = [];

    skills.forEach(skill => {
        const joinedSkill = skill.split(' ').join('');
        const safeSkill = RegexEscape(joinedSkill.toLowerCase());
        const exp = new RegExp(safeSkill, 'gi');
        const match = parsedDesc.match(exp);
        const score = match ? match.length : 0;
        scores.push({skill, score});
    })

    const topTen = scores.sort(function (a, b) {
        return b['score'] - a['score'];
    }).slice(0, 10);

    return topTen.map(obj => obj.skill);
}

export default sortUtil;