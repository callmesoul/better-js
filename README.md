#前端错误监控系统探针

## 概述
实现前端JS错误监控，监控window.onerror，资源加载错误，跨域js错误，ajax请求错误以及捕获vue的errorHandler错误等上报，自定义sendError上报方法

## 项目集

- 服务端 [frontend-sniper-server](https://github.com/callmesoul/frontend-sniper-server)
- 管理后台 [frontend-sniper-admin](https://github.com/callmesoul/frontend-sniper-admin)
- 错误探针 [better-js](https://github.com/callmesoul/better-js)

## 安装
```npm install frontend-sniper --save```


## 使用

import frontendSniper from 'frontend-sniper';
window.betterJs.init({
                    vue: true,
                    sendError: function (error) {
                        fetch('./sendError', {
                            method: 'POST',
                            headers: {
                               'Content-Type': 'application/json',
                               'appId':'',//使用 frontend-sniper时
                               'appScrect':''//使用 frontend-sniper时
                            },
                            body: JSON.stringify({
                                date: new Date(),
                                error
                            })
                        })
                        .then(res => {
                            if (res.ok) { // True if status is HTTP 2xx
                                return res;
                            }
                            throw new Error(res.status + ':' + res.statusText);
                        })
                        .then(res => {
                            return res.json();
                        })
                        .then(res => {
                            console.log(res);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                    }
                });

## 开发

*   `npm run build`: 进行本地构建
*   `npm run test`: 进行测试，打开[http://localhost:3000/index.html](http://localhost:3000/index.html)，error日志将写在log.txt里

### 开发目录
src/ - 源码

dist/ - 根据webpack打包的文件

test/ - 测试目录

## 相关文章
1. [JS错误总结](https://segmentfault.com/a/1190000014672384)
