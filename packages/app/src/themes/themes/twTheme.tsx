import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import { BackstageTheme, createTheme, lightTheme } from '@backstage/theme';
import Background2 from './tw_illustration_159.jpg';
import Background3 from './tw_illustration_132.jpg';

import { AutocompleteClassKey } from '@material-ui/lab/Autocomplete';
import { AlertClassKey } from '@material-ui/lab/Alert';

// Labs types not included in overrides; https://github.com/mui/material-ui/issues/19427
declare module '@material-ui/core/styles/overrides' {
    export interface ComponentNameToClassKey {
        MuiAlert: AlertClassKey;
        MuiAutocomplete: AutocompleteClassKey;
    }
}

const baseTheme = createTheme({
    palette: {
        ...lightTheme.palette,
        text: {
            primary: '#666666',
        },
        primary: {
            main: '#263D76',
            light: '#FF0000',
            dark: '#4A62A6',
        },
        secondary: {
            main: '#263D76',
            light: '#FFAB00',
            dark: '#6554C0',
        },
        action: {
            ...lightTheme.palette.action,
        },
        navigation: {
            ...lightTheme.palette.navigation,
            background: '#263D76',
            color: '#FFFFFF',
            indicator: '#666666',
            navItem: {
                hoverBackground: '#4A62A6',
            },
        },
    },
    fontFamily:'Inter,Noto Sans SC,sans-serif',
    defaultPageTheme: 'home',
});

const createCustomThemeOverrides = (
    theme: BackstageTheme,
): BackstageOverrides & CatalogReactOverrides => {
    return {
        BackstageHeader: {
            header: {
                backgroundImage: 'none',
                backgroundColor: '#263D76',
                boxShadow: 'unset',
                paddingBottom: theme.spacing(1),
                height: '100px',
            },
            title: {
                color: '#FFFFFF',
                fontWeight: 500,
            },
            subtitle: {
                color: '#FFFFFF',
                fontWeight: 500,
                fontSize: '1rem',
            },
            type: {
                color: theme.palette.primary.dark,
            },
            breadcrumb:{
                color: '#003D4F'
            }
        },
        BackstageHeaderLabel: {
            label: {
                color: '#003D4F',
            },
            value: {
                color: '#003D4F',
            },
        },
        BackstageSidebarItem: {
            label: {
                fontSize: '1rem',
                fontWeight: 600,
            },
            selected: {
                borderLeft: 'solid 3px #46a1ac !important',
                h6: {
                    fontWeight: '900'
                }
            }
        },
        BackstageSidebarDivider: {
            root: {
                background: '#606e73',
                marginBottom: '0px'
            }
        },
        BackstageItemCardHeader: {
            root: {
                backgroundImage: `url(${Background3}) !important`,
                '& h4': {
                    padding: '10px',
                    background: '#003D4F'
                },
            }
        },
        CatalogReactUserListPicker: {
            title: {
                textTransform: 'none',
            },
        },
        MuiTypography: {
            displayBlock: {
                color: '#003D4F',
            },
        },
        MuiIconButton: {
            root: {
                backgroundColor: '#e1e2e2',
                color: '#013d4f !important',
                '&:hover': {
                    backgroundColor: '#e1e2e2',
                    color: '#f1617a !important',
                },
            },
        },
        BackstageInfoCard: {
            headerTitle: {
                fontWeight: 600,
            }
        }
    }};

export const twTheme: BackstageTheme = {
    ...baseTheme,
    overrides: {
        ...createCustomThemeOverrides(baseTheme),
        ...baseTheme.overrides,
    },
};