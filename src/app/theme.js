import {createMuiTheme} from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#ffd0c7',
            main: '#ff6344',
        },
    },
    overrides: {
        MuiListItem: {
          root: {
            "&$selected": {
              backgroundColor: '#ff6344',
              '&:hover': {
                backgroundColor: '#ff6344',
            }
            },
          },
        },
    },
});

export default darkTheme;
