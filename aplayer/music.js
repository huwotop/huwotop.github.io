
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: '那些女孩教我的事',
            artist: '品冠',
            url: 'https://dav.huwo.top/那些女孩教我的事 - 品冠.mp3',
            cover: '/aplayer/品冠.jpg',
            lrc: 'https://dav.huwo.top/那些女孩教我的事 - 品冠.lrc'
        },
        {
            name: '陪你一起老',
            artist: '品冠',
            url: 'https://dav.huwo.top/陪你一起老 - 品冠.mp3',
            cover: '/aplayer/品冠.jpg',
            lrc: 'https://dav.huwo.top/陪你一起老 - 品冠.lrc'
        }
    ]
});