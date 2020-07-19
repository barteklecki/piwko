export default theme => ({
    header: {
        display: 'flex',
        whiteSpace: 'normal',
        minWidth: '300px',
        margin: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        margin: theme.spacing(2),
    },
    button: { 
        minWidth: '100px',
        margin: theme.spacing(2),
    },
});
