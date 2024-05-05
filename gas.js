// openById("ここにスプレッドシートのIDを入れる")
const spreadsheet = SpreadsheetApp.openById("1BWHtmdvLTO0nNQmbjN1CVDSbnqQsfQY6Lx6-pzEyTpI")
// getSheetByName("ここにはシート名を入れる")
const sheet = spreadsheet.getSheetByName("シート1")
function scrape(){
    // スクレイピングしたいサイトのURLを入れる
    let content = UrlFetchApp.fetch("https://cvpr.thecvf.com/Conferences/2024/AcceptedPapers").getContentText()
    // Cheerioというライブラリを使ってHTMLを解析する
    let $ = Cheerio.load(content);
    // クラス名やタグ名を指定して要素を取得する
    let $title = $('strong');
    $title.each(function(index, element){
        sheet.getRange("A" + (index + 1)).setValue($(element).text());
    })
}

// CheerioライブラリのスクリプトIDは"1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0"