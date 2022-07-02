import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/jordangomes/killjoy.blog.git', // Update to point to your repository
        user: {
            name: 'Jordan Gomes', // update to use your name
            email: 'me@jordangomes.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);