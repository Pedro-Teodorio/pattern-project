import PropTypes from "prop-types";
export const InputContent = ({placeholder, type }) => {
	

	return <input type={type} placeholder={placeholder} className={`w-full rounded-lg px-2 py-0 bg-transparent outline-none text-neutral-50 placeholder-neutral-400 h-full `} />;
};

InputContent.propTypes = {
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};
