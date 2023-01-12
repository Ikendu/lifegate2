const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
	console.log(`data received for user ${name} and id ${id}`)
})
customEmitter.on('response', () => {
	console.log(`other logic goes here`)
})
customEmitter.emit('response', 'John', 32)