# ScreenDoor 동아리 서버 

## 1. ScreenDoor 프로젝트 관리 정책

### 1) github 레파지토리 clone

```
$cd "자신이 프로젝트 하고자할 폴더"으로 이동
$git clone https://github.com/kgh940525/screendoor_project_server.git
$cd screendoor_project_server
```

### 2) git remote 상태확인

```
$git remote -v (remote의 상태를 확인한다.)
```

### 3) 새로운 브랜치 생성(개인작업공간)
```
$git checkout -b 생성할 브랜치 이름 (새로운 브랜치를 생성하며 마스터 브랜치에서 새로운 브랜치로 이동한다.)
```

### 4) 새로운 브랜치 생성 및 확인 이후 프로젝트 작업
```
$git branch -v (현재 브랜치의 상태를 확인한다. 3번의 명령어대로 잘 되었으면, 새로 생성한 브랜치로 이동해져있음.)

```

### 5) 작업이후 working directory -> index -> head -> repository 순서로 작업 변경사항 올리기
```
$git add . (working directory -> index 올리기)
$git commit -m 변경사항 코멘트 남기기 (index -> head )
$git push origin 나의 브랜치 (head -> 원격 서버repository)
```

### 6) push 이후 github 자신의 repository로 가서 Pull Request(PR) 생성
```
$레파지토리의 소스와 나의 소스코드 머지 요청하는 과정
```

### 7) 관리자는 Pull Request 사항을 확인한 후 Merge
```
$원본 레파지토리와 나의 작업사항이 Merge가 완료되면 관리자는 Contributer 알림
```

### 8) 작업자는 Merge가 된것을 확인하고, master 브랜치로 이동하여 변경사항을 레파지토리로 부터받아온다.
```
$git checkout master (마스터 브랜치로 이동)
$git pull (원격저장소 origin의 변경사항을 가져온다.)
```

### 9) 변경사항이 완료된 이후에는 현재 master 브랜치로 값이 잘받아와졌는지 확인 후 기존브랜치 삭제후 새로운 브랜치를 생성한다

```
$git branch -v (브랜치 확인)
$git branch -D "마스터 제외한 방금작업한 브랜치 삭제"
$git checkout -b "새로만들 브랜치 이름"
$git branch -v (새로 만든 브랜치 확인)
```

### 10) 1 ~ 10번방법으로 프로젝트 깃허브 관리 


## 2. 프로젝트 Issues 관리
```
자신이 맡은 기능의 commit 한 사항이 원본 레파지토리에 Merge가 되었으면, 이슈에 자신의 commit 한 사항 기록

Exam)
#commit번호 (#태그)
or
해당 기능 commit 주소 복사후 붙여넣기
```

## 3. 프로젝트 멤버

```
기여자 - Rekt77 
관리자 - kgh940525
```


