var total = "";

function Added() {
  const data = document.querySelector(".table-js");
  let titleField = document.querySelector(".title-js");
  let authorField = document.querySelector(".author-js");
  if (titleField.value && authorField.value) {
    title = titleField.value;
    author = authorField.value;

    const tr = document.createElement("tr");
    tr.innerHTML = `<td>"${title}" by ${author}</td>
    <td>
    <button type="button" class="btn btn-danger" onclick="Delete(this)">Delete</button>
    </td>`;
    data.appendChild(tr);
  }

  titleField.value = "";
  authorField.value = "";
}

function Delete(e) {
  let row = e.parentElement;
  row = row.parentElement;
  row.remove();
}
