import { getUser } from '../data/storage.js';
const user = getUser();

const willy = {
    name: 'Uncle Willy',
    id: 'willy',
    detailimage: 'willy.jpg',
    description: 'Your loving uncle. He has radical opinions about virtually everything and doesn\'t have the best reputation with the rest of your family.',
    choices: { send: {            
        id: 'send',
        description: 'Send your uncle a message',
        result: 'It\'s good to hear from you! You want to come over for dinner next week?',
        resultimage: 'bad.png',
        health: -30,
        money: 0
    }, like: {
        id: 'like',
        description: 'Like a photo of your uncle',
        result: 'I’m glad someone in this family still likes me.',
        resultimage: 'good.png',
        health: 30,
        money: 0
    }, post: {
        id: 'post',
        description: 'Post a link on your uncle\'s wall',
        result: '*Because of your association with Willy, the rest of your family begins to question your beliefs.*',
        resultimage: 'bad.png',
        health: -20,
        money: -20
    } }
};

const highschool = {
    name: 'Craig Thomberbottom',
    id: 'highschool',
    detailimage: 'highschool.jpg',
    description: 'An acquaintance from high school. You used to go to the same parties. You might have had a conversation or two, but those years are kind of hazy.',
    choices: { send: {            
        id: 'send',
        description: 'Send Craig a private message',
        result: `${user.name}? Oh yeah, I remember you! You we're the one who drove thru a brick wall! That was crazy! Good times.`,
        resultimage: 'good.png',
        health: 20,
        money: 20
    }, like: {
        id: 'like',
        description: 'Like a photo of Craig',
        result: `${user.name} liked my post? Oh yeah, I think I went to high school with them.`,
        resultimage: 'neutral.png',
        health: 0,
        money: 0
    }, post: {
        id: 'post',
        description: 'Post a link on Craig\'s wall',
        result: 'Uh… Do I know you?',
        resultimage: 'bad.png',
        health: -40,
        money: -20
    } }
};

const ex = {
    name: 'Your Ex',
    id: 'ex',
    detailimage: 'ex.jpeg',
    description: 'This is your ex. Things didn\'t end well.',
    choices: { send: {            
        id: 'send',
        description: 'Send your ex a private message',
        result: 'Why don\'t you move on with your life already? It\'s been 3 days!',
        resultimage: 'bad.png',
        health: -30,
        money: -10
    }, like: {
        id: 'like',
        description: 'Like one of your ex\'s photos',
        result: '*You definitely look like your\'e stalking your ex.*',
        resultimage: 'bad.png',
        health: -5,
        money: -20
    }, post: {
        id: 'post',
        description: 'Post a link on your ex\'s wall',
        result: 'That\'s such a funny cat meme. I\'m glad we can still be friends.',
        resultimage: 'good.png',
        health: 30,
        money: 15
    } }
};

const boss = {
    name: 'Ellen Ellerson',
    id: 'boss',
    detailimage: 'boss.jpg',
    description: 'Your boss. Gives you work. Gives you money. Respected and loved by all.',
    choices: { send: {            
        id: 'send',
        description: 'Send Ms. Ellerson a direct message',
        result: 'Shouldn\'t you be working?',
        resultimage: 'bad.png',
        health: -30,
        money: -30
    }, like: {
        id: 'like',
        description: 'Like a photo of Ms. Ellerson',
        result: 'You know I\'m married, right?',
        resultimage: 'bad.png',
        health: -30,
        money: -30
    }, post: {
        id: 'post',
        description: 'Post a link on Ms. Ellerson\'s wall',
        result: 'That\'s a great article! I like how you think.',
        resultimage: 'good.png',
        health: 30,
        money: 30
    } }
};

const friendArray = [willy, highschool, ex, boss];

export default friendArray;