function post(){
  const submit = document.getElementById("submit_btn") //ブラウザelementsの<input type="submit"~>のidの部分を見て、getElementByIdで取得
  submit.addEventListener("click", (e) => {
    // console.log(document.getElementById("new_article")); //投稿したフォームの情報がコンソールに表示される(この"new_article"はブラウザelementsの<form id="new_article"〜>を見て記述。コンソールに表示されることを確認したら削除
    e.preventDefault(); // ブラウザ上に用意されているデフォの送信をキャンセルして、重複送信をさせない
  });
}

window.addEventListener('load', post);