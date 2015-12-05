$(function(){

  var txt;

  // メインページビュー
  txt = $('#starred_section_header').html();
  $('#starred_section_header').html(txt.replace(/Starred/g,'お気に入り'));

  txt = $('#channels_header').html();
  $('#channels_header').html(txt.replace(/Channels/g,'チャンネル'));

  txt = $('#direct_messages_header').html();
  $('#direct_messages_header').html(txt.replace(/Direct Messages/g,'ダイレクトメッセージ'));

  $(document).on('click', '#team_menu', function() {
    // サイドバーメニュー
    txt = $(document).find('#menu').html();
    txt = txt.replace(/Preferences/g,'設定');
    txt = txt.replace(/View Profile &amp; Account/g,'プロフィールを見る');
    txt = txt.replace(/Help &amp; Feedback/g,'ヘルプ＆フィードバック');
    txt = txt.replace(/Get Slack Apps/g,'Slackアプリをダウンロード');
    txt = txt.replace(/Set yourself away/g,'オフライン状態にする');
    txt = txt.replace(/[Away] Set yourself to active/g,'オンライン状態にする');
    txt = txt.replace(/Configure Integrations/g,'連携アプリの設定');
    txt = txt.replace(/Customize Slack/g,'Slackのカスタマイズ');
    txt = txt.replace(/Team Directory/g,'チームディレクトリ');
    txt = txt.replace(/Sign in to another team …/g,'他のチームにサインインする');
    $(document).find('#menu').html(txt);
  });
});
