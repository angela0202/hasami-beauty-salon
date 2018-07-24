class Config {
    format (str, obj) {
        const escapedStr = str.replace(/"/g, '\\"');
        const expressionStr = '"' + escapedStr.replace(/{{\s*/g, '" + a.').replace(/\s*}}/g, ' + "') + '"';

        const f = new Function('a', 'return ' + expressionStr);

        return f(obj);
    };

    htmlToDom (html) {
        const div = document.createElement('div');
            div.innerHTML = html;
            return Array.from(div.children);
    }
}