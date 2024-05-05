
const spreadsheet = SpreadsheetApp.openById("スプレッドシートのID")
const sheet = spreadsheet.getSheetByName("シート名")
function scrape(){
    let content = UrlFetchApp.fetch("スクレイピングしたいサイトのURL").getContentText()
    // Cheerioというライブラリを使ってHTMLを解析する
    let $ = Cheerio.load(content);
    let $title = $('クラス名やタグ名を指定して要素を取得');
    $title.each(function(index, element){
        sheet.getRange("A" + (index + 1)).setValue($(element).text());
    })
}
