export default theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '50px auto',
        gridGap: '1rem',
        gridAutoRows: 'minmax(300px, auto)',
        gridAutoColumns: 'minmax(300px, auto)', 
    },
});
