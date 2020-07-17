export default theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        maxWidth: '800px',
        margin: 'auto',
        padding: '1rem 1rem 2rem 1rem',
    },
    summary: {
        minWidth: '50%',
        maxWidth: '450px',
        textAlign: 'center',
    },
    cover: {
        minWidth: 300,
        minHeight: 400,
        backgroundColor: '#12121210',
        marginTop: '1rem',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 90%',
    },
    content: {
        textAlign: 'left',
        margin: '1rem',
    },
    rating: {
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: '1rem',
    },
    text: {
        marginTop: '1rem',
    },
});
