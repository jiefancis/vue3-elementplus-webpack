/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-07 16:35:12
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-07 18:20:54
 */
'use strict';
const crypto = require('crypto')
const https = require('https')
const jwt = require('jsonwebtoken')
const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
// const fetch = require('node-fetch')
class HomeController extends Controller {
  // 号外：如果做网站监控，可以监听网站数据是否被篡改或网站是否正常运行，若出现异常则发送短信给开发人员提醒。
  async index() {
    const { ctx } = this
    const response = await ctx.curl('https://blog.csdn.net/qq_39905409/article/details/110694093');

    const pageXml = response.data.toString()
    const $ = cheerio.load(pageXml, { decodeEntities: false})
    // console.log('pageXmlpageXml', pageXml, 123456, $)
    var result = ''
    $('div').each(function() {
      var text = $(this).html()
      // console.log('cheerio', text)
      result += text
    })
    // console.log(fecth, 'fetch', await import('node-fetch'))
    // ctx.body = await import('node-fetch')
    ctx.body = {
      data: result,
      response
    }


    // save  txt
    // var html = ''
    // var temp = ''
    // var arr = []
    // var num = 0
    // var baseUrl = 'http://127.0.0.1:7001'

    // function findUrl(html){
    //     var $ = cheerio.load(html)
    //     var href_url_a = $('html').find('a')

    //     for (var i = 0; i < href_url_a.length; i++) {
    //         if ($(href_url_a[i]).attr('href') == '' || $(href_url_a[i]).attr('href') == null) {
    //         }else{
    //             if ($(href_url_a[i-1]).attr('href') == $(href_url_a[i]).attr('href')) {

    //             }
    //             else{
    //                 var Str = $(href_url_a[i]).attr('href')
    //                 if (Str.substring(0,4) == 'http') {
    //                     arr.push($(href_url_a[i]).attr('href'))
    //                     temp += $(href_url_a[i]).attr('href')+'\n'
    //                     num++
    //                 }
    //             }
    //         }
    //     }
    //     fs.writeFile('url.txt','【抓取到<'+baseUrl+'>页面数： '+num+' 个】：'+'\n'+'\n'+temp,function(err){
    //         if (err)
    //             throw err
    //     })
    //     console.log('\n'+'||这个页面一共有'+num+'链接.')
    // }

    // (function web_crawler(url){
    //     if (url.substring(0,5) == 'https') {
    //         https.get(url,function(res){
    //             res.on('data',function(chunk){
    //                 html += chunk
    //                 console.log('正在爬取...',chunk)
    //             })
    //             res.on('end',function(){
    //                 findUrl(html)
    //                 console.log('抓取完毕！')
    //             }).on('error',function(e){
    //                 console.log('错误访问...')
    //             })
    //         })
    //     }else{
    //         https.get(url,function(res){
    //             res.on('data',function(chunk){
    //                 html += chunk
    //                 console.log('正在爬取...')
    //             })
    //             res.on('end',function(){
    //                 console.log('抓取完毕！')
    //                 findUrl(html)
    //             }).on('error',function(e){
    //                 console.log('错误访问...')
    //             })
    //         })
    //     }
    // })(baseUrl)

    // save txt end



    // (async () => {
    //   const response = await fetch('https://www.baidu.com');
    //   const body = await response.text();
    //   ctx.body = {
    //     data: body
    //   }
    // })();
    // const { ctx } = this;
    // let reqToken = ctx.cookies.get('token')

    // console.log(ctx.session,'ctx.verify', ctx.session.userId === reqToken)
    // let md5 = crypto.createHash("md5").update('123456').digest('hex')
    // let decode = crypto.createHash('md5').update(md5).digest('hex')
    // let token = jwt.sign({id: 1}, '123456')
    // ctx.cookies.set('token', token)
    // ctx.session.userId = token
    // ctx.body = {
    //   // data: {
    //   //   md5,decode
    //   // },
    //   // token,
    //   session: ctx.session
    // }

  }
  async upload() {
    const { ctx } = this;
    // ctx.response.setHeader('Access-Control-Allow-Headers','*')
    ctx.set({
      'Access-Control-Allow-Headers':'*'
    })
    const files = ctx.request.files
    console.log('files', files)
    // const promises = makePromises(files)
    new Promise((resolve, reject) => {
      var buffer = Buffer.concat(files);
      fs.writeFile(`../public/upload/${file.filename}`,buffer, {
        flag: "w"
      },function(err){
        if(err) {
          console.log('写文件操作失败')
          reject(err)
        } else {
          resolve()
          console.log('写文件操作成功')
        }
      })
    }).then(res => {
      ctx.status = 200
      ctx.body = {
        data: files
      }
    }).catch(err => {
      ctx.body = {
        data: err
      }
    })

    function makePromises(files) {
      return files.map(file => {
        new Promise((resolve, reject) => {
          var buffer = Buffer.concat(file);
          fs.writeFile(`../public/upload/${file.filename}`,buffer, {
            flag: "w"
          },function(err){
            if(err) {
              console.log('写文件操作失败')
              reject(err)
            } else {
              resolve()
              console.log('写文件操作成功')
            }
          })
        })
      })
    }
    // let parts = ctx.multipart();
    // let part = await parts()
    // let filePath = path.join('app/public/upload/', files[0].filename)
    // let writable = fs.createWriteStream(filePath)
    // await part.pipe(writable)
    // let part
    // let parts = ctx.multipart();
    // let result = []
    // while((part = await parts()) != null) {
    //   console.log('part', part)
    //   let length = 0
    //   if(part.length) {
    //     length = part[1]
    //   } else {
    //     if (!part.filename) return
    //     let file = {}
    //     file.name = part.filename
    //     file.type = part.mimeType
    //     let filePath = path.join('../../upload', part.filename)
    //     let writable = fs.createWriteStream(filePath)
    //     await part.pipe(writable)
    //     file.path = 'http://localhost:7002/' + part.filename
    //     result.push(file)
    //   }
    // }
    // ctx.setHeader()
    // let body = ctx.request.body
    // console.log(ctx.request,'body', body)
    // ctx.status = 200
    // ctx.body = {
    //   data: result
    // }
    // const {ctx} = this;
    // 获取 steam
    // const stream = await ctx.getFileStream();
    // // 上传基础目录
    // const uplaodBasePath = 'app/public/upload/';
    // // 生成文件名
    // const filename = Date.now() + '' + Number.parseInt(Math.random() * 10000) + path.extname(stream.filename);
    // // 生成文件夹
    // const dirName = '' + Number.parseInt(Date.now()/1000);
    // if(! fs.existsSync()) fs.mkdirSync(path.join(this.config.baseDir,uplaodBasePath,dirName));
    // // 生成写入路径
    // const target = path.join(this.config.baseDir, uplaodBasePath, dirName, filename);
    // // 写入流
    // const writeStream = fs.createWriteStream(target);
    // try {
    //   // 写入文件
    //   await writeStream(stream.pipe(writeStream));
    // } catch (err) {
    //   // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
    //   // await sendToWormhole(stream);
    //   throw err;
    // }
    // ctx.body = stream.fields;
  // })x
  }

}

module.exports = HomeController;
