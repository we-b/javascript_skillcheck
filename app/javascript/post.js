function post (){
  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {

    e.preventDefault();
  });
}

window.addEventListener('load', post);