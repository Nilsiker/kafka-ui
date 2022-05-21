/* eslint-disable import/prefer-default-export */
export const Colors = {
  neutral: {
    '0': '#FFFFFF',
    '3': '#f9fafa',
    '4': '#f0f0f0',
    '5': '#F1F2F3',
    '10': '#E3E6E8',
    '15': '#D5DADD',
    '20': '#C7CED1',
    '25': '#C4C4C4',
    '30': '#ABB5BA',
    '40': '#8F9CA3',
    '50': '#73848C',
    '60': '#5C6970',
    '70': '#454F54',
    '80': '#2F3639',
    '90': '#2d3336',
    '100': '#000',
  },
  transparency: {
    '10': 'rgba(10, 10, 10, 0.1)',
    '20': 'rgba(0, 0, 0, 0.1)',
    '50': 'rgba(34, 41, 47, 0.5)',
  },
  green: {
    '10': '#D6F5E0',
    '15': '#C2F0D1',
    '30': '#85E0A3',
    '40': '#5CD685',
    '60': '#29A352',
  },
  brand: {
    '5': '#e8e8fc',
    '10': '#D1D1FA',
    '20': '#A3A3F5',
    '50': '#4C4CFF',
    '60': '#1717CF',
    '70': '#1414B8',
  },
  red: {
    '10': '#FAD1D1',
    '20': '#F5A3A3',
    '50': '#E51A1A',
    '55': '#CF1717',
    '60': '#B81414',
  },
  yellow: {
    '10': '#FFEECC',
    '20': '#FFDD57',
  },
  blue: {
    '10': '#e3f2fd',
    '20': '#bbdefb',
    '30': '#90caf9',
    '40': '#485fc7',
  },
};

export const DarkModeColors = {
  neutral: {
    '0': '#2e2d2d',
    '3': '#252525',
    '4': '#303030',
    '5': '#525252',
    '10': '#3a3838',
    '15': '#454545',
    '20': '#505050',
    '25': '#666666',
    '30': '#999999',
    '40': '#888888',
    '50': '#BBBBBB',
    '60': '#BBBBBB',
    '70': '#BBBBBB',
    '80': '#CCCCCC',
    '90': '#DDDDDD',
    '100': '#FFFFFF',
  },
  transparency: {
    '10': 'rgba(10, 10, 10, 0.1)',
    '20': 'rgba(0, 0, 0, 0.1)',
    '50': 'rgba(34, 41, 47, 0.5)',
  },
  green: {
    '10': '#5e856b',
    '15': '#627769',
    '30': '#428057',
    '40': '#267e43',
    '60': '#114422',
  },
  brand: {
    '5': '#E8E8FC',
    '10': '#D1D1FA',
    '20': '#A3A3F5',
    '50': '#A3A3F5',
    '60': '#A3A3F5',
    '70': '#A3A3F5',
  },
  red: {
    '10': '#FAD1D1',
    '20': '#F5A3A3',
    '50': '#E51A1A',
    '55': '#CF1717',
    '60': '#B81414',
  },
  yellow: {
    '10': '#FFEECC',
    '20': '#FFDD57',
  },
  blue: {
    '10': '#e3f2fd',
    '20': '#bbdefb',
    '30': '#90caf9',
    '40': '#64b5f6',
  },
};

const theme = {
  layout: {
    minWidth: '1200px',
    navBarWidth: '201px',
    navBarHeight: '3.25rem',
    stuffColor: Colors.neutral[5],
    stuffBorderColor: Colors.neutral[10],
    overlay: {
      backgroundColor: Colors.neutral[50],
    },
  },
  panelColor: Colors.neutral[0],
  breadcrumb: Colors.neutral[30],
  connectEditWarning: Colors.yellow[10],
  dropdown: {
    color: Colors.red[50],
  },
  ksqlDb: {
    query: {
      editor: {
        readonly: {
          background: Colors.neutral[3],
          selection: {
            backgroundColor: 'transparent',
          },
          cursor: {
            color: 'transparent',
          },
        },
      },
    },
  },
  heading: {
    h1: {
      color: Colors.neutral[90],
    },
    h3: {
      color: Colors.neutral[50],
      fontSize: '14px',
    },
    base: {
      fontFamily: 'Inter, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      color: Colors.neutral[100],
    },
    variants: {
      1: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      2: {
        fontSize: '20px',
        lineHeight: '32px',
      },
      3: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      4: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      5: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      6: {
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
  },
  lastestVersionItem: {
    metaDataLabel: {
      color: Colors.neutral[50],
    },
  },
  alert: {
    color: {
      error: Colors.red[10],
      success: Colors.green[10],
      warning: Colors.yellow[10],
      info: Colors.neutral[10],
    },
    shadow: Colors.transparency[20],
  },
  circularAlert: {
    color: {
      error: Colors.red[50],
      success: Colors.green[40],
      warning: Colors.yellow[10],
      info: Colors.neutral[10],
    },
  },
  button: {
    primary: {
      backgroundColor: {
        normal: Colors.brand[5],
        hover: Colors.brand[10],
        active: Colors.brand[20],
        disabled: Colors.neutral[5],
      },
      color: Colors.neutral[90],
      invertedColors: {
        normal: Colors.brand[50],
        hover: Colors.brand[60],
        active: Colors.brand[60],
      },
    },
    secondary: {
      backgroundColor: {
        normal: Colors.neutral[5],
        hover: Colors.neutral[10],
        active: Colors.neutral[15],
      },
      color: Colors.neutral[90],
      invertedColors: {
        normal: Colors.neutral[50],
        hover: Colors.neutral[70],
        active: Colors.neutral[90],
      },
    },
    danger: {
      backgroundColor: {
        normal: Colors.red[50],
        hover: Colors.red[55],
        active: Colors.red[60],
        disabled: Colors.red[20],
      },
      color: Colors.neutral[90],
      invertedColors: {
        normal: Colors.brand[50],
        hover: Colors.brand[60],
        active: Colors.brand[60],
      },
    },
    height: {
      S: '24px',
      M: '32px',
      L: '40px',
    },
    fontSize: {
      S: '14px',
      M: '14px',
      L: '16px',
    },
    border: {
      normal: Colors.neutral[50],
      hover: Colors.neutral[70],
      active: Colors.neutral[90],
    },
  },
  menu: {
    backgroundColor: {
      normal: Colors.neutral[0],
      hover: Colors.neutral[3],
      active: Colors.neutral[5],
    },
    color: {
      normal: Colors.neutral[50],
      hover: Colors.neutral[70],
      active: Colors.brand[70],
      isOpen: Colors.neutral[90],
    },
    statusIconColor: {
      online: Colors.green[40],
      offline: Colors.red[50],
      initializing: Colors.yellow[20],
    },
    chevronIconColor: Colors.neutral[50],
  },
  version: {
    currentVersion: {
      color: Colors.neutral[30],
    },
    symbolWrapper: {
      color: Colors.neutral[30],
    },
  },
  schema: {
    backgroundColor: {
      tr: Colors.neutral[5],
      div: Colors.neutral[0],
    },
  },
  modal: {
    backgroundColor: Colors.neutral[0],
    border: {
      top: Colors.neutral[5],
      bottom: Colors.neutral[5],
    },
    overlay: Colors.transparency[10],
    shadow: Colors.transparency[20],
    deletionTextColor: Colors.neutral[70],
  },
  table: {
    th: {
      backgroundColor: {
        normal: Colors.neutral[0],
      },
      color: {
        normal: Colors.neutral[50],
        hover: Colors.brand[50],
        active: Colors.brand[50],
      },
      previewColor: {
        normal: Colors.brand[50],
      },
    },
    td: {
      color: {
        normal: Colors.neutral[90],
      },
    },
    tr: {
      backgroundColor: {
        hover: Colors.neutral[5],
      },
    },
    link: {
      color: {
        normal: Colors.blue[40],
      },
    },
  },
  primaryTab: {
    color: {
      normal: Colors.neutral[50],
      hover: Colors.neutral[90],
      active: Colors.neutral[90],
    },
    borderColor: {
      normal: 'transparent',
      hover: 'transparent',
      active: Colors.brand[50],
      nav: Colors.neutral[10],
    },
  },
  secondaryTab: {
    backgroundColor: {
      normal: Colors.neutral[0],
      hover: Colors.neutral[5],
      active: Colors.neutral[10],
    },
    color: {
      normal: Colors.neutral[50],
      hover: Colors.neutral[90],
      active: Colors.neutral[90],
    },
  },
  select: {
    backgroundColor: {
      normal: Colors.neutral[0],
      hover: Colors.neutral[10],
      active: Colors.neutral[10],
    },
    color: {
      normal: Colors.neutral[90],
      hover: Colors.neutral[90],
      active: Colors.neutral[90],
      disabled: Colors.neutral[30],
    },
    borderColor: {
      normal: Colors.neutral[30],
      hover: Colors.neutral[50],
      active: Colors.neutral[70],
      disabled: Colors.neutral[10],
    },
    optionList: {
      scrollbar: {
        backgroundColor: Colors.neutral[30],
      },
    },
  },
  input: {
    borderColor: {
      normal: Colors.neutral[30],
      hover: Colors.neutral[50],
      focus: Colors.neutral[70],
      disabled: Colors.neutral[10],
    },
    color: {
      placeholder: {
        normal: Colors.neutral[30],
        readOnly: Colors.neutral[30],
      },
      disabled: Colors.neutral[30],
      readOnly: Colors.neutral[90],
    },
    backgroundColor: {
      readOnly: Colors.neutral[5],
    },
    error: Colors.red[50],
    icon: {
      color: Colors.neutral[70],
    },
    label: {
      color: Colors.neutral[70],
    },
  },
  textArea: {
    borderColor: {
      normal: Colors.neutral[30],
      hover: Colors.neutral[50],
      focus: Colors.neutral[70],
      disabled: Colors.neutral[10],
    },
    color: {
      placeholder: {
        normal: Colors.neutral[30],
        focus: {
          normal: 'transparent',
          readOnly: Colors.neutral[30],
        },
      },
      disabled: Colors.neutral[30],
      readOnly: Colors.neutral[90],
    },
    backgroundColor: {
      readOnly: Colors.neutral[5],
    },
  },
  tag: {
    backgroundColor: {
      green: Colors.green[10],
      gray: Colors.neutral[5],
      yellow: Colors.yellow[10],
      white: Colors.neutral[10],
      red: Colors.red[10],
      blue: Colors.blue[10],
    },
    color: Colors.neutral[90],
  },
  pagination: {
    backgroundColor: Colors.neutral[0],
    currentPage: Colors.neutral[10],
    borderColor: {
      normal: Colors.neutral[30],
      hover: Colors.neutral[50],
      active: Colors.neutral[70],
      disabled: Colors.neutral[20],
    },
    color: {
      normal: Colors.neutral[90],
      hover: Colors.neutral[90],
      active: Colors.neutral[90],
      disabled: Colors.neutral[20],
    },
  },
  switch: {
    unchecked: Colors.brand[20],
    checked: Colors.brand[50],
    circle: Colors.neutral[0],
    disabled: Colors.neutral[10],
  },
  pageLoader: {
    borderColor: Colors.brand[50],
    borderBottomColor: Colors.neutral[0],
  },
  metrics: {
    backgroundColor: Colors.neutral[5],
    indicator: {
      backgroundColor: Colors.neutral[0],
      titleColor: Colors.neutral[50],
      warningTextColor: Colors.red[50],
      lightTextColor: Colors.neutral[30],
    },
    filters: {
      color: {
        icon: Colors.neutral[90],
        normal: Colors.neutral[50],
      },
    },
  },
  scrollbar: {
    trackColor: {
      normal: Colors.neutral[0],
      active: Colors.neutral[5],
    },
    thumbColor: {
      normal: Colors.neutral[0],
      active: Colors.neutral[50],
    },
  },
  consumerTopicContent: {
    backgroundColor: Colors.neutral[5],
  },
  topicFormLabel: {
    color: Colors.neutral[50],
  },
  topicMetaData: {
    backgroundColor: Colors.neutral[5],
    color: {
      label: Colors.neutral[50],
      value: Colors.neutral[80],
      meta: Colors.neutral[30],
    },
  },
  dangerZone: {
    borderColor: Colors.neutral[10],
    color: Colors.red[50],
  },
  configList: {
    color: Colors.neutral[30],
  },
  topicsList: {
    color: {
      normal: Colors.neutral[90],
      hover: Colors.neutral[50],
      active: Colors.neutral[90],
    },
    backgroundColor: {
      hover: Colors.neutral[5],
      active: Colors.neutral[10],
    },
  },
  icons: {
    closeIcon: Colors.neutral[30],
    warningIcon: Colors.yellow[20],
    messageToggleIcon: {
      normal: Colors.brand[50],
      hover: Colors.brand[20],
      active: Colors.brand[60],
    },
    verticalElipsisIcon: Colors.neutral[50],
    liveIcon: {
      circleBig: Colors.red[10],
      circleSmall: Colors.red[50],
    },
    newFilterIcon: Colors.brand[50],
    closeModalIcon: Colors.neutral[25],
    savedIcon: Colors.brand[50],
  },
  viewer: {
    wrapper: Colors.neutral[3],
  },
  savedFilterDivider: {
    color: Colors.neutral[15],
  },
  editFilterText: {
    color: Colors.brand[50],
  },
};

const darkModeTheme = {
  layout: {
    minWidth: '1200px',
    navBarWidth: '201px',
    navBarHeight: '3.25rem',
    stuffColor: DarkModeColors.neutral[5],
    stuffBorderColor: DarkModeColors.neutral[10],
    overlay: {
      backgroundColor: DarkModeColors.neutral[50],
    },
  },
  panelColor: DarkModeColors.neutral[0],
  breadcrumb: DarkModeColors.neutral[30],
  connectEditWarning: DarkModeColors.yellow[10],
  dropdown: {
    color: DarkModeColors.red[50],
  },
  ksqlDb: {
    query: {
      editor: {
        readonly: {
          background: DarkModeColors.neutral[3],
          selection: {
            backgroundColor: 'transparent',
          },
          cursor: {
            color: 'transparent',
          },
        },
      },
    },
  },
  heading: {
    h1: {
      color: DarkModeColors.neutral[90],
    },
    h3: {
      color: DarkModeColors.neutral[50],
      fontSize: '14px',
    },
    base: {
      fontFamily: 'Inter, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      color: DarkModeColors.neutral[100],
    },
    variants: {
      1: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      2: {
        fontSize: '20px',
        lineHeight: '32px',
      },
      3: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      4: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      5: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      6: {
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
  },
  lastestVersionItem: {
    metaDataLabel: {
      color: DarkModeColors.neutral[50],
    },
  },
  alert: {
    color: {
      error: DarkModeColors.red[10],
      success: DarkModeColors.green[10],
      warning: DarkModeColors.yellow[10],
      info: DarkModeColors.neutral[10],
    },
    shadow: DarkModeColors.transparency[20],
  },
  circularAlert: {
    color: {
      error: DarkModeColors.red[50],
      success: DarkModeColors.green[40],
      warning: DarkModeColors.yellow[10],
      info: DarkModeColors.neutral[10],
    },
  },
  button: {
    primary: {
      backgroundColor: {
        normal: DarkModeColors.brand[5],
        hover: DarkModeColors.brand[10],
        active: DarkModeColors.brand[20],
        disabled: DarkModeColors.neutral[5],
      },
      color: DarkModeColors.neutral[20],
      invertedColors: {
        normal: DarkModeColors.brand[60],
        hover: DarkModeColors.brand[50],
        active: DarkModeColors.brand[60],
      },
    },
    secondary: {
      backgroundColor: {
        normal: DarkModeColors.neutral[5],
        hover: DarkModeColors.neutral[10],
        active: DarkModeColors.neutral[15],
      },
      color: DarkModeColors.neutral[90],
      invertedColors: {
        normal: DarkModeColors.neutral[50],
        hover: DarkModeColors.neutral[70],
        active: DarkModeColors.neutral[90],
      },
    },
    danger: {
      backgroundColor: {
        normal: DarkModeColors.red[50],
        hover: DarkModeColors.red[55],
        active: DarkModeColors.red[60],
        disabled: DarkModeColors.red[20],
      },
      color: DarkModeColors.neutral[90],
      invertedColors: {
        normal: DarkModeColors.brand[50],
        hover: DarkModeColors.brand[60],
        active: DarkModeColors.brand[60],
      },
    },
    height: {
      S: '24px',
      M: '32px',
      L: '40px',
    },
    fontSize: {
      S: '14px',
      M: '14px',
      L: '16px',
    },
    border: {
      normal: DarkModeColors.neutral[50],
      hover: DarkModeColors.neutral[70],
      active: DarkModeColors.neutral[90],
    },
  },
  menu: {
    backgroundColor: {
      normal: DarkModeColors.neutral[0],
      hover: DarkModeColors.neutral[3],
      active: DarkModeColors.neutral[5],
    },
    color: {
      normal: DarkModeColors.neutral[50],
      hover: DarkModeColors.neutral[70],
      active: DarkModeColors.brand[70],
      isOpen: DarkModeColors.neutral[90],
    },
    statusIconColor: {
      online: DarkModeColors.green[40],
      offline: DarkModeColors.red[50],
      initializing: DarkModeColors.yellow[20],
    },
    chevronIconColor: DarkModeColors.neutral[50],
  },
  version: {
    currentVersion: {
      color: DarkModeColors.neutral[30],
    },
    symbolWrapper: {
      color: DarkModeColors.neutral[30],
    },
  },
  schema: {
    backgroundColor: {
      tr: DarkModeColors.neutral[5],
      div: DarkModeColors.neutral[0],
    },
  },
  modal: {
    backgroundColor: DarkModeColors.neutral[0],
    border: {
      top: DarkModeColors.neutral[5],
      bottom: DarkModeColors.neutral[5],
    },
    overlay: DarkModeColors.transparency[10],
    shadow: DarkModeColors.transparency[20],
    deletionTextColor: DarkModeColors.neutral[70],
  },
  table: {
    th: {
      backgroundColor: {
        normal: DarkModeColors.neutral[0],
      },
      color: {
        normal: DarkModeColors.neutral[50],
        hover: DarkModeColors.brand[50],
        active: DarkModeColors.brand[50],
      },
      previewColor: {
        normal: DarkModeColors.brand[50],
      },
    },
    td: {
      color: {
        normal: DarkModeColors.neutral[90],
      },
    },
    tr: {
      backgroundColor: {
        hover: DarkModeColors.neutral[5],
      },
    },
    link: {
      color: {
        normal: DarkModeColors.blue[40],
      },
    },
  },
  primaryTab: {
    color: {
      normal: DarkModeColors.neutral[50],
      hover: DarkModeColors.neutral[90],
      active: DarkModeColors.neutral[90],
    },
    borderColor: {
      normal: 'transparent',
      hover: 'transparent',
      active: DarkModeColors.brand[50],
      nav: DarkModeColors.neutral[10],
    },
  },
  secondaryTab: {
    backgroundColor: {
      normal: DarkModeColors.neutral[0],
      hover: DarkModeColors.neutral[5],
      active: DarkModeColors.neutral[10],
    },
    color: {
      normal: DarkModeColors.neutral[50],
      hover: DarkModeColors.neutral[90],
      active: DarkModeColors.neutral[90],
    },
  },
  select: {
    backgroundColor: {
      normal: DarkModeColors.neutral[0],
      hover: DarkModeColors.neutral[10],
      active: DarkModeColors.neutral[10],
    },
    color: {
      normal: DarkModeColors.neutral[90],
      hover: DarkModeColors.neutral[90],
      active: DarkModeColors.neutral[90],
      disabled: DarkModeColors.neutral[30],
    },
    borderColor: {
      normal: DarkModeColors.neutral[30],
      hover: DarkModeColors.neutral[50],
      active: DarkModeColors.neutral[70],
      disabled: DarkModeColors.neutral[10],
    },
    optionList: {
      scrollbar: {
        backgroundColor: DarkModeColors.neutral[30],
      },
    },
  },
  input: {
    borderColor: {
      normal: DarkModeColors.neutral[30],
      hover: DarkModeColors.neutral[50],
      focus: DarkModeColors.neutral[70],
      disabled: DarkModeColors.neutral[10],
    },
    color: {
      placeholder: {
        normal: DarkModeColors.neutral[30],
        readOnly: DarkModeColors.neutral[30],
      },
      disabled: DarkModeColors.neutral[30],
      readOnly: DarkModeColors.neutral[90],
    },
    backgroundColor: {
      readOnly: DarkModeColors.neutral[5],
    },
    error: DarkModeColors.red[50],
    icon: {
      color: DarkModeColors.neutral[70],
    },
    label: {
      color: DarkModeColors.neutral[70],
    },
  },
  textArea: {
    borderColor: {
      normal: DarkModeColors.neutral[30],
      hover: DarkModeColors.neutral[50],
      focus: DarkModeColors.neutral[70],
      disabled: DarkModeColors.neutral[10],
    },
    color: {
      placeholder: {
        normal: DarkModeColors.neutral[30],
        focus: {
          normal: 'transparent',
          readOnly: DarkModeColors.neutral[30],
        },
      },
      disabled: DarkModeColors.neutral[30],
      readOnly: DarkModeColors.neutral[90],
    },
    backgroundColor: {
      readOnly: DarkModeColors.neutral[5],
    },
  },
  tag: {
    backgroundColor: {
      green: DarkModeColors.green[10],
      gray: DarkModeColors.neutral[5],
      yellow: DarkModeColors.yellow[10],
      white: DarkModeColors.neutral[10],
      red: DarkModeColors.red[10],
      blue: DarkModeColors.blue[10],
    },
    color: DarkModeColors.neutral[90],
  },
  pagination: {
    backgroundColor: DarkModeColors.neutral[0],
    currentPage: DarkModeColors.neutral[10],
    borderColor: {
      normal: DarkModeColors.neutral[30],
      hover: DarkModeColors.neutral[50],
      active: DarkModeColors.neutral[70],
      disabled: DarkModeColors.neutral[20],
    },
    color: {
      normal: DarkModeColors.neutral[90],
      hover: DarkModeColors.neutral[90],
      active: DarkModeColors.neutral[90],
      disabled: DarkModeColors.neutral[20],
    },
  },
  switch: {
    unchecked: DarkModeColors.brand[20],
    checked: DarkModeColors.brand[50],
    circle: DarkModeColors.neutral[0],
    disabled: DarkModeColors.neutral[10],
  },
  pageLoader: {
    borderColor: DarkModeColors.brand[50],
    borderBottomColor: DarkModeColors.neutral[0],
  },
  metrics: {
    backgroundColor: DarkModeColors.neutral[5],
    indicator: {
      backgroundColor: DarkModeColors.neutral[0],
      titleColor: DarkModeColors.neutral[50],
      warningTextColor: DarkModeColors.red[50],
      lightTextColor: DarkModeColors.neutral[30],
    },
    filters: {
      color: {
        icon: DarkModeColors.neutral[90],
        normal: DarkModeColors.neutral[50],
      },
    },
  },
  scrollbar: {
    trackColor: {
      normal: DarkModeColors.neutral[0],
      active: DarkModeColors.neutral[5],
    },
    thumbColor: {
      normal: DarkModeColors.neutral[0],
      active: DarkModeColors.neutral[50],
    },
  },
  consumerTopicContent: {
    backgroundColor: DarkModeColors.neutral[5],
  },
  topicFormLabel: {
    color: DarkModeColors.neutral[50],
  },
  topicMetaData: {
    backgroundColor: DarkModeColors.neutral[5],
    color: {
      label: DarkModeColors.neutral[50],
      value: DarkModeColors.neutral[80],
      meta: DarkModeColors.neutral[30],
    },
  },
  dangerZone: {
    borderColor: DarkModeColors.neutral[10],
    color: DarkModeColors.red[50],
  },
  configList: {
    color: DarkModeColors.neutral[30],
  },
  topicsList: {
    color: {
      normal: DarkModeColors.neutral[90],
      hover: DarkModeColors.neutral[50],
      active: DarkModeColors.neutral[90],
    },
    backgroundColor: {
      hover: DarkModeColors.neutral[5],
      active: DarkModeColors.neutral[10],
    },
  },
  icons: {
    closeIcon: DarkModeColors.neutral[30],
    warningIcon: DarkModeColors.yellow[20],
    messageToggleIcon: {
      normal: DarkModeColors.brand[50],
      hover: DarkModeColors.brand[20],
      active: DarkModeColors.brand[60],
    },
    verticalElipsisIcon: DarkModeColors.neutral[50],
    liveIcon: {
      circleBig: DarkModeColors.red[10],
      circleSmall: DarkModeColors.red[50],
    },
    newFilterIcon: DarkModeColors.brand[50],
    closeModalIcon: DarkModeColors.neutral[25],
    savedIcon: DarkModeColors.brand[50],
  },
  viewer: {
    wrapper: DarkModeColors.neutral[3],
  },
  savedFilterDivider: {
    color: DarkModeColors.neutral[15],
  },
  editFilterText: {
    color: DarkModeColors.brand[50],
  },
};

export type ThemeType = typeof theme;

type ThemeDefinitions = {
  [key: string]: ThemeType;
};

export default theme;
export const lightTheme = theme;
export const darkTheme = darkModeTheme;
