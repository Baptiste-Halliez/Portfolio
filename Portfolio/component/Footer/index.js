const templateFile = await fetch("component/Footer/template.html");
const template = await templateFile.text();

let Footer = {};

Footer.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);
    html = html.replaceAll("{{right}}", data.right);
    return html;
}

Footer.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Footer.format(data, css);
}

export { Footer };