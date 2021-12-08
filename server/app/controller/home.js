/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-07 16:35:12
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-08 19:56:00
 */
'use strict';
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let reqToken = ctx.cookies.get('token')

    console.log(ctx.session,'ctx.verify', ctx.session.userId === reqToken)
    let md5 = crypto.createHash("md5").update('123456').digest('hex')
    let decode = crypto.createHash('md5').update(md5).digest('hex')
    let token = jwt.sign({id: 1}, '123456')
    ctx.cookies.set('token', token)
    ctx.session.userId = token
    ctx.body = {
      // data: {
      //   md5,decode
      // },
      // token,
      session: ctx.session
    }

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
