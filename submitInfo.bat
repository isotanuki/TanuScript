@echo off

set threadNo=990072513
set startNo=1



echo ���n��񓊍e�X�N���v�g���J�n���܂�...
PAUSE
echo;
for %%n in (%startNo%, 1, 500) do (
    echo;
    echo ��������������������������������
    echo ���ԍ�%%n�𓊍e���܂��B
    PAUSE
    node submitInfo.js %threadNo% %%n
    echo ��������������������������������
    echo;
    PAUSE
)

exit /b