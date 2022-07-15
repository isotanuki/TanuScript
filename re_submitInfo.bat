@echo off

set threadNo=990072513
set no=1



echo 再上場馬スクリプトを開始します...
PAUSE
echo;

echo;
echo ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
echo 上場番号%no%を投稿します。
PAUSE
node submitInfo.js %threadNo% %no%
echo ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
echo;
PAUSE


exit /b