import { SkillCard } from "../SkillCard/index.js";

const templateFile = await fetch("component/Skill/template.html");
const template = await templateFile.text();

let Skill = {
    skillcardsHTML: ""
};

Skill.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);
    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{subtitle}}", data.subtitle);
    html = html.replaceAll("{{skillCards}}", Skill.skillcardsHTML);
    return html;
}

Skill.addSkillCards = function(data, css=""){
    Skill.skillcardsHTML = SkillCard.format(data, css);
}

Skill.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Skill.format(data, css);
}

export { Skill };