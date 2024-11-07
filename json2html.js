export default function convertJsonToHtml(inputData) {  
  const uniqueKeys = [...new Set(inputData.flatMap(Object.keys))];  
  let htmlString = `<table data-user="rajeshchilivery23@gmail.com">`;  

  htmlString += "<thead><tr>";  
  uniqueKeys.forEach(key => {  
    htmlString += `<th>${key}</th>`;  
  });  
  htmlString += "</tr></thead>";  

  htmlString += "<tbody>";  
  inputData.forEach(item => {  
    htmlString += "<tr>";  
    uniqueKeys.forEach(key => {  
      htmlString += `<td>${item[key] || ""}</td>`;  
    });  
    htmlString += "</tr>";  
  });  
  htmlString += "</tbody></table>";  

  return htmlString;  
}