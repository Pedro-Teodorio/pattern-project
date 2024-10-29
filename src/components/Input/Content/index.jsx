import PropTypes from "prop-types";
export const InputContent = ({ placeholder, type, name }) => {
	return <input type={type} name={name} placeholder={placeholder} className={`w-full px-2 bg-transparent outline-none  h-full placeholder:text-neutral-400`} />;
};

InputContent.propTypes = {
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
