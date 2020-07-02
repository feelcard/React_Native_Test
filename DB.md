# 1 .DB 정의

> database -( 논리적 단위) data 저장소
>
> dbms - database managementta system
>
> => Instance(process , memory)+ container(databases = storage)
>
> 
>
> table, colume등의 데이터를 메타데이터 라고 한다.
>
> 데이터 딕셔너리 시스템 카탈로그 등 다른 이름으로도 불려질수 있다.
>
> rollback, commit을 수행하기위한 undo table space가 있다.
>
> 또한, 정렬을 위한 Temp space가 있다.
>
> TableSpace은 Segment로 구성되어 있다. Segment는 최소 1개의 Exttent로 이루어져있고
>
> 이는 최소 하나의 Block(I/O)으로 구성되어있다
>
>  이는 가장 기본적인 DB의 구성요소 이다.

> DB 객체
>
> `Table` = `row`와 `column` 구성 (물리적 Data 저장)
>
>  `View` =  `Table`의 window 역할을 하는 논리적 테이블 보안을 위해 쓰거나 복잡한 selcet문을 view로 정의해 놓은것(sql구문을 간결하게 사용하기 위해 만들어 놓은것)
>
> * Simple View : DML가능 1개의 테이블 not null 제약 컬럼
> * Complex : DML 불가능 join, 함수, grouping
>
> `Index` =OLTP(select 구문을 위주로 처리하는 환경) 환경에서 select 검색 성능 및 정확성을 위해 사용 `column`에 지정함
>
> 컬럼이 가질수있는 값의 경우의 수가 넓은 경우 b*tree 적다면(성별 등) Bitmap
>
> 인덱스를 사용하지 않는 컬럼 = 자주바뀌는 값,
>
> 예시)  1억개 정도의 컬럼 문자 순으로 A~Z있는 경우
>
> A~F ,G~M,N~P, R~Z  각각의 `Branch` 주소가 할당되어있고 이는 테이블의 정보가 담겨있는 테이블 블럭과는 다른 메모리 영역을 사용한다.
>
> ```sql
> 
> ```
>
> 
>
> `Primary key` = Not Null + Unique  => 자식테이블의 `Foreign key`
>
> * `heap table` - partition table ( `Range` , `Hash`, `List` )
> * `IOT` (cluster table)
>
> `shared pool` = 오라클이 sql 문장을 수행하기위해 잡은 메모리 영역
>
> 이는 세부적으로 라이브러리 코드라는 영역에서 sql문장의 해시값을 매핑해서 속도를 높힘
>
> 이를 soft parsing 이라 함 여기서 나온 결과를 반환하는 것을 `fetch` 라 한다
>
> 90%이상의 sql은 이러한 형태로 처리됨
>
> Semantic parsing
>
> * `shared pool` 의 `row cache` 를 통해 메타데이터를 확인하고 물리적으로 저장된 데이터를 buffer code 메모리 영역에 해당 데이터를 등록한다.
>
> Optimizer-> sql변형 ->object통계-> row



강사님 책 추천: 위키 구루비 사이트 접속 wiki.gurubee.net-> 

# 2.Oracle 사용법

> ```cmd
> sqlplus /nolog --툴만 실행
> sqlplus / as sysdba --sys계정으로 db 접속
> sqlplus sys/oracle as sysdba --sys계정으로 db접속
> lsnrctl status --오라클 리스너가 실행되어 있는지 확인
> 
> ```
>
> 인증> 일방향 패스워드가 DB내에 저장되어있음 sys관리자 계정은 패스워드 파일을 사용
>
> 서버급 컴퓨터에서는 os 로그온시에 DB인증과 함께 처리
>
> third party 인증
>
> ```sql
> conn sys/oracle as sysdba;
> 
> alter user scott identified by oracle account unlock;  -- scott계정에 권한부여
> alter user hr identified by oracle account unlock; -- hr 계정에 권한부여
> conn scott/oracle
> describe 테이블이름 --테이블의 구성요소 확인가능
> select user from dual
> 
> select table_name from user_tables;
> select table_name from all_tables;
> select count(table_name) from dba_tables;
> 
> 
> ```
>
> data dictionary view (메타 정보)
>
> user_xxxx (특정 db user 소유의)
>
> all_xxx(특정 db user소유 +권한)
>
> dba_xxxx(dba 권한을 가진 user가 조회, 모든정보)
>
> v$_xxx(dba 권한을 가진 user가 성능 관련 정보)
>
> 

sqldeveloper 사용시 xe환경이 디폴트로 설정되어 있는데 이를 orcl로 바꿔준다

![image-20200702111819561](C:\Users\kds\AppData\Roaming\Typora\typora-user-images\image-20200702111819561.png)

F10을 누르면 실행 계획을 볼 수 있다. 아래 화면은 FULL 이라고 되어있기때문에 FULLSCAN이 실행 되었다는 뜻

![image-20200702112444156](C:\Users\kds\AppData\Roaming\Typora\typora-user-images\image-20200702112444156.png)

```sql

```



![image-20200702112632286](C:\Users\kds\AppData\Roaming\Typora\typora-user-images\image-20200702112632286.png)

SQL

* DML - select,insert,delete,update,merge
* DDL -create,alter,drop
* DCL -(권한을 통한 제어) - grant vevoke
* TCL -rollback,commit,savepoint



# 각 칼럼 타입에 따른 연산자

```SQL
NUMBER TYPE

--기본적인 사칙연산 가능 
EX) SELECT SAL*12 AS SALARY FROM EMPLOYEES

CHAR TYPE

--결합연산자 가능
SELECT ENAME|| 'WORKS AS A ' ||JOB FROM EMPLOYEES;

날짜연산 +/- 

DISTINCT -- 중복제거시 사용, HASH방식으로 중복을 제거함

IN LIST 연산자 IN (값 리스트)

WHERE DEPTNO IN (10,20)
=> WHERE DEPTNO = 10 OR DEPTNO =20;

LIKE

-- 논리연산자의 우선순위 NOT>AND>R
*인덱스를 사용하기전 꿀팁
TABLE 에서 찾아야할 데이터가 TABLE의 15%이상의 데이터 라면풀스캔을 하는것이 오히려 이득이다.


SELECT 3

FROM  1

WHERE 2

ORDER BY 4

해당 순서대로 동작함
```

# 함수형 칼럼

```sql
predefine (벤터 제공): 
	단일행 함수:
    	character
    	number
    	date
    	형변환: to로 시작하는 함수
    	일반함수,조건함수
	부수행 함수(그룹 함수), 
	윈도우 함수(분석 함수)

custom(PL/SQL)

nvl 함수(null값을 통해 if문 처럼 사용가능)

decode(컬럼,비교값1,리턴값1,비교값2,리턴값2)

select ename,deptno, sal,decode(deptno,10,sal*1.05,20,sal*1.1,30,sal*1.03) as increase from emp;
sql1999 표준 표현식:
case 컬럼 when 비교값 then 리턴값
[case 컬럼 when 비교값 then 리턴값]
[else 리턴값] end
```

https://docs.oracle.com/cd/E11882_01/server.112/e41084/functions.htm#SQLRF006