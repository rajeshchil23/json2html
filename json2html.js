export default function json2html(data) {
  const columns = [...new Set(data.flatMap(Object.keys))];
  let html = `<table data-user="rajeshchilivery23@gmail.com">`;

  html += "<thead><tr>";
  columns.forEach(column => {
    html += `<th>${column}</th>`;
  });
  html += "</tr></thead>";

  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    columns.forEach(column => {
      html += `<td>${row[column] || ""}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody></table>";

  return html;
}
