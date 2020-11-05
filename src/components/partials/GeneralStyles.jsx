import styled, { css } from 'styled-components';

const HeadingStyle = css`
	font-family: ${({ theme }) => theme.fonts.heading};
	color: ${({ theme }) => theme.colors.white};
`;

const TextStyle = css`
	font-family: ${({ theme }) => theme.fonts.text};
	color: ${({ theme }) => theme.colors.white};
`;

const BackgroundColor = css`
	${({ theme, background }) => {
		const start = 'background: ';
		if (background) {
			if (theme.colors[background]) {
				return start + theme.colors[background];
			} else {
				return start + background;
			}
		}
	}};
`;

const TextColor = css`
	${({ theme, color }) => {
		const start = 'color: ';
		if (color) {
			if (theme.colors[color]) {
				return start + theme.colors[color];
			} else {
				return start + color;
			}
		}
	}};
`;

const Sizing = css`
	${({ theme, padding }) => {
		const start = 'padding: ';
		if (padding) {
			if (theme.padding[padding]) {
				return start + theme.padding[padding];
			} else {
				return start + padding;
			}
		}
	}};

	${({ theme, margin }) => {
		const start = 'margin: ';
		if (margin) {
			if (theme.padding[margin]) {
				return start + theme.padding[margin];
			} else {
				return start + margin;
			}
		}
	}};
`;

export const H1 = styled.h1`
	${HeadingStyle};
	${TextColor};
	${Sizing};
`;

export const H2 = styled.h2`
	${HeadingStyle};
	${TextColor};
	${Sizing};
`;

export const H3 = styled.h3`
	${HeadingStyle};
	${TextColor};
	${Sizing};
`;

export const H4 = styled.h4`
	${HeadingStyle};
	${TextColor};
	${Sizing};
`;

export const H5 = styled.h5`
	${HeadingStyle};
	${TextColor};
	${Sizing};
`;
export const H6 = styled.h6`
	${HeadingStyle};
	${TextColor};
	${Sizing};
`;

export const P = styled.p`
	${TextStyle};
	${TextColor};
	${Sizing};
`;

export const Span = styled.span`
	${TextStyle};
	${TextColor};
	${Sizing};
`;

export const Button = styled.button`
	padding: ${({ theme }) => theme.padding.s};
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius};
	background: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
	position: relative;
	transition: 0.2s transform;

	${BackgroundColor}
	${TextStyle}
    ${TextColor};
	${Sizing};

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: ${({ theme }) => theme.borderRadius};
		background: ${({ theme }) => theme.colors.white};
		opacity: 0;
		transition: 0.2s opacity;
	}

	&:hover:after {
		opacity: 0.15;
	}

	&:active {
		transform: scale(1.05);
	}
`;
