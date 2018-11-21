const latexfmt = (...a) => String.raw(...a).replace('\\`', '`');

export default latexfmt