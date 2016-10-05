var faker = require('faker')

module.exports = function () {

    var particles = []

    var quantize = function(parent, author, classification, title, subject, content, state) {

        parent = parent || 0
        author = author || 1
        classification = classification || 'project'
        title = title || ''
        subject = subject || ''
        content = content || ''
        state = state || {}

        particles.push({
            id: particles.length + 1,
            parent: parent,
            author: author,
            classification: classification,
            title: title,
            subject: subject,
            content: content,
            state: state
        })

    }

    var energize = function(classification, count) {

        classification = classification || 'project'
        count = count || 5

        for (var i = 0; i < count; i ++) {

            var particle = particalLookup[classification]()

            quantize(particle.parent, particle.author, particle.classification, particle.title, particle.subject, particle.content, particle.state)

        }

    }

    var particalLookup = {

        project: function () {

            return (

                {
                    classification: 'project',
                    parent: 0,
                    author: particles.filter( particle => particle.classification === 'member' )[0].id,
                    title: faker.commerce.productName(),
                    subject: faker.lorem.sentence(Math.floor(Math.random() * 6) + 3, 7),
                    content: faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1),
                    state: {
                        color: faker.internet.color(),
                        members: [0, 2, 4]
                    }
                }

            )

        },

        discussion: function() {

            return (

                {
                    classification: 'discussion',
                    parent: particles.filter( particle => particle.classification === 'project' )[0].id,
                    author: particles.filter( particle => particle.classification === 'member' )[0].id,
                    title: faker.lorem.words(Math.floor(Math.random() * 6) + 3),
                    subject: faker.lorem.sentence(Math.floor(Math.random() * 6), 7),
                    content: faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1),
                    state: {}
                }

            )

        },

        message: function() {

            return (

                {
                    classification: 'message',
                    parent: particles.filter( particle => particle.classification === 'discussion' )[0].id,
                    author: particles.filter( particle => particle.classification === 'member' )[0].id,
                    title: '',
                    subject: '',
                    content: faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1),
                    state: {}
                }

            )

        },

        member: function() {

            return (

                {
                    classification: 'member',
                    parent: 0,
                    author: 0,
                    title: '',
                    subject: '',
                    content: '',
                    state: {
                        fname: faker.name.firstName(),
                        lname: faker.name.lastName(),
                        avatar: faker.image.avatar(),
                    }
                }

            )

        }

    }

    energize('member')
    energize('project')
    energize('discussion')
    energize('message', 45)

    return {particles: particles}

}