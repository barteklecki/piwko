export default theme => ({
    root: {
        display: 'flex',
        padding: theme.spacing(2),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '0 1 auto',
        flexDirection: 'column',
        alignItems: 'space-between',
    },
    cover: {
        width: 151,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});
