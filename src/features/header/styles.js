export default theme => ({
    header: {
        display: 'flex',
        whiteSpace: 'normal',
        margin: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    logo: {
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        margin: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            width: '6rem',
            height: '6rem',
            margin: theme.spacing(1),
            order: 1,
        }
    },
    button: { 
        minWidth: '150px',
        height: '3rem',
        margin: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: theme.spacing(1),
            order: 2,
        }
    },
});
