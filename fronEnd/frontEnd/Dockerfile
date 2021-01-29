FROM node:14.15 as base
WORKDIR /work

COPY . .

RUN npm clean-install
RUN npm run build -- --prod

FROM nginx:alpine
LABEL maintainer="https://github.com/synaodev"

COPY --from=base /work/nginx.conf /etc/nginx/ngnix.conf
COPY --from=base /work/dist /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
