const saveNamePrefix = "template-";

export function saveTemplate(name, template) {
    localStorage.setItem(formatSaveName(name), JSON.stringify(template));
}

export function loadTemplate(name) {
    const template = localStorage.getItem(formatSaveName(name));
    return JSON.parse(template);
}

export function getTemplateNames() {
    const savedTemplateNames = Object.keys(localStorage).filter(name => name.includes(saveNamePrefix));

    return savedTemplateNames.map(name => name.split('-')[1]);
}

function formatSaveName(name) {
    return `${saveNamePrefix}${name}`;
}