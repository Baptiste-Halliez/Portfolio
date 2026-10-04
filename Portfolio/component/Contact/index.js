const templateFile = await fetch("component/Contact/template.html");
const template = await templateFile.text();

const templateLiFile = await fetch("component/Contact/templateLi.html");
const templateLi = await templateLiFile.text();

let Contact = {};

Contact.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);
    html = html.replaceAll("{{p1}}", data.p1);
    html = html.replaceAll("{{contact}}", data.contact);
    html = html.replaceAll("{{p2}}", data.p2);
    html = html.replaceAll("{{mail}}", data.mail);
    html = html.replaceAll("{{ask}}", data.ask);
    
    let socialHTML = "";
    for (let social of data.socials){
        let li = templateLi;
        li = li.replaceAll("{{link}}", social.link);
        li = li.replaceAll("{{name}}", social.name);
        socialHTML += li;
    }
    html = html.replaceAll("{{socials}}", socialHTML);
    return html;
}

Contact.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Contact.format(data, css);
}

export { Contact };