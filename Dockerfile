# 기반 이미지 선택
FROM nginx

# 작업 디렉토리 설정
WORKDIR /nginx_html

# 로컬 디렉토리 복사
COPY nginx_html/ .

# 기존 파일 삭제 및 로컬 파일 복사
RUN rm /usr/share/nginx/html/nginx.html && \
    cp -r /nginx_html/* /usr/share/nginx/html/

# 컨테이너에서 실행할 명령 설정
CMD ["nginx", "-g", "daemon off;"]

