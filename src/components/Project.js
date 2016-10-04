import React from 'react'

import Header from './Header'

import Discussion from './Discussion'
import Todo from './Todo'
import Posts from '../containers/Posts'

const Project = ({particle, single = false, navigate}) => {

    const posts = [
        {
            id: 0,
            display: Discussion,
            messages: [
                {
                    author: 3,
                    posted: '2:46 pm Aug 3, 2016',
                    title: 'Lorem Ipsum Dolor Sit Amit',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et orci at odio luctus laoreet eget ac ante. Integer laoreet turpis suscipit luctus tincidunt. Quisque enim augue, consectetur a arcu vel, elementum convallis justo. Phasellus aliquam turpis eu justo luctus, egestas lacinia odio ultrices. Nunc et quam in eros consectetur fringilla. Integer pulvinar, tortor et scelerisque ultricies, ipsum nisl accumsan urna, eu iaculis massa enim vel mauris. Nunc sit amet mauris tincidunt, consectetur urna a, imperdiet ipsum. Donec ut massa vitae orci mattis maximus at at enim. Donec ultricies elit nec hendrerit finibus. In posuere, mauris eget ultricies rhoncus, justo justo tristique ipsum, a ornare diam libero non eros. Mauris consequat maximus massa. Aenean id elit eu nisl accumsan laoreet.',
                }
            ],
            members: [3, 4]
        },
        {
            id: 1,
            display: Todo,
            title: 'Lorem Ipsum',
            tasks: [
                {
                    author: 2,
                    id: 0,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                },
                {
                    author: 2,
                    id: 1,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: true,
                    title: 'Lorem Ipsum Dolor Sit',
                },
                {
                    author: 2,
                    id: 2,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                },
                {
                    author: 2,
                    id: 3,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                }
            ],
            members: [2, 4, 1]
        },
        {
            id: 2,
            display: Discussion,
            messages: [
                {
                    author: 4,
                    posted: '2:46 pm Aug 3, 2016',
                    title: 'Lorem Ipsum Dolor Sit Amit',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et orci at odio luctus laoreet eget ac ante. Integer laoreet turpis suscipit luctus tincidunt. Quisque enim augue, consectetur a arcu vel, elementum convallis justo. Phasellus aliquam turpis eu justo luctus, egestas lacinia odio ultrices. Nunc et quam in eros consectetur fringilla. Integer pulvinar, tortor et scelerisque ultricies, ipsum nisl accumsan urna, eu iaculis massa enim vel mauris. Nunc sit amet mauris tincidunt, consectetur urna a, imperdiet ipsum. Donec ut massa vitae orci mattis maximus at at enim. Donec ultricies elit nec hendrerit finibus. In posuere, mauris eget ultricies rhoncus, justo justo tristique ipsum, a ornare diam libero non eros. Mauris consequat maximus massa. Aenean id elit eu nisl accumsan laoreet.',
                }
            ],
            members: [0, 1, 2, 3, 4]
        },
        {
            id: 3,
            display: Discussion,
            messages: [
                {
                    author: 0,
                    posted: '2:46 pm Aug 3, 2016',
                    title: 'Lorem Ipsum Dolor Sit Amit',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et orci at odio luctus laoreet eget ac ante. Integer laoreet turpis suscipit luctus tincidunt. Quisque enim augue, consectetur a arcu vel, elementum convallis justo. Phasellus aliquam turpis eu justo luctus, egestas lacinia odio ultrices. Nunc et quam in eros consectetur fringilla. Integer pulvinar, tortor et scelerisque ultricies, ipsum nisl accumsan urna, eu iaculis massa enim vel mauris. Nunc sit amet mauris tincidunt, consectetur urna a, imperdiet ipsum. Donec ut massa vitae orci mattis maximus at at enim. Donec ultricies elit nec hendrerit finibus. In posuere, mauris eget ultricies rhoncus, justo justo tristique ipsum, a ornare diam libero non eros. Mauris consequat maximus massa. Aenean id elit eu nisl accumsan laoreet.',
                }
            ],
            members: [0, 3]
        },
        {
            id: 4,
            display: Todo,
            title: 'Lorem Ipsum',
            tasks: [
                {
                    author: 2,
                    id: 0,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                },
                {
                    author: 2,
                    id: 1,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: true,
                    title: 'Lorem Ipsum Dolor Sit',
                },
                {
                    author: 2,
                    id: 2,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                },
                {
                    author: 2,
                    id: 3,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                }
            ],
            members: [2, 4, 1]
        },
        {
            id: 5,
            display: Todo,
            title: 'Lorem Ipsum',
            tasks: [
                {
                    author: 2,
                    id: 0,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                },
                {
                    author: 2,
                    id: 1,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: true,
                    title: 'Lorem Ipsum Dolor Sit',
                },
                {
                    author: 2,
                    id: 2,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                },
                {
                    author: 2,
                    id: 3,
                    posted: '2:46 pm Aug 3, 2016',
                    dueDate: '2:46 pm Aug 3, 2016',
                    complete: false,
                    title: 'Lorem Ipsum Dolor Sit Amit',
                }
            ],
            members: [2, 4, 1]
        },
        {
            id: 6,
            display: Discussion,
            messages: [
                {
                    author: 2,
                    posted: '2:46 pm Aug 3, 2016',
                    title: 'Lorem Ipsum Dolor Sit Amit',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et orci at odio luctus laoreet eget ac ante. Integer laoreet turpis suscipit luctus tincidunt. Quisque enim augue, consectetur a arcu vel, elementum convallis justo. Phasellus aliquam turpis eu justo luctus, egestas lacinia odio ultrices. Nunc et quam in eros consectetur fringilla. Integer pulvinar, tortor et scelerisque ultricies, ipsum nisl accumsan urna, eu iaculis massa enim vel mauris. Nunc sit amet mauris tincidunt, consectetur urna a, imperdiet ipsum. Donec ut massa vitae orci mattis maximus at at enim. Donec ultricies elit nec hendrerit finibus. In posuere, mauris eget ultricies rhoncus, justo justo tristique ipsum, a ornare diam libero non eros. Mauris consequat maximus massa. Aenean id elit eu nisl accumsan laoreet.',
                }
            ],
            members: [0, 1, 2, 3, 4]
        },
        {
            id: 7,
            display: Discussion,
            messages: [
                {
                    author: 4,
                    posted: '2:46 pm Aug 3, 2016',
                    title: 'Lorem Ipsum Dolor Sit Amit',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et orci at odio luctus laoreet eget ac ante. Integer laoreet turpis suscipit luctus tincidunt. Quisque enim augue, consectetur a arcu vel, elementum convallis justo. Phasellus aliquam turpis eu justo luctus, egestas lacinia odio ultrices. Nunc et quam in eros consectetur fringilla. Integer pulvinar, tortor et scelerisque ultricies, ipsum nisl accumsan urna, eu iaculis massa enim vel mauris. Nunc sit amet mauris tincidunt, consectetur urna a, imperdiet ipsum. Donec ut massa vitae orci mattis maximus at at enim. Donec ultricies elit nec hendrerit finibus. In posuere, mauris eget ultricies rhoncus, justo justo tristique ipsum, a ornare diam libero non eros. Mauris consequat maximus massa. Aenean id elit eu nisl accumsan laoreet.',
                }
            ],
            members: [0, 3]
        }
    ]

    return (

        <div className={'project' + (single ? ' project-active' : ' project-card') } onClick={() => navigate(particle.type, particle.id)}>

            {/*<Header styles={{backgroundColor: particle.state.color}} />*/}

            <div className="project__splash" style={{backgroundColor: particle.state.color}}>

                <div className="project__lead">

                    <div className="project__title" style={{backgroundColor: particle.state.color}}>

                        <h1 className="project__name">{particle.title}</h1>

                        <h3 className="project__subject">{particle.subject}</h3>

                    </div>

                    <h5 className="project__description">{particle.content}</h5>

                </div>

            </div>

            <div className="project__content">

                <h1 className="project__heading">All</h1>

                {
                    single ? <Posts posts={posts} /> : ''
                }

            </div>

        </div>

    )

}

export default Project