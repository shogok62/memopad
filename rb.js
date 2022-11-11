//1.Save クリックイベント

// saveのボタンが押されたら実行したい
       $("#save").on('click', function () {
            // jQueryでinputタグ（text email textarea telなど）のhtmlの記述された文字を取得する方法
            // val();
            // $("#xx").val(); inputタグにしか使えない
            // input text email textarea tel
            let key = $("#key").val();
            let memo = $("#memo").val();
            console.log(key, 'データが取れてるかチェック')
            console.log(memo, 'データが取れてるかチェック')

            // データを保存します⇨localStrageを使います🤗
            localStorage.setItem(key, memo)

            // const html = '<tr><th>' + key + '</th><td>' + value + '</td></tr>';
            const html = `
                <tr>
                    <th>${key}</th>
                    <td>${memo}</td>
                </tr>    
            `;
            $("#list").append(html);

            if (key === '') {
                alert('タイトルが抜けてる')
            }
            
            if (memo === '') {
                alert('説明が抜けてる')
            }
        });

//2.clear クリックイベント

// clearのボタンが押されたら実行したい
        $("#clear").on("click",function(){
            localStorage.clear();
            $("#list").empty();   
        });
        

//3.ページ読み込み：保存データ取得表示

for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const html = `
        <tr>
            <th>${key}</th>
            <td>${value}</td>
        </tr>
    
    `
            // 画面上に埋め込み
            $("#list").append(html)
        }

// 選択したやつだけ削除したい　★★★
/* 1行削除　森田先生コメントなど引用：　色々試したがよく分からん　*/
        // $("#delete").on("click",function(){
        //             localStorage.removeItem(key);   
        //         });
        
        // // $('table').append('<tr><td class="key">' + key + '</td>'
        // // +'<td class="value">' + value + '</td>'
        // // +'<td><input type="button" class="delete" value="削除"></td>'
        // // +'</tr>');
               
// $(document).on('click', '.delete', function() {
 
//  /* この中に処理を書く、まずはクリックしたらアラートが出るか確かめてみましょう！ */
//    alert(2);
//  });
 



//　画面幅を調整・https://qiita.com/ryounagaoka/items/045b2808a5ed43f96607
document.getElementById('viewport').setAttribute('content', 'width=360,initial-scale=1');
