function post (){
  // console.log("非同期投稿を実装");（問題1で試しに記述）

  // クリックされる送信ボタンの要素を取得
  const submit = document.getElementById("submit_btn");
  // クリックによるイベントには、clickを用意
  submit.addEventListener("click", (e) => {
    // フォームにはnew_articleというidが付与されているため、フォームの情報を取得
    console.log(document.getElementById("new_article"));
    // このままだとブラウザ上に用意されているデフォルトの送信が機能してしまい、重複してしまう
    // デフォルトの送信をキャンセル
    e.preventDefault();
  });

}


// ページが読み込まれたら実行
window.addEventListener('load', post);