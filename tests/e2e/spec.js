// var app = require('../../server.js')
// var request = require('supertest')
// request(app)
// describe('Protractor Demo App', function () {
//   var firstNumber = element(by.model('first'))
//   var secondNumber = element(by.model('second'))
//   var goButton = element(by.id('gobutton'))
//   var latestResult = element(by.binding('latest'))
//   var history = element.all(by.repeater('result in memory'))

//   function add (a, b) {
//     firstNumber.sendKeys(a)
//     secondNumber.sendKeys(b)
//     goButton.click()
//   }

//   beforeEach(function () {
//     browser.get('http://localhost:3000/signin')
//   })

//   it('should have a history', function () {
//     add(1, 2)
//     add(3, 4)

//     expect(history.count()).toEqual(2)

//     add(5, 6)

//     expect(history.count()).toEqual(3); // This is wrong!
//   })
//   it('should have a history', function () {
//     add(1, 2)
//     add(3, 4)

//     expect(history.last().getText()).toContain('1 + 2')
//     expect(history.first().getText()).toContain('3 + 4'); // This is wrong!
//   })
//   it('should fail to find a non-existent element', function () {
//     browser.pause()

//     // This element doesn't exist, so this fails.
//     var nonExistant = element(by.binding('nopenopenope')).getText()
//   })
//   it('should fail to find a non-existent element', function() {
//     browser.get('app/index.html#/form')

//     // Run this statement before the line which fails. If protractor is run
//     // with the debugger (protractor debug <...>), the test
//     // will pause after loading the webpage but before trying to find the
//     // element.
//     browser.debugger()

//     // This element doesn't exist, so this fails.
//     var nonExistant = element(by.binding('nopenopenope')).getText()
//   })

//   // at the top of the test spec:
//   var fs = require('fs')

//   // ... other code

//   // abstract writing screen shot to a file
//   function writeScreenShot (data, filename) {
//     var stream = fs.createWriteStream(filename)

//     stream.write(new Buffer(data, 'base64'))
//     stream.end()
//   }

//   // ...

// // within a test:
// browser.takeScreenshot().then(function (png) {
//   writeScreenShot(png, 'exception.png')
// })
// })
