module.exports = class CountTime {
  apply(compiler) {
    let self = this
    compiler.hooks.entryOption.tap('CountTime', (complation) => {
      self.startTime = Date.now()
      console.log('开始记录')
    })

    compiler.hooks.done.tap('CountTime', (complation) => {
      console.log('记录完成')
      self.endTime = Date.now()
      console.log('编译耗时：' + (self.endTime - self.startTime) + 'ms')
    })
  }
}