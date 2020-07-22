export default theme => ({
    root: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'auto-fit',
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        }
    },
    empty: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gridColumn: '1 / -1',
        
    }
});
