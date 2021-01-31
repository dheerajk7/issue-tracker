import swal from "sweetalert";

export function showMessage(type, title, description) {
  swal({
    title: title,
    text: description,
    icon: type,
    button: "Ok",
  });
}
