const templateFile = await fetch("component/Realisation/template.html");
const template = await templateFile.text();

const templateLiFile = await fetch("component/Realisation/templateLi.html");
const templateLi = await templateLiFile.text();

let Realisation = {};

Realisation.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);
    html = html.replaceAll("{{title}}", data.title);
    
    let selectionHTML = "";
    for (let real of data.select){
        let li = templateLi;
        li = li.replaceAll("{{link}}", real.link);
        li = li.replaceAll("{{img}}", real.img);
        li = li.replaceAll("{{alt}}", real.alt);
        li = li.replaceAll("{{name}}", real.name);
        li = li.replaceAll("{{desc}}", real.desc);
        selectionHTML += li;
    }
    html = html.replaceAll("{{selection}}", selectionHTML);
    html = html.replaceAll("{{morelink}}", data.morelink);
    html = html.replaceAll("{{more}}", data.more);
    return html;
}

Realisation.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Realisation.format(data, css);
}

export { Realisation };