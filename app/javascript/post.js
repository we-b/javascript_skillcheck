function post(){
  const submit = document.getElementById("submit_btn"); //ブラウザelementsの<input type="submit"~>のidの部分を見て、getElementByIdで取得
  submit.addEventListener("click", (e) => {
    // console.log(document.getElementById("new_article")); //投稿したフォームの情報がコンソールに表示される(この"new_article"はブラウザelementsの<form id="new_article"〜>を見て記述。コンソールに表示されることを確認したら削除
    e.preventDefault(); // ブラウザ上に用意されているデフォの送信をキャンセルして、重複送信をさせない
    const formData = new FormData(document.getElementById("new_article")); //フォームの情報を取得し、Ajaxへ送信できる形へ整形
    const XHR = new XMLHttpRequest(); //Ajax非同期通信のため、Ajaxに利用するオブジェクトを生成
    XHR.open("POST", "/articles", true); //ルート。Ajaxに関する情報を初期化し、URIを設定
    XHR.responseType = "json"; //レスポンスとして求める形式をjson形式に指定
    XHR.send(formData); //Ajaxで送信
  });
}

window.addEventListener('load', post);