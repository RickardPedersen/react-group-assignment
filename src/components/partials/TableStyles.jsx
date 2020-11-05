import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
	width: 100%;
	padding: 50px;
`;
export const Table = styled.table`
	border-collapse: collapse;
	margin: auto;
	font-size: 0.9em;
	min-width: 400px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const Tr = styled.tr`
	// #17141d
	background-color: ${({ theme }) => theme.colors.gray1};
	color: #ffffff;
	text-align: left;
	border-bottom: 1px solid #dddddd;
	:hover {
		cursor: pointer;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.success};
	}

	:nth-of-type(even) {
		background-color: ${({ theme }) => theme.colors.gray3};
	}
	:last-of-type {
		border-bottom: 2px solid ${({ theme }) => theme.colors.gray3};
	}
`;

export const Th = styled.th`
	padding: 12px 15px;
	font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Td = styled.td`
	padding: 12px 15px;
	font-family: ${({ theme }) => theme.fonts.text};
	a {
		color: white;
		text-decoration: none;
	}
`;
