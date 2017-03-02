function validarExpreg() {
	var expreg = /^[A-Z](A|E|I|O|U)[A-Z][A-Z][0-9][0-9](1[0-2]|0[0-9])([0-2][0-9]|3[0-1])(H|M)([A-D]|G|H|J|[M-Q]|S|T|V|Y|Z)(C|[F-H]|[L-N]|P|[R-T]|X|Z)[A-Z][A-Z][A-Z]([0-9][0-9])?$/
	if(expreg.test(arguments[0].toUpperCase()) === false)
		console.log("No coincide con la expreg");
	else
		console.log("Si coincide con la expreg");
}
validarExpreg("SAGL770731MDFMRZ000");