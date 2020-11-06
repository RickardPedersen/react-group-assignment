import styled, { css } from 'styled-components/macro';

export const TableContainer = styled.div`
	width: 100%;
	overflow: hidden;
`;
export const Table = styled.table`
	border-collapse: collapse;
	margin: auto;
	font-size: 0.9em;
	width: 100%;
`;

export const Tr = styled.tr`
	// #17141d
	background: ${({ theme }) => theme.colors.gray1};
	color: #ffffff;
	text-align: left;
	position: relative;
	transition: 0.2s background;

	&:hover {
		cursor: pointer;
		background: ${({ theme }) => theme.colors.gray2};
	}

	&:nth-of-type(even) {
		background: ${({ theme }) => theme.colors.gray3};

		&:hover {
			background: ${({ theme }) => theme.colors.gray4};
		}
	}
	
	&:last-of-type {
		border-bottom: 2px solid ${({ theme }) => theme.colors.gray3};
	}
`;

export const Th = styled.th`
	padding: 12px 15px;
	font-family: ${({ theme }) => theme.fonts.heading};
	@media (max-width: 760px) {
		:nth-child(3),
		:nth-child(6) {
			display: none;
		}
	}
	@media (max-width: 490px) {
		:nth-child(3),
		:nth-child(5),
		:nth-child(6) {
			display: none;
		}
	}
`;

export const Td = styled.td`
	padding: 12px 15px;
	font-family: ${({ theme }) => theme.fonts.text};
	a {
		color: white;
		text-decoration: none;
	}

	@media (max-width: 760px) {
		:nth-child(3),
		:nth-child(6) {
			display: none;
		}
	}
	@media (max-width: 490px) {
		:nth-child(3),
		:nth-child(5),
		:nth-child(6) {
			display: none;
		}
	}
`;
