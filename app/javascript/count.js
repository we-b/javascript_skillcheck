function count (){
  const articleText = document.getElementById("article_text");
  articleText.addEventListener("keyup", () => {
    console.log(articleText.value.length);
  });
}
window.addEventListener('load', count);