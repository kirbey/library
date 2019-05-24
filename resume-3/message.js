var APP_ID = '7EA9ksK7jKboGlgHHxsasTIg-gzGzoHsz';
var APP_KEY = 'I7drp9Oq0cPvMSCAq1ON4aPp';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
  .then(
    function (messages) {
      let array = messages.map((item)=> item.attributes )
      array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item.content
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
      })
    }
  )

let myForm = document.querySelector('#postMessageForm')
console.log(myForm)
myForm.addEventListener('submit', function(e){
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'content': content
  }).then(function(object){
    window.location.reload()
    console.log(object)
  })
})

/*
var TestObject = AV.Object.extend('Massage');
var testObject = new TestObject();
testObject.save({
  words: 'World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/