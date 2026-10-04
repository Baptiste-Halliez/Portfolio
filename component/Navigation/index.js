const templateFile = await fetch("component/Navigation/template.html");
const template = await templateFile.text();

const templateLiFile = await fetch("component/Navigation/templateLi.html");
const templateLi = await templateLiFile.text();

let Nav = {};

Nav.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);
    html = html.replaceAll("{{logo}}", data.logo);
    html = html.replaceAll("{{accueil}}", data.accueil);
    
    let menuHTML = "";
    for (let menu of data.menus){
        let li = templateLi;
        li = li.replaceAll("{{link}}", menu.link);
        li = li.replaceAll("{{name}}", menu.name);
        menuHTML += li;
    }
    html = html.replaceAll("{{menuItems}}", menuHTML);
    html = html.replaceAll("{{linkCV}}", data.linkCV);
    html = html.replaceAll("{{CV}}", data.cv);
    return html;
}

Nav.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Nav.format(data, css);
}

export { Nav };