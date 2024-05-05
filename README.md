# scraping：GASで使えるスクレイピング

## info
◯　Google App Script
https://script.google.com/home

◯　CheerioライブラリのスクリプトID:
1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0


## how to use
◯　openById("ここにスプレッドシートのIDを入れる")

◯　getSheetByName("ここにはシート名を入れる")

◯　UrlFetchApp.fetch("スクレイピングしたいサイトのURLを入れる")

◯　let $title = $('クラス名やタグ名を指定して要素を取得する')

クラス名を指定するときは、「.class p」のようにクラス名の前に.をつける
