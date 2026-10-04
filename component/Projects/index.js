const templateFile = await fetch("component/Projects/template.html");
const template = await templateFile.text();

const templateLiFile = await fetch("component/Projects/templateLi.html");
const templateLi = await templateLiFile.text();

let Projects = {};

Projects.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);
    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{subtitle}}", data.subtitle);
    
    let selectionHTML = "";
    for (let project of data.select){
        let li = templateLi;
        li = li.replaceAll("{{link}}", project.link);
        li = li.replaceAll("{{img}}", project.img);
        li = li.replaceAll("{{alt}}", project.alt);
        li = li.replaceAll("{{name}}", project.name);
        li = li.replaceAll("{{desc}}", project.desc);
        li = li.replaceAll("{{category}}", project.category);
        selectionHTML += li;
    }
    html = html.replaceAll("{{selection}}", selectionHTML);
    return html;
}

Projects.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Projects.format(data, css);
}

export { Projects };