var faker = require('faker')

module.exports = function () {

    var particles = []

    var quantize = function(parent, author, type, title, subject, content, state) {

        parent = parent || 0
        author = author || 1
        type = type || 'project'
        title = title || ''
        subject = subject || ''
        content = content || ''
        state = state || {}

        particles.push({
            id: particles.length + 1,
            parent: parent,
            author: author,
            type: type,
            title: title,
            subject: subject,
            content: content,
            state: state
        })

    }

    var energize = function(type, count) {

        type = type || 'project'
        count = count || 5

        for (var i = 0; i < count; i ++) {

            var particle = particalLookup[type]()

            quantize(particle.parent, particle.author, particle.type, particle.title, particle.subject, particle.content, particle.state)

        }

    }

    var particalLookup = {

        project: function () {

            return (

                {
                    type: 'project',
                    parent: 0,
                    author: particles.filter( particle => particle.type === 'member' )[0].id,
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
                    type: 'discussion',
                    parent: particles.filter( particle => particle.type === 'project' )[faker.random.number(particles.filter( particle => particle.type === 'project').length)],
                    author: particles.filter( particle => particle.type === 'member' )[0].id,
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
                    type: 'message',
                    parent: particles.filter( particle => particle.type === 'discussion' )[faker.random.number(particles.filter( particle => particle.type === 'discussion').length)],
                    author: particles.filter( particle => particle.type === 'member' )[0].id,
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
                    type: 'member',
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