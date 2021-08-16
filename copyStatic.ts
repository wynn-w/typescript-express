/*
 * @Description: 拷贝静态文件至生成目录
 */
import * as shelljs from "shelljs"

shelljs.cp("-r", "public", "build")
shelljs.cp("-r", "views", "build")