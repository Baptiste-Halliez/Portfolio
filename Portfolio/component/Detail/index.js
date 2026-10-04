const templateFile = await fetch("component/Detail/template.html");
const template = await templateFile.text();

let Detail = {};

Detail.format = function(data, css=""){
    let html = template;
    html = html.replaceAll("{{cssClass}}", css);
    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{projetImg}}", data.projetImg);
    html = html.replaceAll("{{projetDesc}}", data.projetDesc);
    html = html.replaceAll("{{description}}", data.description);
    html = html.replaceAll("{{projetConc}}", data.projetConc);
    html = html.replaceAll("{{concept}}", data.concept);
    html = html.replaceAll("{{conceptImg}}", data.conceptImg);
    html = html.replaceAll("{{resultImg}}", data.resultImg);
    html = html.replaceAll("{{projetResult}}", data.projetResult);
    html = html.replaceAll("{{result}}", data.result);
    html = html.replaceAll("{{lienlink}}", data.lienlink);
    html = html.replaceAll("{{lien}}", data.lien);
    html = html.replaceAll("{{back}}", data.back);
    html = html.replaceAll("{{btnRetour}}", data.btnRetour);
    return html;
}

Detail.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Detail.format(data, css);
}

export { Detail };