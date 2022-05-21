import styled from 'styled-components';
import { NavLink as ReactNavLink } from 'react-router-dom';

interface TableCellProps {
  maxWidth?: string;
}

export const SwitchWrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.alert.color.info};
`;

export const TableCell = styled.td.attrs({ role: 'cells' })<TableCellProps>`
  padding: 16px;
  word-break: break-word;
  max-width: ${(props) => props.maxWidth};
`;

export const NavLink = styled(ReactNavLink)(
  ({ theme }) => `
    color: ${theme.table.link.color.normal};
`
);
