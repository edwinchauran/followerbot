module.exports = {
        title : 'Everve | Social Media Exchange on steroids',
        ytTitle: 'Youtube',
        url : {
            subscribe : 'https://everve.net/tasks/youtube-subscribes/',
            view: 'https://everve.net/tasks/youtube-views/',
            likes : 'https://everve.net/tasks/youtube-likes/',
            dislikes : 'https://everve.net/tasks/youtube-dislikes/'
        },
        viewButtons : {
            viewVideo : '//*[@id="tasks_list_table"]/tbody/tr[1]/td[3]/a'
        },
        task : '//html/body/div[4]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/a',
        next : 'Next',
        subscribe : '.style-scope .yt-button-renderer .style-blue-text .size-default',
        unsubscribe1 : '.style-scope .ytd-subscribe-button-renderer',
        ytLogo : '//*[@id="logo-icon-container"]'
}