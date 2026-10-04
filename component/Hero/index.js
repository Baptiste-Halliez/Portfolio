const templateFile = await fetch("component/Hero/template.html");
const template = await templateFile.text();
const templateLiFile = await fetch("component/Hero/templateLi.html");
const templateLi = await templateLiFile.text();

let Hero = {};

Hero.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);

    let imageHTML = "";
    for (let image of data.images){
        let li = templateLi;
        li = li.replaceAll("{{img}}", image.img);
        li = li.replaceAll("{{alt}}", image.alt);
        imageHTML += li;
    }

    html = html.replaceAll("{{images}}", imageHTML);
    html = html.replaceAll("{{sentp1}}", data.sentp1);
    html = html.replaceAll("{{fname}}", data.fname);
    html = html.replaceAll("{{port}}", data.port);
    html = html.replaceAll("{{folio}}", data.folio);
    html = html.replaceAll("{{sentp2}}", data.sentp2);
    return html;
}

Hero.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Hero.format(data, css);
}

export { Hero };