import styled, { css } from 'styled-components';

function fromTheme(themeProp, args, prefix) {
	if (args) {
		args = args.split(' ');
		if (prefix) {
			return prefix + args.map((arg) => (themeProp[arg] ? themeProp[arg] : arg)).join(' ');
		}
	}
}

const BackgroundColor = css`
	${({ theme, background }) => {
		return fromTheme(theme.colors, background, 'background: ');
	}};
`;

const TextColor = css`
	${({ theme, color }) => {
		return fromTheme(theme.colors, color, 'color: ');
	}};
`;

const Flex = css`
	${({ flex, direction, justify, align }) => {
		const entries = [];
		if (typeof flex !== 'undefined') {
			entries.push('display: flex');
		}
		if (typeof direction !== 'undefined') {
			entries.push(`flex-direction: ${direction}`);
		}
		if (typeof justify !== 'undefined') {
			entries.push(`justify-content: ${justify}`);
		}
		if (typeof align !== 'undefined') {
			entries.push(`align-items: ${align}`);
		}
		return entries.join(';\n');
	}};
`;

const Sizing = css`
	${({ theme, padding }) => {
		return fromTheme(theme.padding, padding, 'padding: ');
	}};

	${({ theme, margin }) => {
		return fromTheme(theme.padding, margin, 'margin: ');
	}};

	${({ width, minWidth, maxWidth, height, minHeight, maxHeight }) => {
		if (typeof width !== 'undefined') {
			return `width: ${width};`;
		}
		if (typeof height !== 'undefined') {
			return `height: ${height};`;
		}

		if (typeof minWidth !== 'undefined') {
			return `min-width: ${minWidth};`;
		}

		if (typeof maxWidth !== 'undefined') {
			return `max-width: ${maxWidth};`;
		}

		if (typeof minHeight !== 'undefined') {
			return `min-height: ${minHeight};`;
		}

		if (typeof maxHeight !== 'undefined') {
			return `max-height: ${maxHeight};`;
		}
	}}
`;

const HeadingStyle = css`
	font-family: ${({ theme }) => theme.fonts.heading};
	color: ${({ theme }) => theme.colors.white};
	${TextColor};
	${Sizing};
`;

const TextStyle = css`
	font-family: ${({ theme }) => theme.fonts.text};
	color: ${({ theme }) => theme.colors.white};
	${TextColor};
	${Sizing};
`;

export const H1 = styled.h1`
	${HeadingStyle};
`;

export const H2 = styled.h2`
	${HeadingStyle};
`;

export const H3 = styled.h3`
	${HeadingStyle};
`;

export const H4 = styled.h4`
	${HeadingStyle};
`;

export const H5 = styled.h5`
	${HeadingStyle};
`;
export const H6 = styled.h6`
	${HeadingStyle};
`;

export const P = styled.p`
	${TextStyle};
`;

export const Span = styled.span`
	${TextStyle};
`;

export const Div = styled.div`
	${TextStyle};
	${BackgroundColor};
	${Sizing};
	${Flex};
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
		transition: 0.1s opacity;
	}

	&:hover:after {
		opacity: 0.15;
	}

	&:active:after {
		background: ${({ theme }) => theme.colors.bg};
		opacity: 0.15;
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
	}
`;
