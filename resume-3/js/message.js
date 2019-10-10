!function () {
  var view = document.querySelector('section.message')

  var model = {
    //初始化AV
    initAV: function () {
      var APP_ID = '7EA9ksK7jKboGlgHHxsasTIg-gzGzoHsz'
      var APP_KEY = 'I7drp9Oq0cPvMSCAq1ON4aPp'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    //获取数据
    fetch: function () {
      var query = new AV.Query('Message');
      return query.find() //promise 对象
    },
    //创建数据
    save: function (name, content) {
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({ // promise 对象
        'name': name,
        'content': content
      })
    }
    
  }

  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view,model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.initAV()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item) => item.attributes)
          array.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = `${item.name}: ${item.content}`
            this.messageList.append(li)
          })
        }
      )
    },
    bindEvents: function () {
      this.form.addEventListener('submit',  (e) => {
        e.preventDefault()
        this.saveMessages()
      })
    },
    saveMessages: function () {
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      if(content == ''){
        return
      }else if(name == ''){
        return
      }else{
        this.model.save(name, content).then(function (object) {
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}: ${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.append(li)
          myForm.querySelector('input[name=content]').value = ''
          myForm.querySelector('input[name=name]').value = ''
      })
      }

    }
  }
  controller.init(view, model)
}.call()