function count (){
  // console.log("文字カウントを実装");（問題1で試しに記述）

  // 文字を入力する要素を取得
  const articleText  = document.getElementById("article_text");
  // その要素に何らかのキーボード操作が↓あった場合に、イベントが発火するように
  articleText.addEventListener("keyup", () => {
    // 取得した要素に含まれている値を出力
    // console.log(articleText.value);（問題2で試しに記述）
    // 文字の数を数えるためには、lengthメソッドで文字数を出力
    console.log(articleText.value.length);
  });


}


// ページが読み込まれたら実行
window.addEventListener('load', count);