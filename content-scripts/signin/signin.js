chrome.runtime.sendMessage({
  method: 'getConfig',
}, function(response) {
  if (response.cfg_signin === false) return

  (function() {
    // 先判断今天有没有签到过，如果有，则直接返回 
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    const todayStr = [year, month, day].join('-')

    // 读取数据，第一个参数是指定要读取的 key 以及设置默认值
    chrome.storage.sync.get({lastSigninDate: ''}, function(items) {
      if (items.lastSigninDate === todayStr) return // 今天已经签到过了

      // 保存数据
      chrome.storage.sync.set({lastSigninDate: todayStr}, function() {})

      $.get('//www.v2ex.com/mission/daily', res => {
        const isSignin = !res.includes('领取 X 铜币')
        if (isSignin) return

        const p = /\/mission\/daily\/redeem\?once=\d+/
        const api = p.exec(res)[0]

        $.get(api, res => {
          if (res.status === 200) {
            // 如果是首页，则替换
            if (!$('.fa.fa-gift').length) return 

            $('.fa.fa-gift').next().html('今日已签到')
            $('.fa.fa-gift').removeClass('fa-gift').addClass('fa-check')
          }
        })
      })
    });
  })()
});