@echo off

set threadNo=990072513
set startNo=1



echo 上場馬情報投稿スクリプトを開始します...
PAUSE
echo;
for %%n in (%startNo%, 1, 500) do (
    echo;
    echo ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    echo 上場番号%%nを投稿します。
    PAUSE
    node submitInfo.js %threadNo% %%n
    echo ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    echo;
    PAUSE
)

exit /b