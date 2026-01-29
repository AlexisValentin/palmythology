const Copyrights = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div>{`Palmythology © 2020-${currentYear} - Tous droits réservés`}</div>
	);
};

export default Copyrights;
