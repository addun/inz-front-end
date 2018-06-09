export function objectToXML(object) {
  const o = object;
  const tab = '\n';
  const toXml = function (v, name, ind) {
    let _xml = '';
    if (v instanceof Array) {
      for (let i = 0, n = v.length; i < n; i++)
        _xml += ind + toXml(v[i], name, ind + '\t') + '\n';
    } else if (typeof(v) === 'object') {
      let hasChild = false;
      _xml += ind + '<' + name;
      for (const m in v) {
        if (m.charAt(0) === '@') {
          _xml += ' ' + m.substr(1) + '="' + v[m].toString() + '"';

        } else {
          hasChild = true;
        }
      }
      _xml += hasChild ? '>' : '/>';
      if (hasChild) {
        for (const m in v) {
          if (m === '#text') {
            _xml += v[m];
          } else if (m === '#cdata') {
            _xml += '<![CDATA[' + v[m] + ']]>';
          } else if (m.charAt(0) !== '@') {
            _xml += toXml(v[m], m, ind + '\t');
          }
        }
        _xml += (_xml.charAt(_xml.length - 1) === '\n' ? ind : '') + '</' + name + '>';
      }
    } else {
      _xml += ind + '<' + name + '>' + v.toString() + '</' + name + '>';
    }
    return _xml;
  };
  let xml = '';
  for (const m in o) {
    xml += toXml(o[m], m, '');
  }
  return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, '');
}

function keyValueToXML(key, value) {
  if (value === null) {
    return `<${key}></${key}>`;
  } else {
    return `<${key}>${value}</${key}>`;
  }
}

export function download(filename, content) {
  const data = new Blob([content]);
  const element = document.createElement('a');
  element.setAttribute('href', URL.createObjectURL(data));
  element.setAttribute('type', 'text/xml');
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
