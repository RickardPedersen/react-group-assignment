import styled, { css } from 'styled-components/macro';

export const TableContainer = styled.div`
	width: 100%;
`;
export const Table = styled.table`
	border-collapse: collapse;
	margin: auto;
	font-size: 0.9em;
	min-width: 400px;
	width: 100%;
	/*box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);*/
`;

export const Tr = styled.tr`
	// #17141d
	background-color: ${({ theme }) => theme.colors.gray1};
	color: #ffffff;
	text-align: left;
	position: relative;
	/*border-bottom: 1px solid ${({ theme }) => theme.colors.bg};*/
	
	&:hover {
		cursor: pointer;
		/*color: ${({ theme }) => theme.colors.primary};*/
	}

	&:after {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: ${({ theme }) => theme.colors.white};
		opacity: 0;
		transition: .2s opacity;
	}

	&:hover:after {
		opacity: 0.05;
	}

	&:nth-of-type(even) {
		background-color: ${({ theme }) => theme.colors.gray3};

		&:hover:after {
			opacity: 0.1;
		}
	}
	&:last-of-type {
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
