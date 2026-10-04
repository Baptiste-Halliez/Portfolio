const templateFile = await fetch("component/SkillCard/template.html");
const template = await templateFile.text();

const templateLiFile = await fetch("component/SkillCard/templateLi.html");
const templateLi = await templateLiFile.text();

let SkillCard = {};

SkillCard.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);
    
    let skillcardHTML = "";
    for (let skillcard of data.cards){
        let li = templateLi;
        li = li.replaceAll("{{name}}", skillcard.name);
        li = li.replaceAll("{{img}}", skillcard.img);
        li = li.replaceAll("{{alt}}", skillcard.alt);
        li = li.replaceAll("{{desc}}", skillcard.desc);
        skillcardHTML += li;
    }
    html = html.replaceAll("{{cards}}", skillcardHTML);
    return html;
}

SkillCard.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += SkillCard.format(data, css);
}

export { SkillCard };