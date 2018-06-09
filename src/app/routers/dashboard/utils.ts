import {isArray, isNumber, isObject, isString} from 'util';

export function objectToXML(object) {
  let xml = ``;
  for (const key of Object.keys(object)) {
    const value = object[key];

    if (isObject(value)) {
      const nestedXML = objectToXML(value);
      xml += keyValueToXML(key, nestedXML);
    } else if (isArray(value)) {
      value.forEach(element => {
        if (isString(element) || isNumber(element)) {
          xml += keyValueToXML(key, element);
        } else {
          const nestedXML = objectToXML(element);
          xml += keyValueToXML(key, nestedXML);
        }
      });
    } else {
      xml += keyValueToXML(key, value);
    }
  }
  return xml;
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
