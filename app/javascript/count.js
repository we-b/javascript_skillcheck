function count (){
  //console.log("文字数カウント機能を実装")  ブラウザで確認したら削除する
  const articleText  = document.getElementById("article_text"); //article_textのidを取得
  articleText.addEventListener("keyup", () => {  //イベントの発火させる。入力されたを認識するイベントハンドラーkeyup
    //console.log(articleText.value)  ブラウザで確認できたら削除する、取得したid.valueで入力フォーム文字列を取得する
    //console.log(articleText.value.length);  ブラウザで確認できたら削除する、入力した文字をコンソール上に出力する
    const countVal = articleText.value.length;  //入力されている文字数をカウントした結果を取得する
    const charNum  = document.getElementById("char_num");  //実際に文字を置き換えたい部分の要素を取得する
    charNum.innerHTML = `${countVal}文字`;//取得した要素に対して、${countVal}文字を、innerHTMLを用いて置き換える
  });
};

window.addEventListener('load', count); //ページが読み込まれたら」を実現するためには、window.addEventListener('load', 【実際に行う処理】);
