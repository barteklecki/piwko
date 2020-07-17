export default theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem',
        gridAutoRows: 'minmax(300px, auto)',
        gridAutoColumns: 'minmax(300px, auto)', 
    },
    filters: {
        gridColumn: '1 / -1',
    },
});
