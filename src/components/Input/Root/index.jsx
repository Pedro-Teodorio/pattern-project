import PropTypes from "prop-types";

export const InputRoot = ({ children,width ,height }) => {
	const baseClass = `flex flex-1 items-center gap-2 rounded-lg  bg-neutral-900 text-neutral-50 placeholder-neutral-400 px-4 ${width} ${height}`;

	return <div className={baseClass}>{children}</div>;
};

InputRoot.propTypes = {
	children: PropTypes.node.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};
