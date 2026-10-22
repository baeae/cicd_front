# 정적 파일 서빙용 nginx 사용
FROM nginx:alpine

# 빌드 결과물을 nginx 기본 경로로 복사
# dist 폴더 → EC2에 도커 컨테이너로 옮김
COPY ./dist /usr/share/nginx/html

# 80포트 오픈
EXPOSE 80

# 기본 엔트리포인트는 nginx 사용
