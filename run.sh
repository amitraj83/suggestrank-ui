kill -9 $(pidof node)
npm run build
nohup npm run start &
systemctl restart nginx.service

