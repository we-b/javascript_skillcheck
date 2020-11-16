function post (){
  // console.log("非同期投稿を実装");（問題1で試しに記述）

  // クリックされる送信ボタンの要素を取得
  const submit = document.getElementById("submit_btn");
  // クリックによるイベントには、clickを用意
  submit.addEventListener("click", (e) => {
    // フォームにはnew_articleというidが付与されているため、フォームの情報を取得
    // console.log(document.getElementById("new_article"));

    // フォームの情報を取得し、Ajaxで送信できる形へと整形
    const formData = new FormData(document.getElementById("new_article"));
    //エンドポイントを呼び出すためにまず、オブジェクトを生成
    const XHR = new XMLHttpRequest();
    //どのようなリクエストをするのかを指定する（情報を初期化し、エンドポイントなどを設定）
    XHR.open("POST", "/articles", true);
    //レスポンスとして欲しい情報の形式を指定
    XHR.responseType = "json";
    // Ajaxで送信
    XHR.send(formData);

    //『↑ここまでがリクエストの送信までの処理』
    // //『↓ここからがレスポンス受信後の処理』

    // Ajaxによる処理が終了したあとに呼び出されるイベントハンドラー
    XHR.onload = () => {
      // レスポンスの内容を出力
      console.log(XHR.response.article);
    };

    // このままだとブラウザ上に用意されているデフォルトの送信が機能してしまい、重複してしまう
    // デフォルトの送信をキャンセル
    e.preventDefault();
  });

}


// ページが読み込まれたら実行
window.addEventListener('load', post);