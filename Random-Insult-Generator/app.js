var bodyParts = ['face', 'belly', 'eye', 'mouth', 'hair', 'hand' , 'leg'];

var adjetives = ['big', 'curvy', 'exotic', 'long'];

var words = ['worm', 'pus', 'dirt', 'cracked', 'ballon'];

randomBodyPart = bodyParts[Math.floor(Math.random() * 7)]
randomAdjective = adjetives[Math.floor(Math.random() * 4)]
randomWord = words[Math.floor(Math.random() * 5)]

console.log('Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord)