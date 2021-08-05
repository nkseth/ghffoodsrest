import React, { useState } from 'react';
import clsx from 'clsx';

import { TableRow, TableCell, Box, Button, Collapse } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { ArrowUpward } from '@material-ui/icons';

import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import { timeFromNow } from '../../../../@jumbo/utils/dateHelper';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const useStyles = makeStyles((theme) => ({
  tableRowRoot: {
    position: 'relative',
    transition: 'all .2s',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    '&:hover, &.active': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      '& $tableCellRoot, & $titleRoot': {
        color: theme.palette.text.primary,
      },
      '& $showContent': {
        width: 0,
      },
      '& $hideContent': {
        transform: 'translateX(0)',
        width: '100%',
      },
    },
    '&:last-child': {
      borderBottom: `solid 1px ${theme.palette.borderColor.main}`,
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      borderTopColor: 'transparent',
    },
    '&.collapse-table-row': {
      borderTop: '0 none',
      '& $tableCellRoot': {
        padding: 0,
      },
    },
    '&.active': {
      borderTop: '0 none',
      '&:hover': {
        transform: 'none',
        boxShadow: 'none',
      },
    },
  },
  tableCellRoot: {
    padding: 6,
    fontSize: 14,
    letterSpacing: 0.25,
    color: theme.palette.text.secondary,
    borderBottom: '0 none',
    position: 'relative',
    '&:first-child': {
      paddingLeft: 24,
    },
    '&:last-child': {
      textAlign: 'right',
      paddingRight: 24,
    },
  },
  tableCellFirst: {
    width: '10%',
  },
  tableCellSecond: {
    width: '30%',
  },
  tableCellHideShow: {
    width: '50%',
  },
  titleRoot: {
    color: theme.palette.text.secondary,
    letterSpacing: 0.25,
  },
  hideShowContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  showContent: {
    transition: 'all 0.3s ease-in-out',
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
  },
  hideContent: {
    transition: 'all 0.3s ease-in-out',
    transform: 'translateX(110%)',
    overflow: 'hidden',
  },
  hideShowLink: {
    cursor: 'pointer',
  },
  collapseTable: {
    paddingLeft: 60,
    '& td': {
      color: theme.palette.text.secondary,
      fontSize: 12,
      letterSpacing: 0.4,
      padding: 0,
      borderBottom: '0 none',
    },
  },
  openDataRot: {
    color: theme.palette.text.secondary,
    fontSize: 12,
    letterSpacing: 0.4,
    paddingLeft: 63,
    textAlign: 'right',
    paddingBottom: 10,
    marginTop:-15,
  },
}));

const TableItem = ({ row,index }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow className={clsx(classes.tableRowRoot)}>
        <TableCell className={clsx(classes.tableCellRoot, classes.tableCellFirst)}>
         {index+1}
        </TableCell>
        <TableCell className={clsx(classes.tableCellRoot, classes.tableCellSecond)}>
          {row.itemname}
        </TableCell>
         <TableCell className={clsx(classes.tableCellRoot,classes.tableCellFourth)} onClick={() => setOpen(!open)}>
         
          {row.pendingAmount-100}
            
        
        </TableCell>
        <TableCell className={clsx(classes.tableCellRoot,classes.tableCellFourth)} onClick={() => setOpen(!open)}>
         
          {row.pendingAmount}
            
        
        </TableCell>
        
      </TableRow>

    
    </React.Fragment>
  );
};

export default TableItem;
